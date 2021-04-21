(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slideshow-slideshow-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slideshow/slideshow.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slideshow/slideshow.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scroll-y=\"false\">\n  <div class=\"full_height carousel\">\n    <div class=\"container\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"col-logo\">\n          <img src=\"../../assets/img/LOGOS/iso_blue.png\" class=\"logo1\" width=\"100%\" >\n        </ion-col>\n      </ion-row>\n    </div>\n  <ion-slides pager=\"true\">\n\n    <ion-slide>\n        <div class=\"container\">\n          <ion-row class=\"pt-70\">\n            <ion-col size=\"12\" class=\"center\">\n               <img src=\"../../assets/img/RECURSOS/slide_1.png\" width=\"100%\" class=\"img-slide\">\n            </ion-col>\n          </ion-row>\n        </div>\n    </ion-slide>\n  \n    <ion-slide>\n        <div class=\"container\">\n          <ion-row class=\"pt-70\">\n            <ion-col size=\"12\" class=\"center\">\n               <img src=\"../../assets/img/RECURSOS/slide_2.png\" width=\"100%\" class=\"img-slide\">\n            </ion-col>\n          </ion-row>\n        </div>\n    </ion-slide>\n  \n    <ion-slide>\n        <div class=\"container\">\n          <ion-row class=\"pt-70\">\n            <ion-col size=\"12\" class=\"center\">\n               <img src=\"../../assets/img/RECURSOS/slide_3.png\" width=\"100%\" class=\"img-slide\">\n            </ion-col>\n          </ion-row>\n        </div>\n    </ion-slide>\n  \n    <ion-slide>\n        <div class=\"container\">       \n          <ion-row class=\"pt-70\">\n            <ion-col size=\"12\" class=\"center\">\n               <img src=\"../../assets/img/RECURSOS/slide_4.png\" width=\"100%\" class=\"img-slide\">\n            </ion-col>\n          </ion-row>\n        </div>\n    </ion-slide>\n\n    <ion-slide>\n        <div class=\"container\">\n          <ion-row class=\"pt-70\">\n            <ion-col size=\"12\" class=\"center\">\n               <img src=\"../../assets/img/RECURSOS/slide_5.png\" width=\"100%\" class=\"img-slide\">\n            </ion-col>\n          </ion-row>\n        </div>\n    </ion-slide>\n\n    <ion-slide>\n        <div class=\"container\">\n          <ion-row class=\"pt-70\">\n            <ion-col size=\"12\" class=\"center\">\n               <img src=\"../../assets/img/RECURSOS/slide_6.png\" width=\"100%\" class=\"img-slide\">\n            </ion-col>\n          </ion-row>\n        </div>\n    </ion-slide>\n\n  </ion-slides>\n  <div class=\"container\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"col-btn\">\n       <ion-button class=\"btn_product\">S<p class=\"btntext\" (click)=\"goLogin()\">altar</p></ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/slideshow/slideshow-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/slideshow/slideshow-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SlideshowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowPageRoutingModule", function() { return SlideshowPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _slideshow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slideshow.page */ "./src/app/slideshow/slideshow.page.ts");




const routes = [
    {
        path: '',
        component: _slideshow_page__WEBPACK_IMPORTED_MODULE_3__["SlideshowPage"]
    }
];
let SlideshowPageRoutingModule = class SlideshowPageRoutingModule {
};
SlideshowPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SlideshowPageRoutingModule);



/***/ }),

/***/ "./src/app/slideshow/slideshow.module.ts":
/*!***********************************************!*\
  !*** ./src/app/slideshow/slideshow.module.ts ***!
  \***********************************************/
/*! exports provided: SlideshowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowPageModule", function() { return SlideshowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _slideshow_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideshow-routing.module */ "./src/app/slideshow/slideshow-routing.module.ts");
/* harmony import */ var _slideshow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideshow.page */ "./src/app/slideshow/slideshow.page.ts");







let SlideshowPageModule = class SlideshowPageModule {
};
SlideshowPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slideshow_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlideshowPageRoutingModule"]
        ],
        declarations: [_slideshow_page__WEBPACK_IMPORTED_MODULE_6__["SlideshowPage"]]
    })
], SlideshowPageModule);



/***/ }),

/***/ "./src/app/slideshow/slideshow.page.scss":
/*!***********************************************!*\
  !*** ./src/app/slideshow/slideshow.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background: #009bd7;\n  --bullet-background-active: #009bd7;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carousel {\n  position: relative;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('bg_slides.png');\n}\n\n.full_height {\n  height: 100vh;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.logo1 {\n  padding-top: 40px !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.col-btn {\n  text-align: right;\n  padding-top: 90px !important;\n}\n\n.col-logo {\n  padding-top: -5px !important;\n}\n\n.btn_product {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  text-decoration: none;\n  height: 53px;\n}\n\n@media (max-width: 335px) {\n  .col-btn {\n    text-align: right;\n    padding-top: 50px !important;\n  }\n}\n\n@media (min-height: 810px) and (max-height: 830px) {\n  .col-btn {\n    text-align: right;\n    padding-top: 200px !important;\n  }\n\n  .full_height {\n    height: 92vh;\n  }\n}\n\n.btntext {\n  text-transform: lowercase;\n}\n\n@media (min-height: 585px) and (max-height: 610px) {\n  .col-btn {\n    text-align: right;\n    padding-top: 45px !important;\n  }\n}\n\n@media (min-height: 537px) and (max-height: 559px) {\n  .col-btn {\n    text-align: right;\n    padding-top: 5px !important;\n  }\n}\n\n@media (min-height: 560px) and (max-height: 584px) {\n  .col-btn {\n    text-align: right;\n    padding-top: 25px !important;\n  }\n}\n\n@media (min-height: 585px) and (max-height: 623px) {\n  .full_height {\n    height: 106vh;\n  }\n}\n\n@media (min-height: 537px) and (max-height: 584px) {\n  .full_height {\n    height: 114vh;\n  }\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .full_height {\n    height: 132vh;\n  }\n\n  .logo1 {\n    padding-top: 0px !important;\n  }\n\n  .btn_product {\n    --background: #00a2dd !important;\n    padding: 0px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 2px !important;\n    text-align: center !important;\n    font-size: 28px !important;\n    font-weight: 600 !important;\n    text-decoration: none;\n    height: 60px;\n    width: 100px;\n    margin-right: 40px;\n  }\n\n  .col-btn {\n    text-align: right;\n    padding-top: 0px !important;\n  }\n\n  .container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: -20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvc2xpZGVzaG93L3NsaWRlc2hvdy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NsaWRlc2hvdy9zbGlkZXNob3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxtQ0FBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7RUFDQSx5Q0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSw0QkFBQTtBQ01KOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7QUNPSjs7QURMQTtFQUNJLDRCQUFBO0FDUUo7O0FETkE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDU0o7O0FEUEE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsNEJBQUE7RUNVTjtBQUNGOztBRFJBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLDZCQUFBO0VDVU47O0VEUkU7SUFDSSxZQUFBO0VDV047QUFDRjs7QURUQTtFQUNJLHlCQUFBO0FDV0o7O0FEVEE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsNEJBQUE7RUNZTjtBQUNGOztBRFZBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLDJCQUFBO0VDWU47QUFDRjs7QURWQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSw0QkFBQTtFQ1lOO0FBQ0Y7O0FEVkE7RUFDSTtJQUNJLGFBQUE7RUNZTjtBQUNGOztBRFZBO0VBQ0k7SUFDSSxhQUFBO0VDWU47QUFDRjs7QURWQTtFQUNJO0lBQ0ksYUFBQTtFQ1lOOztFRFZFO0lBQ0ksMkJBQUE7RUNhTjs7RURYRTtJQUNJLGdDQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNjTjs7RURaRTtJQUNJLGlCQUFBO0lBQ0EsMkJBQUE7RUNlTjs7RURiRTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDZ0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zbGlkZXNob3cvc2xpZGVzaG93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDliZDc7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cbi5jYXJvdXNlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9SRUNVUlNPUy9iZ19zbGlkZXMucG5nKTtcbn1cbi5mdWxsX2hlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sb2dvMSB7XG4gICAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbC1idG4ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XG59XG4uY29sLWxvZ28ge1xuICAgIHBhZGRpbmctdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuX3Byb2R1Y3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGhlaWdodDogNTNweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMzVweCkge1xuICAgIC5jb2wtYnRuIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MTBweCkgYW5kIChtYXgtaGVpZ2h0OiA4MzBweCkge1xuICAgIC5jb2wtYnRuIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZnVsbF9oZWlnaHQge1xuICAgICAgICBoZWlnaHQ6IDkydmg7XG4gICAgfVxufVxuLmJ0bnRleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDU4NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDYxMHB4KSB7XG4gICAgLmNvbC1idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy10b3A6IDQ1cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDUzN3B4KSBhbmQgKG1heC1oZWlnaHQ6IDU1OXB4KSB7XG4gICAgLmNvbC1idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogNTYwcHgpIGFuZCAobWF4LWhlaWdodDogNTg0cHgpIHtcbiAgICAuY29sLWJ0biB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogNTg1cHgpIGFuZCAobWF4LWhlaWdodDogNjIzcHgpIHtcbiAgICAuZnVsbF9oZWlnaHQge1xuICAgICAgICBoZWlnaHQ6IDEwNnZoO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogNTM3cHgpIGFuZCAobWF4LWhlaWdodDogNTg0cHgpIHtcbiAgICAuZnVsbF9oZWlnaHQge1xuICAgICAgICBoZWlnaHQ6IDExNHZoO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAgIC5mdWxsX2hlaWdodCB7XG4gICAgICAgIGhlaWdodDogMTMydmg7XG4gICAgfVxuICAgIC5sb2dvMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bl9wcm9kdWN0IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyBcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAuY29sLWJ0biB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuIiwiaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMwMDliZDc7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMDA5YmQ3O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9SRUNVUlNPUy9iZ19zbGlkZXMucG5nKTtcbn1cblxuLmZ1bGxfaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5sb2dvMSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wtYnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtbG9nbyB7XG4gIHBhZGRpbmctdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcHJvZHVjdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDogNTNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMzNXB4KSB7XG4gIC5jb2wtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgxMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDgzMHB4KSB7XG4gIC5jb2wtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mdWxsX2hlaWdodCB7XG4gICAgaGVpZ2h0OiA5MnZoO1xuICB9XG59XG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogNTg1cHgpIGFuZCAobWF4LWhlaWdodDogNjEwcHgpIHtcbiAgLmNvbC1idG4ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiA0NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogNTM3cHgpIGFuZCAobWF4LWhlaWdodDogNTU5cHgpIHtcbiAgLmNvbC1idG4ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA1NjBweCkgYW5kIChtYXgtaGVpZ2h0OiA1ODRweCkge1xuICAuY29sLWJ0biB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA1ODVweCkgYW5kIChtYXgtaGVpZ2h0OiA2MjNweCkge1xuICAuZnVsbF9oZWlnaHQge1xuICAgIGhlaWdodDogMTA2dmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogNTM3cHgpIGFuZCAobWF4LWhlaWdodDogNTg0cHgpIHtcbiAgLmZ1bGxfaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDExNHZoO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmZ1bGxfaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEzMnZoO1xuICB9XG5cbiAgLmxvZ28xIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuX3Byb2R1Y3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxuXG4gIC5jb2wtYnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/slideshow/slideshow.page.ts":
/*!*********************************************!*\
  !*** ./src/app/slideshow/slideshow.page.ts ***!
  \*********************************************/
/*! exports provided: SlideshowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowPage", function() { return SlideshowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let SlideshowPage = class SlideshowPage {
    constructor(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    goLogin() {
        this.router.navigate(['login1']);
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
SlideshowPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
SlideshowPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slideshow',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slideshow.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slideshow/slideshow.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slideshow.page.scss */ "./src/app/slideshow/slideshow.page.scss")).default]
    })
], SlideshowPage);



/***/ })

}]);
//# sourceMappingURL=slideshow-slideshow-module-es2015.js.map