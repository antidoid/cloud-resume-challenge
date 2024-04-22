resource "azurerm_resource_group" "cloud-resume-challenge-rg" {
  name     = "cloud-resume-challenge-rg"
  location = "Central India"
}

resource "random_id" "suffix" {
  byte_length = 1
}

resource "azurerm_storage_account" "portfoliostorage" {
  name                     = "portfoliostorage${random_id.suffix.dec}"
  resource_group_name      = azurerm_resource_group.cloud-resume-challenge-rg.name
  location                 = azurerm_resource_group.cloud-resume-challenge-rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
  cross_tenant_replication_enabled = false
}

resource "azurerm_service_plan" "portfolioappserviceplan" {
  name                = "portfolioappserviceplan"
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  location            = azurerm_resource_group.cloud-resume-challenge-rg.location
  os_type             = "Linux"
  sku_name            = "Y1"
}

resource "azurerm_linux_function_app" "portfolio-func-app" {
  name                       = "portfolio-func-app-${random_id.suffix.dec}"
  resource_group_name        = azurerm_resource_group.cloud-resume-challenge-rg.name
  location                   = azurerm_resource_group.cloud-resume-challenge-rg.location
  storage_account_name       = azurerm_storage_account.portfoliostorage.name
  storage_account_access_key = azurerm_storage_account.portfoliostorage.primary_access_key
  service_plan_id            = azurerm_service_plan.portfolioappserviceplan.id
  identity {
    type = "SystemAssigned"
  }

  site_config {
    application_stack {
      python_version = "3.10"
    }
  }

  connection_string {
    name  = "connect__credential"
    type  = "Custom"
    value = "managedidentity"
  }

  connection_string {
    name  = "connect__accountEndpoint"
    type  = "Custom"
    value = azurerm_cosmosdb_account.portfolio-dbacc.endpoint
  }
}

resource "azurerm_cosmosdb_account" "portfolio-dbacc" {
  name                = "portfolio-dbacc${random_id.suffix.dec}"
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  location            = azurerm_resource_group.cloud-resume-challenge-rg.location
  offer_type          = "Standard"
  capabilities {
    name = "EnableServerless"
  }

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = azurerm_resource_group.cloud-resume-challenge-rg.location
    failover_priority = 0
  }
}

resource "azurerm_cosmosdb_sql_database" "portfolio-db" {
  name                = "portfolio-db"
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  account_name        = azurerm_cosmosdb_account.portfolio-dbacc.name
}

resource "azurerm_cosmosdb_sql_container" "counter" {
  name                = "counter"
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  account_name        = azurerm_cosmosdb_account.portfolio-dbacc.name
  database_name       = azurerm_cosmosdb_sql_database.portfolio-db.name
  partition_key_path  = "/id"
}

data "azurerm_client_config" "current" {
}

resource "azurerm_cosmosdb_sql_role_definition" "func-cosmos-item-reader-roledef" {
  name                = "CosmosDB Item Contributor"
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  account_name        = azurerm_cosmosdb_account.portfolio-dbacc.name
  type                = "CustomRole"
  assignable_scopes = [
    "/subscriptions/${data.azurerm_client_config.current.subscription_id}/resourceGroups/${azurerm_resource_group.cloud-resume-challenge-rg.name}/providers/Microsoft.DocumentDB/databaseAccounts/${azurerm_cosmosdb_account.portfolio-dbacc.name}/dbs/${azurerm_cosmosdb_sql_database.portfolio-db.name}/colls/${azurerm_cosmosdb_sql_container.counter.name}"
  ]

  permissions {
    data_actions = [
      "Microsoft.DocumentDB/databaseAccounts/readMetadata",
      "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/*"
    ]
  }
}

resource "azurerm_cosmosdb_sql_role_assignment" "func-cosmos-item-reader-roleassgn" {
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  account_name        = azurerm_cosmosdb_account.portfolio-dbacc.name
  role_definition_id  = azurerm_cosmosdb_sql_role_definition.func-cosmos-item-reader-roledef.id
  principal_id        = azurerm_linux_function_app.portfolio-func-app.identity[0].principal_id
  scope               = "/subscriptions/${data.azurerm_client_config.current.subscription_id}/resourceGroups/${azurerm_resource_group.cloud-resume-challenge-rg.name}/providers/Microsoft.DocumentDB/databaseAccounts/${azurerm_cosmosdb_account.portfolio-dbacc.name}/dbs/${azurerm_cosmosdb_sql_database.portfolio-db.name}/colls/${azurerm_cosmosdb_sql_container.counter.name}"
}

resource "random_id" "cdn-profile-suffix" {
  byte_length = 4
}

resource "azurerm_cdn_profile" "portfolio-cdn-profile" {
  name                = "portfolio-cdn-profile-${random_id.cdn-profile-suffix.dec}"
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name
  location            = azurerm_resource_group.cloud-resume-challenge-rg.location
  sku                 = "Standard_Microsoft"
}


resource "azurerm_cdn_endpoint" "portfolio-cdn-endpoint" {
  name                = "portfolio-cdn-endpoint"
  profile_name        = azurerm_cdn_profile.portfolio-cdn-profile.name
  location            = azurerm_resource_group.cloud-resume-challenge-rg.location
  resource_group_name = azurerm_resource_group.cloud-resume-challenge-rg.name

  origin {
    name      = "portfoliocdnendpoint"
    host_name = azurerm_storage_account.portfoliostorage.primary_web_host
  }

  origin_host_header = azurerm_storage_account.portfoliostorage.primary_web_host
}

resource "azurerm_cdn_endpoint_custom_domain" "personaldomain" {
  name            = "personaldomain"
  cdn_endpoint_id = azurerm_cdn_endpoint.portfolio-cdn-endpoint.id
  host_name       = "www.piyushsingh.me"
  cdn_managed_https {
    certificate_type = "Dedicated"
    protocol_type    = "ServerNameIndication"
  }
}
