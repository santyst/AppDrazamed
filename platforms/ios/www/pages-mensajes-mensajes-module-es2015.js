(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mensajes-mensajes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mensajes/mensajes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mensajes/mensajes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n    <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-menu-button slot=\"start\" menu=\"main-menu\"></ion-menu-button>\n      <ion-button class=\"carrito\" (click)=\"goCarrito()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n      <ion-badge>{{ cartItemCount | async }}</ion-badge>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n<div class=\"container\">\n  <ion-row class=\"pt-30\">\n    <ion-col size=\"12\">\n      <div class=\"row_title\">\n        <p class=\"principal_text\">Complete el siguiente formulario y estaremos atentos para resolver sus dudas</p>\n        <p class=\"description_product\">Sientase tranquilo de comunicarse con nosotros. Estaremos muy felices de ayudarle.</p>\n      </div>\n        <div class=\"custom_form\">\n          <form [formGroup]=\"mensajesForm\" > <!-- (ngSubmit)=\"submit()\" -->\n            <div class=\"form-group\">\n              <ion-label class=\"grey\">Nombre Completo</ion-label>\n              <ion-input formControlName=\"nombre\" type=\"text\" class=\"form-control\" [(ngModel)]=\"dataToSend.name\"></ion-input>\n            </div>\n\n            <div class=\"form-group\">\n              <ion-label class=\"grey\">Teléfono de Contacto</ion-label>\n              <ion-input formControlName=\"telefono\" type=\"number\" class=\"form-control\" [(ngModel)]=\"dataToSend.phone\"></ion-input>\n            </div>\n\n            <div class=\"form-group\">\n              <ion-label class=\"grey\">Correo Electrónico</ion-label>\n              <ion-input formControlName=\"correo\" type=\"email\" class=\"form-control\" [(ngModel)]=\"dataToSend.email\"></ion-input>\n            </div>\n\n            <div class=\"form-group\">\n              <ion-label class=\"grey\">Mensaje</ion-label>\n              <ion-textarea rows=\"7\" cols=\"30\" formControlName=\"mensaje\" class=\"form-control\" [(ngModel)]=\"dataToSend.msg\"></ion-textarea>\n            </div>\n            <ion-button [disabled]=\"!mensajesForm.valid\" class=\"btn-continue\" expand=\"block\" (click)=\"postData()\">Enviar</ion-button>\n          </form>\n        </div>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"result_search pt-20 pb-20\">\n\n    <ion-col size=\"3\" class=\"center pt-15\">\n \n        <img src=\"../../../assets/img/RECURSOS/phone.png\" width=\"30px\" class=\"imagenes\">\n \n    </ion-col>\n    <ion-col size=\"9\" class=\"pt-15\">\n       <p class=\"name_category_new\">Teléfonos de Contacto</p>\n       <p class=\"description_product\">(1) 879-3999</p>\n    </ion-col>\n\n    <ion-col size=\"3\" class=\"center pt-15\">\n      \n        <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-32.png\" width=\"30px\" class=\"imagenes\">\n    \n    </ion-col>\n    <ion-col size=\"9\" class=\"pt-15\">\n       <p class=\"name_category_new\">Nuestra Ubicación</p>\n       <p class=\"description_product\">Carrera 6 No. 1-20 Cajicá - Cundinamarca</p>\n    </ion-col>\n\n    <ion-col size=\"3\" class=\"center pt-15\">\n        <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-11.png\" width=\"30px\" class=\"imagenes\">\n    </ion-col>\n    <ion-col size=\"9\" class=\"pt-15\">\n       <p class=\"name_category_new\">Correo Electrónico</p>\n       <p class=\"description_product\">info@drazamed.com</p>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mensajes/mensajes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mensajes/mensajes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MensajesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageRoutingModule", function() { return MensajesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mensajes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mensajes.page */ "./src/app/pages/mensajes/mensajes.page.ts");




const routes = [
    {
        path: '',
        component: _mensajes_page__WEBPACK_IMPORTED_MODULE_3__["MensajesPage"]
    }
];
let MensajesPageRoutingModule = class MensajesPageRoutingModule {
};
MensajesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MensajesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mensajes/mensajes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mensajes/mensajes.module.ts ***!
  \***************************************************/
/*! exports provided: MensajesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageModule", function() { return MensajesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mensajes-routing.module */ "./src/app/pages/mensajes/mensajes-routing.module.ts");
/* harmony import */ var _mensajes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensajes.page */ "./src/app/pages/mensajes/mensajes.page.ts");







let MensajesPageModule = class MensajesPageModule {
};
MensajesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajesPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_mensajes_page__WEBPACK_IMPORTED_MODULE_6__["MensajesPage"]]
    })
], MensajesPageModule);



/***/ }),

/***/ "./src/app/pages/mensajes/mensajes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/mensajes/mensajes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: 2px;\n  right: 9px;\n  --background: #c9c9c9;\n  width: 28px;\n  height: 20px;\n  font-size: 16px;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  display: block !important;\n}\n\n.pt-20 {\n  padding-top: 20px !important;\n}\n\n.pb-20 {\n  padding-bottom: 20px !important;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.pt-15 {\n  padding-top: 15px !important;\n}\n\n.pt-30 {\n  padding-top: 30px !important;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.name_category_new {\n  font-size: 14px !important;\n  font-weight: 700 !important;\n  color: #000 !important;\n  margin: 0px !important;\n  line-height: 15px !important;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.principal_text {\n  font-size: 23px !important;\n  font-weight: 600 !important;\n  line-height: 25px !important;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\n.row_title {\n  padding-left: 10px !important;\n}\n\nion-label {\n  display: inline-block;\n  margin-bottom: 0.8rem;\n}\n\n.grey {\n  color: #727070 !important;\n}\n\n.custom_form {\n  width: 100% !important;\n  padding: 20px 20px !important;\n  display: block !important;\n}\n\nion-input,\nion-textarea {\n  border: 1px solid #ced4da;\n  border-radius: 20px;\n  width: 100%;\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 400;\n  color: #3d3f41;\n  background-color: #fff;\n  background-clip: padding-box;\n  padding-left: 10px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  display: block;\n}\n\n.btn-continue {\n  margin-top: 10% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #009bd7 !important;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  width: 50%;\n  --border-radius: 16px !important;\n  font-size: 18px !important;\n  font-weight: 600px !important;\n}\n\n@media (min-width: 400px) and (max-width: 417px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: 2px;\n    right: 9px;\n    --background: #c9c9c9;\n    width: 28px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 336px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 5px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 337px) and (max-width: 350px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 10px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 39px;\n    --background: #c9c9c9;\n    width: 45px;\n    height: 29px;\n    font-size: 25px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .principal_text {\n    font-size: 35px !important;\n    font-weight: 600 !important;\n    line-height: 35px !important;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  .description_product {\n    font-size: 25px !important;\n    color: #727070 !important;\n    line-height: 31px !important;\n    margin: 5px 0px !important;\n  }\n\n  ion-label {\n    display: inline-block;\n    margin-bottom: 0.8rem;\n    font-size: 26px;\n  }\n\n  ion-input,\nion-textarea {\n    border: 3px solid #ced4da;\n    border-radius: 20px;\n    width: 100%;\n    display: block;\n    font-size: 25px;\n    font-weight: 400;\n    color: #3d3f41;\n    background-color: #fff;\n    background-clip: padding-box;\n    padding-left: 10px !important;\n  }\n\n  .btn-continue {\n    margin-top: 6% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #009bd7 !important;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    width: 50%;\n    --border-radius: 16px !important;\n    font-size: 32px !important;\n    height: 70px;\n  }\n\n  .imagenes {\n    border: 0;\n    min-width: 55px;\n  }\n\n  .name_category_new {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #000 !important;\n    margin: 0px !important;\n    line-height: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvbWVuc2FqZXMvbWVuc2FqZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW5zYWplcy9tZW5zYWplcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSw0QkFBQTtFQUNBLHlDQUFBO0FDR0Y7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURKQTtFQUNFLDRCQUFBO0FDT0Y7O0FETEE7RUFDRSwrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRSw2QkFBQTtBQ1VGOztBRFJBO0VBQ0UsNEJBQUE7QUNXRjs7QURUQTtFQUNFLDRCQUFBO0FDWUY7O0FEVkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNC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Q29DRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVuc2FqZXMvbWVuc2FqZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIzNiwgMjM1LCAyMzg7XG59XG5cbi5jYXJyaXRvIHtcbiAgd2lkdGg6IDE0JTtcbiAgaGVpZ2h0OiAxNCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5pb24tYmFkZ2Uge1xuICBjb2xvcjogIzA0NmE4ZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gIHRvcDogMnB4O1xuICByaWdodDogOXB4O1xuICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4ucHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnB0LTE1IHtcbiAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbn1cbi5wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5hIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmFtZV9jYXRlZ29yeV9uZXcge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5wcmluY2lwYWxfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ucm93X3RpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cbi5ncmV5IHtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbn1cbi5jdXN0b21fZm9ybSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0LFxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjM2QzZjQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2lkdGg6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQxN3B4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzNnB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMzN3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAzOXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJpbmNpcGFsX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzFweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgaW9uLWlucHV0LFxuICBpb24tdGV4dGFyZWEge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzNkM2Y0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLXRvcDogNiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuICAuaW1hZ2VuZXMge1xuICAgIGJvcmRlcjogMDtcbiAgICBtaW4td2lkdGg6IDU1cHg7XG4gIH1cbiAgLm5hbWVfY2F0ZWdvcnlfbmV3IHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnB0LTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnB0LTE1IHtcbiAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnB0LTMwIHtcbiAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmFtZV9jYXRlZ29yeV9uZXcge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmluY2lwYWxfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5yb3dfdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbV9mb3JtIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkM2Y0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4tY29udGludWUge1xuICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB3aWR0aDogNTAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTdweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAycHg7XG4gICAgcmlnaHQ6IDlweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzM2cHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogNXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzM3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuXG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDM5cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpbmNpcGFsX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cbiAgaW9uLWlucHV0LFxuaW9uLXRleHRhcmVhIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzZDNmNDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLXRvcDogNiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC5pbWFnZW5lcyB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1pbi13aWR0aDogNTVweDtcbiAgfVxuXG4gIC5uYW1lX2NhdGVnb3J5X25ldyB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/mensajes/mensajes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mensajes/mensajes.page.ts ***!
  \*************************************************/
/*! exports provided: MensajesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPage", function() { return MensajesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");









let MensajesPage = class MensajesPage {
    constructor(menuCtrl, cartService, router, formBuilder, http, alertCtrl, loadingController, config) {
        this.menuCtrl = menuCtrl;
        this.cartService = cartService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.config = config;
        this.postUrl = `user/contact-us`;
        this.dataToSend = {
            name: '',
            phone: '',
            msg: '',
            email: '',
        };
        this.sliderOpts = {
            autoplay: true,
            speed: 1000,
            zoom: {
                maxRatio: 5
            }
        };
        this.mensajesForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            mensaje: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.base_url = config.get_base_url();
        this.cartItemCount = this.cartService.getCartItemCount();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    goCarrito() {
        this.router.navigate(['carrito']);
    }
    postData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Datos enviados: ');
            console.log(this.dataToSend);
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Por favor espera...',
                mode: 'ios',
                spinner: 'dots'
            });
            yield loading.present();
            this.http.post(`${this.base_url}${this.postUrl}`, this.dataToSend, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'Content-Type': 'application/json' }) })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe((mensaje) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.code = mensaje;
                this.code2 = this.code.status;
                console.log(this.code2);
                if (this.code2 === 'SUCCESS') {
                    const alert = yield this.alertCtrl.create({
                        message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">El mensaje fue enviado',
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
                    this.mensajesForm.reset();
                }
                else {
                    const alert = yield this.alertCtrl.create({
                        message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">El mensaje no fue enviado',
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
};
MensajesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider')
], MensajesPage.prototype, "slider", void 0);
MensajesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mensajes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mensajes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mensajes/mensajes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mensajes.page.scss */ "./src/app/pages/mensajes/mensajes.page.scss")).default]
    })
], MensajesPage);



/***/ })

}]);
//# sourceMappingURL=pages-mensajes-mensajes-module-es2015.js.map