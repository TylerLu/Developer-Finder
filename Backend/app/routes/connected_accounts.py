from app import api
from flask_login import login_required, current_user
from flask_restful import Resource
from social_flask_peewee.models import FlaskStorage
from app.services.loggerService import LoggerService

class ConnectedAccountsResource(Resource):
    APIUrl = "/api/connected-accounts"

    @login_required
    def get(self):
        LoggerService().logPythonAPI(ConnectedAccountsResource.APIUrl)
        user = current_user._get_current_object()
        users = FlaskStorage.user.get_social_auth_for_user(user)
        return list(map(lambda u: u.provider, users))

api.add_resource(ConnectedAccountsResource,ConnectedAccountsResource.APIUrl)