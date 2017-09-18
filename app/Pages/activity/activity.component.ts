import { Component,OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RouterModule } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { HttpService} from '../../services/http.service';


import {MainService} from "./../../services/main.service";
import { RightNavComponent } from '../../components/right.nav/right.nav.component';
import { ActivityModel } from '../../models/activity.model';
import { UserModel } from '../../models/user.model';

@Component({
    selector: "activity",
    templateUrl: "./app/Pages/activity/activity.component.html",
    providers: [HttpService]
})

export class ActivityComponent implements OnInit{
    IsLoading = true;
    Activity: ActivityModel = new ActivityModel();
    User:UserModel = new UserModel();
    constructor(private router: Router,
        private service: MainService,
        private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        
         this.activatedRoute.params.forEach((params:Params) => {
            let actId= params["id"];
            console.log(actId);
            this.service.GetActivityById(actId);
        });
    }
}