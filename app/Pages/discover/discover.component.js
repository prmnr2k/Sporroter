"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_service_1 = require("../../services/http.service");
var main_service_1 = require("../../services/main.service");
var DiscoverComponent = (function () {
    function DiscoverComponent(router, service, params) {
        this.router = router;
        this.service = service;
        this.params = params;
        this.IsLoading = true;
        this.Activities = [];
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.service.GetAllActivities();
    };
    return DiscoverComponent;
}());
DiscoverComponent = __decorate([
    core_1.Component({
        selector: "discover",
        templateUrl: "./app/Pages/discover/discover.component.html",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        main_service_1.MainService,
        router_1.ActivatedRoute])
], DiscoverComponent);
exports.DiscoverComponent = DiscoverComponent;
//# sourceMappingURL=discover.component.js.map