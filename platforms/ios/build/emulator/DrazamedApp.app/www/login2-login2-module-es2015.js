(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login2-login2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login2/login2.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login2/login2.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header without a border -->\n<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar class=\"header-styles\">\n   <img  class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1 copia.png\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"ios\">\n  <form #form=\"ngForm\"  novalidate>\n    <div id=\"container\">\n      <ion-list>\n      <!--<img class=\"logo-form\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED-04.png\">-->\n      <p>Iniciar sesión</p>\n      <ion-item>\n        <ion-input type=\"email\" [(ngModel)]=\"credentials.email\" name=\"email\" ngControl=\"email\" placeholder=\"Usuario\" value=\"{{correo}}\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"password\" [(ngModel)]=\"credentials.password\" name=\"password\" ngControl=\"password\" placeholder=\"Contraseña\" value=\"{{clave}}\"></ion-input>\n      </ion-item>\n      <!--<ion-item *ngFor=\"let item of items\">\n        <h2>{{item.result.status}}</h2>\n      </ion-item>-->\n      <ion-item>\n        <ion-checkbox [(ngModel)]=\"accept\" name=\"accept\" ngControl=\"accept\"  color=\"success\" mode=\"ios\"></ion-checkbox>\n        <ion-label class=\"label-checkbox\">Recordar</ion-label><a class=\"link\" href=\"./forgottenpassword\">Olvide la contraseña</a>\n      </ion-item>\n      <ion-button class=\"btn-continue\" expand=\"block\"  (click)=\"login()\">INGRESAR</ion-button>\n    </ion-list>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login2/login2-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login2/login2-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Login2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2PageRoutingModule", function() { return Login2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login2.page */ "./src/app/login2/login2.page.ts");




const routes = [
    {
        path: '',
        component: _login2_page__WEBPACK_IMPORTED_MODULE_3__["Login2Page"]
    }
];
let Login2PageRoutingModule = class Login2PageRoutingModule {
};
Login2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Login2PageRoutingModule);



/***/ }),

/***/ "./src/app/login2/login2.module.ts":
/*!*****************************************!*\
  !*** ./src/app/login2/login2.module.ts ***!
  \*****************************************/
/*! exports provided: Login2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2PageModule", function() { return Login2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login2-routing.module */ "./src/app/login2/login2-routing.module.ts");
/* harmony import */ var _login2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login2.page */ "./src/app/login2/login2.page.ts");







let Login2PageModule = class Login2PageModule {
};
Login2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Login2PageRoutingModule"]
        ],
        declarations: [_login2_page__WEBPACK_IMPORTED_MODULE_6__["Login2Page"]]
    })
], Login2PageModule);



/***/ }),

/***/ "./src/app/login2/login2.page.scss":
/*!*****************************************!*\
  !*** ./src/app/login2/login2.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #009bd7;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #fff !important;\n  padding-top: 30px;\n  height: 90px;\n  text-align: center;\n}\n\n.content-image {\n  height: 50px;\n}\n\n#container {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  background: white;\n  --ion-background-color: #fff;\n  max-width: 85% !important;\n  padding-top: 10px;\n  padding-bottom: 50px;\n  padding-left: 30px;\n  padding-right: 20px;\n  margin-top: 20px;\n  border-radius: 35px;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.logo-form {\n  text-align: center;\n  position: absolute;\n  left: 70%;\n  right: 0;\n  top: 15%;\n  transform: translateY(-100%);\n  width: 25%;\n}\n\nion-item {\n  --padding-start: 0px;\n  --border-style: none;\n}\n\nion-label {\n  --color: #b4b4b4 !important;\n}\n\nion-input {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n}\n\nion-select {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n  color: #b4b4b4 !important;\n}\n\nion-checkbox {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  margin-top: 20px;\n}\n\n.btn-continue {\n  margin-top: 10% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #015670 !important;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  width: 50%;\n  --border-radius: 16px !important;\n}\n\np {\n  font-weight: bold;\n  color: #7e7e7e;\n}\n\n.label-checkbox {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-top: 6.5%;\n}\n\na {\n  margin-top: 3%;\n  font-size: 14px;\n  color: #b4b4b4;\n}\n\n@media (min-width: 400px) and (max-width: 440px) {\n  .logo-form {\n    transform: translateY(-96%);\n  }\n}\n\n@media (min-width: 365px) and (max-width: 399px) {\n  .logo-form {\n    transform: translateY(-95%);\n  }\n}\n\n@media (min-width: 333px) and (max-width: 344px) {\n  .logo-form {\n    transform: translateY(-110%);\n  }\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  #container {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    background: white;\n    --ion-background-color: #fff;\n    max-width: 85% !important;\n    padding-top: 10px;\n    padding-bottom: 50px;\n    padding-left: 30px;\n    padding-right: 20px;\n    margin-top: 80px;\n    border-radius: 35px;\n    height: 500px !important;\n  }\n\n  .logo-form {\n    text-align: center;\n    position: absolute;\n    left: 70%;\n    right: 0;\n    top: 15%;\n    transform: translateY(-60%);\n    width: 25%;\n  }\n\n  p {\n    font-weight: bold;\n    color: #7e7e7e;\n    font-size: 30px;\n  }\n\n  .label {\n    --color: #b4b4b4 !important;\n    font-size: 35px;\n  }\n\n  ion-input,\nion-datetime {\n    border: 3px solid #eeeeee;\n    border-radius: 16px;\n    padding-left: 10px !important;\n    margin-top: 12px;\n    min-height: 60px !important;\n    font-size: 25px;\n  }\n\n  .btn-continue {\n    margin-top: 5% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #015670 !important;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    width: 50%;\n    --border-radius: 16px !important;\n    font-size: 30px;\n    height: 50px;\n  }\n\n  .error-message {\n    color: var(--ion-color-danger);\n    font-size: 25px;\n  }\n\n  .header-styles {\n    --background: #fff !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-header {\n    height: 100px;\n  }\n\n  ion-checkbox {\n    width: 9%;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    margin-top: 30px;\n    height: 49px;\n  }\n\n  a {\n    margin-top: 3%;\n    font-size: 25px;\n    color: #b4b4b4;\n  }\n\n  .label-checkbox {\n    font-size: 30px;\n    margin-left: 5px;\n    margin-top: 6.5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvbG9naW4yL2xvZ2luMi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luMi9sb2dpbjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSx1Q0FBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURDQTtFQUNJLDJCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSTtJQUNJLDJCQUFBO0VDR047QUFDRjs7QUREQTtFQUNJO0lBQ0ksMkJBQUE7RUNHTjtBQUNGOztBRERBO0VBQ0k7SUFDSSw0QkFBQTtFQ0dOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtFQ0dOOztFRERFO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFQ0lOOztFREZFO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0tOOztFREhFO0lBQ0ksMkJBQUE7SUFDQSxlQUFBO0VDTU47O0VESkU7O0lBRUkseUJBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtJQUNBLGVBQUE7RUNPTjs7RURMRTtJQUNJLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VDUU47O0VETkU7SUFDSSw4QkFBQTtJQUNBLGVBQUE7RUNTTjs7RURQRTtJQUNJLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDVU47O0VEUkU7SUFDSSxhQUFBO0VDV047O0VEVEU7SUFDSSxhQUFBO0VDWU47O0VEVkU7SUFDSSxTQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ2FOOztFRFhFO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDY047O0VEWkU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ2VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbjIvbG9naW4yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XHJcbn1cclxuXHJcbi5oZWFkZXItc3R5bGVzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250ZW50LWltYWdlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4jY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59XHJcblxyXG4ubG9nby1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5sb2dvLWZvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgLS1jb2xvcjogI2I0YjRiNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNiNGI0YjQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY29udGludWUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZTdlN2U7XHJcbn1cclxuXHJcbi5sYWJlbC1jaGVja2JveCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNi41JTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjYjRiNGI0O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAubG9nby1mb3JtIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTk2JSk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM2NXB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTUlKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzMzcHgpIGFuZCAobWF4LXdpZHRoOiAzNDRweCkge1xyXG4gICAgLmxvZ28tZm9ybSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpe1xyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM3ZTdlN2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0LFxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb250aW51ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItc3R5bGVzIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDklO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICNiNGI0YjQ7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtY2hlY2tib3gge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYuNSU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbiNjb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5sb2dvLWZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzAlO1xuICByaWdodDogMDtcbiAgdG9wOiAxNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pb24tbGFiZWwge1xuICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2lkdGg6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbi5sYWJlbC1jaGVja2JveCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNi41JTtcbn1cblxuYSB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYjRiNGI0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAubG9nby1mb3JtIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTk2JSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjVweCkgYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gIC5sb2dvLWZvcm0ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTUlKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogMzQ0cHgpIHtcbiAgLmxvZ28tZm9ybSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9nby1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDcwJTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDE1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgLS1jb2xvcjogI2I0YjRiNCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuXG4gIGlvbi1pbnB1dCxcbmlvbi1kYXRldGltZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2VlZWVlZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIGlvbi1oZWFkZXIge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICBpb24tY2hlY2tib3gge1xuICAgIHdpZHRoOiA5JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICB9XG5cbiAgYSB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjYjRiNGI0O1xuICB9XG5cbiAgLmxhYmVsLWNoZWNrYm94IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA2LjUlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/login2/login2.page.ts":
/*!***************************************!*\
  !*** ./src/app/login2/login2.page.ts ***!
  \***************************************/
/*! exports provided: Login2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Page", function() { return Login2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_tratamientos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/tratamientos.service */ "./src/app/services/tratamientos.service.ts");











let Login2Page = class Login2Page {
    constructor(router, http, menuCtrl, alertController, platform, auth, storage, loadingController, fcm, config, tratamientoService) {
        this.router = router;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.platform = platform;
        this.auth = auth;
        this.storage = storage;
        this.loadingController = loadingController;
        this.fcm = fcm;
        this.config = config;
        this.tratamientoService = tratamientoService;
        this.key = 'user';
        this.key1 = 'remind';
        this.postJson = {};
        this.credentials = {
            email: '',
            password: ''
        };
        this.base_url = config.get_base_url();
        this.platform.ready().then(() => {
            this.get();
        });
    }
    postFCM() {
        this.token = window.localStorage.getItem('token-fcm');
        this.refresh_token = window.localStorage.getItem('refresh-token');
        this.apns = window.localStorage.getItem('apnsToken');
        this.usuario = this.auth.getusuario();
        this.email = this.usuario.email;
        console.log('Token android' + this.token);
        console.log('Token iOS' + this.apns);
        if (this.platform.is('android') === true) {
            this.postJson = {
                email: this.email,
                user_type: 3,
                token: this.token,
                apnstoken: this.apns,
                isAndroid: 'true'
            };
            console.log(this.postJson);
        }
        else {
            this.postJson = {
                email: this.email,
                user_type: 3,
                token: this.token,
                apnstoken: this.apns,
                isAndroid: 'false'
            };
            console.log(this.postJson);
        }
        this.http.post(`${this.base_url}user/post-fcm-data`, this.postJson).subscribe(res => {
            console.log(res);
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Por favor espera...',
                mode: 'ios',
                spinner: 'dots'
            });
            yield loading.present();
            this.auth.login(this.credentials)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('res: ', res);
                if (res) {
                    this.tratamientoService.getAlarma();
                    this.postFCM();
                    this.router.navigate(['home']);
                    if (this.accept === true) {
                        window.localStorage.setItem(this.key, JSON.stringify(this.credentials));
                        window.localStorage.setItem(this.key1, JSON.stringify(this.accept = true));
                        /*this.storage.set(this.key, this.credentials);
                        this.storage.set(this.key1, this.accept = true);*/
                        console.log('se guardo porque esta en true');
                    }
                    else {
                        console.log('no se guarda');
                        window.localStorage.removeItem(this.key);
                        window.localStorage.removeItem(this.key1);
                        /*this.storage.remove(this.key);
                        this.storage.remove(this.key1);*/
                    }
                }
                else {
                    const alert = yield this.alertController.create({
                        header: 'Login Failed',
                        message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">Usuario o contraseña incorrectos',
                        mode: 'ios',
                        cssClass: 'failed',
                        buttons: [
                            {
                                text: 'Aceptar',
                                cssClass: 'btnalert',
                            }
                        ]
                    });
                    yield alert.present();
                }
            }));
        });
    }
    get() {
        /*this.storage.get(this.key).then(val => {
           this.credenciales = val;
           this.correo = this.credenciales.email;
           this.clave = this.credenciales.password;
           this.credentials.email = this.correo;
           this.credentials.password = this.clave;
        });*/
        this.credenciales = JSON.parse(window.localStorage.getItem(this.key));
        this.correo = this.credenciales.email;
        this.clave = this.credenciales.password;
        this.credentials.email = this.correo;
        this.credentials.password = this.clave;
        this.accept = JSON.parse(window.localStorage.getItem(this.key1));
        /*this.storage.get(this.key1).then((val) => {
          this.accept = val;
        });*/
    }
    ngOnInit() {
    }
    goHome() {
        this.router.navigate(['home']);
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
Login2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] },
    { type: _services_tratamientos_service__WEBPACK_IMPORTED_MODULE_10__["TratamientosService"] }
];
Login2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login2/login2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login2.page.scss */ "./src/app/login2/login2.page.scss")).default]
    })
], Login2Page);



/***/ })

}]);
//# sourceMappingURL=login2-login2-module-es2015.js.map