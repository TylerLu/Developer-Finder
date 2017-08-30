from app import settings
import json,requests
import socket

class LoggerService(object):
    

    def logRubyAPI(self,APIName):
        return self.logAPI(APIName,'Ruby Chat')
    
    def logPythonAPI(self,APIName):
        return self.logAPI(APIName,'Python App')

    def logAPI(self,APIName,environment):
        ret = requests.post('https://developer-finder-qa-function.azurewebsites.net/api/TrackCustomEvent?code=bfpP/nSnCTi/DaFy7L5sAHJCYTKxnU2VpIF3qa79eCxHQs0w02t/Vg==&clientId=default',json={
            'EventName':'Python REST API Status',
            'Properties':{
                'Description':'{0} REST API invoked - {1} invoked'.format(environment,APIName),
                'LogType': 'Status Log',
                'Host':socket.gethostname(),
                'Status':'Success'
            }
        })
        return ret

    def logFunctionApp(self,functionName,ifStarted):
        ret = requests.post('https://developer-finder-qa-function.azurewebsites.net/api/TrackCustomEvent?code=bfpP/nSnCTi/DaFy7L5sAHJCYTKxnU2VpIF3qa79eCxHQs0w02t/Vg==&clientId=default',json={
            'EventName':'Azure Function Status',
            'Properties':{
                'Description':'{0} {1}'.format(functionName,('Started','Completed')[ifStarted]),
                'LogType': 'Status Log',
                'Host':socket.gethostname(),
                'Status':'Success'
            }
        })
        return ret

    def logLogicApp(self,logicName,ifStarted):
        ret = requests.post('https://developer-finder-qa-function.azurewebsites.net/api/TrackCustomEvent?code=bfpP/nSnCTi/DaFy7L5sAHJCYTKxnU2VpIF3qa79eCxHQs0w02t/Vg==&clientId=default',json={
            'EventName':'Logic App Status',
            'Properties':{
                'Description':'{0} {1}'.format(functionName,('Started','Completed')[ifStarted]),
                'LogType': 'Status Log',
                'Host':socket.gethostname(),
                'Status':'Success'
            }
        })
        return ret