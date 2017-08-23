from app import api
from datetime import datetime
import time
from app.models.message import Message
from app.models.messageSummary import MessageSummary
from flask import request
from flask_login import login_required, current_user
from flask_restful import Resource

class MessagesResource(Resource):
    
    @login_required
    def get(self,id):
        uid=current_user.id
        print('currentUserId:{0}'.format(uid))
        print('friendId:{0}'.format(id))
        messages = [Message(1,10000,10001,"testContent",datetime.now())]
        return list(map(lambda m:m.toJson() , messages))

class MessagePostResource(Resource):
    
    @login_required
    def post(self):
        messageContent = request.json['content']
        fromUser = current_user.id
        toUser= request.json['to']
        print('toUser:{0}'.format(toUser))
        print('fromUser:{0}'.format(fromUser))
        print('content:{0}'.format(messageContent))
        #ruby post message
        return 1,201 

class MessageSummaryResource(Resource):
    @login_required
    def get(self):
        messageSummarys = [MessageSummary(10000,2)]
        return list(map(lambda m:m.toJson() , messageSummarys))

api.add_resource(MessagePostResource, '/api/messages')
api.add_resource(MessagesResource, '/api/messages/<int:id>')
api.add_resource(MessageSummaryResource, '/api/messageSummaries')