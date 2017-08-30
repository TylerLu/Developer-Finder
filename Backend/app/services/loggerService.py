from app import settings
import json,requests
import socket

class LoggerService(object):
    

    def logRubyAPI(self,APIName):
        return self.logAPI(APIName,'Ruby Chat')
    
    def logPythonAPI(self,APIName):
        return self.logAPI(APIName,'Python App')

    def logPythonAPIGet(self,APIName):
        return self.logAPI(APIName + " - get",'Python App')

    def logPythonAPIPost(self,APIName):
        return self.logAPI(APIName + " - post",'Python App')

    def logAPI(self,APIName,environment):
        requests.post(settings.Logger_Function_APP_URL,json={
            'EventName':'Python REST API Status',
            'Properties':{
                'Description':'{0} REST API invoked - {1} invoked'.format(environment,APIName),
                'LogType': 'Status Log',
                'Host':socket.gethostname(),
                'Status':'Success'
            }
        })