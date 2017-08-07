import { Component,OnInit,NgModule }      from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { HttpService} from './services/http.service';
import { UserModel } from './models/user.model';

import {MainService} from "./services/main.service";
     
@Component({
    selector: 'sportroter',
    templateUrl: 'app/app.component.html',
    
})
export class AppComponent  implements OnInit {

    
    isLoggedIn:boolean = false;
    me: UserModel = new UserModel(null,"","","","",null,null); 
    constructor(
        private mainService: MainService){}
    ngOnInit(){
        this.mainService.onAuthChange$.subscribe(bool => {
            if(bool){
                this.isLoggedIn = bool;
                if(this.isLoggedIn)
                    this.mainService.GetMe()
                        .subscribe((data:UserModel)=>{
                            console.log(JSON.stringify(data));
                            this.me = data;
                            //console.log(this.me);
                        });
            }
        });
        this.mainService.TryToLoginWithToken();
    }
}