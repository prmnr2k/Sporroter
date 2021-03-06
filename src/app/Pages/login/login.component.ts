import { Component,OnInit, Input, Output, EventEmitter}      from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { HttpService} from '../../services/http.service';
import {MainService} from "./../../services/main.service";
import { TokenModel } from '../../models/token.model';

import { AuthService } from "angular2-social-login";

@Component({
    moduleId:module.id,
    selector: "login",
    templateUrl: "./login.component.html",
    providers: [HttpService]
})

export class LoginComponent implements OnInit{
    loginData = {
        login:'',
        password:''
    }
    isLoginErr = false;
    isLoading = true;

    public user;
    sub: any;
    
    ngOnInit(): void {
        this.isLoading = false;
        this.signStatus();
    }
    constructor(private router: Router,
        private mainService: MainService,
        public _auth: AuthService){}

    OnLoginButtonClick()
    {
        this.isLoading = true;
        this.isLoginErr = false;
        this.mainService.UserLogin(this.loginData.login,this.loginData.password)
            .subscribe((data:TokenModel)=>{
                console.log(data);
                this.mainService.BaseInitAfterLogin(data);
                this.router.navigate(['/']);
            },
            (err:any)=>{
                this.isLoginErr = true;
                this.isLoading = false;
            }
        );
        
        
    }


    signStatus()
    {
        let status = localStorage.getItem("_login_provider");
        console.log(`log status = `,status,this.user);
        return status;
    }

    signIn(provider){
        
        this.sub = this._auth.login(provider).subscribe(
          (data) => {
            console.log(data);this.user=data;
            
            if(this.signStatus()===`google`)
            this.mainService.UserLoginGoogle(this.user.token)
            .subscribe((data:TokenModel)=>{
                console.log(`g_token`,data);
                this.mainService.BaseInitAfterLogin(data);
                if(this.mainService.getToken())
                this.router.navigate(['/']);
                location.reload();
            },
            (err:any)=>{
                this.isLoginErr = true;
                this.isLoading = false;
            }
             );
            

            else if(this.signStatus()===`facebook`){
            console.log(`fb get token`);
            this.mainService.UserLoginFacebook(this.user.token)
            .subscribe((data:TokenModel)=>{
                console.log(`f_token`,data);
                this.mainService.BaseInitAfterLogin(data);

                if(this.mainService.getToken())
                    this.router.navigate(['/']);
                    location.reload();
            },
            (err:any)=>{
                this.isLoginErr = true;
                this.isLoading = false;
            }
             );


            }
    });
}

      logout(provider){
        this.sub =this._auth.logout().subscribe(
          (data)=>{
            console.log(data);
            this.user=null;
            this.signStatus();}
        );
     
    }
}