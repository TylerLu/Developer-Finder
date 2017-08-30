from app import api
from app.models.friend import Friend
from flask import request
from flask_login import login_required, current_user
from flask_restful import Resource
from app.services.loggerService import LoggerService

class FriendsResource(Resource):
    APIUrl = '/api/friends'

    @login_required
    def get(self):
        LoggerService().logPythonAPIGet(FriendsResource.APIUrl)
        friends = Friend.select(Friend.friend).where(Friend.user==current_user.id)
        return list(map(lambda f: f.friend.id, friends))

    @login_required
    def post(self):
        LoggerService().logPythonAPIPost(FriendsResource.APIUrl)
        friend_id = request.json['friend_id']
        query = Friend.select().where(Friend.user == current_user.id, Friend.friend == friend_id)
        if not query.exists():
            data = {
                'user': current_user.id,
                'friend': friend_id
            }
            Friend.create(**data)
        return friend_id, 201

api.add_resource(FriendsResource, FriendsResource.APIUrl)