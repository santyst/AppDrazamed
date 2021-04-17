(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createaccount-createaccount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createaccount/createaccount.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createaccount/createaccount.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header without a border -->\n<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar class=\"header-styles\">\n    <img  class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1 copia.png\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n  <form [formGroup]=\"registroForm\"  #form=\"ngForm\">\n    <div id=\"container\">\n      <ion-list>\n    <!--<img class=\"logo-form\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED-04.png\">-->\n        <p>Crear cuenta</p>\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Nombre</ion-label>\n        <ion-input formControlName=\"first_name\" type=\"text\" [(ngModel)]=\"register1.first_name\" name=\"first_name\" ngControl=\"first_name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Apellido</ion-label>\n        <ion-input formControlName=\"last_name\" type=\"text\" [(ngModel)]=\"register1.last_name\" name=\"last_name\" ngControl=\"last_name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Correo</ion-label>\n        <ion-input formControlName=\"email\" type=\"email\" [(ngModel)]=\"register1.email\" name=\"email\" ngControl=\"email\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of error_messages.email\">\n        <ng-container *ngIf=\"registroForm.get('email').hasError(error.type) && \n              (registroForm.get('email').dirty || registroForm.get('email').touched)\">\n          <small class=\"error-message\" >{{ error.message }}</small>\n        </ng-container>\n      </div>\n      \n      <small class=\"error-message\" *ngIf=\"gDisplayName.hasError('notUnique')\">Email already exist</small>\n      \n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Contraseña</ion-label>\n        <ion-input formControlName=\"password\" type=\"password\" [(ngModel)]=\"register1.password\" name=\"password\" ngControl=\"password\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Confirmar contraseña</ion-label>\n        <ion-input formControlName=\"confirm_password\" type=\"password\" [(ngModel)]=\"register1.confirm_password\" name=\"confirm_password\" ngControl=\"confirm_password\"></ion-input>\n      </ion-item>\n      \n      <div>\n     \n        <small class=\"error-message\" *ngIf=\"!registroForm.get('confirm_password').errors && registroForm.hasError('passwordNotMatch') && (registroForm.get('confirm_password').dirty || registroForm.get('confirm_password').touched)\">\n          Las contraseñas no coinciden\n        </small>\n      </div>\n    </ion-list>\n    <ion-button [disabled]=\"!registroForm.valid\" class=\"btn-continue\" expand=\"block\" (click)=\"CreateA()\">SIGUIENTE</ion-button>\n    </div>\n    \n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/createaccount/createaccount-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/createaccount/createaccount-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateaccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateaccountPageRoutingModule", function() { return CreateaccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _createaccount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createaccount.page */ "./src/app/createaccount/createaccount.page.ts");




const routes = [
    {
        path: '',
        component: _createaccount_page__WEBPACK_IMPORTED_MODULE_3__["CreateaccountPage"]
    }
];
let CreateaccountPageRoutingModule = class CreateaccountPageRoutingModule {
};
CreateaccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateaccountPageRoutingModule);



/***/ }),

/***/ "./src/app/createaccount/createaccount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/createaccount/createaccount.module.ts ***!
  \*******************************************************/
/*! exports provided: CreateaccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateaccountPageModule", function() { return CreateaccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _createaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createaccount-routing.module */ "./src/app/createaccount/createaccount-routing.module.ts");
/* harmony import */ var _createaccount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createaccount.page */ "./src/app/createaccount/createaccount.page.ts");







let CreateaccountPageModule = class CreateaccountPageModule {
};
CreateaccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _createaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateaccountPageRoutingModule"]
        ],
        declarations: [_createaccount_page__WEBPACK_IMPORTED_MODULE_6__["CreateaccountPage"]]
    })
], CreateaccountPageModule);



/***/ }),

/***/ "./src/app/createaccount/createaccount.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/createaccount/createaccount.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #009bd7;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #fff !important;\n  padding-top: 30px;\n  padding-bottom: 10px;\n  height: 90px;\n  text-align: center;\n}\n\n.content-image {\n  height: 50px;\n}\n\n#container {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  background: white;\n  --ion-background-color: #fff;\n  max-width: 85% !important;\n  padding-top: 10px;\n  padding-bottom: 50px;\n  padding-left: 30px;\n  padding-right: 20px;\n  margin-top: 20px;\n  border-radius: 35px;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.logo-form {\n  text-align: center;\n  position: absolute;\n  left: 70%;\n  right: 0;\n  top: 15%;\n  transform: translateY(-106%);\n  width: 25%;\n}\n\nion-item {\n  --padding-start: 0px;\n  --border-style: none;\n}\n\nion-label {\n  --color: #b4b4b4 !important;\n}\n\nion-input,\nion-datetime {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n  margin-top: 5px;\n}\n\n.btn-continue {\n  margin-top: 10% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #015670 !important;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  width: 50%;\n  --border-radius: 16px !important;\n}\n\np {\n  font-weight: bold;\n  color: #7e7e7e;\n}\n\nion-select {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n  margin-top: 5px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n@media (min-width: 400px) and (max-width: 440px) {\n  .logo-form {\n    transform: translateY(-106%);\n  }\n}\n\n@media (min-width: 365px) and (max-width: 399px) {\n  .logo-form {\n    transform: translateY(-106%);\n  }\n}\n\n@media (min-width: 333px) and (max-width: 344px) {\n  .logo-form {\n    transform: translateY(-110%);\n  }\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  #container {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    background: white;\n    --ion-background-color: #fff;\n    max-width: 85% !important;\n    padding-top: 10px;\n    padding-bottom: 50px;\n    padding-left: 30px;\n    padding-right: 20px;\n    margin-top: 80px;\n    border-radius: 35px;\n    height: 840px !important;\n  }\n\n  .logo-form {\n    text-align: center;\n    position: absolute;\n    left: 70%;\n    right: 0;\n    top: 15%;\n    transform: translateY(-100%);\n    width: 25%;\n  }\n\n  p {\n    font-weight: bold;\n    color: #7e7e7e;\n    font-size: 30px;\n  }\n\n  .label {\n    --color: #b4b4b4 !important;\n    font-size: 35px;\n  }\n\n  ion-input,\nion-datetime {\n    border: 3px solid #eeeeee;\n    border-radius: 16px;\n    padding-left: 10px !important;\n    margin-top: 12px;\n    min-height: 60px !important;\n    font-size: 25px;\n  }\n\n  .btn-continue {\n    margin-top: 5% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #015670 !important;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    width: 50%;\n    --border-radius: 16px !important;\n    font-size: 30px;\n    height: 50px;\n  }\n\n  .error-message {\n    color: var(--ion-color-danger);\n    font-size: 25px;\n  }\n\n  .header-styles {\n    --background: #fff !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-header {\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvY3JlYXRlYWNjb3VudC9jcmVhdGVhY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlYWNjb3VudC9jcmVhdGVhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsdUNBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNHSjs7QURBQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QURBQTtFQUNJLDJCQUFBO0FDR0o7O0FEQUE7O0VBRUkseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLDhCQUFBO0FDS0o7O0FERkE7RUFDSTtJQUNJLDRCQUFBO0VDS047QUFDRjs7QURIQTtFQUNJO0lBQ0ksNEJBQUE7RUNLTjtBQUNGOztBREhBO0VBQ0k7SUFDSSw0QkFBQTtFQ0tOO0FBQ0Y7O0FERkE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtFQ0lOOztFREZFO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsVUFBQTtFQ0tOOztFREhFO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ01OOztFREpFO0lBQ0ksMkJBQUE7SUFDQSxlQUFBO0VDT047O0VETEU7O0lBRUkseUJBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtJQUNBLGVBQUE7RUNRTjs7RURORTtJQUNJLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VDU047O0VEUEU7SUFDSSw4QkFBQTtJQUNBLGVBQUE7RUNVTjs7RURSRTtJQUNJLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDV047O0VEVEU7SUFDSSxhQUFBO0VDWU47O0VEVkU7SUFDSSxhQUFBO0VDYU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWFjY291bnQvY3JlYXRlYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xyXG59XHJcblxyXG4uaGVhZGVyLXN0eWxlcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnQtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWF4LXdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbn1cclxuXHJcbi5sb2dvLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmxvZ28tZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDYlKTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCxcclxuaW9uLWRhdGV0aW1lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tY29udGludWUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZTdlN2U7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA2JSk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM2NXB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA2JSk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogMzQ0cHgpIHtcclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogODQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjN2U3ZTdlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgICAgLS1jb2xvcjogI2I0YjRiNCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCxcclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2VlZWVlZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5idG4tY29udGludWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXN0eWxlcyB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4ubG9nby1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDcwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNiUpO1xuICB3aWR0aDogMjUlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgLS1jb2xvcjogI2I0YjRiNCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQsXG5pb24tZGF0ZXRpbWUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2lkdGg6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgLmxvZ28tZm9ybSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDYlKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2NXB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLmxvZ28tZm9ybSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDYlKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogMzQ0cHgpIHtcbiAgLmxvZ28tZm9ybSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMTAlKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBoZWlnaHQ6IDg0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9nby1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDcwJTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDE1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAubGFiZWwge1xuICAgIC0tY29sb3I6ICNiNGI0YjQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cblxuICBpb24taW5wdXQsXG5pb24tZGF0ZXRpbWUge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlZWVlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAuYnRuLWNvbnRpbnVlIHtcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDE1NjcwICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICBpb24taGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/createaccount/createaccount.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/createaccount/createaccount.page.ts ***!
  \*****************************************************/
/*! exports provided: CreateaccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateaccountPage", function() { return CreateaccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _validators_unique_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validators/unique_user */ "./src/app/validators/unique_user.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");









let CreateaccountPage = class CreateaccountPage {
    constructor(router, menuCtrl, formBuilder, http, alertController, userService, config) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.userService = userService;
        this.config = config;
        this.apiURL = `user/check-user-name?`;
        this.register1 = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        };
        // tslint:disable-next-line: variable-name
        this.error_messages = {
            email: [{ type: 'pattern', message: 'Ingresa un email valido' }]
        };
        this.registroForm = this.formBuilder.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')],
                asyncValidators: [Object(_validators_unique_user__WEBPACK_IMPORTED_MODULE_7__["uniqueDisplayName"])(this.userService, 100)],
                updateOn: 'blur' }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        }, {
            validators: this.password.bind(this)
        });
    }
    get gDisplayName() { return this.registroForm.controls.email; }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirm_password');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    CreateA() {
        /*this.http.post(`https://reqres.in/api/users`, this.register
        , {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((mensaje) => {
        console.log(mensaje);
      });*/
        const navigationExtras = {
            state: {
                user: this.register1
            }
        };
        this.router.navigate(['createaccount2'], navigationExtras);
    }
};
CreateaccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
];
CreateaccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createaccount',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./createaccount.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createaccount/createaccount.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./createaccount.page.scss */ "./src/app/createaccount/createaccount.page.scss")).default]
    })
], CreateaccountPage);



/***/ }),

/***/ "./src/app/validators/unique_user.ts":
/*!*******************************************!*\
  !*** ./src/app/validators/unique_user.ts ***!
  \*******************************************/
/*! exports provided: uniqueDisplayName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueDisplayName", function() { return uniqueDisplayName; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


const uniqueDisplayName = (userService, timeDelay = 1000) => {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(timeDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => userService.isDisplayNameUnique(control.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            control.setErrors(null);
            return res.notUnique ? { notUnique: true } : null;
        }));
    };
};
// -------------------------------------------------------


/***/ })

}]);
//# sourceMappingURL=createaccount-createaccount-module-es2015.js.map