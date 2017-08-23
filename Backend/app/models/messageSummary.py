class MessageSummary(object):
    def __init__(self,fromUser,messageCount):
        self.fromUser = fromUser
        self.messageCount= messageCount
    
    def toJson(self):
        return {
            'fromUser':str(self.fromUser),
            'messageCount':str(self.messageCount)
        }