import azure.functions as func
import json
import logging

app = func.FunctionApp()

@app.route(route="GetResumeData/{id}", auth_level=func.AuthLevel.ANONYMOUS)
@app.cosmos_db_input(
    arg_name="resume",
    database_name="resume-db",
    container_name="resumes",
    id="{id}",
    partition_key="{id}",
    connection="connect"
)
def GetResumeData(req: func.HttpRequest, resume: func.DocumentList) -> func.HttpResponse:
    # If there is no document with the provided id
    if not resume:
        return func.HttpResponse(
            status_code=404,
            mimetype="application/json",
            body=json.dumps(
                {"message": "Resume not found, please try a valid resume id"})
        )

    # Provide the resume data from the found document
    return func.HttpResponse(
        status_code=200,
        mimetype="application/json",
        body=resume[0].to_json()
    )


@app.route(route="GetVisitorCount", auth_level=func.AuthLevel.ANONYMOUS)
def GetVisitorCount(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
