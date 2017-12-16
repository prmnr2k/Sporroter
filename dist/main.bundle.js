webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Pages/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row loading\" *ngIf=\"isLoading\"></div>\r\n<div *ngIf=\"!isLoading\" class=\"hero center-block\" [ngStyle]=\"{'background':'url(' + ActivityImg + ') center no-repeat'}\">\r\n    <div class=\"row middle\">\r\n        <div class=\"h123 h1-first word-wrap\">\r\n                <h1>{{Activity.title.slice(0,100)}}</h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!isLoading\" class=\"content1440\">\r\n    <div class=\"container center-block pull-top\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"round-card\" [ngClass]=\"{'height333': MyBooking.id > 0,'height265':!(MyBooking.id > 0)}\">\r\n                    <div class=\"avatar pull-left\">\r\n                        <img class=\"profile-logo\" alt=\"logo\" [src]=\"UserLogo?UserLogo:'./app/images/man.jpg'\" style=\"center\">\r\n                        <span class=\"profile-text\">{{Activity.user_name?getShortNames(Activity.user_name):'Author'}}</span>\r\n                        <a [routerLink]=\"['/users',Activity?Activity.user_id:'0']\"><span class=\"spanlink\"></span></a>\r\n                    </div>\r\n                    <div class=\"about-org\">\r\n                        <h3 class=\"word-wrap\">{{Activity.user_name.slice(0,50)}}</h3>\r\n                        <p [innerHTML]=\"Activity.user_description\"></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"booking\" *ngIf=\"!isLoggedIn\">\r\n                    <div class=\"round-card\">\r\n                        <h3>Activity information</h3>\r\n                        <form>\r\n                            <div class=\"form-group  form-group-makeinline\">\r\n                                    <span>Date: </span>\r\n                                <select class=\"form-control input-lg\" name=\"booking_date\" [ngModel]=\"Booking.date\" (ngModelChange)=\"GetBookingsByDateUnsub($event)\">\r\n                                    \r\n                                    <option *ngFor=\"let item of Activity.calendar\" [value]=\"item.date\">{{item.date | date:'MM/dd/yyyy'}}</option>\r\n                                </select>\r\n                               <!-- <span class=\"material-icons input-icon\">today</span>-->\r\n                                <!--<span class=\"material-icons input-icon\">today</span>-->\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <span>Maximum number of participants is <b>{{Activity.num_of_bookings}}</b></span>\r\n                                <label>Available places for {{Booking.date | date:'M/dd/yyyy'}} : <b>{{Available}}</b></label>\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <span>Price: <b>{{+Activity.price}} euro/participant</b></span>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"booking\" *ngIf=\"isLoggedIn\">\r\n                    <div *ngIf=\"Me.id == Activity.user_id && !isInPast\"  class=\"round-card\">\r\n                        <h3>Activity information</h3>\r\n                        <form>\r\n                            <div class=\"form-group  form-group-makeinline\">\r\n                                <select class=\"form-control input-lg\" name=\"booking_date\" [ngModel]=\"Booking.date\" (ngModelChange)=\"GetBookingsByDateUnsub($event)\">\r\n                                        <span>Date: </span>\r\n                                    <option *ngFor=\"let item of Activity.calendar\" [value]=\"item.date\">{{item.date | date:'MM/dd/yyyy'}}</option>\r\n\r\n                                </select>\r\n                              \r\n                                <!--<span class=\"material-icons input-icon\">today</span>-->\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <span>Maximum number of participants is <b>{{Activity.num_of_bookings}}</b></span>\r\n                                <label>Available places for {{Booking.date | date:'M/dd/yyyy'}} : <b>{{Available}}</b></label>\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <span>Price: <b>{{+Activity.price}} euro/participant</b></span>\r\n                            </div>\r\n                        </form>\r\n                        <div class=\"form-group form-group-makeinline\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"EditActivity()\">Edit Activity</button>\r\n                            <button type=\"button\" class=\"btn btn-pink btn-lg\" (click)=\"DeleteActivity()\">Delete Activity</button>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!MyBooking.id && Me.id != Activity.user_id && !isInPast\" class=\"round-card\">\r\n                        <h3>Reserve</h3>\r\n                        <div *ngIf=\"isBookingErr\">\r\n                            <h4 class=\"error-msg\">Incorrect number of participants! Available places is <b>{{Available}}</b></h4>\r\n                        </div>\r\n                        <form (ngSubmit)=\"CreateBooking()\">\r\n                            <div class=\"form-group  form-group-makeinline\">\r\n                                    <span>Date: </span>\r\n                                <select class=\"form-control input-withicon input-lg\" name=\"booking_date\" [ngModel]=\"Booking.date\" (ngModelChange)=\"GetBookingsByDateUnsub($event)\">\r\n                                    <option *ngFor=\"let item of Activity.calendar\" [value]=\"item.date\">{{item.date | date:'MM/dd/yyyy'}}</option>\r\n\r\n                                </select>\r\n                                <!--<span class=\"material-icons input-icon\">today</span>-->\r\n                                <!--<span class=\"material-icons input-icon\">today</span>-->\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <label>Available places: <b>{{Available}}</b></label>\r\n                                <input type=\"number\" name=\"booking_num\" class=\"form-control input-withicon input-lg\"  [ngModel]=\"Booking.num_of_participants\" (ngModelChange)=\"Booking.num_of_participants = $event\" [max]=\"Available\" placeholder=\"1\" min=\"0\">\r\n                                <span class=\"material-icons input-icon\">people</span>\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <button type=\"submit\" class=\"btn btn-success input-withicon btn-lg\">Reserve</button>\r\n                                <span class=\"material-icons input-icon\" style=\"color: #fff\">credit_card</span>\r\n                                <span class=\"booking-price\">{{+Activity.price}} euro/ticket</span>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isInPast\" class=\"round-card\">\r\n                        <h4 class=\"error-msg\">Activity has passed!</h4>\r\n                        <div class=\"form-group form-group-makeinline\">\r\n                            <span>See more activities in  <a [routerLink]=\"['/search']\">Search Page</a></span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"MyBooking.id > 0 && Me.id != Activity.user_id && !isInPast\" class=\"round-card\">\r\n                        <h3>Update my booking</h3>\r\n                        <div *ngIf=\"isBookingErr\">\r\n                            <h4 class=\"error-msg\"> Available places is <b>{{Available}}</b></h4>\r\n                        </div>\r\n                        <form (ngSubmit)=\"UpdateBooking()\">\r\n                            <div class=\"form-group  form-group-makeinline\">\r\n                                    <span>Date: </span>\r\n                                <select class=\"form-control input-withicon input-lg\" name=\"booking_date\" [ngModel]=\"MyBooking.date\" (ngModelChange)=\"GetBookingsByDateSub($event)\">\r\n                                    <option *ngFor=\"let item of Activity.calendar\" [value]=\"item.date\">{{item.date | date:'dd.MM.yyyy'}}</option>\r\n\r\n                                </select>\r\n                              <!--  <span class=\"material-icons input-icon\">today</span> -->\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <label>Available places: <b>{{Available}}</b></label>\r\n                                <input type=\"number\" name=\"booking_num\" class=\"form-control input-withicon input-lg\"  [ngModel]=\"MyBooking.num_of_participants\" (ngModelChange)=\"MyBooking.num_of_participants = $event\" min=\"0\" [max]=\"Available\">\r\n                                <span class=\"material-icons input-icon\">people</span>\r\n                            </div>\r\n                            <div class=\"form-group form-group-makeinline\">\r\n                                <button type=\"submit\" class=\"btn btn-success input-withicon btn-lg\">Update</button>\r\n                                <span class=\"material-icons input-icon\" style=\"color: #fff\">credit_card</span>\r\n                                \r\n                                <span class=\"booking-price\">{{+Activity.price}} euro/ticket</span>\r\n                            </div>\r\n                        </form>\r\n                        <div class=\"form-group form-group-makeinline\">\r\n                            <button type=\"button\" class=\"btn btn-pink btn-lg\" (click)=\"Unsubscribe()\">Unsubscribe</button>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"ReadMessages(modal1)\">Send message</button>\r\n                            \r\n                            <modal #modal1>\r\n                                <div class=\"app-modal-header\">\r\n                                    Chat with <b>{{Activity.user_name}}</b>\r\n                                </div>\r\n                                <div class=\"app-modal-body\">\r\n                                    <div *ngIf=\"MessOk\">\r\n                                        <h4 class=\"ok-msg\"> Your message was send to \r\n                                            <b>{{Activity.user_name}}</b>\r\n                                        </h4>\r\n                                    </div>\r\n                                    <div *ngIf=\"MessErr\">\r\n                                        <h4 class=\"error-msg\">Input body!</h4>\r\n                                    </div>\r\n                                    <div *ngIf=\"MesLoading\" class=\"loading max-height200\"></div>\r\n                                    <div *ngIf=\"!MesLoading\">\r\n                                        <div class=\"chat-history\" #scrollMe style=\"overflow-x: hidden; height: xyz;\">\r\n                                            <h3 *ngIf=\"!MesLoading && Messages.length == 0\" class=\"h-center\">There is no messages!</h3>\r\n                                            <div *ngFor=\"let item of Messages\" class=\"message_item\" [ngClass]=\"{'my_message':item.from_id != Activity.user_id}\">\r\n                                                <p class=\"message_body\">{{item.body}}</p>\r\n                                                <p class=\"message_date\">{{item.updated_at | date:'HH:mm, dd/MM/yyyy'}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <form  (ngSubmit)=\"SendMessage()\">\r\n                                            <div class=\"form-group\">\r\n                                                <textarea name=\"description\" class=\"form-control input-lg\" [ngModel]=\"Message.body\" (ngModelChange)=\"Message.body = $event\"></textarea>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12 text-center\">\r\n                                                    <button class=\"btn btn-success btn-lg\" type=\"submit\">Send message</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n        \r\n                                </div>\r\n                                <div class=\"app-modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal1.hide()\">Cancel</button>\r\n                                </div>\r\n                            </modal>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-7\">\r\n                <div class=\"pl32\">\r\n                    <div class=\"activity-description\">\r\n                            <h3>Sport</h3>\r\n                            <p>{{Activity.sub_category}}</p>\r\n                        <h3>Description</h3>\r\n                        <p>{{Activity.description}}</p></div>\r\n                    \r\n                    \r\n                        <div class=\"activity-comments-ratings\">\r\n\r\n                       \r\n                            <div *ngIf=\"datePrev()\">\r\n                                <h3>Rating</h3>\r\n                                    \r\n\r\n                                    <div class=\"panel-rating\" *ngIf=\"canRate()\" [ngStyle]=\"getStyleColor()\">\r\n                                        <div *ngIf=\"MyRate.rate!=0\"> \r\n                                            <p>My Rate: {{MyRate.rate}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"MyRate.rate==0\"> \r\n                                                <p>Rate it!</p>\r\n                                        </div>\r\n                                        <ul class=\"puk-rating\">\r\n                                            <li *ngFor=\"let item of pukList\"  (mouseenter)=\"onMouseEnterRate(item)\" (mouseleave)=\"onMouseLeaveRate()\">\r\n                                                <i  [ngStyle]=\"getStyleRate(item)\" (click)=\"onClickRate(item)\"></i>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n\r\n                                    <div class=\"panel-rating\" [ngStyle]=\"getStyleColorTotal()\">\r\n                                            <div *ngIf=\"TotalRate.rate!=0\"> \r\n                                                <p>Total Rate: {{TotalRate.rate}}</p>\r\n                                            </div>\r\n                                            <div *ngIf=\"TotalRate.rate==0\"> \r\n                                                 <p>No rating!</p>\r\n                                            </div>\r\n                                            \r\n                                            <ul class=\"puk-rating\">\r\n                                                <li *ngFor=\"let item of pukList\" >\r\n                                                    <i  [ngStyle]=\"getStyleRateTotal(item)\" ></i>\r\n                                                </li>\r\n                                            </ul>\r\n                                           \r\n                                    </div>\r\n                            </div>\r\n\r\n\r\n                        <div class=\"container-fluid post-comment\" *ngIf=\"isLoggedIn\">\r\n                            <h3>Add commentary</h3>\r\n                            <div *ngIf=\"isCommentErr\">\r\n                                <h4 class=\"error-msg\">Input description!</h4>\r\n                            </div>\r\n                            <form (ngSubmit)=\"AddComment()\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Title</label>\r\n                                        <input type=\"text\" class=\"form-control input-lg\" name=\"title\" [ngModel]=\"Comment.title\" (ngModelChange)=\"Comment.title = $event\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Description</label>\r\n                                        <textarea name=\"description\" class=\"form-control input-lg\" [ngModel]=\"Comment.body\" (ngModelChange)=\"Comment.body = $event\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12 text-center\">\r\n                                            <button class=\"btn btn-success btn-lg\" type=\"submit\">Add commentary</button>\r\n                                        </div>\r\n                                    </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                        <div class=\"container-fluid comments\">\r\n                            <h3>Comments</h3>\r\n                            <div class=\"comment word-break\" *ngFor=\"let item of Comments\">\r\n                                <div class=\"avatar pull-left\">\r\n                                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images[item.user_id]?Images[item.user_id]:'./app/images/man.jpg'\" style=\"center\">\r\n                                    <span class=\"profile-text\">{{item.user_name?getShortNames(item.user_name): 'Author'}}</span>\r\n                                    <a [routerLink]=\"['/users',item.user_id]\"><span class=\"spanlink\"></span></a>\r\n                                </div>\r\n                                <div class=\"commentbody-rating-date\">\r\n                                    <div class=\"rating-date\">\r\n                                        <div class=\"commentmeta inline-block\">\r\n                                            <span class=\"material-icons\">date_range</span>{{item.updated_at | date:'dd.M.yyyy'}}\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"commentbody\">\r\n                                        <h4>{{item.title}}</h4>\r\n                                        <p [innerHTML]=\"item.body\"></p>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"delete_button\" *ngIf=\"isLoggedIn && Me && (Me.id == item.user_id||Me.id == Activity.user_id)\">\r\n                                        <button (click)=\"OnDeleteComment(item)\" ></button>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                                \r\n                                <hr />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-offset-5\">\r\n                <div *ngIf=\"Bookings.length > 0\">\r\n                    <h3>Reserved</h3>\r\n                    <div class=\"comment border-bottom-hr\" *ngFor=\"let item of DateBookings\">\r\n                        <div class=\"avatar pull-left\">\r\n                            <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images[item.user_id]?Images[item.user_id]:'./app/images/man.jpg'\" style=\"center\">\r\n                            <span class=\"profile-text\">{{item.user_name?getShortNames(item.user_name): 'Author'}}</span>\r\n                            <a [routerLink]=\"['/users',item.user_id]\"><span class=\"spanlink\"></span></a>\r\n                        </div>\r\n                        <div class=\"commentbody-rating-date\">\r\n                            \r\n                            <div class=\"commentbody\">\r\n                                <span>Reserved tickets: {{item.num_of_participants}}</span>\r\n                            </div>\r\n                            <div class=\"rating-date\">\r\n                                <div class=\"commentmeta inline-block\">\r\n                                    <span class=\"material-icons\">date_range</span>{{item.updated_at | date:'dd.M.yyyy'}}\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Pages/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_activity_model__ = __webpack_require__("../../../../../src/app/models/activity.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_createBooking_model__ = __webpack_require__("../../../../../src/app/models/createBooking.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_booking_model__ = __webpack_require__("../../../../../src/app/models/booking.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_createMessage_model__ = __webpack_require__("../../../../../src/app/models/createMessage.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_rate_model__ = __webpack_require__("../../../../../src/app/models/rate.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ActivityComponent = (function () {
    function ActivityComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.isLoggedIn = false;
        this.isLoading = true;
        this.Activity = new __WEBPACK_IMPORTED_MODULE_4__models_activity_model__["a" /* ActivityModel */]();
        this.Start = new Date();
        this.Finish = new Date();
        this.UserLogo = '';
        this.actId = 0;
        this.Comments = [];
        this.Users = [];
        this.Images = [];
        this.Me = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* UserModel */]();
        this.MyBooking = new __WEBPACK_IMPORTED_MODULE_7__models_booking_model__["a" /* BookingModel */]();
        this.BookingDate = new Date();
        this.isInPast = true;
        this.lengthShortName = 6;
        this.Messages = [];
        // ParamsRate: RateModel = new RateModel();
        this.Comment = {
            title: '',
            body: '',
            activity_id: 0
        };
        this.ParamsRate = {
            activity_id: null,
            rate: null
        };
        this.TotalRate = new __WEBPACK_IMPORTED_MODULE_9__models_rate_model__["a" /* RateModel */]();
        this.MyRate = new __WEBPACK_IMPORTED_MODULE_9__models_rate_model__["a" /* RateModel */]();
        this.Booking = new __WEBPACK_IMPORTED_MODULE_6__models_createBooking_model__["a" /* CreateBookingModel */]();
        this.Bookings = [];
        this.DateBookings = [];
        this.isBookingErr = false;
        this.Message = new __WEBPACK_IMPORTED_MODULE_8__models_createMessage_model__["a" /* CreateMessageModel */]();
        this.MessOk = false;
        this.MessErr = false;
        this.MessLoading = false;
        this.isCommentErr = false;
        this.Available = 0;
        this.pukCount = 5;
        this.pukEmptyImage = './app/images/empty-star-icon.png';
        this.pukFullImage = './app/images/star-icon.png';
        this.pukHalfImage = './app/images/half-star-icon.png';
        this.pukImageWidth = '30px';
        this.pukImageHeight = '30px';
        this.pukList = [];
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 1; i <= this.pukCount; i++) {
            this.pukList.push(i);
        }
        this.activatedRoute.params.forEach(function (params) {
            _this.isLoading = true;
            _this.isLoggedIn = _this.service.IsLogedIn();
            _this.service.onAuthChange$
                .subscribe(function (isLogged) {
                _this.isLoggedIn = isLogged;
                if (_this.isLoggedIn) {
                    _this.service.GetMe()
                        .subscribe(function (res) {
                        _this.Me = res;
                    });
                    _this.GetComments();
                    _this.GetBookings();
                }
                else {
                    _this.Me = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* UserModel */]();
                }
            });
            _this.actId = params["id"];
            _this.GetActivity();
            _this.service.GetMe()
                .subscribe(function (res) {
                _this.Me = res;
            });
        });
        console.log("me = ", this.Me, "  activ = ", this.Activity);
    };
    ActivityComponent.prototype.GetActivity = function () {
        var _this = this;
        this.service.GetActivity(this.actId)
            .subscribe(function (act) {
            _this.TotalRate.rate = act.rate;
            _this.ParamsRate.activity_id = act.id;
            _this.Activity = act;
            _this.inPast();
            _this.Booking.date = _this.Activity.calendar[0].date;
            console.log(_this.Booking.date);
            if (_this.Activity.image_id) {
                _this.service.GetImageById(_this.Activity.image_id)
                    .subscribe(function (img) {
                    _this.ActivityImg = img.base64;
                });
            }
            if (_this.Activity.user_image_id) {
                _this.service.GetImageById(_this.Activity.user_image_id)
                    .subscribe(function (img) {
                    _this.UserLogo = img.base64;
                });
            }
            _this.GetComments();
            _this.GetBookings();
            _this.getRate();
            _this.isLoading = false;
        });
    };
    ActivityComponent.prototype.inPast = function () {
        var today = new Date();
        today.setDate(today.getDate() - 1);
        for (var _i = 0, _a = this.Activity.calendar; _i < _a.length; _i++) {
            var item = _a[_i];
            var cur = new Date(item.date);
            if (today < cur) {
                return this.isInPast = false;
            }
        }
    };
    ActivityComponent.prototype.GetComments = function () {
        var _this = this;
        this.service.GetAllComments({ activity_id: this.Activity.id })
            .subscribe(function (res) {
            _this.Comments = res;
            var _loop_1 = function (item) {
                if (item.user_image_id) {
                    _this.service.GetImageById(item.user_image_id)
                        .subscribe(function (img) {
                        _this.Images[item.user_id] = img.base64;
                    });
                }
            };
            for (var _i = 0, _a = _this.Comments; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
        });
    };
    ActivityComponent.prototype.AddComment = function () {
        var _this = this;
        this.isCommentErr = false;
        if (!this.Comment.body) {
            this.isCommentErr = true;
            return;
        }
        this.Comment.activity_id = this.Activity.id;
        this.service.CreateComment(this.Comment)
            .subscribe(function (res) {
            _this.Comment = {
                title: '',
                body: '',
                activity_id: _this.Activity.id
            };
            _this.GetComments();
        });
    };
    ActivityComponent.prototype.OnDeleteComment = function (item) {
        var _this = this;
        this.service.DeleteComment(item.id)
            .subscribe(function () {
            _this.GetComments();
        });
    };
    ActivityComponent.prototype.CreateBooking = function () {
        var _this = this;
        this.isBookingErr = false;
        this.Booking.activity_id = this.Activity.id;
        if (!this.isInPast && this.Booking.num_of_participants > this.Activity.num_of_bookings) {
            this.isBookingErr = true;
            this.Booking.num_of_participants = this.Activity.num_of_bookings;
            return;
        }
        this.service.CreateBooking(this.Booking)
            .subscribe(function (book) {
            _this.GetBookings();
            _this.SendMessage('I am booking ' + _this.Activity.title + ' activity!');
        }, function (err) {
            console.log(err);
            _this.isBookingErr = true;
            setTimeout(function () {
                _this.isBookingErr = false;
            }, 5000);
        });
    };
    ActivityComponent.prototype.UpdateBooking = function () {
        var _this = this;
        this.isBookingErr = false;
        if (this.MyBooking.num_of_participants > this.Activity.num_of_bookings) {
            this.isBookingErr = true;
            this.MyBooking.num_of_participants = this.Activity.num_of_bookings;
            return;
        }
        this.service.UpdateBooking(this.MyBooking.id, { num_of_participants: this.MyBooking.num_of_participants, date: this.MyBooking.date })
            .subscribe(function (res) {
            _this.MyBooking = res;
            _this.GetBookings();
        }, function (err) {
            _this.isBookingErr = true;
            setTimeout(function () {
                _this.isBookingErr = false;
            }, 5000);
        });
    };
    ActivityComponent.prototype.Unsubscribe = function () {
        var _this = this;
        this.service.DeleteBooking(this.MyBooking.id)
            .subscribe(function () {
            _this.MyBooking = new __WEBPACK_IMPORTED_MODULE_7__models_booking_model__["a" /* BookingModel */]();
            _this.GetBookings();
        });
        this.service.UnRateActivity({ activity_id: this.ParamsRate.activity_id })
            .subscribe(function () {
            console.log("unrate it!!");
            _this.GetActivity();
        }, function (err) {
            console.log(err);
        });
    };
    ActivityComponent.prototype.GetBookings = function () {
        var _this = this;
        this.service.GetActivityBookings(this.Activity.id)
            .subscribe(function (res) {
            _this.Bookings = res;
            var _loop_2 = function (item) {
                if (_this.isLoggedIn && _this.Me && item.user_id == _this.Me.id) {
                    _this.SetMyBooking(item);
                }
                if (item.user_image_id && !_this.Images[item.user_id]) {
                    _this.service.GetImageById(item.user_image_id)
                        .subscribe(function (img) {
                        _this.Images[item.user_id] = img.base64;
                    });
                }
            };
            for (var _i = 0, _a = _this.Bookings; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_2(item);
            }
            if (_this.isLoggedIn && _this.Me && _this.MyBooking && _this.MyBooking.id) {
                _this.BookingDate = _this.MyBooking.date;
                _this.GetBookingsByDateSub(_this.MyBooking.date);
            }
            else
                _this.GetBookingsByDateUnsub(_this.Booking.date);
        });
    };
    ActivityComponent.prototype.SetMyBooking = function (bk) {
        this.MyBooking.id = bk.id;
        this.MyBooking.num_of_participants = bk.num_of_participants;
        this.MyBooking.date = bk.date;
    };
    ActivityComponent.prototype.GetBookingsByDate = function (date) {
        this.DateBookings = this.Bookings
            .filter(function (obj) { return obj.date == date; });
        console.log(this.Bookings);
        console.log(this.DateBookings);
        console.log(date);
        this.Available = this.Activity.num_of_bookings;
        for (var _i = 0, _a = this.DateBookings; _i < _a.length; _i++) {
            var i = _a[_i];
            this.Available -= i.num_of_participants;
        }
    };
    ActivityComponent.prototype.GetBookingsByDateSub = function (date) {
        this.MyBooking.date = date;
        this.GetBookingsByDate(this.MyBooking.date);
        if (this.BookingDate == this.MyBooking.date) {
            this.Available += this.MyBooking.num_of_participants;
        }
    };
    ActivityComponent.prototype.GetBookingsByDateUnsub = function (date) {
        this.Booking.date = date;
        this.GetBookingsByDate(this.Booking.date);
    };
    ActivityComponent.prototype.MyBookingNumOfPartsChanged = function ($event) {
        this.MyBooking.num_of_participants = $event;
    };
    ActivityComponent.prototype.SendMessage = function (msg) {
        var _this = this;
        this.MessLoading = true;
        this.MessErr = false;
        this.MessOk = false;
        this.Message.to_id = this.Activity.user_id;
        if (msg)
            this.Message.body = msg;
        if (!this.Message.body) {
            this.MessErr = true;
            this.MessLoading = false;
            setTimeout(function () {
                _this.MessErr = false;
            }, 5000);
            return;
        }
        this.service.CreateMessage(this.Message)
            .subscribe(function (mes) {
            _this.Message.body = "";
            _this.GetMessages();
        }, function (err) {
            _this.MessErr = true;
            _this.MessLoading = false;
            setTimeout(function () {
                _this.MessErr = false;
            }, 5000);
        });
    };
    ActivityComponent.prototype.pukChangeSvg = function (newPukValue) {
        if (this.canRate())
            this.MyRate.rate = newPukValue;
    };
    ;
    ActivityComponent.prototype.pukChangeImage = function (newPukValue) {
        if (this.canRate())
            this.MyRate.rate = newPukValue;
    };
    ;
    ActivityComponent.prototype.pukHover = function (pukValue) {
        if (this.canRate())
            this.pukHoverIndex = pukValue;
    };
    ActivityComponent.prototype.onClickRate = function (pukModel) {
        if (this.canRate()) {
            this.MyRate.rate = pukModel;
            this.setRate();
        }
    };
    ActivityComponent.prototype.onMouseEnterRate = function (pukModel) {
        if (this.canRate())
            this.pukHoverIndex = pukModel;
    };
    ActivityComponent.prototype.onMouseLeaveRate = function () {
        if (this.canRate())
            this.pukHoverIndex = null;
    };
    ActivityComponent.prototype.getStyleRate = function (index) {
        if (this.pukEmptyImage && this.pukFullImage) {
            var image_url = void 0;
            if (this.pukHoverIndex) {
                image_url = index <= this.pukHoverIndex ? this.pukFullImage : this.pukEmptyImage;
            }
            else {
                image_url = index <= this.MyRate.rate ? this.pukFullImage : this.pukEmptyImage;
            }
            return {
                "background-size": this.pukImageWidth + ' ' + this.pukImageHeight,
                "background-image": "url(" + image_url + ")",
                "display": "inline-block",
                "width": this.pukImageWidth,
                "height": this.pukImageHeight
            };
        }
    };
    ActivityComponent.prototype.getStyleColor = function () {
        var color = 'red';
        if (this.MyRate.rate == 5)
            color = "#0b60a3";
        else if (this.MyRate.rate >= 4)
            color = "#00a8b0";
        else if (this.MyRate.rate >= 3)
            color = "#67b548";
        else if (this.MyRate.rate >= 2)
            color = "#89cf6d";
        else if (this.MyRate.rate >= 1)
            color = "#b05153";
        else if (this.MyRate.rate == 0)
            color = "#FF00FF";
        return {
            "background-color": color
        };
    };
    ActivityComponent.prototype.setRate = function () {
        var _this = this;
        if (this.canRate()) {
            console.log(this.service.getToken());
            if (this.isLoggedIn && this.MyBooking.id > 0) {
                this.service.UnRateActivity(this.ParamsRate.activity_id)
                    .subscribe(function () {
                    console.log("unrate it!!");
                }, function (err) {
                    console.log(err);
                });
                this.ParamsRate.rate = this.MyRate.rate;
                this.service.RateActivity(this.ParamsRate)
                    .subscribe(function () {
                    console.log("rate it!!");
                    _this.GetActivity();
                }, function (err) {
                    console.log(err);
                });
            }
            else
                console.log("not auth!");
        }
    };
    ActivityComponent.prototype.EditActivity = function () {
        this.router.navigate(['/edit_act', this.Activity.id]);
    };
    ActivityComponent.prototype.DeleteActivity = function () {
        var _this = this;
        this.service.DeleteActivity(this.Activity.id)
            .subscribe(function () {
            _this.router.navigate(['/users', 'me', { menu: 'activity' }]);
        }, function (err) {
            console.log(err);
        });
    };
    ActivityComponent.prototype.datePrev = function () {
        var isDatePrev = false;
        var today = new Date();
        for (var _i = 0, _a = this.Activity.calendar; _i < _a.length; _i++) {
            var item = _a[_i];
            var cur = new Date(item.date);
            if (today > cur)
                isDatePrev = true;
        }
        return isDatePrev;
    };
    ActivityComponent.prototype.canRate = function () {
        var canRate = false;
        if (this.MyBooking.id > 0 && this.Me.id != this.Activity.user_id)
            canRate = true;
        return canRate;
    };
    ActivityComponent.prototype.getRate = function () {
        var _this = this;
        this.service.GetRate(this.Activity.id)
            .subscribe(function (res) {
            _this.MyRate = res;
        });
    };
    ActivityComponent.prototype.getStyleRateTotal = function (index) {
        if (this.pukEmptyImage && this.pukFullImage) {
            var image_url = void 0;
            if (index <= this.TotalRate.rate) {
                image_url = this.pukFullImage;
            }
            else if (index < this.TotalRate.rate + 1) {
                image_url = this.pukHalfImage;
            }
            else {
                image_url = this.pukEmptyImage;
            }
            return {
                "background-size": this.pukImageWidth + ' ' + this.pukImageHeight,
                "background-image": "url(" + image_url + ")",
                "display": "inline-block",
                "width": this.pukImageWidth,
                "height": this.pukImageHeight
            };
        }
    };
    ActivityComponent.prototype.getStyleColorTotal = function () {
        var color = 'red';
        if (this.TotalRate.rate == 5)
            color = "#0b60a3";
        else if (this.TotalRate.rate >= 4)
            color = "#00a8b0";
        else if (this.TotalRate.rate >= 3)
            color = "#67b548";
        else if (this.TotalRate.rate >= 2)
            color = "#89cf6d";
        else if (this.TotalRate.rate >= 1)
            color = "#b05153";
        else if (this.TotalRate.rate == 0)
            color = "#3EE1AB";
        return {
            "background-color": color
        };
    };
    ActivityComponent.prototype.getShortNames = function (name) {
        return this.service.GetShortName(name, this.lengthShortName);
    };
    ActivityComponent.prototype.GetMessages = function () {
        var _this = this;
        this.MessLoading = true;
        this.service.GetChatHistory({ user_id: this.Activity.user_id })
            .subscribe(function (res) {
            _this.Messages = res;
        }, function (err) {
            _this.Messages = [];
            _this.MessLoading = false;
        });
    };
    ActivityComponent.prototype.ReadMessages = function (modal) {
        this.MessLoading = true;
        modal.show();
        this.GetMessages();
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "activity",
        template: __webpack_require__("../../../../../src/app/Pages/activity/activity.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ActivityComponent);

var _a, _b, _c;
//# sourceMappingURL=activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/createActivity/createActivity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row3\">\r\n    <main id=\"container\" class=\"clear\">\r\n        <div class=\"row loading\" *ngIf=\"isLoading\"></div>\r\n        <div class=\"row\" *ngIf=\"!isLoading\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row middle\">\r\n                    <div class=\"h123  h1-first-index\">\r\n                        <h1 class=\"middle-text grey-span topmarg30\">Create activity</h1>\r\n                    </div>\r\n                    <div *ngIf=\"isCreateErr\" class=\"h123 h1-first\">\r\n                        <h2 class=\"error-msg\">{{ErrMsg}}</h2>\r\n                    </div>\r\n                </div>\r\n                <form (ngSubmit)=\"OnCreateActivityButtonClick()\">\r\n                    <div class=\"col-sm-6 col-sm-push-2 marg-auto\">\r\n                    <div class=\"form-group\">\r\n                        <label>Title</label>\r\n                        <input type=\"text\" class=\"form-control input-lg\" name=\"title\"  maxlength=\"30\" [ngModel]=\"Activity.title\" (ngModelChange)=\"Activity.title = $event\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Activity background picture</label>\r\n                        <img *ngIf=\"Activity.image\" [src]=\"Activity.image\">\r\n                        <label class=\"file_upload\">\r\n                            <span class=\"button\">Browse image</span>\r\n                            <input type=\"file\" (change)=\"changeListener($event)\">\r\n                        </label>\r\n                        \r\n                    </div><br>\r\n                    <div class=\"form-group\">\r\n                        <label>Price</label>\r\n                        <input type=\"number\" required class=\"form-control input-lg\" name=\"price\" #price=\"ngModel\"  [ngModel]=\"Activity.price\"  min=\"0\" [max]=\"100000\" (ngModelChange)=\"Activity.price = $event\">\r\n                        <div *ngIf=\"(!Activity.price||Activity.price<0)&&price.touched\" class=\"alert alert-danger\">\r\n                            Uncorrect price!\r\n                          </div>\r\n                    </div><br>\r\n                    <div class=\"form-group\">\r\n                        <label>Number of possible bookings per date</label>\r\n                        <input type=\"number\" required class=\"form-control input-lg\" name=\"booking\" #book=\"ngModel\"  [ngModel]=\"Activity.num_of_booking\"  min=\"0\" [max]=\"10000\" (ngModelChange)=\"Activity.num_of_bookings = $event\">\r\n                        <div *ngIf=\"(!Activity.num_of_bookings||Activity.num_of_bookings<0)&&book.touched\" class=\"alert alert-danger\">\r\n                                Uncorrect number of possible bookings!\r\n                          </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Sport</label>\r\n                        <input ngui-auto-complete autocomplete=\"off\" [min-chars]=\"2\" [max-num-list]=\"10\" [auto-select-first-item]=\"true\" [select-on-blur]=\"true\" [source]=\"Categories\"  [list-formatter]=\"autocompleListFormatter\" value-property-name=\"value\" display-property-name=\"name\" class=\"form-control input-lg\" name=\"category\" (valueChanged)=\"CategoryChanged($event)\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Address</label>\r\n                        <input type=\"text\" placeholder=\"Search for Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control\" #searchg>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <agm-map [latitude]=\"Activity?.public_lat\" [longitude]=\"Activity?.public_lng\">\r\n                            <agm-marker [markerDraggable]=\"false\" [latitude]=\"Activity?.public_lat\" [longitude]=\"Activity?.public_lng\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n        \r\n\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Detailed address</label>\r\n                        <input type=\"text\" class=\"form-control input-lg\" name=\"det_address\" [ngModel]=\"Activity.detailed_address\" (ngModelChange)=\"Activity.detailed_address = $event\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <textarea name=\"description\" class=\"form-control input-lg\" [ngModel]=\"Activity.description\" (ngModelChange)=\"Activity.description = $event\"></textarea>\r\n                    </div>\r\n                    <br>\r\n                    \r\n                    <div class=\"form-group  form-group-makeinline\">\r\n                        <label>Dates</label>\r\n                        <div class=\"width-float\" *ngFor=\"let item of Activity.calendar; let i = index\">\r\n                                <input  type=\"text\" class=\"form-control input-lg width-float\" bsDatepicker [bsConfig]=\"bsConfig\" name=\"begin{{i}}\" [ngModel]=\"item\" (ngModelChange)=\"ActivityCalendarChanged(i,$event)\">\r\n                                <button class=\"btn btn-pink btn-lg mrg\" type=\"button\" (click)=\"DeleteDate(i)\">Delete</button>\r\n                        </div>\r\n                        <button class=\"btn btn-success btn-lg mrg-top20 width-230\" type=\"button\" (click)=\"NewDate()\">Add one more date</button>\r\n                    </div>\r\n                    \r\n                    <br>\r\n                    \r\n                    \r\n                    <div class=\"row\"><div class=\"col-md-12 text-center\"><button class=\"btn btn-success btn-lg mrg-top20\" type=\"submit\">Create activity</button></div></div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/createActivity/createActivity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_createActivity_model__ = __webpack_require__("../../../../../src/app/models/createActivity.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateActivityComponent = (function () {
    function CreateActivityComponent(router, activatedRoute, service, _sanitizer, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this._sanitizer = _sanitizer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.Activity = new __WEBPACK_IMPORTED_MODULE_4__models_createActivity_model__["a" /* CreateActivityModel */]();
        this.lastChangeClnd = null;
        this.Start = new Date();
        this.Finish = new Date();
        this.Today = new Date();
        this.isLoading = false;
        this.isCreateErr = false;
        this.ErrMsg = '';
        this.Categories = [];
        /*
            observableSource = (keyword: any) :Observable<any[]> => {
                if(keyword){
                    return this.service.GetAddrFromGoogle(keyword);
                }
                else{
                    return Observable.of([]);
                }
            }
            AddressChanged($event){
                if($event.formatted_address){
                    this.Activity.address = $event.formatted_address;
                    if($event.geometry && $event.geometry.location){
                        this.Activity.lat = $event.geometry.location.lat;
                        this.Activity.lng = $event.geometry.location.lng;
                        this.mapLat =  $event.geometry.location.lat;
                        this.mapLng =  $event.geometry.location.lng;
                        
                        console.log(`addressChange`);
                        console.log(this.Activity.lat, this.Activity.lng);
        
                    }
                }
                else $event = "";
            }*/
        this.autocompleListFormatter = function (data) {
            var html = "<span>" + data.parent + " : <b>" + data.name + "</b></span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    CreateActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', showWeekNumbers: false });
        this.Activity.calendar = [];
        //this.mapLat = 48.8916733;
        //this.mapLng = 2.3016161;
        //this.Activity.lat = 48.8916733;
        //this.Activity.lng = 2.3016161;
        this.Activity.public_lat = 48.8916733;
        this.Activity.public_lng = 2.3016161;
        this.NewDate();
        this.Categories = this.service.GetCategoriesAsArrayCategory();
        this.service.GetMe()
            .subscribe(function (res) {
            if (res.lat && res.lng) {
                //this.Activity.lat = res.lat;
                //this.Activity.lng = res.lng;
                _this.Activity.public_lat = res.lat;
                _this.Activity.public_lng = res.lng;
                //this.mapLat = res.lat;
                //this.mapLng = res.lng;
            }
        });
        this.CreateAutocompleteMap();
    };
    CreateActivityComponent.prototype.CreateAutocompleteMap = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(cities)"] });
            console.log(autocomplete);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        _this.Activity.public_lat = autocomplete.getPlace().geometry.location.toJSON().lat;
                        _this.Activity.public_lng = autocomplete.getPlace().geometry.location.toJSON().lng;
                        //this.Activity.lat = this.mapLat;
                        //this.Activity.lng = this.mapLng;
                        _this.Activity.address = autocomplete.getPlace().formatted_address;
                    }
                });
            });
        });
    };
    CreateActivityComponent.prototype.CheckActivity = function () {
        //this.ErrMsg = "Input correct data: "
        this.ErrMsg = "Fill in all fields";
        var len = this.ErrMsg.length + 1;
        this.ErrMsg += "!";
        if (!this.Activity.title) {
            //this.ErrMsg += "Title"
            return false;
        }
        if (!this.Activity.image) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Picture";*/
            return false;
        }
        if (!this.Activity.price || this.Activity.price < 0 || this.Activity.price > 100000) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Price";*/
            this.ErrMsg = "Uncorrect price!";
            return false;
        }
        if (!this.Activity.num_of_bookings || this.Activity.num_of_bookings < 0 || this.Activity.num_of_bookings > 10000) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Number of possible bookings per day";*/
            this.ErrMsg = "Uncorrect number of possible bookings!";
            return false;
        }
        if (!this.Activity.address) {
            /* if(len < this.ErrMsg.length)
                 this.ErrMsg += ",";
             this.ErrMsg += "Address";*/
            return false;
        }
        if (!this.Activity.detailed_address) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Detailed address";*/
            return false;
        }
        if (!this.Activity.description) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Description";*/
            return false;
        }
        if (!this.Activity.public_lat && !this.Activity.public_lng) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Mark on the map";*/
            return false;
        }
        //this.ErrMsg += "!";
        return this.ErrMsg.length == len;
    };
    CreateActivityComponent.prototype.OnCreateActivityButtonClick = function () {
        var _this = this;
        this.isLoading = true;
        this.isCreateErr = false;
        scrollTo(0, 0);
        if (!this.CheckActivity()) {
            this.isCreateErr = true;
            this.isLoading = false;
            return;
        }
        console.log(this.Activity);
        for (var i = 0; i < this.Activity.calendar.length; i++) {
            for (var j = i + 1; j < this.Activity.calendar.length; j++)
                if (this.isEqualDates(this.Activity.calendar[i], this.Activity.calendar[j])) {
                    this.Activity.calendar.splice(j, 1);
                    j = 0;
                }
        }
        console.log("calendar-", this.Activity.calendar);
        this.service.CreateActivity(this.Activity)
            .subscribe(function (res) {
            _this.router.navigate(['/activity', res.id]);
        }, function (err) {
            _this.ErrMsg = err.body;
            _this.isCreateErr = true;
            _this.isLoading = false;
        });
    };
    CreateActivityComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    CreateActivityComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        if (!file)
            return;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.Activity.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    CreateActivityComponent.prototype.mapClicked = function ($event) {
        // this.Activity.lat = $event.coords.lat;
        // this.Activity.lng = $event.coords.lng;
        console.log("mapClick");
        console.log(this.Activity.lat, this.Activity.lng);
    };
    CreateActivityComponent.prototype.mapMarkerDrag = function ($event) {
        //this.Activity.lat = $event.coords.lat;
        //this.Activity.lng = $event.coords.lng;
        console.log("markerDrag");
        console.log(this.Activity.lat, this.Activity.lng);
    };
    CreateActivityComponent.prototype.NewDate = function () {
        var date = new Date();
        if (this.Activity.calendar.length > 0)
            date.setDate(this.Activity.calendar[this.Activity.calendar.length - 1].getDate() + 1);
        this.Activity.calendar.push(date);
    };
    CreateActivityComponent.prototype.DeleteDate = function (index) {
        this.Activity.calendar.splice(index, 1);
    };
    CreateActivityComponent.prototype.ActivityCalendarChanged = function (index, date) {
        var avalDate = true;
        this.Activity.calendar[index] = date;
        console.log('calendar', this.Activity.calendar);
    };
    CreateActivityComponent.prototype.isEqualDates = function (date1, date2) {
        console.log("dates", date1, date2);
        if (date1.getDate() == date2.getDate() && date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth())
            return true;
        else
            return false;
    };
    CreateActivityComponent.prototype.ChangeBookings = function (elem) {
        /*if(elem.value > 10000)
            elem.value = 10000;*/
        this.Activity.num_of_bookings = elem.value;
    };
    CreateActivityComponent.prototype.CategoryChanged = function ($event) {
        this.Activity.category = $event.parent;
        this.Activity.sub_category = $event.parent + ":" + $event.name;
        console.log(this.Activity);
    };
    return CreateActivityComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchg'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CreateActivityComponent.prototype, "searchElement", void 0);
CreateActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'createActivity',
        template: __webpack_require__("../../../../../src/app/Pages/createActivity/createActivity.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
], CreateActivityComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=createActivity.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/discover/discover.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"hero\">\r\n      <div class=\"hero-content\">\r\n        <h1>Envie de dépenser votre énergie</h1>\r\n        <h2>Trouver une activité autour de vous</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"container1440 center-block container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3 left-side\">\r\n                <div class=\"controls\">\r\n                    <h3>Find Activities</h3>\r\n                    <form (ngSubmit)=\"GetAllActivities()\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" name=\"desc\" class=\"form-control input-lg\" [ngModel]=\"Params.title\" (ngModelChange)=\"Params.title = $event\" placeholder=\"Title..\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" name=\"desc\" class=\"form-control input-lg\" [ngModel]=\"Params.description\" (ngModelChange)=\"Params.description = $event\" placeholder=\"Description..\">\r\n                            \r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                                <input ngui-auto-complete autocomplete=\"off\" [ngModel]=\"MyCategory\" [max-num-list]=\"10\" [auto-select-first-item]=\"true\" [select-on-blur]=\"true\" [source]=\"Categories\" [list-formatter]=\"autocompleListFormatter\" value-property-name=\"value\" display-property-name=\"name\" class=\"form-control input-withicon input-lg\" name=\"category\" (valueChanged)=\"CategoryChanged($event)\" placeholder=\"Sport\" >\r\n                                <span  class=\"material-icons input-icon\">loyalty</span>\r\n                        </div>\r\n                        <div class=\"form-group index-search\">\r\n                            <input type=\"text\" placeholder=\"Search for Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control input-withicon input-lg\" #searchg [value]=\"Params.address\">\r\n                            <span class=\"material-icons input-icon\">location_on</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input class=\"form-control input-withicon input-lg\" (onShown)=\"showDP = !showDP\" (onHidden)=\"showDP = !showDP\" bsDaterangepicker [(bsValue)]=\"bsRangeValue\" [bsConfig]=\"bsConfig\" (ngModelChange)=\"bsRangeValue = $event\" [value]=\"getDates()\" placement=\"right bottom\" readonly  style=\"background-color:white;\">           \r\n                            <span  class=\"material-icons input-icon\">today</span>     \r\n                        </div>\r\n                        <div class=\"form-group form-group-makeinline\">\r\n                            <button type=\"submit\" class=\"btn btn-success input-withicon btn-lg\">Appliquer</button>\r\n                            <span class=\"material-icons input-icon white-span\">search</span>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-9 left-side\">\r\n                <div class=\"loading\" *ngIf=\"isLoading\"></div>\r\n                <div class=\"cards\" *ngIf=\"!isLoading\">\r\n                    <p *ngIf=\"Activities.length === 0\">No activities!</p>\r\n                    <h3 class=\"text-center\">Récentes</h3>\r\n                    <br>\r\n                    <div class=\"container-fluid\">\r\n                        <div *ngFor=\"let item of Activities; let i=index\" class=\"col-xs-12 col-sm-6 pull-left\" [ngClass]=\"{'col-sm-12':i==Activities.length-1&&Activities.length%2==1}\">\r\n                            <div class=\"card bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+item.id] + ')'}\">\r\n                                <h3 class=\"cardname word-wrap\">{{item.title.slice(0,180)}}</h3>\r\n                                <h3 *ngIf=\"!showDP\" class=\"carddate\">{{item.calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+item.user_id]?Images['user'+item.user_id]:'./app/images/man.jpg'\">\r\n                                    <span class=\"profile-text\">{{item.user_name?getShortNames(item.user_name):'Author'}}</span>\r\n                                </div>\r\n                                <span class=\"cardshadow\"></span>\r\n                                <a *ngIf=\"!showDP\" [routerLink]=\"['/activity',item.id]\"><span class=\"spanlink\"></span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h3 class=\"text-center\">Le Plus Populaire</h3>\r\n                    <br>\r\n                    <div class=\"container-fluid\">\r\n                        <div *ngFor=\"let item of Activities; let i=index\" class=\"col-xs-12 col-sm-6 pull-left\" [ngClass]=\"{'col-sm-12':i==Activities.length-1&&Activities.length%2==1}\">\r\n                            <div class=\"card bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+item.id] + ')'}\">\r\n                                <h3 class=\"cardname word-wrap\">{{item.title.slice(0,180)}}</h3>\r\n                                <h3 *ngIf=\"!showDP\" class=\"carddate\">{{item.calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+item.user_id]?Images['user'+item.user_id]:'./app/images/man.jpg'\">\r\n                                    <span class=\"profile-text\">{{item.user_name?getShortNames(item.user_name):'Author'}}</span>\r\n                                </div>\r\n                                <span class=\"cardshadow\"></span>\r\n                                <a *ngIf=\"!showDP\" [routerLink]=\"['/activity',item.id]\"><span class=\"spanlink\"></span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/Pages/discover/discover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_category_model__ = __webpack_require__("../../../../../src/app/models/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DiscoverComponent = (function () {
    function DiscoverComponent(router, route, service, params, _sanitizer, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.params = params;
        this._sanitizer = _sanitizer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.isLoading = true;
        this.Activities = [];
        this.Users = [];
        this.Images = [];
        this.Params = {
            limit: 20,
            offset: 0,
            address: '',
            from_date: null,
            to_date: null,
            title: '',
            description: '',
            category: '',
            sub_category: ''
        };
        this.Categories = [];
        this.MyCategory = new __WEBPACK_IMPORTED_MODULE_4__models_category_model__["a" /* CategoryModel */]();
        this.lengthShortName = 5;
        this.showDP = false;
        //lat:number = 48.8916733;
        //lng:number = 2.3016161;
        this._bsRangeValue = [this.prevWeek(new Date()), this.nextWeek(new Date())];
        this.autocompleListFormatter = function (data) {
            var html = "<span><b>" + data.name + "</b></span>";
            if (data.parent)
                html = "<span>" + data.parent + " : <b>" + data.name + "</b></span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    Object.defineProperty(DiscoverComponent.prototype, "bsRangeValue", {
        get: function () {
            return this._bsRangeValue;
        },
        set: function (v) {
            this._bsRangeValue = v;
        },
        enumerable: true,
        configurable: true
    });
    DiscoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        /*
        this.service.GetMe()
        .subscribe((res:UserModel)=>{
            if(res.lat&&res.lng){
                this.lat = res.lat;
                this.lng = res.lng;
                }
        });*/
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', showWeekNumbers: false });
        var sub = this.route.params.subscribe(function (params) {
            //this.Params.limit = +params['limit']; // (+) converts string 'id' to a number
            if (params['address'])
                _this.Params.address = params['address'];
            else
                _this.Params.address = '';
            if (params['title'])
                _this.Params.title = params['title'];
            else
                _this.Params.title = '';
            if (params['from_date'] && params['to_date']) {
                _this.bsRangeValue = [new Date(params['from_date']), new Date(params['to_date'])];
                _this.Params.from_date = _this.bsRangeValue[0];
                _this.Params.to_date = _this.bsRangeValue[1];
                console.log('parametrs get', _this.bsRangeValue);
            }
            else {
                _this.Params.from_date = null;
                _this.Params.to_date = null;
            }
            if (params['category'])
                _this.Params.category = params['category'];
            else
                _this.Params.category = '';
            if (params['sub_category'])
                _this.Params.sub_category = params['sub_category'];
            else
                _this.Params.sub_category = '';
            console.log(_this.Params);
            _this.Categories = _this.service.GetAllCategoriesAsArrayCategory();
            if (_this.Params.sub_category) {
                _this.MyCategory.name = _this.Params.sub_category;
            }
            else if (_this.Params.category && !_this.Params.sub_category) {
                _this.MyCategory = _this.Categories.find(function (obj) { return obj.value == (_this.Params.sub_category ? _this.Params.sub_category : _this.Params.category); });
            }
        });
        this.CreateAutocompleteMap();
        this.GetAllActivities();
    };
    DiscoverComponent.prototype.CreateAutocompleteMap = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(cities)"] });
            console.log(autocomplete);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        _this.Params.address = autocomplete.getPlace().formatted_address;
                    }
                });
            });
        });
    };
    DiscoverComponent.prototype.GetAllActivities = function () {
        var _this = this;
        this.isLoading = true;
        this.Params.from_date = this.dateSwap(this.bsRangeValue[0], -2);
        this.Params.to_date = this.dateSwap(this.bsRangeValue[1], 2);
        //this.Params.dates = [this.Start, this.Finish];
        if (this.searchElement.nativeElement.value == "" || !this.searchElement.nativeElement.value) {
            console.log("NO address");
            this.Params.address = null;
        }
        console.log(this.Params);
        this.service.GetAllActivities(this.Params)
            .subscribe(function (res) {
            var activ = res;
            var _loop_1 = function (item) {
                if (item.image_id) {
                    _this.service.GetImageById(item.image_id)
                        .subscribe(function (image) {
                        _this.Images['act' + item.id] = image.base64;
                    });
                }
                _this.service.GetUserById(item.user_id)
                    .subscribe(function (user) {
                    _this.Users[item.user_id] = user;
                    if (user.image_id) {
                        _this.service.GetImageById(user.image_id)
                            .subscribe(function (img) {
                            _this.Images['user' + item.user_id] = img.base64;
                        });
                    }
                });
            };
            for (var _i = 0, activ_1 = activ; _i < activ_1.length; _i++) {
                var item = activ_1[_i];
                _loop_1(item);
            }
            _this.ActivityRev(activ);
            _this.isLoading = false;
        }, function (err) {
            _this.SomeErr(err);
        });
    };
    DiscoverComponent.prototype.ActivityRev = function (act) {
        this.Activities = [];
        for (var _i = 0, act_1 = act; _i < act_1.length; _i++) {
            var item = act_1[_i];
            if (item.user_name && item.title) {
                var dupl = false;
                for (var _a = 0, _b = this.Activities; _a < _b.length; _a++) {
                    var itemA = _b[_a];
                    if (item.id == itemA.id)
                        dupl = true;
                }
                if (!dupl)
                    this.Activities.push(item);
            }
        }
    };
    DiscoverComponent.prototype.FromDateChanged = function ($event) {
        var date = new Date($event);
        if (date) {
            console.log($event);
            this.Params.from_date = $event;
        }
    };
    DiscoverComponent.prototype.SomeErr = function (err) {
    };
    DiscoverComponent.prototype.CategoryChanged = function ($event) {
        if ($event.parent) {
            this.Params.category = $event.parent ? $event.parent : $event.value;
            this.Params.sub_category = $event.parent ? $event.parent + ":" + $event.name : null;
        }
        else {
            this.Params.category = "";
            this.Params.sub_category = "";
        }
        //console.log(this.Params);
    };
    DiscoverComponent.prototype.getShortNames = function (name) {
        return this.service.GetShortName(name, this.lengthShortName);
    };
    DiscoverComponent.prototype.markerClick = function (item) {
        console.log("click", item.id);
        this.router.navigate(['/activity/', item.id]);
    };
    DiscoverComponent.prototype.nextWeek = function (date) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 21);
        return nextDay;
    };
    DiscoverComponent.prototype.prevWeek = function (date) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() - 10);
        return nextDay;
    };
    DiscoverComponent.prototype.getDates = function () {
        var date1 = new Date(this.Params.from_date);
        var string1 = (date1.getMonth() + 1) + "/" + (date1.getDate()) + "/" + (date1.getFullYear());
        var date2 = new Date(this.Params.to_date);
        var string2 = (date2.getMonth() + 1) + "/" + (date2.getDate()) + "/" + (date2.getFullYear());
        return string1 + " - " + string2;
    };
    DiscoverComponent.prototype.dateSwap = function (date, count) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() + count);
        return nextDay;
    };
    return DiscoverComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchg'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], DiscoverComponent.prototype, "searchElement", void 0);
DiscoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "discover",
        template: __webpack_require__("../../../../../src/app/Pages/discover/discover.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _h || Object])
], DiscoverComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=discover.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/editActivity/editActivity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row3\">\r\n    <main *ngIf=\"Me.id == actUserId\" id=\"container\" class=\"clear\">\r\n        <div class=\"row\">\r\n            <div class=\"loading\" *ngIf=\"isLoading\"></div>\r\n            <div class=\"col-md-12\" *ngIf=\"!isLoading\">\r\n                <div class=\"row middle\">\r\n                    <div class=\"h123  h1-first-index\">\r\n                        <h1 class=\"middle-text grey-span topmarg30\">Edit activity</h1>\r\n                    </div>\r\n                    <div *ngIf=\"isEditErr\" class=\"h123 h1-first\">\r\n                        <h2 class=\"error-msg\">{{ErrMsg}}</h2>\r\n                    </div>\r\n                </div>\r\n                <form (ngSubmit)=\"OnEditActivityButtonClick()\">\r\n                    <div class=\"col-sm-6 col-sm-push-2 marg-auto\">\r\n                    <div class=\"form-group\">\r\n                        <label>Title</label>\r\n                        <input type=\"text\" class=\"form-control input-lg\" maxlength=\"30\" name=\"title\" [ngModel]=\"Activity.title\" (ngModelChange)=\"Activity.title = $event\">\r\n                    </div><br>\r\n                    <div class=\"form-group\">\r\n                        <label>Activity background picture</label>\r\n                        <img *ngIf=\"Activity.image\" [src]=\"Activity.image\">\r\n                        <label class=\"file_upload\">\r\n                            <span class=\"button\">Browse image</span>\r\n                            <input type=\"file\" (change)=\"changeListener($event)\">\r\n                        </label>\r\n                        \r\n                    </div><br>\r\n                    <div class=\"form-group\">\r\n                        <label>Price</label>\r\n                        <input type=\"number\" required class=\"form-control input-lg\" name=\"price\" [min]=\"0\" [max]=\"100000\" [ngModel]=\"Activity.price\" (ngModelChange)=\"Activity.price = $event\">\r\n                    </div><br>\r\n                    <div class=\"form-group\">\r\n                        <label>Number of possible bookings per date</label>\r\n                        <input type=\"number\" required class=\"form-control input-lg\" name=\"booking\" [min]=\"0\" [max]=\"10000\" [ngModel]=\"Activity.num_of_bookings\" (ngModelChange)=\"Activity.num_of_bookings = $event\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Sport</label>\r\n                        <input ngui-auto-complete [min-chars]=\"2\" [max-num-list]=\"10\" [auto-select-first-item]=\"true\" [select-on-blur]=\"true\" [source]=\"Categories\"  [list-formatter]=\"autocompleListFormatter\" value-property-name=\"value\" display-property-name=\"name\" class=\"form-control input-lg\" name=\"category\" [ngModel]=\"MyCategory\" (valueChanged)=\"CategoryChanged($event)\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Address</label>\r\n                        <input type=\"text\" placeholder=\"Enter new address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control\" [value]=\"Activity?.address\" #searchg>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-md-12\">\r\n                            <agm-map [latitude]=\"Activity?.public_lat\" [longitude]=\"Activity?.public_lng\">\r\n                                <agm-marker [markerDraggable]=\"false\" [latitude]=\"Activity?.public_lat\" [longitude]=\"Activity?.public_lng\"></agm-marker>\r\n                            </agm-map>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Detailed address</label>\r\n                        <input type=\"text\" class=\"form-control input-lg\" name=\"address_det\" [ngModel]=\"Activity.detailed_address\" (ngModelChange)=\"Activity.detailed_address = $event\">\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <textarea name=\"description\" class=\"form-control input-lg\" [ngModel]=\"Activity.description\" (ngModelChange)=\"Activity.description = $event\"></textarea>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"form-group  form-group-makeinline\">\r\n                        <label>Dates</label>\r\n                        <div class=\"width-float\" *ngFor=\"let item of Activity.calendar; let i = index\">\r\n                                <input  type=\"text\" class=\"form-control input-lg width-float\" bsDatepicker [bsConfig]=\"bsConfig\" name=\"begin{{i}}\" [ngModel]=\"Activity.calendar[i]\" (ngModelChange)=\"Activity.calendar[i] = $event\" [minDate]=\"Today\">\r\n                                <button class=\"btn btn-pink btn-lg mrg\" type=\"button\" (click)=\"DeleteDate(i)\">Delete</button>\r\n                        </div>\r\n                        <button class=\"btn btn-success btn-lg mrg-top20 width-230\" type=\"button\" (click)=\"NewDate()\">Add one more date</button>\r\n                    </div>\r\n                    <br>\r\n                \r\n               \r\n\r\n                    <div class=\"row\"><div class=\"col-md-12 text-center\"><button class=\"btn btn-success btn-lg mrg-top20\" type=\"submit\">Save activity</button></div></div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Pages/editActivity/editActivity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_createActivity_model__ = __webpack_require__("../../../../../src/app/models/createActivity.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_category_model__ = __webpack_require__("../../../../../src/app/models/category.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditActivityComponent = (function () {
    function EditActivityComponent(mapsAPILoader, ngZone, router, activatedRoute, service, _sanitizer) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this._sanitizer = _sanitizer;
        this.Activity = new __WEBPACK_IMPORTED_MODULE_4__models_createActivity_model__["a" /* CreateActivityModel */]();
        this.Start = new Date();
        this.Finish = new Date();
        this.isLoading = true;
        this.actId = 0;
        this.actUserId = 0;
        this.Categories = [];
        this.MyCategory = new __WEBPACK_IMPORTED_MODULE_6__models_category_model__["a" /* CategoryModel */]();
        this.ErrMsg = '';
        this.isEditErr = false;
        this.LoadAddress = false;
        this.needReload = false;
        this.Me = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* UserModel */]();
        this.autocompleListFormatter = function (data) {
            var html = "<span>" + data.parent + " : <b>" + data.name + "</b></span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    EditActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', showWeekNumbers: false });
        this.isLoading = true;
        if (!localStorage.getItem('firstLoadActivityEdit')) {
            localStorage.setItem('firstLoadActivityEdit', 'true');
        }
        if (localStorage.getItem('firstLoadActivityEdit') == 'true') {
            localStorage.setItem('firstLoadActivityEdit', 'false');
            location.reload();
        }
        else if (localStorage.getItem('firstLoadActivityEdit') == 'false') {
            localStorage.removeItem('firstLoadActivityEdit');
        }
        this.activatedRoute.params.forEach(function (params) {
            console.log(location.search);
            /* if(location.search != '?reload=true' ) {
                 this.router.navigate(['/edit_act',params["id"]],{ queryParams: { reload: true } });
                 location.reload();
             }*/
            _this.actId = params["id"];
            //this.Activity.lat = null;
            //this.Activity.lng = null;
            _this.Categories = _this.service.GetCategoriesAsArrayCategory();
            _this.service.GetActivity(_this.actId)
                .subscribe(function (act) {
                _this.actUserId = act.user_id;
                _this.AfterGettingActivity(act);
                _this.CreateAutocompleteMap();
            });
            _this.service.GetMe()
                .subscribe(function (res) {
                _this.Me = res;
                console.log("me and activ = ", _this.Me, _this.actUserId);
            });
        });
    };
    EditActivityComponent.prototype.CreateAutocompleteMap = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(cities)"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        console.log(_this.Activity.address);
                        console.log(place.formatted_address);
                        _this.Activity.address = place.formatted_address;
                        _this.Activity.public_lat = place.geometry.location.lat();
                        _this.Activity.public_lng = place.geometry.location.lng();
                        // this.Activity.lat  = place.geometry.location.lat();
                        // this.Activity.lng = place.geometry.location.lng();
                        console.log('new value');
                        console.log(_this.Activity.address);
                        console.log(place.formatted_address);
                        /*this.Activity.public_lat  = autocomplete.getPlace().geometry.location.toJSON().lat;
                        this.Activity.public_lng = autocomplete.getPlace().geometry.location.toJSON().lng;
                        this.Activity.lat  = autocomplete.getPlace().geometry.location.toJSON().lat;
                        this.Activity.lng = autocomplete.getPlace().geometry.location.toJSON().lng;*/
                    }
                });
            });
        });
    };
    EditActivityComponent.prototype.AfterGettingActivity = function (act) {
        var _this = this;
        this.Activity = this.service.ActivityModelToCreateActivityModel(act);
        if (this.Activity.sub_category) {
            this.MyCategory = this.Categories.find(function (obj) { return obj.value == _this.Activity.sub_category; });
        }
        if (act.image_id) {
            this.service.GetImageById(act.image_id)
                .subscribe(function (res) {
                _this.Activity.image = res.base64;
            });
        }
        this.Start = this.Activity.calendar[0];
        this.Finish = this.Activity.calendar[1] ? this.Activity.calendar[1] : new Date();
        this.isLoading = false;
        console.log("this activity after", this.Activity);
    };
    EditActivityComponent.prototype.OnEditActivityButtonClick = function () {
        var _this = this;
        scrollTo(0, 0);
        this.isLoading = true;
        this.isEditErr = false;
        if (!this.CheckActivity()) {
            this.isEditErr = true;
            this.isLoading = false;
            return;
        }
        for (var i = 0; i < this.Activity.calendar.length; i++) {
            for (var j = i + 1; j < this.Activity.calendar.length; j++)
                if (this.isEqualDates(this.Activity.calendar[i], this.Activity.calendar[j])) {
                    this.Activity.calendar.splice(j, 1);
                    j = 0;
                }
        }
        console.log("calendar-", this.Activity.calendar);
        this.service.UpdateActivity(this.actId, this.Activity)
            .subscribe(function (res) {
            console.log("---> ", res, _this.Activity);
            _this.router.navigate(['/activity', res.id]);
            /*console.log(res);
            this.AfterGettingActivity(res);*/
        }, function (err) {
            _this.ErrMsg = err.body;
            _this.isEditErr = true;
            _this.isLoading = false;
        });
    };
    EditActivityComponent.prototype.isEqualDates = function (date1, date2) {
        console.log("dates", date1, date2);
        if (date1.getDate() == date2.getDate() && date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth())
            return true;
        else
            return false;
    };
    EditActivityComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    EditActivityComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        if (!file)
            return;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.Activity.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    EditActivityComponent.prototype.mapClicked = function ($event) {
        //this.Activity.lat = $event.coords.lat;
        // this.Activity.lng = $event.coords.lng;
    };
    EditActivityComponent.prototype.NewDate = function () {
        this.Activity.calendar.push(new Date());
    };
    EditActivityComponent.prototype.DeleteDate = function (index) {
        this.Activity.calendar.splice(index, 1);
    };
    EditActivityComponent.prototype.CategoryChanged = function ($event) {
        this.MyCategory = $event;
        console.log(this.MyCategory);
        this.Activity.category = this.MyCategory.parent;
        this.Activity.sub_category = $event.parent + ":" + $event.name;
        ;
        console.log(this.Activity);
    };
    EditActivityComponent.prototype.CheckActivity = function () {
        //this.ErrMsg = "Input correct data: "
        this.ErrMsg = "Fill in all fields";
        var len = this.ErrMsg.length + 1;
        this.ErrMsg += "!";
        if (!this.Activity.title) {
            //this.ErrMsg += "Title"
            return false;
        }
        if (!this.Activity.image) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Picture";*/
            return false;
        }
        if (!this.Activity.price || this.Activity.price < 0 || this.Activity.price > 100000) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Price";*/
            return false;
        }
        if (!this.Activity.num_of_bookings || this.Activity.num_of_bookings < 0 || this.Activity.num_of_bookings > 10000) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Number of possible bookings per day";*/
            return false;
        }
        if (!this.Activity.address) {
            /* if(len < this.ErrMsg.length)
                 this.ErrMsg += ",";
             this.ErrMsg += "Address";*/
            return false;
        }
        if (!this.Activity.detailed_address) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Detailed address";*/
            return false;
        }
        if (!this.Activity.description) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Description";*/
            return false;
        }
        if (!this.Activity.public_lat && !this.Activity.public_lng) {
            /*if(len < this.ErrMsg.length)
                this.ErrMsg += ",";
            this.ErrMsg += "Mark on the map";*/
            return false;
        }
        //this.ErrMsg += "!";
        return this.ErrMsg.length == len;
    };
    return EditActivityComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchg', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], EditActivityComponent.prototype, "searchElement", void 0);
EditActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'editActivity',
        template: __webpack_require__("../../../../../src/app/Pages/editActivity/editActivity.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object])
], EditActivityComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=editActivity.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid hero\">\r\n    <div class=\"hero-content\">\r\n        <h1>Envie de dépenser votre énergie</h1>\r\n        <form class=\"form-inline\" action=\"search.html\" method=\"get\">\r\n            <div class=\"form-group index-search\">\r\n                <input type=\"text\" placeholder=\"Search for Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control input-withicon input-lg\" #searchg>\r\n                <span class=\"material-icons input-icon\">location_on</span>\r\n            </div>\r\n            <div class=\"form-group index-search\">\r\n                <input ngui-auto-complete autocomplete=\"off\" [max-num-list]=\"5\" [auto-select-first-item]=\"true\" [select-on-blur]=\"true\" [source]=\"Categories\"  [list-formatter]=\"autocompleListFormatter\" value-property-name=\"value\" display-property-name=\"name\" class=\"form-control input-withicon input-lg\" name=\"category\" (valueChanged)=\"CategoryChanged($event)\" placeholder=\"Sport\">\r\n                \r\n                <span class=\"material-icons input-icon\">loyalty</span>\r\n            </div>\r\n            <div class=\"form-group form-group-makeinline\">\r\n                <input class=\"form-control input-withicon input-lg\" bsDaterangepicker [(bsValue)]=\"bsRangeValue\" [bsConfig]=\"bsConfig\" (ngModelChange)=\"bsRangeValue = $event\" placeholder=\"Dates\" readonly  style=\"background-color:white;\">           \r\n                <span class=\"material-icons input-icon\">today</span>\r\n            </div>\r\n            <div class=\"form-group form-group-makeinline\">\r\n                <button type=\"button\" class=\"btn btn-success input-withicon btn-lg\" (click)=\"openSearch()\">Rechercher</button>\r\n                <span class=\"material-icons input-icon white-span\">search</span>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container center-block container1440\">\r\n    <div class=\"row middle\">\r\n        <div id=\"slideshow\">\r\n                <div class=\"slide-wrapper\">\r\n                    <div class=\"slide\"><img class=\"slide-logo\" alt=\"logo\" [src]=\"'./app/images/man.jpg'\"></div>\r\n                    <div class=\"slide\"><h1 class=\"slide-number\">2</h1></div>\r\n                    <div class=\"slide\"><h1 class=\"slide-number\">3</h1></div>\r\n                    <div class=\"slide\"><h1 class=\"slide-number\">4</h1></div>\r\n                    <div class=\"slide\"><h1 class=\"slide-number\">5</h1></div>\r\n                </div>\r\n        </div>\r\n        <div class=\"h123 h1-first-index\">\r\n                <h1>Le Plus Populaire</h1>\r\n            </div>\r\n        <div class=\"h123\">   \r\n            <h2 class=\"middle-text-2\">Profitez de la vie avec les autres autour de vous</h2>\r\n        </div>\r\n    </div>\r\n    <!--\r\n    <div *ngIf=\"!isLoading && Activities.length > 0\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"Activities.length >0 \" class=\"card col-md-8 bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+Activities[0].id] + ')'}\">\r\n                <h3 class=\"cardname word-wrap\">{{Activities[0].title.slice(0,150)}}</h3>\r\n                <h3 class=\"carddate\">{{Activities[0].calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                <div class=\"avatar\">\r\n                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Activities[0]?.user_image_id?Activities[0]?.user_image_id:'./app/images/man.jpg'\">\r\n                    <span class=\"profile-text\">{{Activities[0]?.user_name?getShortNames(Activities[0].user_name):'Author'}}</span>\r\n                </div>\r\n                <span class=\"cardshadow\"></span>\r\n                <a [routerLink]=\"['/activity',Activities[0].id]\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div *ngIf=\"Activities.length > 1\" class=\"card col-md-4 bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+Activities[1].id] + ')'}\">\r\n                <h3 class=\"cardname word-wrap\">{{Activities[1].title.slice(0,150)}}</h3>\r\n                <h3 class=\"carddate\">{{Activities[1].calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                <div class=\"avatar\">\r\n                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+Activities[1].user_id]?Images['user'+Activities[1].user_id]:'./app/images/man.jpg'\">\r\n                    <span class=\"profile-text\">{{Users[Activities[1].user_id]?.name?getShortNames(Users[Activities[1].user_id]?.name):'Author'}}</span>\r\n                </div>\r\n                <span class=\"cardshadow\"></span>\r\n                <a [routerLink]=\"['/activity',Activities[1].id]\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n        </div>   \r\n        \r\n        <div class=\"row\">\r\n            <div *ngIf=\"Activities.length >2 \" class=\"card col-md-4 bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+Activities[2].id] + ')'}\">\r\n                <h3 class=\"cardname word-wrap\">{{Activities[2].title.slice(0,150)}}</h3>\r\n                <h3 class=\"carddate\">{{Activities[2].calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                <div class=\"avatar\">\r\n                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+Activities[2].user_id]?Images['user'+Activities[2].user_id]:'./app/images/man.jpg'\">\r\n                    <span class=\"profile-text\">{{Users[Activities[2].user_id]?.name?getShortNames(Users[Activities[2].user_id]?.name):'Author'}}</span>\r\n                </div>\r\n                <span class=\"cardshadow\"></span>\r\n                <a [routerLink]=\"['/activity',Activities[2].id]\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div *ngIf=\"Activities.length > 3\" class=\"card col-md-8 bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+Activities[3].id] + ')'}\">\r\n                <h3 class=\"cardname word-wrap\">{{Activities[3].title.slice(0,150)}}</h3>\r\n                <h3 class=\"carddate\">{{Activities[3].calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                <div class=\"avatar\">\r\n                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+Activities[3].user_id]?Images['user'+Activities[3].user_id]:'./app/images/man.jpg'\">\r\n                    <span class=\"profile-text\">{{Users[Activities[3].user_id]?.name?getShortNames(Users[Activities[3].user_id]?.name):'Author'}}</span>\r\n                </div>\r\n                <span class=\"cardshadow\"></span>\r\n                <a [routerLink]=\"['/activity',Activities[3].id]\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n-->\r\n\r\n<div class=\"cards\" *ngIf=\"!isLoading && Activities.length > 0\">\r\n    <div class=\"container-fluid\">\r\n        <div *ngFor=\"let item of Activities; let i = index\"  class=\"col-xs-12 col-sm-4 pull-left\" [ngClass]=\"{'col-sm-8':(i%2==0&&i%4==0)||(i%2==1&&i%4==1),'col-sm-12':i==Activities.length-1&&Activities.length%2==1}\">\r\n            <div class=\"card bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+item.id] + ')'}\">\r\n                <h3 class=\"cardname word-wrap\">{{item.title.slice(0,100)}}</h3>\r\n                <h3 class=\"carddate\">{{item.calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                <div class=\"avatar\">\r\n                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+item.user_id]?Images['user'+item.user_id]:'./app/images/man.jpg'\">\r\n                    <span class=\"profile-text\">{{Users[item.user_id]?.name?getShortNames(Users[item.user_id]?.name):'Author'}}</span>\r\n                </div>\r\n                <span class=\"cardshadow\"></span>\r\n                <a *ngIf=\"!showDP\" [routerLink]=\"['/activity',item.id]\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row middle3\">\r\n    <div class=\"col-md-12\">\r\n        <a routerLink=\"/discover\" class=\"btn btn-default btn-pink btn-withicon\">Découvrir les activités <span class=\"material-icons\">favorite</span></a>    \r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid container1440 center-block\">\r\n        <div class=\"row middle\">\r\n            <div class=\"h123 h1-first-index\">\r\n                <h1 class=\"middle-text grey-span\">Sports Sélectionnés</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"row middle\">\r\n            <div class=\"h123\">   \r\n                <h2 class=\"middle-text-2\">Dans un corps sain, esprit sai</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row pics\">\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <img class=\"logo img-responsive center-block\" alt=\"logo\" src=\"./app/images/mountain.png\">\r\n                <span class=\"logo-text\">Mountains</span>\r\n                <a routerLink=\"/discover\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <img class=\"logo img-responsive center-block\" alt=\"logo\" src=\"./app/images/golf.png\">\r\n                <span class=\"logo-text\">Golf</span>\r\n                <a routerLink=\"/discover\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <img class=\"logo img-responsive center-block\" alt=\"logo\" src=\"./app/images/bicycle.png\">\r\n                <span class=\"logo-text\">Biking</span>\r\n                <a routerLink=\"/discover\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-4  col-xs-6\">\r\n                <img class=\"logo img-responsive center-block\" alt=\"logo\" src=\"./app/images/parachute.png\">\r\n                <span class=\"logo-text\">Skydiving</span>\r\n                <a routerLink=\"/discover\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <img class=\"logo img-responsive center-block\" alt=\"logo\" src=\"./app/images/golf.png\">\r\n                <span class=\"logo-text\">Golf</span>\r\n                <a routerLink=\"/discover\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <img class=\"logo img-responsive center-block\" alt=\"logo\" src=\"./app/images/mountain.png\">\r\n                <span class=\"logo-text\">Mountains</span>\r\n                <a routerLink=\"/discover\"><span class=\"spanlink\"></span></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row middle5\">\r\n            <div class=\"col-md-12\">\r\n                <a routerLink=\"/discover\" class=\"btn btn-lg btn-green btn-withicon\">Découvrir les sports <span class=\"material-icons\">favorite</span></a>\r\n        \r\n            </div>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "../../../../../src/app/Pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IndexComponent = (function () {
    function IndexComponent(router, service, params, _sanitizer, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.params = params;
        this._sanitizer = _sanitizer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.isLoading = true;
        this.Activities = [];
        this.Users = [];
        this.Images = [];
        this.lengthShortName = 6;
        this.Params = {
            limit: 4,
            title: '',
            address: '',
            from_date: this.prevWeek(new Date())
        };
        this.ParamsSearch = {
            address: '',
            category: '',
            sub_category: '',
            from_date: '',
            to_date: ''
        };
        this.Categories = [];
        this._bsRangeValue = [this.prevWeek(new Date()), this.nextWeek(new Date())];
        this.observableSource = function (keyword) {
            if (keyword) {
                return _this.service.GetAddr(keyword);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of([]);
            }
        };
        this.autocompleListFormatter = function (data) {
            var html = "<span><b>" + data.name + "</b></span>";
            if (data.parent)
                html = "<span>" + data.parent + " : <b>" + data.name + "</b></span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    Object.defineProperty(IndexComponent.prototype, "bsRangeValue", {
        get: function () {
            return this._bsRangeValue;
        },
        set: function (v) {
            this._bsRangeValue = v;
        },
        enumerable: true,
        configurable: true
    });
    IndexComponent.prototype.ngOnInit = function () {
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', showWeekNumbers: false });
        this.Categories = this.service.GetAllCategoriesAsArrayCategory();
        this.CreateAutocompleteMap();
        this.GetFourActivities();
    };
    IndexComponent.prototype.CreateAutocompleteMap = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(cities)"] });
            console.log(autocomplete);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        _this.ParamsSearch.address = autocomplete.getPlace().formatted_address;
                    }
                });
            });
        });
    };
    IndexComponent.prototype.GetFourActivities = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.Params);
        this.service.GetAllActivities(this.Params)
            .subscribe(function (res) {
            console.log(res);
            _this.Activities = res;
            var _loop_1 = function (item) {
                //this.getShortNames(item.user_name);
                if (item.image_id) {
                    _this.service.GetImageById(item.image_id)
                        .subscribe(function (image) {
                        _this.Images['act' + item.id] = image.base64;
                    });
                }
                _this.service.GetUserById(item.user_id)
                    .subscribe(function (user) {
                    _this.Users[item.user_id] = user;
                    if (user.image_id) {
                        _this.service.GetImageById(user.image_id)
                            .subscribe(function (img) {
                            _this.Images['user' + item.user_id] = img.base64;
                        });
                    }
                });
            };
            //this.getShortNames();
            for (var _i = 0, _a = _this.Activities; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
            _this.isLoading = false;
        });
    };
    IndexComponent.prototype.getShortNames = function (name) {
        return this.service.GetShortName(name, this.lengthShortName);
    };
    IndexComponent.prototype.openSearch = function () {
        console.log("search");
        this.ParamsSearch.from_date = this.bsRangeValue[0];
        this.ParamsSearch.to_date = this.bsRangeValue[1];
        this.router.navigate(['/discover', this.ParamsSearch]);
    };
    IndexComponent.prototype.AddressChanged = function ($event) {
        if ($event.formatted_address) {
            this.ParamsSearch.address = $event.formatted_address;
        }
        else
            $event = "";
    };
    IndexComponent.prototype.CategoryChanged = function ($event) {
        this.ParamsSearch.category = $event.parent ? $event.parent : $event.value;
        this.ParamsSearch.sub_category = $event.parent ? $event.parent + ":" + $event.name : '';
        console.log(this.Params);
    };
    IndexComponent.prototype.nextWeek = function (date) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 21);
        return nextDay;
    };
    IndexComponent.prototype.prevWeek = function (date) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() - 10);
        return nextDay;
    };
    return IndexComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchg'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IndexComponent.prototype, "searchElement", void 0);
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "index",
        template: __webpack_require__("../../../../../src/app/Pages/index/index.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
], IndexComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"wrapper row2\">\r\n  \r\n</div>\r\n<!-- ################################################################################################ -->\r\n<!-- ################################################################################################ -->\r\n<!-- ################################################################################################ -->\r\n<div class=\"wrapper row3\">\r\n  <main id=\"container\" class=\"clear\">\r\n    <!-- container body -->\r\n    <div class=\"loading\" *ngIf=\"isLoading\"></div>\r\n    <div class=\"login_form\" *ngIf=\"!isLoading\">\r\n      <h1>Login</h1>\r\n      \r\n      <div *ngIf=\"isLoginErr\">\r\n        <h2 class=\"error-msg\">Incorrect email or password!</h2>\r\n      </div>\r\n      <form (ngSubmit)=\"OnLoginButtonClick()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"login\">Email</label>\r\n          <input type=\"text\" class=\"form-control input-withicon input-lg\" name=\"login\" [ngModel]=\"loginData.login\" (ngModelChange)=\"loginData.login=$event\">\r\n          <span class=\"material-icons input-icon\">email</span>\r\n        </div>\r\n        <br>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control input-withicon input-lg\" name=\"password\" [ngModel]=\"loginData.password\" (ngModelChange)=\"loginData.password=$event\">\r\n          <span class=\"material-icons input-icon\">security</span>\r\n        </div>\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-success btn-lg\">Login</button>\r\n      </form>\r\n      \r\n      <div class = \"socials\">\r\n      <h1>Sign In With</h1>\r\n      <button class=\"button-social\" style=\"margin-right: 10px\" (click)=\"signIn('google')\">Google</button>\r\n      <button class=\"button-social\" style=\"margin-left: 10px\" (click)=\"signIn('facebook')\">Facebook</button>      \r\n      <br>\r\n\r\n      <button *ngIf=\"signStatus()=='google'\" class=\"button-logout\" (click)=\"logout('google')\">Google Account Logout</button>\r\n      <button *ngIf=\"signStatus()=='facebook'\" class=\"button-logout\" (click)=\"logout('facebook')\">Facebook Account Logout</button>\r\n      <br> <br>\r\n    </div>\r\n      <!--\r\n      <div *ngIf=\"user\">\r\n        <table>\r\n          <tr>\r\n            <td>Name:</td>\r\n            <td>{{user.name}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Email</td>\r\n            <td>{{user.email}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>UID</td>\r\n            <td>{{user.uid}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Provider</td>\r\n            <td>{{user.provider}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Image</td>\r\n            <td>{{user.image}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    -->\r\n\r\n\r\n    </div>\r\n\r\n    <!-- ########################################################################################## -->\r\n    <!-- / container body -->\r\n    <div class=\"clear\"></div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, mainService, _auth) {
        this.router = router;
        this.mainService = mainService;
        this._auth = _auth;
        this.loginData = {
            login: '',
            password: ''
        };
        this.isLoginErr = false;
        this.isLoading = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.signStatus();
    };
    LoginComponent.prototype.OnLoginButtonClick = function () {
        var _this = this;
        this.isLoading = true;
        this.isLoginErr = false;
        this.mainService.UserLogin(this.loginData.login, this.loginData.password)
            .subscribe(function (data) {
            console.log(data);
            _this.mainService.BaseInitAfterLogin(data);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.isLoginErr = true;
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.signStatus = function () {
        var status = localStorage.getItem("_login_provider");
        console.log("log status = ", status, this.user);
        return status;
    };
    LoginComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (_this.signStatus() === "google")
                _this.mainService.UserLoginGoogle(_this.user.token)
                    .subscribe(function (data) {
                    console.log("g_token", data);
                    _this.mainService.BaseInitAfterLogin(data);
                    if (_this.mainService.getToken())
                        _this.router.navigate(['/']);
                    location.reload();
                }, function (err) {
                    _this.isLoginErr = true;
                    _this.isLoading = false;
                });
            else if (_this.signStatus() === "facebook") {
                console.log("fb get token");
                _this.mainService.UserLoginFacebook(_this.user.token)
                    .subscribe(function (data) {
                    console.log("f_token", data);
                    _this.mainService.BaseInitAfterLogin(data);
                    if (_this.mainService.getToken())
                        _this.router.navigate(['/']);
                    location.reload();
                }, function (err) {
                    _this.isLoginErr = true;
                    _this.isLoading = false;
                });
            }
        });
    };
    LoginComponent.prototype.logout = function (provider) {
        var _this = this;
        this.sub = this._auth.logout().subscribe(function (data) {
            console.log(data);
            _this.user = null;
            _this.signStatus();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "login",
        template: __webpack_require__("../../../../../src/app/Pages/login/login.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["b" /* AuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row2\">\r\n      \r\n    </div>\r\n    <!-- ################################################################################################ -->\r\n    <!-- ################################################################################################ -->\r\n    <!-- ################################################################################################ -->\r\n<div class=\"wrapper row3\">\r\n    <main id=\"container\" class=\"clear\">\r\n        <h1> 404 ! </h1>\r\n        <h2>This page does not exist!</h2>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Pages/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "notfound",
        template: __webpack_require__("../../../../../src/app/Pages/notfound/notfound.component.html")
    })
], NotFoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/page.guards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAccessGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageAccessGuard = (function () {
    function PageAccessGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    PageAccessGuard.prototype.canActivate = function (route, state) {
        console.log(route);
        console.log(state);
        /*if(!this.service.httpService.headers.has('Authorization')){
            this.router.navigate(["401"]);
            return false;
        }*/
        console.log(route.routeConfig.path);
        if (route.routeConfig.path == "login" || route.routeConfig.path == "registration")
            return this.LoginPageAccess();
        return true;
    };
    PageAccessGuard.prototype.LoginPageAccess = function () {
        var result = this.service.IsLogedIn();
        if (result) {
            this.service.GetMe()
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        //this.router.navigate(['/']);
        return true;
    };
    return PageAccessGuard;
}());
PageAccessGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PageAccessGuard);

var _a, _b;
//# sourceMappingURL=page.guards.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_guards__ = __webpack_require__("../../../../../src/app/Pages/page.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discover_discover_component__ = __webpack_require__("../../../../../src/app/Pages/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_activity_component__ = __webpack_require__("../../../../../src/app/Pages/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_index_component__ = __webpack_require__("../../../../../src/app/Pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("../../../../../src/app/Pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/Pages/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/Pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__createActivity_createActivity_component__ = __webpack_require__("../../../../../src/app/Pages/createActivity/createActivity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/Pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__unauthorized_unauthorized_component__ = __webpack_require__("../../../../../src/app/Pages/unauthorized/unauthorized.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/Pages/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__editActivity_editActivity_component__ = __webpack_require__("../../../../../src/app/Pages/editActivity/editActivity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_modal_component__ = __webpack_require__("../../../../../src/app/components/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__ngui_auto_complete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDZ1KosRinYSwWsttFqM68orCse2Lx-vA4'
            }),
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20__ngui_auto_complete__["NguiAutoCompleteModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */], __WEBPACK_IMPORTED_MODULE_15__unauthorized_unauthorized_component__["a" /* UnauthorizedComponent */],
            __WEBPACK_IMPORTED_MODULE_16__notfound_notfound_component__["a" /* NotFoundComponent */], __WEBPACK_IMPORTED_MODULE_7__discover_discover_component__["a" /* DiscoverComponent */], __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__activity_activity_component__["a" /* ActivityComponent */], __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__createActivity_createActivity_component__["a" /* CreateActivityComponent */], __WEBPACK_IMPORTED_MODULE_17__editActivity_editActivity_component__["a" /* EditActivityComponent */], __WEBPACK_IMPORTED_MODULE_18__components_modal_component__["a" /* ModalComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */], __WEBPACK_IMPORTED_MODULE_15__unauthorized_unauthorized_component__["a" /* UnauthorizedComponent */],
            __WEBPACK_IMPORTED_MODULE_16__notfound_notfound_component__["a" /* NotFoundComponent */], __WEBPACK_IMPORTED_MODULE_7__discover_discover_component__["a" /* DiscoverComponent */], __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__activity_activity_component__["a" /* ActivityComponent */], __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__createActivity_createActivity_component__["a" /* CreateActivityComponent */], __WEBPACK_IMPORTED_MODULE_17__editActivity_editActivity_component__["a" /* EditActivityComponent */], __WEBPACK_IMPORTED_MODULE_18__components_modal_component__["a" /* ModalComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__page_guards__["a" /* PageAccessGuard */]]
    })
], PageModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/pages.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_guards__ = __webpack_require__("../../../../../src/app/Pages/page.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_index_component__ = __webpack_require__("../../../../../src/app/Pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unauthorized_unauthorized_component__ = __webpack_require__("../../../../../src/app/Pages/unauthorized/unauthorized.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/Pages/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discover_discover_component__ = __webpack_require__("../../../../../src/app/Pages/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_activity_component__ = __webpack_require__("../../../../../src/app/Pages/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("../../../../../src/app/Pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("../../../../../src/app/Pages/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/Pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/Pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__createActivity_createActivity_component__ = __webpack_require__("../../../../../src/app/Pages/createActivity/createActivity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editActivity_editActivity_component__ = __webpack_require__("../../../../../src/app/Pages/editActivity/editActivity.component.ts");












var routs = [
    { path: "", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_1__index_index_component__["a" /* IndexComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "discover", component: __WEBPACK_IMPORTED_MODULE_4__discover_discover_component__["a" /* DiscoverComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "activity/:id", component: __WEBPACK_IMPORTED_MODULE_5__activity_activity_component__["a" /* ActivityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "search", component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "users/:id", component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "registration", component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "create_activity", component: __WEBPACK_IMPORTED_MODULE_10__createActivity_createActivity_component__["a" /* CreateActivityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "401", component: __WEBPACK_IMPORTED_MODULE_2__unauthorized_unauthorized_component__["a" /* UnauthorizedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "404", component: __WEBPACK_IMPORTED_MODULE_3__notfound_notfound_component__["a" /* NotFoundComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "edit_act/:id", component: __WEBPACK_IMPORTED_MODULE_11__editActivity_editActivity_component__["a" /* EditActivityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_3__notfound_notfound_component__["a" /* NotFoundComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__page_guards__["a" /* PageAccessGuard */]] }
];
//# sourceMappingURL=pages.route.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper row3\">\r\n  <main id=\"container\" class=\"clear\">\r\n    <!-- container body -->\r\n    <div *ngIf=\"isRegOk\">\r\n      <h2 class=\"ok-msg\"> Your account was created! You will redirect to your profile soon! </h2>\r\n    </div>\r\n    <div *ngIf=\"isRegErr\">\r\n      <h2 class=\"error-msg\">{{ErrMsg}}</h2>\r\n    </div>\r\n    <div class=\"row loading\" *ngIf=\"isLoading\"></div>\r\n    <div class=\"row\" *ngIf=\"!isLoading\">\r\n      <div class=\"col-md-8 marg-auto\">\r\n       <!-- <h2 class=\"text-center\">Je suis {{(RegisterUser.user_type == 'professional')?'prestataire':'client'}}</h2><br>-->\r\n       <br>\r\n        <form (ngSubmit)=\"Register()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4 col-sm-push-2\">\r\n            <div class=\"form-group\">\r\n              <label>Email</label>\r\n              <input type=\"text\" class=\"form-control input-lg\" name=\"user_email\" required [ngModel]=\"RegisterUser.email\" (ngModelChange)=\"RegisterUser.email = $event\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Password</label>\r\n              <input type=\"password\" class=\"form-control input-lg\" name=\"password\" required  minlength=\"6\" [ngModel]=\"RegisterUser.password\" (ngModelChange)=\"RegisterUser.password = $event\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Name</label>\r\n              <input type=\"text\" class=\"form-control input-lg\" name=\"user_name\" [ngModel]=\"RegisterUser.name\" (ngModelChange)=\"RegisterUser.name = $event\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Logo image</label>\r\n              <img *ngIf=\"RegisterUser.image\" [src]='RegisterUser.image'>\r\n              <input type=\"file\" accept=\"image/*\" name=\"logo_img\" (change)=\"changeListener('user_logo',$event)\">\r\n            </div>\r\n          <!--\r\n            <div class=\"form-group\">\r\n                <label>Logo image</label>\r\n                <img *ngIf=\"RegisterUser.image\" [src]=\"RegisterUser.image\">\r\n                <label class=\"file_upload\">\r\n                    <span class=\"button\">Browse image</span>\r\n                    <input type=\"file\" accept=\"image/*\" name=\"logo_img\" (change)=\"changeListener('user_logo',$event)\">\r\n                </label>\r\n                \r\n            </div><br>\r\n          -->\r\n          </div>\r\n          <div class=\"col-sm-8 col-sm-push-2\">\r\n           \r\n           <!-- <div class=\"form-group\">\r\n              <label>Birthday</label>\r\n              <input type=\"text\" class=\"form-control input-lg\" name=\"p_birthday\" bsDatepicker [bsConfig]=\"bsConfig\" [ngModel]=\"RegisterUser.date_of_birth\" (ngModelChange)=\"RegisterUser.date_of_birth = $event\">\r\n            </div> -->\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Gender</label>\r\n                  <select name=\"p_gender\" class=\"form-control\" [ngModel]=\"RegisterUser.gender\" (ngModelChange)=\"RegisterUser.gender = $event\">\r\n                    <option value=\"male\">Male</option>\r\n                    <option value=\"female\">Female</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>User type</label>\r\n                  <select name=\"user_type\" class=\"form-control\" [ngModel]=\"RegisterUser.user_type\" (ngModelChange)=\"RegisterUser.user_type = $event\">\r\n                    <option value=\"client\">Client</option>\r\n                    <option value=\"professional\">Professional</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"RegisterUser.user_type == 'professional'\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Address</label>\r\n                  <input type=\"text\" ngui-auto-complete [source]=\"observableSource.bind(this)\" [auto-select-first-item]=\"true\" [select-on-blur]=\"true\" list-formatter=\"formatted_address\" (customSelected)=\"AddressSelected($event)\" class=\"form-control input-lg\" name=\"address\" [ngModel]=\"RegisterUser.address\" (valueChanged)=\"AddressChanged($event)\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Phone</label>\r\n                  <input type=\"text\" class=\"form-control input-lg\" name=\"p_phone\" [ngModel]=\"RegisterUser.phone\" (ngModelChange)=\"RegisterUser.phone = $event\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Photocopy of diploma</label>\r\n                  <img [src]='RegisterUser.diploma'>\r\n                  <input type=\"file\"  accept=\"image/*\" name=\"diploma\" (change)=\"changeListener('diploma',$event)\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label>Activity description</label>\r\n                  <textarea class=\"form-control\" style=\"height: 135px!important;\" name=\"p_description\" [ngModel]=\"RegisterUser.description\" (ngModelChange)=\"RegisterUser.description = $event\" ></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Background image</label>\r\n                  <img [src]='RegisterUser.background'>\r\n                  <input type=\"file\"  accept=\"image/*\" name=\"background\" (change)=\"changeListener('background',$event)\">\r\n                </div>\r\n\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\"><div class=\"col-md-12 text-center\"><button class=\"btn btn-success btn-lg\" type=\"submit\">Register</button></div></div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- ########################################################################################## -->\r\n    <!-- / container body -->\r\n    <div class=\"clear\"></div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_createUser_model__ = __webpack_require__("../../../../../src/app/models/createUser.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(router, mainService) {
        var _this = this;
        this.router = router;
        this.mainService = mainService;
        this.isLoading = true;
        this.RegisterUser = new __WEBPACK_IMPORTED_MODULE_4__models_createUser_model__["a" /* CreateUserModel */]();
        this.isRegOk = false;
        this.isRegErr = false;
        this.ErrMsg = '';
        this.observableSource = function (keyword) {
            if (keyword) {
                return _this.mainService.GetAddr(keyword);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of([]);
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', showWeekNumbers: false });
        this.isLoading = false;
    };
    RegisterComponent.prototype.Register = function () {
        var _this = this;
        this.isRegOk = false;
        this.isRegErr = false;
        this.isLoading = true;
        scrollTo(0, 0);
        var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
        if (!this.RegisterUser.email || !(regexp.test(this.RegisterUser.email)) || !this.RegisterUser.password || this.RegisterUser.password.length < 6) {
            this.ErrMsg = "Input correct data!";
            this.isRegErr = true;
            this.isLoading = false;
            ;
            return;
        }
        if (this.RegisterUser.user_type == 'client') {
            this.RegisterUser.address = null;
            this.RegisterUser.phone = null;
            this.RegisterUser.description = null;
            this.RegisterUser.diploma = null;
            this.RegisterUser.background = null;
        }
        this.mainService.CreateUser(this.RegisterUser)
            .subscribe(function (result) {
            console.log(result);
            _this.isRegOk = true;
            _this.mainService.UserLogin(_this.RegisterUser.email, _this.RegisterUser.password)
                .subscribe(function (token) {
                _this.mainService.BaseInitAfterLogin(token);
                _this.router.navigate(['/users', 'me']);
            });
        }, function (err) {
            console.log(err);
            _this.ErrMsg = err._body;
            if (err._body == "{\"email\":[\"has already been taken\"]}")
                _this.ErrMsg = "This E-mail is alredy used!";
            _this.isRegErr = true;
            _this.isLoading = false;
        });
    };
    RegisterComponent.prototype.changeListener = function (field, $event) {
        this.readThis(field, $event.target);
    };
    RegisterComponent.prototype.readThis = function (field, inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        if (!file)
            return;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            if (field == 'user_logo') {
                _this.RegisterUser.image = myReader.result;
            }
            else if (field == 'diploma') {
                _this.RegisterUser.diploma = myReader.result;
            }
            else {
                _this.RegisterUser.background = myReader.result;
            }
        };
        myReader.readAsDataURL(file);
    };
    RegisterComponent.prototype.AddressChanged = function ($event) {
        if ($event.formatted_address) {
            this.RegisterUser.address = $event.formatted_address;
        }
        else
            $event = "";
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "ads",
        template: __webpack_require__("../../../../../src/app/Pages/register/register.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid center-block container1440\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-xs-12 col-md-7 left-side\" id=\"filters-cards\">\r\n            <div class=\"controls controls-inline\">\r\n\r\n                <form (ngSubmit)=\"GetAllActivities()\">\r\n                    <div class=\"form-group\">\r\n                            <input type=\"text\" name=\"desc_title\" class=\"form-control input-withicon input-lg\"  [ngModel]=\"Params.title\" (ngModelChange)=\"Params.title = $event\" placeholder=\"Title\">\r\n                            <span class=\"material-icons input-icon\">title</span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <input type=\"text\" name=\"desc_descr\" class=\"form-control input-withicon input-lg\" [ngModel]=\"Params.description\" (ngModelChange)=\"Params.description = $event\" placeholder=\"Description\">\r\n                            <span class=\"material-icons input-icon\">description</span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\"id=\"address\" class=\"form-control input-withicon input-lg\" placeholder=\"Search for Location\"  name=\"addr\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #searchg>\r\n                        <span class=\"material-icons input-icon\">room</span>\r\n                    </div>\r\n                   \r\n                    <div class=\"form-group\">\r\n                            <input ngui-auto-complete autocomplete=\"off\" [max-num-list]=\"7\" [auto-select-first-item]=\"true\" [select-on-blur]=\"true\" [source]=\"Categories\" [list-formatter]=\"autocompleListFormatter\" value-property-name=\"value\" display-property-name=\"value\" class=\"form-control input-withicon input-lg\" name=\"category\" (valueChanged)=\"CategoryChanged($event)\" placeholder=\"Sport\">\r\n                            <span  class=\"material-icons input-icon\">loyalty</span>\r\n                        </div>\r\n                \r\n                    <div class=\"form-group\" style=\"width:100%;\" *ngIf=\"isAdvanced\">\r\n                        <input class=\"form-control input-withicon input-lg\" readonly (onShown)=\"showDP = !showDP\" (onHidden)=\"showDP = !showDP\" bsDaterangepicker  [(bsValue)]=\"bsRangeValue\" [bsConfig]=\"bsConfig\" (ngModelChange)=\"bsRangeValue = $event\" [value]=\" getDates()\" style=\"background-color:white;\">           \r\n                            <span  class=\"material-icons input-icon\">today</span>        \r\n                    </div>\r\n\r\n                    <br>\r\n                    <div class=\"form-group\" *ngIf=\"isAdvanced\">\r\n                        \r\n                        <span class=\"distance\">Distance: {{Params.radius}} km </span>\r\n                        <br>\r\n                        <input type=\"range\" class=\"cntr\" id=\"range\" #rangepanel min=\"5\" value=\"15\" max=\"1000\" numeric step=\"5\" (input)=\"Params.radius = rangepanel.value\" />\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group form-group-makeinline\">\r\n                        <button type=\"submit\" class=\"btn btn-success input-withicon btn-lg\">Appliquer</button>\r\n                        <span class=\"material-icons input-icon\" style=\"color: #fff\">search</span>\r\n                       <a class=\"read-more\" data-text=\"hide advanced search\" data-textdefault=\"show advanced search\" (click)=\"isAdvanced=!isAdvanced\">{{isAdvanced?\"hide\":\"show\"}} advanced search</a>\r\n                    </div>\r\n                </form> \r\n                \r\n            </div>\r\n            <p *ngIf=\"Activities.length <= 0\">No activities!</p>\r\n            <div class=\"col-sm-12\" id=\"card_div\">\r\n                <div class=\"cards\" *ngIf=\"!isLoading && Activities.length > 0\">\r\n                        <h3 class=\"find_activ\">Results: {{Activities.length}}</h3>\r\n                    <div class=\"container-fluid\">\r\n                        <div *ngFor=\"let item of Activities\"  class=\"col-xs-12 col-sm-6 pull-left\">\r\n                            <div class=\"card bg_cover\" [ngStyle]=\"{'background':'url(' + Images['act'+item.id] + ')'}\">\r\n                                <h3 class=\"cardname word-wrap\">{{item.title.slice(0,100)}}</h3>\r\n                                <h3 class=\"carddate\">{{item.calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"profile-logo\" alt=\"logo\" [src]=\"Images['user'+item.user_id]?Images['user'+item.user_id]:'./app/images/man.jpg'\">\r\n                                    <span class=\"profile-text\">{{item.user_name?getShortNames(item.user_name):'Author'}}</span>\r\n                                </div>\r\n                                <span class=\"cardshadow\"></span>\r\n                                <a *ngIf=\"!showDP\" [routerLink]=\"['/activity',item.id]\"><span class=\"spanlink\"></span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-5 map\" [class.map-fixed]=\"isMapFixed\" [class.map-but]=\"mapBut\">\r\n            <agm-map [style.height]=\"hSize + 'px'\" [latitude]=\"lat\" [longitude]=\"lng\" [style.width]=\"wSize + 'px'\" [zoom]=\"3\">            \r\n                    \r\n                        <agm-marker *ngFor=\"let item of Activities; let i = index\" [markerDraggable]=\"false\" [title]=\"item.title\" (markerClick)=\"markerClick(item)\" [latitude]=\"item.public_lat+change_coords(i)\" [longitude]=\"item.public_lng+change_coords(i+1)\"></agm-marker> \r\n                     \r\n                    <agm-circle *ngFor=\"let item of Activities; let i = index\" [latitude]=\"item.public_lat\" [longitude]=\"item.public_lng\" \r\n                    [radius]=\"15000\"\r\n                    [fillColor]=\"'red'\"\r\n                    [circleDraggable]=\"false\"\r\n                    [editable]=\"false\"\r\n                    [title]=\"item.title\" (circleClick)=\"markerClick(item)\"\r\n                    >\r\n                </agm-circle>\r\n            </agm-map>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- jQuery CDN -->\r\n<script src=\"./production/js/jquery.min.js\"></script>\r\n<!-- Bootstrap Js CDN -->\r\n<script src=\"./production/js/bootstrap.min.js\"></script>\r\n<script>\r\n    $(\"#map\").height($(\"#filters-cards\").height()+64);\r\n    $(\".read-more\").click(function(e){\r\n        var $this = $(this),\r\n            $text = $this.data(\"text\"),\r\n            $default = $this.data(\"textdefault\");\r\n        e.preventDefault();\r\n        $(\".hidden-custom\").toggle();\r\n        $this.toggleClass(\"active\");\r\n        if($this.hasClass(\"active\")){\r\n            $(this).text($text = $this.data(\"text\"));\r\n        }else{\r\n            $(this).text($text = $this.data(\"textdefault\"));\r\n        }\r\n    });\r\n\r\n\r\n</script>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = (function () {
    function SearchComponent(router, service, params, _sanitizer, mapsAPILoader, ngZone) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.params = params;
        this._sanitizer = _sanitizer;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.isLoading = true;
        this.Activities = [];
        this.Users = [];
        this.Images = [];
        this.Params = {
            title: '',
            description: '',
            public_lat: null,
            public_lng: null,
            from_date: null,
            to_date: null,
            user_id: '',
            radius: 15,
            category: '',
            sub_category: ''
        };
        this.lat = 48.8916733;
        this.lng = 2.3016161;
        this.isAdvanced = false;
        this.Categories = [];
        this.lengthShortName = 6;
        this.isMapFixed = false;
        this.hSize = 100;
        this.wSize = 100;
        this.hCards = 100;
        this.mapBut = false;
        this.showDP = false;
        this.datesSearh = true;
        this._bsRangeValue = [this.prevWeek(new Date()), this.nextWeek(new Date())];
        this.autocompleListFormatter = function (data) {
            // ////console.log(`autocompleListFormatter`,data);
            var html = "<span><b>" + data.name + "</b></span>";
            if (data.parent)
                html = "<span>" + data.parent + " : <b>" + data.name + "</b></span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    Object.defineProperty(SearchComponent.prototype, "bsRangeValue", {
        get: function () {
            return this._bsRangeValue;
        },
        set: function (v) {
            this._bsRangeValue = v;
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.bsConfig = Object.assign({}, { containerClass: 'theme-default', showWeekNumbers: false });
        this.service.GetMe()
            .subscribe(function (res) {
            _this.lat = res.lat;
            _this.lng = res.lng;
        });
        this.Categories = this.service.GetAllCategoriesAsArrayCategory();
        this.CreateAutocompleteMap();
        this.GetAllActivities();
        // высота и ширина карты
        this.hSize = document.documentElement.clientHeight - 25;
        this.wSize = (document.getElementById("card_div").clientWidth - 50) * 0.8;
        window.addEventListener("scroll", function (e) {
            if (window.pageYOffset > 320 && _this.hSize < document.getElementById("card_div").clientHeight) {
                if (window.pageYOffset + _this.hSize > document.documentElement.scrollHeight - 253) {
                    _this.mapBut = true;
                    _this.isMapFixed = false;
                }
                else {
                    _this.mapBut = false;
                    _this.isMapFixed = true;
                }
            }
            else {
                _this.mapBut = false;
                _this.isMapFixed = false;
            }
        });
        ////console.log(`card_div = `,this.wSize);
    };
    SearchComponent.prototype.CreateAutocompleteMap = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(cities)"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    else {
                        //this.Params.address = autocomplete.getPlace().formatted_address;
                        _this.Params.public_lat = autocomplete.getPlace().geometry.location.toJSON().lat;
                        _this.Params.public_lng = autocomplete.getPlace().geometry.location.toJSON().lng;
                        _this.lat = autocomplete.getPlace().geometry.location.toJSON().lat;
                        _this.lng = autocomplete.getPlace().geometry.location.toJSON().lng;
                    }
                });
            });
        });
    };
    SearchComponent.prototype.mapClicked = function ($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        ////console.log("coords");
        //console.log(this.lat);
        //console.log(this.lng);
    };
    SearchComponent.prototype.GetAllActivities = function () {
        var _this = this;
        this.isLoading = true;
        if (this.searchElement.nativeElement.value == "" || !this.searchElement.nativeElement.value) {
            //console.log(`NO address`);
            this.Params.public_lat = null;
            this.Params.public_lng = null;
        }
        if (this.datesSearh) {
            this.Params.from_date = this.dateSwap(this.bsRangeValue[0], -5);
            this.Params.to_date = this.dateSwap(this.bsRangeValue[1], 5);
        }
        //console.log(this.Params);
        this.service.GetAllActivities(this.Params)
            .subscribe(function (res) {
            ////console.log(res);
            var activ = res;
            var _loop_1 = function (item) {
                if (item.image_id) {
                    _this.service.GetImageById(item.image_id)
                        .subscribe(function (image) {
                        _this.Images['act' + item.id] = image.base64;
                    });
                }
                _this.service.GetUserById(item.user_id)
                    .subscribe(function (user) {
                    _this.Users[item.user_id] = user;
                    if (user.image_id) {
                        _this.service.GetImageById(user.image_id)
                            .subscribe(function (img) {
                            _this.Images['user' + item.user_id] = img.base64;
                        });
                    }
                });
            };
            for (var _i = 0, activ_1 = activ; _i < activ_1.length; _i++) {
                var item = activ_1[_i];
                _loop_1(item);
            }
            _this.ActivityRev(activ);
            _this.isLoading = false;
        });
    };
    SearchComponent.prototype.ActivityRev = function (act) {
        this.Activities = [];
        for (var _i = 0, act_1 = act; _i < act_1.length; _i++) {
            var item = act_1[_i];
            if (item.user_name && item.title) {
                var dupl = false;
                for (var _a = 0, _b = this.Activities; _a < _b.length; _a++) {
                    var itemA = _b[_a];
                    if (item.id == itemA.id)
                        dupl = true;
                }
                if (!dupl)
                    this.Activities.push(item);
            }
        }
        if (this.Activities.length > 0) {
            this.lat = this.Activities[0].public_lat;
            this.lng = this.Activities[0].public_lng;
        }
    };
    SearchComponent.prototype.FromDateChanged = function ($event) {
        var date = new Date($event);
        if (date) {
            ////console.log($event);
            this.Params.from_date = $event;
        }
    };
    SearchComponent.prototype.CategoryChanged = function ($event) {
        if ($event.parent) {
            this.Params.category = $event.parent ? $event.parent : $event.value;
            this.Params.sub_category = $event.parent ? $event.parent + ":" + $event.name : null;
        }
        else {
            this.Params.category = "";
            this.Params.sub_category = "";
        }
        ////console.log(this.Params);
    };
    SearchComponent.prototype.markerClick = function (item) {
        ////console.log(`click`,item.id);
        this.router.navigate(['/activity/', item.id]);
    };
    SearchComponent.prototype.getShortNames = function (name) {
        return this.service.GetShortName(name, this.lengthShortName);
    };
    SearchComponent.prototype.change_coords = function (i) {
        if (i % 3 == 0)
            i = -i;
        if (i % 2 == 0)
            return 0.001 * (i % 20);
        else
            return -0.001 * (i % 20);
    };
    SearchComponent.prototype.prevWeek = function (date) {
        var previousDay = new Date(date);
        previousDay.setDate(date.getDate() - 10);
        return previousDay;
    };
    SearchComponent.prototype.nextWeek = function (date) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 21);
        return nextDay;
    };
    SearchComponent.prototype.dateSwap = function (date, count) {
        var nextDay = new Date(date);
        nextDay.setDate(date.getDate() + count);
        return nextDay;
    };
    SearchComponent.prototype.getDates = function () {
        var date1 = new Date(this.Params.from_date);
        var string1 = (date1.getMonth() + 1) + "/" + (date1.getDate()) + "/" + (date1.getFullYear());
        var date2 = new Date(this.Params.to_date);
        var string2 = (date2.getMonth() + 1) + "/" + (date2.getDate()) + "/" + (date2.getFullYear());
        return string1 + " - " + string2;
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchg'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SearchComponent.prototype, "searchElement", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "search",
        template: __webpack_require__("../../../../../src/app/Pages/search/search.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/unauthorized/unauthorized.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row2\">\r\n      \r\n    </div>\r\n    <!-- ################################################################################################ -->\r\n    <!-- ################################################################################################ -->\r\n    <!-- ################################################################################################ -->\r\n<div class=\"wrapper row3\">\r\n    <main id=\"container\" class=\"clear\">\r\n        <h1> You have to log in for getting access to this page! </h1>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Pages/unauthorized/unauthorized.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnauthorizedComponent = (function () {
    function UnauthorizedComponent() {
    }
    return UnauthorizedComponent;
}());
UnauthorizedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "unauthorized",
        template: __webpack_require__("../../../../../src/app/Pages/unauthorized/unauthorized.component.html")
    })
], UnauthorizedComponent);

//# sourceMappingURL=unauthorized.component.js.map

/***/ }),

/***/ "../../../../../src/app/Pages/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row loading\" *ngIf=\"isLoading\"></div>\r\n<div *ngIf=\"!isLoading\" class=\"hero hero--user center-block\" [ngStyle]=\"{'background':'url('+Background+') center no-repeat', 'background-size':'cover'}\">\r\n    <div class=\"row middle\">\r\n        <div class=\"h123 h1-first\">\r\n            <h1>{{User.name}}</h1>\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"hero-content\">\r\n    <h1>User.name</h1>\r\n    </div>-->\r\n</div>\r\n    <div *ngIf=\"!isLoading\" class=\"container-fluid center-block pull-top container700\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"round-card\">\r\n                    <div class=\"avatar pull-left\">\r\n                        <img class=\"profile-logo\" alt=\"logo\" [src]=\"Logo\">\r\n                    </div>\r\n                    <div class=\"about-org\">\r\n                        <h3>{{User.name}}</h3>\r\n                        <p>{{User.description}}</p>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngIf=\"isMe\" class=\"col-xs-12 container700\">\r\n                <ul class=\"list-inline text-center container700\">\r\n                    <li [ngClass]=\"MenuItem=='bookings'?'active':''\">\r\n                        <h2>\r\n                            <span *ngIf=\"MenuItem=='bookings'\">Bookings</span>\r\n                            <a (click)=\"SetMenuItem('bookings')\" *ngIf=\"MenuItem!='bookings'\">Bookings</a>\r\n                        </h2>\r\n                    </li>\r\n                    <li *ngIf=\"User.user_type!='client'&&User.user_type\" [ngClass]=\"MenuItem=='activity'?'active':''\">\r\n                        <h2>\r\n                            <span *ngIf=\"MenuItem=='activity' \">My Activities</span>\r\n                            <a (click)=\"SetMenuItem('activity')\" *ngIf=\"MenuItem!='activity'\">My Activities</a>\r\n                        </h2>\r\n                    </li>\r\n                    <li [ngClass]=\"MenuItem=='messages'?'active':''\">\r\n                        <h2>\r\n                            <span *ngIf=\"MenuItem=='messages'\">Messages</span>\r\n                            <a (click)=\"SetMenuItem('messages')\" *ngIf=\"MenuItem!='messages'\">Messages</a>\r\n                        </h2>\r\n                    </li>\r\n                    <li [ngClass]=\"MenuItem=='payments'?'active':''\">\r\n                        <h2>\r\n                            <span *ngIf=\"MenuItem=='payments'\">Payments</span>\r\n                            <a (click)=\"SetMenuItem('payments')\" *ngIf=\"MenuItem!='payments'\">Payments</a>\r\n                        </h2>\r\n                    </li>\r\n                    <li [ngClass]=\"MenuItem=='edit'?'active':''\">\r\n                        <h2>\r\n                            <span *ngIf=\"MenuItem=='edit'\">Profile Edit</span>\r\n                            <a (click)=\"SetMenuItem('edit')\" *ngIf=\"MenuItem!='edit'\">Profile Edit</a>\r\n                        </h2>\r\n                    </li>\r\n                </ul>\r\n                <div id=\"activities\" *ngIf=\"MenuItem=='activity'\" class=\"container-fluid center-block container560\">\r\n                        <div class=\"row loading\" *ngIf=\"ActLoading\"></div>\r\n                        <h3 *ngIf=\"!ActLoading && Activities.length == 0\" class=\"h-center\">There are no activities!</h3>\r\n                        <table *ngIf=\"!ActLoading && Activities.length > 0\" class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Image</th>\r\n                                    <th>Title</th>\r\n                                    <th colspan=\"2\">Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of let item of Activities\">\r\n                                    <td><img [src]=\"ActImages[item.id]\"></td>\r\n                                    <td><h4><a [routerLink]=\"['/activity/' + item.id]\">{{item.title.slice(0,20)}}</a></h4></td>\r\n                                    <td><a class=\"read-more\" [routerLink]=\"['/edit_act',item.id]\">edit</a></td>\r\n                                    <td><a class=\"read-more\" (click)=\"OnDeleteAct(item)\">delete</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                </div>\r\n                <div *ngIf=\"MenuItem=='edit'\" class=\"container-fluid center-block container560\">\r\n                    <div class=\"form-group width70 marg-auto\">\r\n                        <label>Select option</label>\r\n                        <select class=\"form-control\" [ngModel]=\"ProfileMenu\" (ngModelChange)=\"ProfileMenu = $event\">\r\n                            <option value=\"profile\">Edit profile</option>\r\n                            <option value=\"password\">Change password</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"loading\" *ngIf=\"ProfLoading\"></div>\r\n                    <form *ngIf=\"ProfileMenu == 'password' && !ProfLoading\" (ngSubmit)=\"ChangePw(old_password,new_password)\" class=\"controls-inline\">\r\n                        <h2>Change password</h2>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"old_password\">Current password</label>\r\n                            <input type=\"password\" name=\"old_password\" [(ngModel)]=\"old_password\" class=\"form-control input-withicon input-lg\" id=\"old_password\" placeholder=\"***\">\r\n                            <span class=\"material-icons input-icon\">security</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"new_password\">New password</label>\r\n                            <input type=\"password\" name=\"new_password\" [(ngModel)]=\"new_password\" class=\"form-control input-withicon input-lg\" id=\"new_password\" placeholder=\"***\">\r\n                            <span class=\"material-icons input-icon\">security</span>\r\n                        </div>\r\n                        <div class=\"form-group form-group-makeinline\">\r\n                            <button type=\"submit\" class=\"btn btn-success input-withicon btn-lg\">Save</button>\r\n                            <span class=\"material-icons input-icon\" style=\"color: #fff;\">save</span>\r\n                        </div>\r\n                    </form>\r\n                    <form *ngIf=\"ProfileMenu == 'profile' && !ProfLoading\" (ngSubmit)=\"UpdateUser()\">\r\n                        <h2>Edit profile</h2>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group width70 marg-auto\">\r\n                                <label>Email</label>\r\n                                <input type=\"text\" class=\"form-control input-lg\" name=\"user_email\" [ngModel]=\"UserUpdate.email\" (ngModelChange)=\"UserUpdate.email = $event\">\r\n                            </div>\r\n                            <div class=\"form-group width70 marg-auto\">\r\n                                <label>Name</label>\r\n                                <input type=\"text\" class=\"form-control input-lg\" name=\"user_name\" [ngModel]=\"UserUpdate.name\" (ngModelChange)=\"UserUpdate.name = $event\">\r\n                            </div>\r\n                            \r\n                            <!--<div class=\"form-group width70 marg-auto\">\r\n                                <label>Birthday</label>\r\n                                <input type=\"date\" class=\"form-control input-lg\" name=\"p_birthday\" [ngModel]=\"UserUpdate.date_of_birth | date:'yyyy-MM-dd'\" (ngModelChange)=\"UserUpdate.date_of_birth = $event\">\r\n                            </div> -->\r\n                            <div class=\"form-group width70 marg-auto\">\r\n                                <label>Gender</label>\r\n                                <select name=\"p_gender\" class=\"form-control\" [ngModel]=\"UserUpdate.gender\" (ngModelChange)=\"UserUpdate.gender = $event\">\r\n                                    <option value=\"male\">Male</option>\r\n                                    <option value=\"female\">Female</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"form-group width70 marg-auto\">\r\n                                <label>Logo image</label>\r\n                                <img *ngIf=\"UserUpdate.image\" [src]='UserUpdate.image'>\r\n                                <input type=\"file\" accept=\"image/*\" name=\"logo_img\" (change)=\"changeListener('user_logo',$event)\">\r\n                            </div>\r\n                            \r\n                            <div class=\"row\" *ngIf=\"User.user_type == 'professional'\">\r\n                                <div class=\"form-group form-group-makeinline width70 marg-auto\">\r\n                                    <label>Address</label>\r\n                                    <input type=\"text\" class=\"form-control input-lg\" name=\"address\" [ngModel]=\"UserUpdate.address\" (ngModelChange)=\"UserUpdate.address = $event\">\r\n                                </div>\r\n                                <div class=\"form-group form-group-makeinline width70 marg-auto\">\r\n                                    <label>Phone</label>\r\n                                    <input type=\"text\" class=\"form-control input-lg\" name=\"p_phone\" [ngModel]=\"UserUpdate.phone\" (ngModelChange)=\"UserUpdate.phone = $event\">\r\n                                </div>\r\n                                <div class=\"form-group width70 marg-auto\">\r\n                                    <label>Photocopy of diploma</label>\r\n                                    <img *ngIf=\"UserUpdate.diploma\" [src]='UserUpdate.diploma'>\r\n                                    <input type=\"file\"  accept=\"image/*\" name=\"diploma\" (change)=\"changeListener('diploma',$event)\">\r\n                                </div>\r\n                                <div class=\"form-group width70 marg-auto\">\r\n                                    <label>Activity description</label>\r\n                                    <textarea class=\"form-control\" style=\"height: 135px!important;\" name=\"p_description\" [ngModel]=\"UserUpdate.description\" (ngModelChange)=\"UserUpdate.description = $event\" ></textarea>\r\n                                </div>\r\n                                <div class=\"form-group width70 marg-auto\">\r\n                                    <label>Background image</label>\r\n                                    <img *ngIf=\"UserUpdate.background\" [src]='UserUpdate.background'>\r\n                                    <input type=\"file\"  accept=\"image/*\" name=\"background\" (change)=\"changeListener('background',$event)\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group form-group-makeinline width70 marg-auto\">\r\n                            <button type=\"submit\" class=\"btn btn-success input-withicon btn-lg\">Save</button>\r\n                            <span class=\"material-icons input-icon\" style=\"color: #fff;\">save</span>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div *ngIf=\"MenuItem=='payments'\" class=\"container-fluid center-block container560\">\r\n                    \r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Order</th>\r\n                                <th>Status</th>\r\n                                <th>Details</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr class=\"success\">\r\n                                <th scope=\"row\">1</th>\r\n                                <td>successfull</td>\r\n                                <td>Event title on date XX.XX.XXXX</td>\r\n                                <td><a routerLink=\"/more\" class=\"read-more\">details</a></td>\r\n                            </tr>\r\n                            <tr class=\"warning\">\r\n                                <th scope=\"row\">2</th>\r\n                                <td>needs attention</td>\r\n                                <td>Event title on date XX.XX.XXXX</td>\r\n                                <td><a routerLink=\"/more\" class=\"read-more\">details</a></td>\r\n                            </tr>\r\n                            <tr class=\"danger\">\r\n                                <th scope=\"row\">3</th>\r\n                                <td>error</td>\r\n                                <td>Event title on date XX.XX.XXXX</td>\r\n                                <td><a routerLink=\"/more\" class=\"read-more\">details</a></td>\r\n                            </tr>\r\n                            <tr class=\"info\">\r\n                                <th scope=\"row\">4</th>\r\n                                <td>ongoing</td>\r\n                                <td>Event title on date XX.XX.XXXX</td>\r\n                                <td><a routerLink=\"/more\" class=\"read-more\">details</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"MenuItem=='messages'\" class=\"container-fluid center-block container560\">\r\n                    <div class=\"row loading\" *ngIf=\"ChatsLoading\"></div>\r\n                    <h3 *ngIf=\"!ChatsLoading && ChatList.length == 0\" class=\"h-center\">There is no messages!</h3>\r\n                    <table *ngIf=\"!ChatsLoading && ChatList.length > 0\" class=\"table table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Date</th>\r\n                                <th>Time</th>\r\n                                <th>Interlocuteur</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of ChatList\">\r\n                                <td [ngClass]=\"{'unread':item.has_unread}\">{{item.last_date| date: 'dd/MM/yyyy'}}</td>\r\n                                <td [ngClass]=\"{'unread':item.has_unread}\">{{item.last_date| date: 'HH:mm'}}</td>\r\n                                <td [ngClass]=\"{'unread':item.has_unread}\">{{item.name?getShortNames(item.name,10):'Author'}}</td>\r\n                                \r\n                                <td><a class=\"read-more\" (click)=\"ReadMessages(item,modal1)\">show</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <modal #modal1>\r\n                        <div class=\"app-modal-header\">\r\n                            Chat with <b>{{CurrentChat.name}}</b>\r\n                        </div>\r\n                        <div class=\"app-modal-body\">\r\n                            <div *ngIf=\"MessOk\">\r\n                                <h4 class=\"ok-msg\"> Your message was send to \r\n                                    <b>{{CurrentChat.name}}</b>\r\n                                </h4>\r\n                            </div>\r\n                            <div *ngIf=\"MessErr\">\r\n                                <h4 class=\"error-msg\">Input body!</h4>\r\n                            </div>\r\n                            <div *ngIf=\"MesLoading\" class=\"loading max-height200\"></div>\r\n                            <div *ngIf=\"!MesLoading\">\r\n                                <div class=\"chat-history\" #scrollMe style=\"overflow-x: hidden; height: xyz;\">\r\n                                    <h3 *ngIf=\"!MesLoading && Messages.length == 0\" class=\"h-center\">There is no messages!</h3>\r\n                                    <div *ngFor=\"let item of Messages\" class=\"message_item\" [ngClass]=\"{'my_message':item.from_id == User.id}\">\r\n                                        <p class=\"message_body\">{{item.body}}</p>\r\n                                        <p class=\"message_date\">{{item.updated_at | date:'HH:mm, dd/MM/yyyy'}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <form  (ngSubmit)=\"SendMessage()\">\r\n                                    <div class=\"form-group\">\r\n                                        <textarea name=\"description\" class=\"form-control input-lg\" [ngModel]=\"Message.body\" (ngModelChange)=\"Message.body = $event\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12 text-center\">\r\n                                            <button class=\"btn btn-success btn-lg\" type=\"submit\">Send message</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"app-modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal1.hide()\">Cancel</button>\r\n                        </div>\r\n                    </modal>\r\n                </div>\r\n                <div *ngIf=\"MenuItem=='bookings'\" class=\"container-fluid center-block container560\">\r\n                    <div class=\"form-group width70 marg-auto\">\r\n                        <label>Select option</label>\r\n                        <select class=\"form-control\" [ngModel]=\"BookingsMenu\" (ngModelChange)=\"BookingsTypeChanged($event)\">\r\n                            <option value=\"future\">Future</option>\r\n                            <option value=\"past\">Past</option>\r\n                        </select>\r\n                    </div>\r\n                    <h3 *ngIf=\"!BookingLoading&& Bookings.length == 0\" class=\"h-center\">There is no bookings!</h3>\r\n                    <div class=\"row loading\" *ngIf=\"BookingLoading\"></div>\r\n                    <table *ngIf=\"!BookingLoading && Bookings.length >0\" class=\"table table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Dates</th>\r\n                                <th>Title</th>\r\n                                <th>Actions</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of Bookings\">\r\n                                <td>{{item.date | date:'M/dd/yyyy'}}</td>\r\n                                <td>{{BookingsActivities[item.activity_id]?.title}}</td>\r\n                                <td><a class=\"read-more\" [routerLink]=\"['/activity',item.activity_id]\">more</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"col-sm-10 marg-auto left-side\">\r\n    <div class=\"cards\" *ngIf=\"!isLoading && Activities.length > 0\">\r\n            <h3 class=\"h-center\">User's activities</h3>\r\n            <div class=\"container-fluid\">\r\n                <div *ngFor=\"let item of Activities\" class=\"col-xs-12 col-sm-6 pull-left\">\r\n                    <div class=\"card bg_cover\" [ngStyle]=\"{'background':'url(' + ActImages[item.id] + ')'}\">\r\n                        <h3 class=\"cardname word-wrap\">{{item.title.slice(0,180)}}</h3>\r\n                        <h3 class=\"carddate\">{{item.calendar[0].date | date: \"dd MMM\"}}</h3>\r\n                        <div class=\"avatar\">\r\n                            <img class=\"profile-logo\" alt=\"logo\" [src]=\"Logo?Logo:'./app/images/man.jpg'\">\r\n                            <span class=\"profile-text\">{{User.name?getShortNames(User.name,5):'Author'}}</span>\r\n                        </div>\r\n                        <span class=\"cardshadow\"></span>\r\n                        <a [routerLink]=\"['/activity',item.id]\"><span class=\"spanlink\"></span></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_createUser_model__ = __webpack_require__("../../../../../src/app/models/createUser.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_message_model__ = __webpack_require__("../../../../../src/app/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chat_model__ = __webpack_require__("../../../../../src/app/models/chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = (function () {
    function UserComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.User = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* UserModel */]();
        this.isMe = false;
        this.Logo = "./app/images/man.jpg";
        this.Background = "./app/images/hero-back.png";
        this.Diploma = '';
        this.ProfLoading = true;
        this.MenuItem = "bookings";
        this.ProfileMenu = "profile";
        this.Activities = [];
        this.ActImages = [];
        this.ActLoading = true;
        this.UserUpdate = new __WEBPACK_IMPORTED_MODULE_5__models_createUser_model__["a" /* CreateUserModel */]();
        this.Messages = [];
        this.ChatList = [];
        this.MessLoading = true;
        this.ChatsLoading = true;
        this.Message = new __WEBPACK_IMPORTED_MODULE_6__models_message_model__["a" /* MessageModel */]();
        this.CurrentChat = new __WEBPACK_IMPORTED_MODULE_7__models_chat_model__["a" /* ChatModel */]();
        this.MessOk = false;
        this.MessErr = false;
        this.BookingLoading = true;
        this.BookingsMenu = "future";
        this.Bookings = [];
        this.BookingsActivities = [];
        this.Users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.isLoading = true;
            var userId = params["id"];
            if (userId == 'me' || userId == _this.service.me.id) {
                _this.isMe = true;
                var menu = params["menu"];
                if (menu)
                    _this.MenuItem = menu;
                _this.service.GetMe()
                    .subscribe(function (res) {
                    _this.AfterGettingUser(res);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.service.GetUserById(userId)
                    .subscribe(function (user) {
                    _this.AfterGettingUser(user);
                });
            }
        });
        this.scrollToBottom();
    };
    UserComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    UserComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    UserComponent.prototype.SetMenuItem = function (item) {
        this.MenuItem = item;
    };
    UserComponent.prototype.AfterGettingUser = function (user) {
        var _this = this;
        this.ProfLoading = true;
        this.User = user;
        if (this.User) {
            if (this.isMe)
                this.UserUpdate = this.service.UserModelToCreateUserModel(this.User);
            if (this.User.image_id) {
                this.service.GetImageById(this.User.image_id)
                    .subscribe(function (logo) {
                    _this.Logo = logo.base64;
                    if (_this.isMe)
                        _this.UserUpdate.image = logo.base64;
                });
            }
            if (this.User.background_id) {
                this.service.GetImageById(this.User.background_id)
                    .subscribe(function (bg) {
                    _this.Background = bg.base64;
                    if (_this.isMe)
                        _this.UserUpdate.background = bg.base64;
                });
            }
            if (this.User.diploma_id) {
                this.service.GetImageById(this.User.diploma_id)
                    .subscribe(function (diploma) {
                    _this.Diploma = diploma.base64;
                    if (_this.isMe)
                        _this.UserUpdate.diploma = diploma.base64;
                });
            }
        }
        this.GetActivityies();
        this.GetChatList();
        this.BookingsTypeChanged(this.BookingsMenu);
        this.ProfLoading = false;
        this.isLoading = false;
    };
    UserComponent.prototype.GetChatList = function () {
        var _this = this;
        this.ChatsLoading = true;
        this.service.GetChatsByUsers()
            .subscribe(function (res) {
            _this.ChatList = res;
            _this.ChatsLoading = false;
        }, function (err) {
            console.log(err);
            _this.ChatsLoading = false;
        });
    };
    UserComponent.prototype.GetActivityies = function () {
        var _this = this;
        this.ActLoading = true;
        if (this.User) {
            this.service.GetAllActivities({ user_id: this.User.id })
                .subscribe(function (res) {
                _this.Activities = res;
                var total = _this.Activities.length;
                var current = 0;
                if (total == 0) {
                    _this.ActLoading = false;
                }
                var _loop_1 = function (item) {
                    if (item.image_id) {
                        _this.service.GetImageById(item.image_id)
                            .subscribe(function (res) {
                            _this.ActImages[item.id] = res.base64;
                            current += 1;
                            if (total == current) {
                                _this.ActLoading = false;
                            }
                        });
                    }
                    else {
                        current += 1;
                        if (total == current) {
                            _this.ActLoading = false;
                        }
                    }
                };
                for (var _i = 0, _a = _this.Activities; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_1(item);
                }
            });
        }
    };
    UserComponent.prototype.ChangePw = function (old_password, new_password) {
        var _this = this;
        this.ProfLoading = true;
        this.service.ChangePassword(old_password, new_password)
            .subscribe(function (res) {
            _this.AfterGettingUser(res);
        }, function (err) {
            _this.ProfLoading = false;
        });
    };
    UserComponent.prototype.UpdateUser = function () {
        var _this = this;
        this.ProfLoading = true;
        this.service.UpdateUser(this.User.id, this.UserUpdate)
            .subscribe(function (res) {
            console.log(res);
            _this.AfterGettingUser(res);
        }, function (err) {
            _this.ProfLoading = false;
        });
    };
    UserComponent.prototype.changeListener = function (field, $event) {
        this.readThis(field, $event.target);
    };
    UserComponent.prototype.readThis = function (field, inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        if (!file)
            return;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            if (field == 'user_logo') {
                _this.UserUpdate.image = myReader.result;
            }
            else if (field == 'diploma') {
                _this.UserUpdate.diploma = myReader.result;
            }
            else {
                _this.UserUpdate.background = myReader.result;
            }
        };
        myReader.readAsDataURL(file);
    };
    UserComponent.prototype.OnDeleteAct = function (item) {
        var _this = this;
        this.service.DeleteActivity(item.id)
            .subscribe(function () {
            _this.GetActivityies();
        });
    };
    UserComponent.prototype.OnEditAct = function (item) {
        this.router.navigate(['/edit_act', item.id]);
    };
    UserComponent.prototype.BookingsTypeChanged = function ($event) {
        this.BookingLoading = true;
        this.BookingsMenu = $event;
        if (this.BookingsMenu == "future") {
            this.GetFutureBookings();
        }
        else {
            this.GetPastBookings();
        }
    };
    UserComponent.prototype.GetFutureBookings = function () {
        var _this = this;
        this.service.GetFutureBookings()
            .subscribe(function (res) {
            _this.Bookings = res;
            _this.GetActivitiesByBookings();
        }, function (err) {
            _this.GetBookingsErr();
        });
    };
    UserComponent.prototype.GetPastBookings = function () {
        var _this = this;
        this.service.GetPastBookings()
            .subscribe(function (res) {
            _this.Bookings = res;
            _this.GetActivitiesByBookings();
        }, function (err) {
            _this.GetBookingsErr();
        });
    };
    UserComponent.prototype.GetBookingsErr = function () {
        this.BookingLoading = false;
    };
    UserComponent.prototype.GetActivitiesByBookings = function () {
        var _this = this;
        var total = this.Bookings.length;
        var current = 0;
        if (total == 0) {
            this.BookingLoading = false;
        }
        for (var _i = 0, _a = this.Bookings; _i < _a.length; _i++) {
            var item = _a[_i];
            this.service.GetActivity(item.activity_id)
                .subscribe(function (res) {
                _this.BookingsActivities[res.id] = res;
                current += 1;
                if (current == total)
                    _this.BookingLoading = false;
            }, function (err) {
                current += 1;
                if (current == total)
                    _this.BookingLoading = false;
            });
        }
    };
    UserComponent.prototype.ReadMessages = function (item, modal) {
        this.MessLoading = true;
        this.CurrentChat = item;
        modal.show();
        this.GetMessages();
    };
    UserComponent.prototype.SendMessage = function () {
        var _this = this;
        this.MessLoading = true;
        this.MessErr = false;
        this.MessOk = false;
        this.Message.to_id = this.CurrentChat.id;
        if (!this.Message.body) {
            this.MessErr = true;
            this.MessLoading = false;
            setTimeout(function () {
                _this.MessErr = false;
            }, 5000);
            return;
        }
        this.service.CreateMessage(this.Message)
            .subscribe(function (mes) {
            _this.Message.body = "";
            _this.GetMessages();
        }, function (err) {
            _this.MessErr = true;
            _this.MessLoading = false;
            setTimeout(function () {
                _this.MessErr = false;
            }, 5000);
        });
    };
    UserComponent.prototype.GetMessages = function () {
        var _this = this;
        this.MessLoading = true;
        this.service.GetChatHistory({ user_id: this.CurrentChat.id })
            .subscribe(function (res) {
            _this.Messages = res;
            _this.service.MarkAllAsRead(_this.CurrentChat.id)
                .subscribe(function () {
                _this.MessLoading = false;
                _this.GetChatList();
            });
        }, function (err) {
            _this.Messages = [];
            _this.MessLoading = false;
        });
    };
    UserComponent.prototype.getShortNames = function (name, length) {
        return this.service.GetShortName(name, length);
    };
    return UserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], UserComponent.prototype, "myScrollContainer", void 0);
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "user",
        template: __webpack_require__("../../../../../src/app/Pages/user/user.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"container-fluid header\">\r\n  <h1><a class=\"sportrotter\" routerLink=\"/\">Sporanga</a></h1>\r\n  <ul class=\"list-inline\">\r\n    <li><a routerLink=\"/\">Home</a></li>\r\n    <li><a routerLink=\"/discover\">Discover</a></li>\r\n    <li ><a routerLink=\"/search\">Search</a></li>\r\n    <li *ngIf=\"isLoggedIn\"><a routerLink=\"/users/me\">My profile</a></li>\r\n    <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\r\n    <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/registration\">Registration</a></li>\r\n    <li *ngIf=\"isLoggedIn\"><a (click)=\"Logout()\">Logout</a></li>\r\n    <li *ngIf=\"isLoggedIn&&isProf\"><a routerLink=\"/create_activity\">Create activity</a></li>\r\n  </ul>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<div class=\"footer\">\r\n    <div class=\"container center-block\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n                <h2 class=\"sportrotter\">Sporanga</h2>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <h2>About</h2>\r\n                <ul class=\"list-inline\">\r\n                    <li><a href=\"#\">About us</a></li>\r\n                    <li><a href=\"#\">Contact</a></li>\r\n                    <li><a href=\"#\">Site map</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <h2>Latest Activities</h2>\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email-subscribe\" class=\"sr-only\">Email</label>\r\n                        <input type=\"email\" class=\"form-control input-withicon input-lg\" id=\"email-subscribe\" placeholder=\"Email\">\r\n                        <span class=\"material-icons input-icon\">email</span>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-success btn-lg\">Subscribe</button>\r\n                </form>\r\n                <p>No spam, for sure.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    //me: UserModel = new UserModel(null,"","","","",null,null); 
    function AppComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.isLoggedIn = false;
        this.isProf = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.onAuthChange$.subscribe(function (bool) {
            _this.isLoggedIn = bool;
            if (_this.isLoggedIn)
                _this.mainService.GetMe().subscribe(function (it) {
                    console.log("get me: ", it.user_type);
                    if (it.user_type === "professional")
                        _this.isProf = true;
                });
        });
        this.mainService.TryToLoginWithToken();
    };
    AppComponent.prototype.Logout = function () {
        //console.log();
        this.mainService.Logout();
        this.router.navigate(['/']);
        location.reload();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_main_service__ = __webpack_require__("../../../../../src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pages_pages_route__ = __webpack_require__("../../../../../src/app/Pages/pages.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Pages_pages_module__ = __webpack_require__("../../../../../src/app/Pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_modal_component__ = __webpack_require__("../../../../../src/app/components/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//TODO import another components

;








var providers = {
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__Pages_pages_route__["a" /* routs */]),
            __WEBPACK_IMPORTED_MODULE_8__Pages_pages_module__["a" /* PageModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_social_login__["a" /* Angular2SocialLoginModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDZ1KosRinYSwWsttFqM68orCse2Lx-vA4',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_9__components_modal_component__["a" /* ModalComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

__WEBPACK_IMPORTED_MODULE_12_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal',
        template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
        styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/activity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityModel; });
var ActivityModel = (function () {
    function ActivityModel(id, image_id, title, price, num_of_bookings, address, detailed_address, description, created_at, updated_at, user_id, calendar, rate, lat, public_lat, public_lng, lng, dostance, bearing, user_name, user_image_id, user_description, category, sub_category) {
        this.id = id;
        this.image_id = image_id;
        this.title = title;
        this.price = price;
        this.num_of_bookings = num_of_bookings;
        this.address = address;
        this.detailed_address = detailed_address;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.calendar = calendar;
        this.rate = rate;
        this.lat = lat;
        this.public_lat = public_lat;
        this.public_lng = public_lng;
        this.lng = lng;
        this.dostance = dostance;
        this.bearing = bearing;
        this.user_name = user_name;
        this.user_image_id = user_image_id;
        this.user_description = user_description;
        this.category = category;
        this.sub_category = sub_category;
    }
    return ActivityModel;
}());

//# sourceMappingURL=activity.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/booking.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingModel; });
var BookingModel = (function () {
    function BookingModel(id, activity_id, num_of_participants, is_validated, created_at, updated_at, user_id, user_name, user_image_id, date) {
        this.id = id;
        this.activity_id = activity_id;
        this.num_of_participants = num_of_participants;
        this.is_validated = is_validated;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_image_id = user_image_id;
        this.date = date;
        if (!num_of_participants)
            this.num_of_participants = 1;
    }
    return BookingModel;
}());

//# sourceMappingURL=booking.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/category.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModel; });
var CategoryModel = (function () {
    function CategoryModel(name, parent, value) {
        this.name = name;
        this.parent = parent;
        this.value = value;
        if (!name)
            this.name = "";
        if (!parent)
            this.parent = "";
        if (!value) {
            this.value = this.parent + ":" + this.name;
        }
    }
    return CategoryModel;
}());

//# sourceMappingURL=category.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/chat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModel; });
var ChatModel = (function () {
    function ChatModel(id, name, last_date, has_unread) {
        this.id = id;
        this.name = name;
        this.last_date = last_date;
        this.has_unread = has_unread;
    }
    return ChatModel;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/checkbox.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxModel; });
var CheckboxModel = (function () {
    function CheckboxModel(name, value, checked) {
        this.name = name;
        this.value = value;
        this.checked = checked;
        if (!value)
            this.value = name;
        if (!checked)
            this.checked = false;
    }
    return CheckboxModel;
}());

//# sourceMappingURL=checkbox.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/createActivity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateActivityModel; });
var CreateActivityModel = (function () {
    function CreateActivityModel(image, title, price, num_of_bookings, address, detailed_address, description, calendar, rate, lat, lng, public_lat, public_lng, category, sub_category) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.num_of_bookings = num_of_bookings;
        this.address = address;
        this.detailed_address = detailed_address;
        this.description = description;
        this.calendar = calendar;
        this.rate = rate;
        this.lat = lat;
        this.lng = lng;
        this.public_lat = public_lat;
        this.public_lng = public_lng;
        this.category = category;
        this.sub_category = sub_category;
    }
    return CreateActivityModel;
}());

//# sourceMappingURL=createActivity.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/createBooking.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBookingModel; });
var CreateBookingModel = (function () {
    function CreateBookingModel(activity_id, num_of_participants, date) {
        this.activity_id = activity_id;
        this.num_of_participants = num_of_participants;
        this.date = date;
        if (!num_of_participants) {
            this.num_of_participants = 1;
        }
    }
    return CreateBookingModel;
}());

//# sourceMappingURL=createBooking.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/createMessage.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMessageModel; });
var CreateMessageModel = (function () {
    function CreateMessageModel(body, to_id) {
        this.body = body;
        this.to_id = to_id;
    }
    return CreateMessageModel;
}());

//# sourceMappingURL=createMessage.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/createUser.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserModel; });
var CreateUserModel = (function () {
    function CreateUserModel(email, password, name, image, date_of_birth, gender, user_type, address, phone, description, diploma, background) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.image = image;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
        this.user_type = user_type;
        this.address = address;
        this.phone = phone;
        this.description = description;
        this.diploma = diploma;
        this.background = background;
        if (!gender)
            this.gender = 'male';
        if (!user_type)
            this.user_type = 'client';
    }
    return CreateUserModel;
}());

//# sourceMappingURL=createUser.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModel; });
var MessageModel = (function () {
    function MessageModel(id, body, created_at, updated_at, from_id, to_id, is_read) {
        this.id = id;
        this.body = body;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.from_id = from_id;
        this.to_id = to_id;
        this.is_read = is_read;
    }
    return MessageModel;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/rate.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateModel; });
var RateModel = (function () {
    function RateModel(rate) {
        this.rate = rate;
    }
    return RateModel;
}());

//# sourceMappingURL=rate.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/token.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenModel; });
var TokenModel = (function () {
    function TokenModel(token) {
        this.token = token;
    }
    return TokenModel;
}());

//# sourceMappingURL=token.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(id, email, created_at, updated_at, name, date_of_birth, image_id, user_type, gender, background_id, diploma_id, address, phone, description, lat, lng) {
        this.id = id;
        this.email = email;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.name = name;
        this.date_of_birth = date_of_birth;
        this.image_id = image_id;
        this.user_type = user_type;
        this.gender = gender;
        this.background_id = background_id;
        this.diploma_id = diploma_id;
        this.address = address;
        this.phone = phone;
        this.description = description;
        this.lat = lat;
        this.lng = lng;
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_token_model__ = __webpack_require__("../../../../../src/app/models/token.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.GoogleMapUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.serverUrl = "https://sportrotter-api.herokuapp.com";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]([]);
        this.token = new __WEBPACK_IMPORTED_MODULE_6__models_token_model__["a" /* TokenModel */]('');
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
    }
    HttpService.prototype.BaseInitByToken = function (data) {
        if (data) {
            if (this.headers.has('Authorization'))
                this.headers.delete('Authorization');
            this.headers.append('Authorization', data);
            this.token = new __WEBPACK_IMPORTED_MODULE_6__models_token_model__["a" /* TokenModel */](data);
        }
    };
    HttpService.prototype.GetToken = function () {
        console.log("token:", this.token);
        return this.token;
    };
    HttpService.prototype.PostData = function (method, data) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverUrl + method, data, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); });
    };
    HttpService.prototype.GetData = function (method, params) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverUrl + method + "?" + params, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); });
    };
    HttpService.prototype.PutData = function (method, data) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.put(this.serverUrl + method, data, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); });
    };
    HttpService.prototype.DeleteData = function (method) {
        if (!this.headers.has('Content-Type'))
            this.headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serverUrl + method, { headers: this.headers })
            .map(function (resp) { return resp.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); });
    };
    HttpService.prototype.GoogleGet = function (keyword) {
        return this.http.get(this.GoogleMapUrl + keyword).map(function (res) {
            console.log("res ok ok");
            var json = res.json();
            console.log("googlegetAUTO ", json.results);
            return json.results;
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_token_model__ = __webpack_require__("../../../../../src/app/models/token.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_checkbox_model__ = __webpack_require__("../../../../../src/app/models/checkbox.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MainService = (function () {
    function MainService(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.onAuthChange$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["Subject"]();
        this.onAuthChange$.next(false);
        this.onPageChange$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["Subject"]();
        this.onPageChange$.next('index');
        this.me = new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* UserModel */]();
    }
    /* Authentication BLOCK START */
    MainService.prototype.IsLogedIn = function () {
        var token = this.httpService.GetToken();
        var result = false;
        if (token && token.token)
            result = true;
        return result;
    };
    MainService.prototype.getToken = function () {
        return this.httpService.GetToken();
    };
    MainService.prototype.UserLogin = function (email, password) {
        var params = {
            email: email,
            password: password
        };
        console.log(params);
        return this.httpService.PostData('/auth/login', JSON.stringify(params));
    };
    MainService.prototype.UserLoginGoogle = function (g_token) {
        var params = {
            access_token: g_token
        };
        console.log(params);
        return this.httpService.PostData('/auth/login_google', JSON.stringify(params));
    };
    MainService.prototype.UserLoginFacebook = function (f_token) {
        var params = {
            access_token: f_token
        };
        console.log(params);
        return this.httpService.PostData('/auth/login_facebook', JSON.stringify(params));
    };
    MainService.prototype.BaseInitAfterLogin = function (data) {
        var _this = this;
        localStorage.setItem('token', data.token);
        this.httpService.BaseInitByToken(data.token);
        this.GetMe()
            .subscribe(function (user) {
            _this.me = user;
            _this.onAuthChange$.next(true);
        });
    };
    MainService.prototype.TryToLoginWithToken = function () {
        var token = localStorage.getItem('token');
        console.log(token);
        //let token = window.localStorage.getItem('token');
        if (token) {
            this.BaseInitAfterLogin(new __WEBPACK_IMPORTED_MODULE_2__models_token_model__["a" /* TokenModel */](token));
        }
    };
    MainService.prototype.Logout = function () {
        this.httpService.token = null;
        this.httpService.headers.delete('Authorization');
        this.onAuthChange$.next(false);
        localStorage.removeItem('token');
        //window.localStorage.removeItem('token');
        return this.httpService.PostData("/auth/logout", "");
    };
    /* Authentication BLOCK END */
    MainService.prototype.GetImageById = function (id) {
        return this.httpService.GetData('/images/get/' + id, "");
    };
    /* ACTIVITIES BLOCK START */
    MainService.prototype.GetAllActivities = function (params) {
        return this.httpService.GetData('/activities/get_all', this.ParamsToUrlSearchParams(params));
    };
    MainService.prototype.GetActivity = function (id) {
        return this.httpService.GetData('/activities/get/' + id, "");
    };
    MainService.prototype.CreateActivity = function (params) {
        return this.httpService.PostData('/activities/create', JSON.stringify(params));
    };
    MainService.prototype.UpdateActivity = function (id, params) {
        console.log(params);
        return this.httpService.PutData('/activities/update/' + id, JSON.stringify(params));
    };
    MainService.prototype.DeleteActivity = function (id) {
        return this.httpService.DeleteData('/activities/delete/' + id);
    };
    MainService.prototype.ActivityModelToCreateActivityModel = function (act) {
        var res = {
            title: act.title,
            price: act.price,
            num_of_bookings: act.num_of_bookings,
            address: act.address,
            detailed_address: act.detailed_address,
            lat: act.lat,
            lng: act.lng,
            public_lat: act.public_lat ? act.public_lat : act.lat,
            public_lng: act.public_lng ? act.public_lng : act.lng,
            description: act.description,
            calendar: this.CalendarArrToDateArr(act.calendar),
            rate: act.rate,
            category: act.category,
            sub_category: act.sub_category
        };
        return res;
    };
    MainService.prototype.CalendarArrToDateArr = function (calendar) {
        var result = [];
        for (var _i = 0, calendar_1 = calendar; _i < calendar_1.length; _i++) {
            var item = calendar_1[_i];
            result.push(item.date);
        }
        return result;
    };
    MainService.prototype.RateActivity = function (params) {
        return this.httpService.PostData('/activities/rate', JSON.stringify(params));
    };
    MainService.prototype.UnRateActivity = function (params) {
        return this.httpService.PostData('/activities/unrate', JSON.stringify(params));
    };
    MainService.prototype.GetRate = function (id) {
        return this.httpService.GetData('/activities/get_my_rate/' + id, "");
    };
    MainService.prototype.GetShortName = function (name, num) {
        var shortname = "";
        if (name) {
            var mas = name.split(" ");
            if (mas.length > 1) {
                for (var _i = 0, mas_1 = mas; _i < mas_1.length; _i++) {
                    var item = mas_1[_i];
                    item = item.toUpperCase();
                    shortname += item[0] + ".";
                }
                shortname = shortname.slice(0, num);
            }
            else {
                shortname = name.slice(0, num);
                if (name.length > num)
                    shortname += "...";
            }
        }
        return shortname;
    };
    /* ACTIVITIES BLOCK END */
    /* BOOKINGS BLOCK START */
    MainService.prototype.GetMyBookings = function () {
        return this.httpService.GetData('/bookings/get_my_bookings', "");
    };
    MainService.prototype.GetActivityBookings = function (id) {
        return this.httpService.GetData('/bookings/get_activity_bookings/' + id, "");
    };
    MainService.prototype.GetPastBookings = function () {
        return this.httpService.GetData("/bookings/get_past_bookings", "");
    };
    MainService.prototype.GetFutureBookings = function () {
        return this.httpService.GetData("/bookings/get_future_bookings", "");
    };
    MainService.prototype.CreateBooking = function (params) {
        return this.httpService.PostData('/bookings/create', JSON.stringify(params));
    };
    MainService.prototype.ValidateBooking = function (params) {
        return this.httpService.PostData('/bookings/validate_booking', JSON.stringify(params));
    };
    MainService.prototype.UpdateBooking = function (id, params) {
        console.log(JSON.stringify(params));
        return this.httpService.PutData('/bookings/update/' + id, JSON.stringify(params));
    };
    MainService.prototype.DeleteBooking = function (id) {
        return this.httpService.DeleteData('/bookings/delete/' + id);
    };
    /* BOOKINGS BLOCK END */
    /* MESSAGES BLOCK START */
    MainService.prototype.GetAllMessages = function () {
        return this.httpService.GetData('/messages/get/', "");
    };
    MainService.prototype.GetSentMessages = function (params) {
        return this.httpService.GetData('/messages/get_sent', this.ParamsToUrlSearchParams(params));
    };
    MainService.prototype.GetReceivedMessages = function (params) {
        return this.httpService.GetData('/messages/get_received', this.ParamsToUrlSearchParams(params));
    };
    MainService.prototype.MarkMessagesAsRead = function (id) {
        return this.httpService.PostData('/messages/mark_read/' + id, '');
    };
    MainService.prototype.CreateMessage = function (params) {
        return this.httpService.PostData('/messages/create', JSON.stringify(params));
    };
    MainService.prototype.MarkAllAsRead = function (user_id) {
        return this.httpService.PostData('/messages/mark_all_read/' + user_id, "");
    };
    MainService.prototype.GetChatsByUsers = function () {
        return this.httpService.GetData('/messages/get_messaged_users', "");
    };
    MainService.prototype.GetChatHistory = function (params) {
        return this.httpService.GetData('/messages/get_history', this.ParamsToUrlSearchParams(params));
    };
    /* MESSAGES BLOCK END */
    /* USERS BLOCK START */
    MainService.prototype.GetAllUsers = function (params) {
        return this.httpService.GetData('/users/get_all', this.ParamsToUrlSearchParams(params));
    };
    MainService.prototype.GetProffesionals = function (params) {
        return this.httpService.GetData('/users/get_professionals', this.ParamsToUrlSearchParams(params));
    };
    MainService.prototype.GetMe = function () {
        return this.httpService.GetData('/users/get_me', "");
    };
    MainService.prototype.CreateUser = function (params) {
        return this.httpService.PostData('/users/create', JSON.stringify(params));
    };
    MainService.prototype.UpdateUser = function (id, params) {
        return this.httpService.PutData('/users/update/', JSON.stringify(params));
    };
    MainService.prototype.UserModelToCreateUserModel = function (user) {
        var result = {
            email: user.email,
            name: user.name,
            date_of_birth: user.date_of_birth,
            gender: user.gender,
            user_type: user.user_type,
            address: (user.user_type == "professional") ? user.address : null,
            phone: (user.user_type == "professional") ? user.phone : null,
            description: (user.user_type == "professional") ? user.description : null
        };
        return result;
    };
    MainService.prototype.ChangePassword = function (old_pw, new_pw) {
        return this.httpService.PostData('/users/change_password', JSON.stringify({ old_password: old_pw, new_password: new_pw }));
    };
    MainService.prototype.GetUserById = function (id) {
        return this.httpService.GetData('/users/get/' + id, '');
    };
    /* USERS BLOCK END */
    /* COMMENTS BLOCK START */
    MainService.prototype.GetAllComments = function (params) {
        return this.httpService.GetData('/comments/get_all', this.ParamsToUrlSearchParams(params));
    };
    MainService.prototype.GetCommentById = function (id) {
        return this.httpService.GetData('/comments/get/' + id, "");
    };
    MainService.prototype.CreateComment = function (params) {
        return this.httpService.PostData('/comments/create', JSON.stringify(params));
    };
    MainService.prototype.DeleteComment = function (id) {
        return this.httpService.DeleteData('/comments/delete/' + id);
    };
    /* COMMENTS BLOCK END */
    /* DATA ACCESS BLOCK START */
    MainService.prototype.ChangePage = function (page) {
        this.onPageChange$.next(page);
    };
    MainService.prototype.ParamsToUrlSearchParams = function (params) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        for (var key in params) {
            var prop = params[key];
            if (prop) {
                if (prop instanceof Array) {
                    for (var i in prop) {
                        if (prop[i])
                            options.append(key + "[]", prop[i]);
                    }
                }
                else
                    options.set(key, params[key]);
            }
        }
        console.log(options.toString());
        return options.toString();
    };
    MainService.prototype.GetCheckedCheckBoxesValue = function (input) {
        var result = [];
        var checked = input.filter(function (x) { return x.checked; });
        for (var _i = 0, checked_1 = checked; _i < checked_1.length; _i++) {
            var i = checked_1[_i];
            result.push(i.value);
        }
        return result;
    };
    MainService.prototype.GetCheckBoxValueFromStringArr = function (input, output) {
        output.find(function (x) { return true; }).checked = false;
        var _loop_1 = function (i) {
            output.find(function (x) { return x.value == i; }).checked = true;
        };
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var i = input_1[_i];
            _loop_1(i);
        }
        return output;
    };
    /*GetCheckBoxModelFromString(name:string): CheckboxModel{
        return new CheckboxModel(name);
    }*/
    MainService.prototype.GetCheckBoxListFromArray = function (arr) {
        var result = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var i = arr_1[_i];
            result.push(new __WEBPACK_IMPORTED_MODULE_11__models_checkbox_model__["a" /* CheckboxModel */](i, i));
        }
        console.log(result);
        return result;
    };
    MainService.prototype.GetActivityFirstLevelCategories = function () {
        var result = [], iter;
        var categories = this.GetActivityAllCategories();
        var keys = categories.keys();
        while (iter = keys.next().value) {
            result.push(iter);
        }
        console.log(result);
        return result;
    };
    MainService.prototype.GetAddr = function (keyword) {
        console.log("start getaddr");
        return this.httpService.GoogleGet(keyword);
    };
    MainService.prototype.GetActivityAllCategories = function () {
        return new Map([
            [
                "Sport Freestyle",
                [
                    "Skateboard",
                    "Roller ligne",
                    "Roller 4 roues",
                    "Trotinette",
                    "Bmx"
                ]
            ],
            [
                "Sport outdoor",
                [
                    "Cyclisme cyclotourisme",
                    "Cyclisme club",
                    "VTT (rando et terrain de pratique)",
                    "Accro branche",
                    "Tremplin",
                    "Roller",
                    "Ski à Roulette",
                ]
            ],
            [
                "Sport de précision",
                [
                    "Pétanque",
                    "Echec",
                    "Tir à l’arc",
                    "Tir à la sportif",
                    "Golf"
                ]
            ],
            [
                "Course à pied",
                [
                    "Loisir",
                    "Trail"
                ]
            ],
            [
                "Sport zen et pour tous",
                [
                    "Randonnée pedestre",
                    "Marche nordique"
                ]
            ],
            [
                "Sport détente",
                [
                    "Yoga",
                    "Pilat",
                    "Methode f..."
                ]
            ],
            [
                "Sport Fitness",
                [
                    "Salle de fitness",
                    "Gym suedoise",
                    "Cross Fit"
                ]
            ],
            [
                "Sport aquatique en bassin",
                [
                    "Natation détente et loisir",
                    "Natation club",
                    "Apnée",
                    "Plongée",
                    "Natation synchro",
                    "Aquagym",
                    "Nage avec Palmes"
                ]
            ],
            [
                "Sport aquatique en mer",
                [
                    "Plongée",
                    "Snorkeling",
                    "pêche sous marine",
                    "Pêche en étan",
                    "Pêche en haute mer",
                    "windsurf",
                    "kite surf",
                    "kayak en mer",
                    "Paddle",
                    "pirogue",
                    "nage avec Palmes"
                ]
            ],
            [
                "Sport aquatique bassin ou Lac",
                [
                    "Ski nautique",
                    "Planche à voile",
                    "Voile",
                    "Kayak"
                ]
            ],
            [
                "Sport de plage équipe",
                [
                    "Beach volley",
                    "Beach soccer",
                    "Surf",
                    "Bodyboard"
                ]
            ],
            [
                "Sport en eau vive",
                [
                    "Kayak",
                    "Kanoe",
                    "Canyoning"
                ]
            ],
            [
                "Sport de montagne été",
                [
                    "Alpinisme",
                    "VTT descente",
                    "VTT électrique",
                    "Cyclotourisme",
                    "Pêche",
                    "Parapente",
                    "Escalade",
                    "Via ferrata",
                    "Randonnée haute montagne",
                    "Ski/snowbard",
                    "Ski sur herbe"
                ]
            ],
            [
                "Sport Combat",
                [
                    "Judo",
                    "Karaté",
                    "Kung-fu",
                    "Jujitsu",
                    "Mue Taï",
                    "Kick boxing",
                    "Boxe française/savate",
                    "Boxe"
                ]
            ],
            [
                "Sport aérien ou sensation forte",
                [
                    "Saut en parachute",
                    "Parapente"
                ]
            ],
            [
                "Sport à voile de mer ou en bassin(lac)",
                [
                    "Char à voile",
                    "Planche à Voile",
                    "Kite surf",
                    "wind surf"
                ]
            ],
            [
                "Sport équipe ou de ballon",
                [
                    "Volley (club et terrain)",
                    "Handball (club et terrain)",
                    "Basket (Club et terrain)",
                    "Foot (terrain libre)",
                    "Hockey sur Gazon",
                    "Football (Five)",
                    "Football (Club)",
                    "Quidditch",
                    "Beach soccer"
                ]
            ],
            [
                "Sports Loisirs et/ou compétitifs individuel et/ou en équipe",
                [
                    "Billard",
                    "Bowling",
                    "Escrime",
                    "Tennis",
                    "Badminton",
                    "Squash"
                ]
            ],
            [
                "Sensation forte",
                [
                    "Saut à l’élastique ou bunjjy"
                ]
            ],
            [
                "Sport Equestre",
                [
                    "Equitation",
                    "Voltige",
                    "Dressage", ,
                    "Saut d’obstacle"
                ]
            ],
            [
                "Sport avec animaux",
                [
                    "Dressage aigle",
                    "Dressage chien"
                ]
            ],
            [
                "Sport à moteur",
                [
                    "Karting",
                    "Moto cross",
                    "Buggy",
                    "Quad",
                    "Jet ski"
                ]
            ],
            [
                "A la montagne",
                [
                    "Ski alpin (ski seul)",
                    "Ski compétition (club)",
                    "Ski alpin (ski seul)",
                    "Ski compétition (club)",
                    "Ski freestyle",
                    "Snow freestyle",
                    "Ski de bosse",
                    "Saut a ski loisir",
                    "Saut a ski club",
                    "Biathlon loisir",
                    "Biathlon club",
                    "Snowboard ou surf des neiges",
                    "Télémark"
                ]
            ],
            [
                "Sport de glisse divers",
                [
                    "Ski joering",
                    "Snowscoot",
                    "VTT sur neige",
                    "Snow kite",
                    "Ski de randonnée group",
                    "Ski de randonnée club",
                    "Surf de randonnée group",
                    "Surf de randonnée club",
                    "Trek",
                    "Luge de loisir",
                    "Luge sur piste bobsleigh"
                ]
            ],
            [
                "En ville",
                [
                    "Ski alpin",
                    "Snowboard indoor",
                    "Ski nordique indoor",
                    "Patinoire (liste patinoire alentour)",
                    "Patinage loisir",
                    "Patinage artistique (club)",
                    "Patinage de vitesse",
                    "Curling",
                    "Hockey su glace (club)"
                ]
            ]
        ]);
    };
    MainService.prototype.GetCategoriesAsArrayCategory = function () {
        var result = [], iter, categories = this.GetActivityAllCategories();
        var keys = categories.keys();
        while (iter = keys.next().value) {
            for (var _i = 0, _a = categories.get(iter); _i < _a.length; _i++) {
                var item = _a[_i];
                result.push({
                    value: iter + " " + item,
                    name: item,
                    parent: iter
                });
            }
        }
        return result;
    };
    MainService.prototype.GetAllCategoriesAsArrayCategory = function () {
        var result = [], iter;
        var categories = this.GetActivityFirstLevelCategories();
        result.push({
            value: '',
            name: '',
            parent: ''
        });
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var item = categories_1[_i];
            result.push({
                value: item,
                name: item,
                parent: ''
            });
        }
        return result.concat(this.GetCategoriesAsArrayCategory());
    };
    return MainService;
}());
MainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MainService);

var _a, _b;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map