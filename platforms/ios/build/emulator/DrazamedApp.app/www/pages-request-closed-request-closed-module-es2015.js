(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-closed-request-closed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-closed/request-closed.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-closed/request-closed.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n   <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"goCart()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n<div class=\"container\">\n  <p class=\"title_seccion_small pt-10\">Pedidos completados</p>\n  <p class=\"description_product\">Número de Pedido: {{id}}</p>\n</div>\n<div class=\"container1\">\n  <ion-row class=\"result_search\" *ngFor=\"let medicine of cart_med\">\n    <ion-col size=\"3\" class=\"align-self img_product\">\n      <img src={{base_url}}{{apiUrl}}{{medicine.item_code}}{{apiUrl2}} class=\"mx-auto d-block\" width=\"100%\">\n    </ion-col>\n    <ion-col size=\"9\" class=\"align-self\">\n      <p class=\"name_product\">{{medicine.item_name}}</p>\n      <p class=\"description_product\">{{medicine.composition}}</p>\n      <p class=\"price_product\">${{medicine.total_price | number}}</p>\n     </ion-col>\n  </ion-row>\n  <ion-row class=\"result_search\">\n    <ion-col size=\"12\" class=\"addres_space\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"../../../assets/img/RECURSOS/pointer_address.png\" class=\"imagendir\">\n        </ion-col>\n        <ion-col size=\"10\" class=\"align-self\">\n          <p class=\"name_product\">Mi dirección</p>\n          <!-- <p class=\"description_product\">{{address}}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" class=\"addres_space mt-10\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"../../../assets/img/RECURSOS/credit_card.png\" class=\"imagendir\">\n        </ion-col>\n        <ion-col size=\"10\" class=\"align-self\">\n          <p class=\"name_product\">Método de pago</p>\n        <p class=\"description_product\">Mercado Pago</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"result_search mb-40\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Subtotal</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">${{ subTotal() | number }}</p></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Costo envío</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">$2,000</p></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Impuesto</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">${{ getTax() | number}}</p></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Total</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">${{getTotal() | number}}</p></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-row>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/request-closed/request-closed-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/request-closed/request-closed-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RequestClosedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestClosedPageRoutingModule", function() { return RequestClosedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_closed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-closed.page */ "./src/app/pages/request-closed/request-closed.page.ts");




const routes = [
    {
        path: '',
        component: _request_closed_page__WEBPACK_IMPORTED_MODULE_3__["RequestClosedPage"]
    }
];
let RequestClosedPageRoutingModule = class RequestClosedPageRoutingModule {
};
RequestClosedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestClosedPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/request-closed/request-closed.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/request-closed/request-closed.module.ts ***!
  \***************************************************************/
/*! exports provided: RequestClosedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestClosedPageModule", function() { return RequestClosedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _request_closed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-closed-routing.module */ "./src/app/pages/request-closed/request-closed-routing.module.ts");
/* harmony import */ var _request_closed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-closed.page */ "./src/app/pages/request-closed/request-closed.page.ts");







let RequestClosedPageModule = class RequestClosedPageModule {
};
RequestClosedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _request_closed_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestClosedPageRoutingModule"]
        ],
        declarations: [_request_closed_page__WEBPACK_IMPORTED_MODULE_6__["RequestClosedPage"]]
    })
], RequestClosedPageModule);



/***/ }),

/***/ "./src/app/pages/request-closed/request-closed.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/request-closed/request-closed.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  align-self: center !important;\n  background-color: #fff;\n  text-align: center;\n}\n\n.title_seccion_small {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0px 0px;\n}\n\n.pt-10 {\n  padding-top: 10px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.container1 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.d-block {\n  display: block;\n}\n\n.price_product {\n  font-size: 21px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.addres_space {\n  background: #fff;\n  padding: 20px 10px;\n}\n\n.mt-10 {\n  margin-top: 10px !important;\n}\n\n.mb-40 {\n  margin-bottom: 40px !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-buttons {\n    margin-left: 25px;\n  }\n\n  .title_seccion_small {\n    color: #00a2dd;\n    font-size: 35px;\n    font-weight: 700;\n    margin: 0px 0px;\n  }\n\n  .name_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 15px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .description_product {\n    font-size: 25px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 5px 0px !important;\n  }\n\n  .price_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 15px 0px !important;\n  }\n\n  .imagendir {\n    max-width: 70%;\n    border: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcmVxdWVzdC1jbG9zZWQvcmVxdWVzdC1jbG9zZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LWNsb3NlZC9yZXF1ZXN0LWNsb3NlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLHVDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLDRCQUFBO0FDTUo7O0FESkE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ09KOztBRExBO0VBQ0ksMkJBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURSQTtFQUNJLDZCQUFBO0FDV0o7O0FEVEE7RUFDSSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ2FKOztBRFhBO0VBQ0ksY0FBQTtBQ2NKOztBRFpBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNlSjs7QURiQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNnQko7O0FEZEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDaUJKOztBRGZBO0VBQ0ksMkJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksOEJBQUE7QUNtQko7O0FEakJBO0VBQ0k7SUFDSSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQ29CTjs7RURsQkU7SUFDSSxhQUFBO0VDcUJOOztFRG5CRTtJQUNJLGNBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUNzQk47O0VEcEJFO0lBQ0ksaUJBQUE7RUN1Qk47O0VEckJFO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUN3Qk47O0VEdEJFO0lBQ0ksMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtFQ3lCTjs7RUR2QkU7SUFDSSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtFQzBCTjs7RUR4QkU7SUFDSSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSwyQkFBQTtFQzJCTjs7RUR6QkU7SUFDSSxjQUFBO0lBQ0EsU0FBQTtFQzRCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVxdWVzdC1jbG9zZWQvcmVxdWVzdC1jbG9zZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIzNiwgMjM1LCAyMzg7XG59XG4uY29udGVudC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgYm9yZGVyOiAwO1xufVxuLmNhcnJpdG8ge1xuICAgIHdpZHRoOiAxNCU7XG4gICAgaGVpZ2h0OiAxNCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbn1cblxuLmRpdi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbn1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVfc2VjY2lvbl9zbWFsbCB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xufVxuLnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lcjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFsaWduLXNlbGYge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmltZ19wcm9kdWN0IHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubXgtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLmFkZHJlc19zcGFjZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4ubXQtMTAge1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYi00MCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gICAgLmhlYWRlci1zdHlsZXMge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgIH1cbiAgICAuY2Fycm8xIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2OCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB9XG4gICAgLnRpdGxlX3NlY2Npb25fc21hbGwge1xuICAgICAgICBjb2xvcjogIzAwYTJkZDtcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgfVxuICAgIC5uYW1lX3Byb2R1Y3Qge1xuICAgICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDE1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJpY2VfcHJvZHVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltYWdlbmRpciB7XG4gICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIFxufVxuIiwiaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZV9zZWNjaW9uX3NtYWxsIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwcHggMHB4O1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFsaWduLXNlbGYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmltZ19wcm9kdWN0IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcmljZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkcmVzX3NwYWNlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYi00MCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLmNhcnJvMSB7XG4gICAgbWF4LXdpZHRoOiA2OCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1yaWdodDogLTQxcHg7XG4gIH1cblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cblxuICAudGl0bGVfc2VjY2lvbl9zbWFsbCB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZW5kaXIge1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/request-closed/request-closed.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/request-closed/request-closed.page.ts ***!
  \*************************************************************/
/*! exports provided: RequestClosedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestClosedPage", function() { return RequestClosedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");







let RequestClosedPage = class RequestClosedPage {
    constructor(router, menuCtrl, config, http, auth, route) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.config = config;
        this.http = http;
        this.auth = auth;
        this.route = route;
        this.apiUrl2 = `.jpg`;
        this.apiUrl = `images/products/`;
        this.base_url = config.get_base_url();
        this.user = this.auth.getusuario();
        this.userid = this.user.email;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.orden = this.router.getCurrentNavigation().extras.state.user;
                this.cart_med = this.orden.get_cart;
                this.id = this.orden.id;
                this.status = this.orden.status;
                console.log(this.orden);
                console.log(this.cart_med);
                this.invoice_i = this.cart_med[0].invoice_id;
                console.log(this.invoice_i);
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    goBack() {
        this.router.navigate(['mispedidos']);
    }
    goCart() {
        this.router.navigate(['carrito']);
    }
    getPrice() {
        return this.cart_med.reduce((i, j) => i + j.total_price, 0);
    }
    getTotal() {
        return this.getPrice() + 2000;
    }
    getTax() {
        this.subtotal1 = 0;
        for (let ta of this.cart_med) {
            if (ta.tax !== 0) {
                this.subtotal1 += ta.tax;
            }
        }
        return this.subtotal1;
    }
    subTotal() {
        return this.getPrice() - this.getTax();
    }
};
RequestClosedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RequestClosedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-request-closed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request-closed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-closed/request-closed.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request-closed.page.scss */ "./src/app/pages/request-closed/request-closed.page.scss")).default]
    })
], RequestClosedPage);



/***/ })

}]);
//# sourceMappingURL=pages-request-closed-request-closed-module-es2015.js.map