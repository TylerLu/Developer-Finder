import { Injectable,Inject }    from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Constants } from '../util/constants';
import { DataService } from './dataService';
import { ChatMessage} from '../shared/message';
import { MessageNotification} from '../shared/messageNotification';



@Injectable()
export class ChatService {

  constructor(@Inject('data') private dataService: DataService) { }

  public getLatestMessages(friendId:string,friendProfile):Observable<ChatMessage[]>{
      let activeObject:ReplaySubject<ChatMessage[]> = new ReplaySubject(1);
      this.dataService.getArray<ChatMessage>(Constants.WebAPI.chatMessageUrl + "/" +friendId)
                      .subscribe((resp)=>{
                          let result:ChatMessage[] = [];
                          resp.forEach(function(msg,index){
                                let message:ChatMessage = new ChatMessage();
                                message.content = msg.content;
                                message.ownByMe = false;
                                message.profile = friendProfile;
                                message.created = msg.created;
                                result.push(message);
                          });
                          activeObject.next(result);
                      },
                      (error)=>{activeObject.error(error)});
      return activeObject;
   } 

   public sendMessage(friendId:string, content:string):Observable<Boolean>{
      let activeObject:ReplaySubject<Boolean> = new ReplaySubject(1);
      this.dataService.post(Constants.WebAPI.chatMessageUrl,{content:content,to:friendId})
                      .subscribe((resp)=>{
                          activeObject.next(resp.json().success);
                      },
                      (error)=>{
                          activeObject.error(error);
                      });
      return activeObject;
   }

   public getMessageNotifications():Observable<MessageNotification[]>{
        let activeObject:ReplaySubject<MessageNotification[]> = new ReplaySubject(1);
        this.dataService.getArray<MessageNotification>(Constants.WebAPI.messageSummaryUrl)
                      .subscribe((resp)=>{
                          activeObject.next(resp);
                      },
                      (error)=>{activeObject.error(error)});
        return activeObject;
   }
  
}