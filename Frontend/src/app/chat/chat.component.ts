import { Component, OnInit,Inject } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Constants } from '../util/constants';
import { AuthHelper } from "../util/authHelper";
import { UrlHelper } from "../util/urlHelper";
import { CommonUtil } from "../util/commonUtil";
import {ChatService } from "../services/chat.service";
import {ChatMessage} from "../shared/message";
import {ProfileService } from "../services/profile.service";
import {Profile} from "../shared/profile";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../shared/shared.css', './chat.component.css' ]
})
export class ChatComponent implements OnInit {

  existedMessages:ChatMessage[] = new Array<ChatMessage>();
  friendProfile:Profile;
  currentUserProfile:Profile;

  msgContent:string = '';

  self:ChatComponent;
  constructor(private chatService: ChatService,
              private profileService:ProfileService,
              @Inject('auth') private auth: AuthHelper) {}
 
  ngOnInit(): void {
    if(!this.auth.isLogin()){
      this.auth.reLogin();
    }
    this.initProfiles(UrlHelper.getQueryId(),this.getReceivedMessages);
  }

  initProfiles(friendId:number,callBack){
    Observable.forkJoin(
                [
                  this.profileService.getCurrentUserProfile().first(),
                  this.profileService.getUserProfile(friendId).first()
                ]
              ).subscribe(
                 results => {
                    this.friendProfile = results[1];
                    this.currentUserProfile = results[0];
                    if(callBack){
                        setInterval(()=> {this.getReceivedMessages(this)},Constants.chatRequestInterval);
                    }
                },
                error => console.log(`onError: ${error}`),
    );
  }


  getReceivedMessages(chatComponent):void{
    chatComponent.chatService
                 .getLatestMessages(chatComponent.friendProfile.id.toString(),chatComponent.friendProfile)
                 .subscribe(
                   result=>{
                     chatComponent.existedMessages = chatComponent.existedMessages.concat(result);
                   },
                   error => console.log(`onError: ${error}`),
                 );
  }

  sendMessage(){
     this.chatService
         .sendMessage(this.friendProfile.id.toString(),this.msgContent)
         .subscribe(
             result=>{
               this.buildNewMessage();
               this.msgContent = '';
             },
             error => console.log(`onError: ${error}`),
         );
  }

  buildNewMessage(){
    let msg = new ChatMessage();
    msg.content = this.msgContent;
    msg.created = CommonUtil.formatDate(new Date());
    msg.ownByMe = true;
    msg.profile = this.currentUserProfile;
    this.existedMessages.push(msg);
  }

}