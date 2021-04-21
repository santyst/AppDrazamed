(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login1-login1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" mode=\"ios\">\n  <div id=\"container-logo\">\n    <img class=\"img-primary-logo\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED-02.png\" alt=\"\">\n  </div>\n  <div id=\"container-buttons\" >\n    <!-- <ion-button class=\"buttons-modified mb-10\" expand=\"block\" (click)=\"loginGoogle()\">\n      <img class=\"button-logosg\" src=\"../../assets/img/RECURSOS/iconos-google.png\">\n      <p class=\"btn-g\">Continúa con Google</p></ion-button>\n    <ion-button class=\"buttons-modified mb-10\" expand=\"block\" (click)=\"loginFacebook()\">\n      <ion-icon expand=\"full\" slot=\"start\" name=\"logo-facebook\" class=\"button-logosf\"></ion-icon>\n      <p class=\"btn-f\">Continúa con Facebook</p></ion-button>\n    <ion-button class=\"buttons-modified mb-10\" expand=\"block\" *ngIf=\"iosPlt === true\" (click)=\"loginApple()\">\n      <ion-icon expand=\"full\" name=\"logo-apple\" slot=\"start\" class=\"button-logosa\"></ion-icon>\n      <p>Continúa con Apple</p>\n    </ion-button> -->\n   \n    <ion-button class=\"buttons-modified mb-15\" expand=\"block\" (click)=\"login2()\">Iniciar sesión</ion-button>\n    <span class=\"account-text\">¿No tienes una cuenta? </span><a class=\"link\" href=\"./createaccount\">Crear Cuenta</a>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar class=\"text-st\">\n      <span>Al continuar estas aceptando nuestros</span>\n      <br> \n      <span>términos, condiciones y politicas de privacidad</span>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/login1/login1-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login1/login1-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Login1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1PageRoutingModule", function() { return Login1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login1.page */ "./src/app/login1/login1.page.ts");




const routes = [
    {
        path: '',
        component: _login1_page__WEBPACK_IMPORTED_MODULE_3__["Login1Page"]
    }
];
let Login1PageRoutingModule = class Login1PageRoutingModule {
};
Login1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Login1PageRoutingModule);



/***/ }),

/***/ "./src/app/login1/login1.module.ts":
/*!*****************************************!*\
  !*** ./src/app/login1/login1.module.ts ***!
  \*****************************************/
/*! exports provided: Login1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1PageModule", function() { return Login1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login1-routing.module */ "./src/app/login1/login1-routing.module.ts");
/* harmony import */ var _login1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login1.page */ "./src/app/login1/login1.page.ts");







let Login1PageModule = class Login1PageModule {
};
Login1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Login1PageRoutingModule"]
        ],
        declarations: [_login1_page__WEBPACK_IMPORTED_MODULE_6__["Login1Page"]]
    })
], Login1PageModule);



/***/ }),

/***/ "./src/app/login1/login1.page.scss":
/*!*****************************************!*\
  !*** ./src/app/login1/login1.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container-logo {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n  transform: translateY(-50%);\n}\n\n#container-buttons {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 55%;\n  transform: translateY(-50%);\n}\n\nion-footer {\n  text-align: center;\n}\n\n.text-st {\n  padding: 0 !important;\n  color: #fff;\n  font-size: 12px !important;\n  font-weight: 100;\n  --background: #009bd7 !important;\n}\n\n.img-primary-logo {\n  width: 55%;\n}\n\n.buttons-modified {\n  --background: #fff;\n  --border-radius: 50px;\n  --color: gray;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  width: 80% !important;\n  text-align: center !important;\n}\n\nion-content {\n  --ion-background-color: #009bd7;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mb-15 {\n  margin-bottom: 15px;\n}\n\n.account-text {\n  color: #fff;\n}\n\n.link {\n  text-decoration: underline;\n  color: #fff;\n}\n\n.button-logosf {\n  color: #4267B2;\n  font-size: 31px;\n  margin-left: 5px;\n  margin-right: 11px;\n}\n\n.button-logosg {\n  width: 12.8%;\n  height: auto !important;\n  margin-right: 10px !important;\n  margin-left: 6.5px;\n}\n\n.button-logosa {\n  font-size: 29px;\n  color: #000;\n}\n\n.btn-g {\n  margin-right: 45px !important;\n}\n\n.btn-f {\n  margin-right: 22px !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .buttons-modified {\n    --background: #fff;\n    --border-radius: 50px;\n    --color: gray;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    width: 80% !important;\n    text-align: center !important;\n    font-size: 25px;\n  }\n\n  .text-st {\n    padding: 0 !important;\n    color: #fff;\n    font-weight: 100;\n    --background: #009bd7 !important;\n    height: 90px;\n    font-size: 25px !important;\n  }\n\n  .button-logosf {\n    color: #4267B2;\n    font-size: 51px;\n    margin-left: 0;\n    margin-right: 3px;\n  }\n\n  .button-logosg {\n    width: 9.9%;\n    height: auto !important;\n    margin-right: 5px !important;\n  }\n\n  .button-logosa {\n    font-size: 50px;\n    color: #000;\n  }\n\n  .btn-g {\n    margin-right: 45px !important;\n    font-size: 30px;\n  }\n\n  .btn-f {\n    margin-right: 12px !important;\n    font-size: 29px;\n  }\n\n  .account-text {\n    color: #fff;\n    font-size: 25px;\n  }\n\n  .link {\n    text-decoration: underline;\n    color: #fff;\n    font-size: 25px;\n  }\n\n  .img-primary-logo {\n    width: 55%;\n    margin-bottom: 127px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvbG9naW4xL2xvZ2luMS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luMS9sb2dpbjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNHSjs7QURBQTtFQUNJLFVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNHSjs7QURDQTtFQUNJLCtCQUFBO0VBQ0EsdUNBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtBQ0lKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBRERBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDT0o7O0FETEE7RUFDSSw2QkFBQTtBQ1FKOztBRE5BO0VBQ0ksNkJBQUE7QUNTSjs7QUROQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLGVBQUE7RUNTTjs7RURQRTtJQUNJLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RUNVTjs7RURQRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDVU47O0VEUkU7SUFDSSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSw0QkFBQTtFQ1dOOztFRFRFO0lBQ0ksZUFBQTtJQUNBLFdBQUE7RUNZTjs7RURWRTtJQUNJLDZCQUFBO0lBQ0EsZUFBQTtFQ2FOOztFRFhFO0lBQ0ksNkJBQUE7SUFDQSxlQUFBO0VDY047O0VEWkU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ2VOOztFRGJFO0lBQ0ksMEJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ2dCTjs7RURkRTtJQUNJLFVBQUE7SUFDQSxvQkFBQTtFQ2lCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4xL2xvZ2luMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLWxvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuI2NvbnRhaW5lci1idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dC1zdCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLXByaW1hcnktbG9nbyB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcblxyXG4uYnV0dG9ucy1tb2RpZmllZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcclxufVxyXG4ubWItMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubWItMTUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmFjY291bnQtdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnV0dG9uLWxvZ29zZiB7XHJcbiAgICBjb2xvcjogIzQyNjdCMjtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbn1cclxuLmJ1dHRvbi1sb2dvc2cge1xyXG4gICAgd2lkdGg6IDEyLjglO1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2LjVweDtcclxufVxyXG4uYnV0dG9uLWxvZ29zYSB7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uYnRuLWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1mIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcclxuICAgIC5idXR0b25zLW1vZGlmaWVkIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIC0tY29sb3I6IGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWxvZ29zZiB7XHJcbiAgICAgICAgY29sb3I6ICM0MjY3QjI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1sb2dvc2cge1xyXG4gICAgICAgIHdpZHRoOiA5LjklO1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50IDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1sb2dvc2Ege1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5idG4tZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1mIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC10ZXh0IHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAubGluayB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1wcmltYXJ5LWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI3cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIjY29udGFpbmVyLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXItYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtc3Qge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctcHJpbWFyeS1sb2dvIHtcbiAgd2lkdGg6IDU1JTtcbn1cblxuLmJ1dHRvbnMtbW9kaWZpZWQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1jb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4ubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWItMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYWNjb3VudC10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLWxvZ29zZiB7XG4gIGNvbG9yOiAjNDI2N0IyO1xuICBmb250LXNpemU6IDMxcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLmJ1dHRvbi1sb2dvc2cge1xuICB3aWR0aDogMTIuOCU7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDYuNXB4O1xufVxuXG4uYnV0dG9uLWxvZ29zYSB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5idG4tZyB7XG4gIG1hcmdpbi1yaWdodDogNDVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWYge1xuICBtYXJnaW4tcmlnaHQ6IDIycHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5idXR0b25zLW1vZGlmaWVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIC0tY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLnRleHQtc3Qge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b24tbG9nb3NmIHtcbiAgICBjb2xvcjogIzQyNjdCMjtcbiAgICBmb250LXNpemU6IDUxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cblxuICAuYnV0dG9uLWxvZ29zZyB7XG4gICAgd2lkdGg6IDkuOSU7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b24tbG9nb3NhIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAuYnRuLWcge1xuICAgIG1hcmdpbi1yaWdodDogNDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5idG4tZiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICB9XG5cbiAgLmFjY291bnQtdGV4dCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5pbWctcHJpbWFyeS1sb2dvIHtcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEyN3B4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/login1/login1.page.ts":
/*!***************************************!*\
  !*** ./src/app/login1/login1.page.ts ***!
  \***************************************/
/*! exports provided: Login1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Page", function() { return Login1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let Login1Page = class Login1Page {
    // userFacebook: any;
    constructor(router, menuCtrl, platform, auth) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.auth = auth;
    }
    ngOnInit() {
    }
    goCreateAccount() {
        this.router.navigate(['createaccount']);
    }
    login2() {
        this.router.navigate(['login2']);
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
        if (this.platform.is('ios')) {
            this.iosPlt = true;
        }
        else {
            this.iosPlt = false;
        }
    }
};
Login1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
Login1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login1.page.scss */ "./src/app/login1/login1.page.scss")).default]
    })
], Login1Page);



/***/ })

}]);
//# sourceMappingURL=login1-login1-module-es2015.js.map