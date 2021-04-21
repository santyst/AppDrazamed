(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-open-request-open-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-open/request-open.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-open/request-open.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n   <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"goCart()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n<div class=\"container\">\n  <p class=\"title_seccion_small pt-10\">Pedidos en curso</p>\n  <p class=\"description_product\">Número de Pedido: {{id}}</p>\n</div>\n<div class=\"container1\">\n  <ion-row class=\"result_search\" *ngFor=\"let medicine of cart_med\">\n    <ion-col size=\"3\" class=\"align-self img_product\">\n      <img src={{base_url}}{{apiUrl}}{{medicine.item_code}}{{apiUrl2}} class=\"mx-auto d-block\" width=\"100%\">\n    </ion-col>\n    <ion-col size=\"9\" class=\"align-self\">\n       <p class=\"name_product\">{{medicine.item_name}}</p>\n       <p class=\"description_product\">{{medicine.composition}}</p>\n       <p class=\"price_product\">${{medicine.total_price | number}}</p>\n      </ion-col>\n  </ion-row>\n  <ion-row class=\"result_search\">\n    <ion-col size=\"12\" class=\"addres_space\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"../../../assets/img/RECURSOS/pointer_address.png\" class=\"imagendir\">\n        </ion-col>\n        <ion-col size=\"10\" class=\"align-self\">\n          <p class=\"name_product\">Mi dirección</p>\n          <p class=\"description_product\">{{address}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" class=\"addres_space mt-10\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"../../../assets/img/RECURSOS/credit_card.png\" class=\"imagendir\">\n        </ion-col>\n        <ion-col size=\"10\" class=\"align-self\">\n          <p class=\"name_product\">Método de pago</p>\n        <p class=\"description_product\">Mercado Pago</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"result_search mb-40\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Subtotal</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">${{ subTotal() | number }}</p></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Costo envío</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">$2,000</p></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Impuesto</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">${{ getTax() | number}}</p></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\"><p class=\"name_product\">Total</p></ion-col>\n        <ion-col size=\"6\"><p class=\"description_product\">${{getTotal() | number}}</p></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-col size=\"12\" class=\"mt-20\">\n      <ion-button class=\"btn-continue\" expand=\"block\" *ngIf=\"status == 2\" (click)=\"goPago()\">P<p class=\"btntext\" >agar</p></ion-button>\n      <ion-button class=\"btn-continue\" expand=\"block\" *ngIf=\"status == 1\">E<p class=\"btntext\" >liminar pedido</p></ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/request-open/request-open-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/request-open/request-open-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RequestOpenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOpenPageRoutingModule", function() { return RequestOpenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _request_open_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-open.page */ "./src/app/pages/request-open/request-open.page.ts");




const routes = [
    {
        path: '',
        component: _request_open_page__WEBPACK_IMPORTED_MODULE_3__["RequestOpenPage"]
    }
];
let RequestOpenPageRoutingModule = class RequestOpenPageRoutingModule {
};
RequestOpenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestOpenPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/request-open/request-open.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-open/request-open.module.ts ***!
  \***********************************************************/
/*! exports provided: RequestOpenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOpenPageModule", function() { return RequestOpenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _request_open_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-open-routing.module */ "./src/app/pages/request-open/request-open-routing.module.ts");
/* harmony import */ var _request_open_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-open.page */ "./src/app/pages/request-open/request-open.page.ts");







let RequestOpenPageModule = class RequestOpenPageModule {
};
RequestOpenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _request_open_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestOpenPageRoutingModule"]
        ],
        declarations: [_request_open_page__WEBPACK_IMPORTED_MODULE_6__["RequestOpenPage"]]
    })
], RequestOpenPageModule);



/***/ }),

/***/ "./src/app/pages/request-open/request-open.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-open/request-open.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  align-self: center !important;\n  background-color: #fff;\n  text-align: center;\n}\n\n.title_seccion_small {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0px 0px;\n}\n\n.pt-10 {\n  padding-top: 10px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.container1 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.d-block {\n  display: block;\n}\n\n.price_product {\n  font-size: 21px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.addres_space {\n  background: #fff;\n  padding: 20px 10px;\n}\n\n.mt-10 {\n  margin-top: 10px !important;\n}\n\n.mb-40 {\n  margin-bottom: 40px !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.btn-continue {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #015670 !important;\n  font-weight: 600 !important;\n  font-size: 17.5px !important;\n  width: 75% !important;\n  --border-radius: 15px !important;\n  height: 45px;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  .title_seccion_small {\n    color: #00a2dd;\n    font-size: 32px;\n    font-weight: 700;\n    margin: 0px 0px;\n  }\n\n  .description_product {\n    font-size: 24px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 5px 0px !important;\n  }\n\n  .imagendir {\n    max-width: 70%;\n    border: 0;\n  }\n\n  .name_product {\n    font-size: 27px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 15px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #015670 !important;\n    font-weight: 600 !important;\n    font-size: 26.5px !important;\n    width: 75% !important;\n    --border-radius: 15px !important;\n    height: 65px;\n  }\n\n  .price_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  ion-buttons {\n    margin-left: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcmVxdWVzdC1vcGVuL3JlcXVlc3Qtb3Blbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlcXVlc3Qtb3Blbi9yZXF1ZXN0LW9wZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsNEJBQUE7RUFDQSx5Q0FBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSw0QkFBQTtBQ0tGOztBREhBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNNRjs7QURKQTtFQUNFLDJCQUFBO0FDT0Y7O0FETEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1FGOztBRE5BO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRSw2QkFBQTtBQ1VGOztBRFJBO0VBQ0Usc0RBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNXRjs7QURUQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNZRjs7QURWQTtFQUNFLGNBQUE7QUNhRjs7QURYQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDY0Y7O0FEWkE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDZUY7O0FEYkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsMkJBQUE7QUNpQkY7O0FEZkE7RUFDRSw4QkFBQTtBQ2tCRjs7QURoQkE7RUFDRSxvQ0FBQTtBQ21CRjs7QURqQkE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNvQkY7O0FEakJBO0VBQ0U7SUFDRSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQ29CRjs7RURsQkE7SUFDRSxhQUFBO0VDcUJGOztFRG5CQTtJQUNFLGNBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUNzQkY7O0VEcEJBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUN1QkY7O0VEckJBO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMEJBQUE7RUN3QkY7O0VEdEJBO0lBQ0UsY0FBQTtJQUNBLFNBQUE7RUN5QkY7O0VEdkJBO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtFQzBCRjs7RUR4QkE7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7RUMyQkY7O0VEekJBO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7RUM0QkY7O0VEMUJBO0lBQ0UsaUJBQUE7RUM2QkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3Qtb3Blbi9yZXF1ZXN0LW9wZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZV9zZWNjaW9uX3NtYWxsIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwcHggMHB4O1xufVxuLnB0LTEwIHtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lcjEge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFsaWduLXNlbGYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJpY2VfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uYWRkcmVzX3NwYWNlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLm1iLTQwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xufVxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTcuNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuICAudGl0bGVfc2VjY2lvbl9zbWFsbCB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICB9XG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmltYWdlbmRpciB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDE1NjcwICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjYuNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxuICAucHJpY2VfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbn1cbiIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfc2VjY2lvbl9zbWFsbCB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMHB4IDBweDtcbn1cblxuLnB0LTEwIHtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lcjEge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm14LWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJpY2VfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmFkZHJlc19zcGFjZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWItNDAge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG50ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTcuNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLmNhcnJvMSB7XG4gICAgbWF4LXdpZHRoOiA2OCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1yaWdodDogLTQxcHg7XG4gIH1cblxuICAudGl0bGVfc2VjY2lvbl9zbWFsbCB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZW5kaXIge1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMTU2NzAgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNi41cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICB9XG5cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/request-open/request-open.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/request-open/request-open.page.ts ***!
  \*********************************************************/
/*! exports provided: RequestOpenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOpenPage", function() { return RequestOpenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let RequestOpenPage = class RequestOpenPage {
    constructor(iab, router, auth, route, http, config, menuCtrl) {
        this.iab = iab;
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.http = http;
        this.config = config;
        this.menuCtrl = menuCtrl;
        this.payment_url = `medicine/make-mercado-pago-payment/`;
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
                this.http.get(`${this.base_url}${this.payment_url}${this.invoice_i}/1?email=${this.userid}`).subscribe(pay => {
                    this.ad = pay;
                    this.address = this.ad.posted.address;
                    this.linkpay = this.ad.preference.init_point;
                });
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
    goPago() {
        this.iab.create(this.linkpay, '_blank');
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
RequestOpenPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] }
];
RequestOpenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-request-open',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request-open.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-open/request-open.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request-open.page.scss */ "./src/app/pages/request-open/request-open.page.scss")).default]
    })
], RequestOpenPage);



/***/ })

}]);
//# sourceMappingURL=pages-request-open-request-open-module-es2015.js.map