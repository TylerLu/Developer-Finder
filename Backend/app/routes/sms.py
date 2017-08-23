from app import api, settings
from flask import request
from flask_login import login_required, current_user
from flask_restful import Resource
from twilio.rest import Client

class SmsResource(Resource):
    
    @login_required
    def post(self):
        to = request.json['to']
        message = request.json['message']
        client = Client(settings.TWILLO_ACCOUNT_SID, settings.TWILLO_AUTH_TOKEN)
        client.messages.create(
            to=to,
            from_=settings.TWILLO_FROM,
            body=message)
        return 201

api.add_resource(SmsResource, '/api/sms')