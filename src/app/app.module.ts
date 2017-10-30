import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import {Http, HttpModule} from "@angular/http";
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
//TODO import another components
import {MainService} from "./services/main.service";;
import { routs } from './Pages/pages.route';
import { PageModule } from './Pages/pages.module';
import { ModalComponent } from './components/modal.component';
import { AgmCoreModule } from '@agm/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {JsonpModule} from '@angular/http';
import { Angular2SocialLoginModule } from "angular2-social-login";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

let providers = {
    "google": {
     // "clientId": "407186828884-df38rqtn1sbgla2v3qu103kcjdi8l5o8.apps.googleusercontent.com"
      "clientId": "844170394110-nfpt9eed64b8ak22k1d3qrqme1qdsvb3.apps.googleusercontent.com"
    },
    "linkedin": {
      "clientId": "LINKEDIN_CLIENT_ID"
    },
    "facebook": {
      "clientId": "1999210306988680",
      "apiVersion": "v2.10" //like v2.4 
    }
  };

@NgModule({
    imports:      [ 
        BrowserModule,
        RouterModule.forRoot(routs),
        PageModule,
        Angular2SocialLoginModule,
        JsonpModule ,
        HttpModule,
        FormsModule,
        MatButtonModule, MatCheckboxModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDZ1KosRinYSwWsttFqM68orCse2Lx-vA4',
            libraries: ["places"]
        }),
        BsDatepickerModule.forRoot()
    ],
    declarations: [ AppComponent],
    providers: [ MainService, HttpModule, ModalComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);