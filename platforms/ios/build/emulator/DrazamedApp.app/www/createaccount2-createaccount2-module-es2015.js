(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createaccount2-createaccount2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createaccount2/createaccount2.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createaccount2/createaccount2.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header without a border -->\n<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar class=\"header-styles\">\n   <img  class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1 copia.png\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"md\">\n <form [formGroup]=\"registroForm\"  #form=\"ngForm\">\n   <div id=\"container\">\n     <ion-list>\n      <!--<img class=\"logo-form\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED-04.png\">-->\n      <p>Crear cuenta</p>\n      <!--<ion-item>\n        <ion-label position=\"stacked\">Documento de identidad</ion-label>\n        <ion-input formControlName=\"documento\" type=\"tel\" [(ngModel)]=\"register.documento\" name=\"documento\" ngControl=\"documento\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Fecha de nacimiento</ion-label>\n        <ion-datetime mode=\"md\"formControlName=\"nacimiento\" drag-content=\"false\" (ionChange)=\"doSomething(this.nacimiento)\" displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"register.nacimiento\" name=\"nacimiento\" ngControl=\"nacimiento\"></ion-datetime>\n      </ion-item>-->\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Dirección para entrega</ion-label>\n        <ion-input formControlName=\"address\" type=\"text\" [(ngModel)]=\"register.address\" name=\"address\" ngControl=\"address\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\" class=\"label\">Telefono</ion-label>\n        <ion-input formControlName=\"phone\" type=\"tel\" [(ngModel)]=\"register.phone\" name=\"phone\" ngControl=\"phone\"></ion-input>\n      </ion-item>\n      <!--<ion-item>\n        <ion-label position=\"stacked\">Género</ion-label>\n        <ion-select formControlName=\"genero\" placeholder=\"Seleccionar\" [(ngModel)]=\"register.genero\" name=\"genero\" ngControl=\"genero\" mode=\"ios\">\n          <ion-select-option>Masculino</ion-select-option>\n          <ion-select-option>Femenino</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Convenio</ion-label>\n        <ion-select formControlName=\"convenio\" placeholder=\"Seleccionar\" [(ngModel)]=\"register.convenio\" name=\"convenio\" ngControl=\"convenio\" mode=\"ios\">\n           <ion-select-option>Ninguno</ion-select-option>\n        </ion-select>\n      </ion-item>-->\n      <ion-item>\n        <ion-checkbox formControlName=\"aceptar\" [(ngModel)]=\"accept\" name=\"accept\" ngControl=\"accept\"  color=\"success\" mode=\"ios\"></ion-checkbox>\n        <ion-label class=\"label-checkbox\">Aceptar términos y condiciones</ion-label>\n      </ion-item>\n      <div *ngFor=\"let error of error_messages.aceptar\">\n        <ng-container *ngIf=\"registroForm.get('aceptar').hasError(error.type) && \n              (registroForm.get('aceptar').dirty || registroForm.get('aceptar').touched)\">\n          <small class=\"error-message\" >{{ error.message }}</small>\n        </ng-container>\n      </div>\n     </ion-list>\n     <ion-button [disabled]=\"!registroForm.valid\" class=\"btn-continue\" expand=\"block\" (click)=\"updateD()\">ACEPTAR</ion-button>\n   </div>\n </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/createaccount2/createaccount2-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/createaccount2/createaccount2-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: Createaccount2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createaccount2PageRoutingModule", function() { return Createaccount2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _createaccount2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createaccount2.page */ "./src/app/createaccount2/createaccount2.page.ts");




const routes = [
    {
        path: '',
        component: _createaccount2_page__WEBPACK_IMPORTED_MODULE_3__["Createaccount2Page"]
    }
];
let Createaccount2PageRoutingModule = class Createaccount2PageRoutingModule {
};
Createaccount2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Createaccount2PageRoutingModule);



/***/ }),

/***/ "./src/app/createaccount2/createaccount2.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/createaccount2/createaccount2.module.ts ***!
  \*********************************************************/
/*! exports provided: Createaccount2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createaccount2PageModule", function() { return Createaccount2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _createaccount2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createaccount2-routing.module */ "./src/app/createaccount2/createaccount2-routing.module.ts");
/* harmony import */ var _createaccount2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createaccount2.page */ "./src/app/createaccount2/createaccount2.page.ts");







let Createaccount2PageModule = class Createaccount2PageModule {
};
Createaccount2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _createaccount2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Createaccount2PageRoutingModule"]
        ],
        declarations: [_createaccount2_page__WEBPACK_IMPORTED_MODULE_6__["Createaccount2Page"]]
    })
], Createaccount2PageModule);



/***/ }),

/***/ "./src/app/createaccount2/createaccount2.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/createaccount2/createaccount2.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #009bd7;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #fff !important;\n  padding-top: 30px;\n  padding-bottom: 10px;\n  height: 90px;\n  text-align: center;\n}\n\n.content-image {\n  height: 50px;\n}\n\n#container {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  background: white;\n  --ion-background-color: #fff;\n  max-width: 85% !important;\n  padding-top: 10px;\n  padding-bottom: 50px;\n  padding-left: 30px;\n  padding-right: 20px;\n  margin-top: 20px;\n  border-radius: 35px;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.logo-form {\n  text-align: center;\n  position: absolute;\n  left: 70%;\n  right: 0;\n  top: 15%;\n  transform: translateY(-80%);\n  width: 25%;\n}\n\nion-item {\n  --padding-start: 0px;\n  --border-style: none;\n}\n\nion-label {\n  --color: #b4b4b4 !important;\n}\n\nion-input, ion-datetime {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n  margin-top: 5px;\n}\n\n.btn-continue {\n  margin-top: 10% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #015670 !important;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  width: 50%;\n  --border-radius: 16px !important;\n}\n\np {\n  font-weight: bold;\n  color: #7e7e7e;\n}\n\nion-select {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n  margin-top: 5px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n@media (min-width: 400px) and (max-width: 440px) {\n  .logo-form {\n    transform: translateY(-77%);\n  }\n}\n\n@media (min-width: 365px) and (max-width: 399px) {\n  .logo-form {\n    transform: translateY(-80%);\n  }\n}\n\n@media (min-width: 333px) and (max-width: 344px) {\n  .logo-form {\n    transform: translateY(-110%);\n  }\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  #container {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    background: white;\n    --ion-background-color: #fff;\n    max-width: 85% !important;\n    padding-top: 10px;\n    padding-bottom: 50px;\n    padding-left: 30px;\n    padding-right: 20px;\n    margin-top: 80px;\n    border-radius: 35px;\n    height: 560px !important;\n  }\n\n  .logo-form {\n    text-align: center;\n    position: absolute;\n    left: 70%;\n    right: 0;\n    top: 15%;\n    transform: translateY(-60%);\n    width: 25%;\n  }\n\n  p {\n    font-weight: bold;\n    color: #7e7e7e;\n    font-size: 30px;\n  }\n\n  .label {\n    --color: #b4b4b4 !important;\n    font-size: 35px;\n  }\n\n  ion-input,\nion-datetime {\n    border: 3px solid #eeeeee;\n    border-radius: 16px;\n    padding-left: 10px !important;\n    margin-top: 12px;\n    min-height: 60px !important;\n    font-size: 25px;\n  }\n\n  .btn-continue {\n    margin-top: 5% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #015670 !important;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    width: 50%;\n    --border-radius: 16px !important;\n    font-size: 30px;\n    height: 50px;\n  }\n\n  .error-message {\n    color: var(--ion-color-danger);\n    font-size: 25px;\n  }\n\n  .header-styles {\n    --background: #fff !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-header {\n    height: 100px;\n  }\n\n  ion-checkbox {\n    width: 9%;\n    height: 49px;\n  }\n\n  .label-checkbox {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvY3JlYXRlYWNjb3VudDIvY3JlYXRlYWNjb3VudDIucGFnZS5zY3NzIiwic3JjL2FwcC9jcmVhdGVhY2NvdW50Mi9jcmVhdGVhY2NvdW50Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHVDQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDR0o7O0FEQUE7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0FDR0o7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLDhCQUFBO0FDS0o7O0FERkE7RUFDSTtJQUNJLDJCQUFBO0VDS047QUFDRjs7QURIQTtFQUNJO0lBQ0ksMkJBQUE7RUNLTjtBQUNGOztBREhBO0VBQ0k7SUFDSSw0QkFBQTtFQ0tOO0FBQ0Y7O0FERkE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtFQ0lOOztFREZFO0lBQ0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtFQ0tOOztFREhFO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ01OOztFREpFO0lBQ0ksMkJBQUE7SUFDQSxlQUFBO0VDT047O0VETEU7O0lBRUkseUJBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtJQUNBLGVBQUE7RUNRTjs7RURORTtJQUNJLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VDU047O0VEUEU7SUFDSSw4QkFBQTtJQUNBLGVBQUE7RUNVTjs7RURSRTtJQUNJLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDV047O0VEVEU7SUFDSSxhQUFBO0VDWU47O0VEVkU7SUFDSSxhQUFBO0VDYU47O0VEWEU7SUFDSSxTQUFBO0lBQ0EsWUFBQTtFQ2NOOztFRFpFO0lBQ0ksZUFBQTtFQ2VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVhY2NvdW50Mi9jcmVhdGVhY2NvdW50Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xyXG59XHJcblxyXG4uaGVhZGVyLXN0eWxlcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnQtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWF4LXdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbn1cclxuXHJcbi5sb2dvLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmxvZ28tZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIC0tY29sb3I6ICNiNGI0YjQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24tZGF0ZXRpbWUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJ0bi1jb250aW51ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzdlN2U3ZTtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gICAgLmxvZ28tZm9ybSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NyUpO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNjVweCkgYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XHJcbiAgICAubG9nby1mb3JtIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwJSk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogMzQ0cHgpIHtcclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTEwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM3ZTdlN2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0LFxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb250aW51ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItc3R5bGVzIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDklO1xyXG4gICAgICAgIGhlaWdodDogNDlweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1jaGVja2JveHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4ubG9nby1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDcwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwJSk7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pb24tbGFiZWwge1xuICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCwgaW9uLWRhdGV0aW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi10b3A6IDEwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDE1NjcwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHdpZHRoOiA1MCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIC5sb2dvLWZvcm0ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzclKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2NXB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLmxvZ28tZm9ybSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MCUpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzMzcHgpIGFuZCAobWF4LXdpZHRoOiAzNDRweCkge1xuICAubG9nby1mb3JtIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGhlaWdodDogNTYwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb2dvLWZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNzAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmxhYmVsIHtcbiAgICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG5cbiAgaW9uLWlucHV0LFxuaW9uLWRhdGV0aW1lIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgaW9uLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIGlvbi1jaGVja2JveCB7XG4gICAgd2lkdGg6IDklO1xuICAgIGhlaWdodDogNDlweDtcbiAgfVxuXG4gIC5sYWJlbC1jaGVja2JveCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/createaccount2/createaccount2.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/createaccount2/createaccount2.page.ts ***!
  \*******************************************************/
/*! exports provided: Createaccount2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Createaccount2Page", function() { return Createaccount2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");










let Createaccount2Page = class Createaccount2Page {
    constructor(router, menuCtrl, formBuilder, http, alertController, userService, route, loadingController, config) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.userService = userService;
        this.route = route;
        this.loadingController = loadingController;
        this.config = config;
        this.urlcreate = `user/create-user/1`;
        this.register = {
            // documento: '',
            // nacimiento: this.doSomething,
            address: '',
            phone: '',
            // genero: '',
            // convenio: '',
            user_type: 3
        };
        // tslint:disable-next-line: variable-name
        this.error_messages = {
            aceptar: [{ type: 'required', message: 'Acepta los términos y condiciones' }]
        };
        this.base_url = config.get_base_url();
        this.registroForm = this.formBuilder.group({
            // documento: new FormControl('', [Validators.required]),
            // nacimiento: new FormControl('', [Validators.required, Validators.minLength(9)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]),
            // genero: new FormControl('', [Validators.required]),
            // convenio: new FormControl('', [Validators.required]),
            aceptar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]),
        });
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data1 = this.router.getCurrentNavigation().extras.state.user;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    doSomething(nacimiento) {
        moment__WEBPACK_IMPORTED_MODULE_7__(nacimiento).format('YYYY-MM-DD');
    }
    updateD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const datos = Object.assign(this.data1, this.register);
            console.log(datos);
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Por favor espera...',
                mode: 'ios',
                spinner: 'dots'
            });
            yield loading.present();
            this.http.post(`${this.base_url}${this.urlcreate}`, datos, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' }) })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe((mensaje) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.ready = mensaje;
                this.ready2 = this.ready.status;
                if (this.ready2 === 'SUCCESS') {
                    const alert = yield this.alertController.create({
                        header: 'La cuenta ha sido creada',
                        message: 'Verifica tu correo para activar la cuenta.',
                        mode: 'ios',
                        cssClass: 'failed',
                        backdropDismiss: false,
                        buttons: [
                            {
                                text: 'Aceptar',
                                cssClass: 'btnalert',
                                handler: (data) => { this.router.navigate(['login2']); }
                            }
                        ]
                    });
                    alert.present();
                }
            }));
        });
    }
};
Createaccount2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }
];
Createaccount2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createaccount2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./createaccount2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createaccount2/createaccount2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./createaccount2.page.scss */ "./src/app/createaccount2/createaccount2.page.scss")).default]
    })
], Createaccount2Page);



/***/ })

}]);
//# sourceMappingURL=createaccount2-createaccount2-module-es2015.js.map