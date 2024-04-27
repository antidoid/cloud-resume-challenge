import azure.functions as func
import logging

app = func.FunctionApp()

# @app.route(route="GetResumeData/{id}", auth_level=func.AuthLevel.ANONYMOUS)
# @app.cosmos_db_input(
#     arg_name="resume",
#     database_name="resume-db",
#     container_name="resumes",
#     id="{id}",
#     partition_key="{id}",
#     connection="connect"
# )
# def GetResumeData(req: func.HttpRequest, resume: func.DocumentList) -> func.HttpResponse:
#     # If there is no document with the provided id
#     if not resume:
#         return func.HttpResponse(
#             status_code=404,
#             mimetype="application/json",
#             body=json.dumps(
#                 {"message": "Resume not found, please try a valid resume id"})
#         )
#
#     # Provide the resume data from the found document
#     return func.HttpResponse(
#         status_code=200,
#         mimetype="application/json",
#         body=resume[0].to_json()
#     )


@app.route(route="GetVisitorCount", auth_level=func.AuthLevel.ANONYMOUS)
@app.cosmos_db_input(
    arg_name="count",
    database_name="portfolio-db",
    container_name="counter",
    id="1",
    partition_key="1",
    connection="connect"
)
@app.cosmos_db_output(
    arg_name="updatedCount",
    database_name="portfolio-db",
    container_name="counter",
    id="1",
    partition_key="1",
    connection="connect"
)
def GetVisitorCount(req: func.HttpRequest, count: func.DocumentList, updatedCount: func.Out[func.Document]) -> func.HttpResponse:
    counter = count[0]
    counter["count"] += 1
    updatedCount.set(counter)

    logging.info("Updated the visited count")

    return func.HttpResponse(
        status_code=200,
        mimetype="application/json",
        body=updatedCount.get().to_json()
    )
