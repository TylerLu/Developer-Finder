import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {Constants} from '../util/constants';
import {ChatService } from "../services/chat.service";
import {Cookie} from "../util/cookieHelper";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['../shared/shared.css', './header.component.css' ]
})

export class HeaderComponent implements OnInit {
    title:string = "Developer Finder";
    banner:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque pellentesque.";

    titleTop:string = this.title;
    titleBottom:string = "The markeetplace for your next application team";

    learnMoreUr:string = "";

    logoutDefault:string = Constants.logoutArgs.default;
    logoutUrl:string = Constants.logoutArgs.logout;
    logoutClearUrl:string = Constants.logoutArgs.clear;

    @Input('isLoginPage') isLoginPage:Boolean;
    constructor(private chatService:ChatService){
    }

    ngOnInit() {
        this.tryReceiveMessageNotifications();
    }

    tryReceiveMessageNotifications(){
        this.chatService
            .getMessageNotifications()
            .subscribe(resp=> {
                   console.log(resp);
            },
                error => console.log(`onError: ${error}`),
            );
    }

    logout(logoutArgs){
        if(logoutArgs==this.logoutDefault)
            return;
        if(logoutArgs == this.logoutClearUrl)
            Cookie.deleteAll();
        location.href = logoutArgs;
    }

}