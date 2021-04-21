(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adddirection-adddirection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adddirection/adddirection.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adddirection/adddirection.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n<img class=\"content-image\" src=\"../../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"misDirecciones()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n\n<ion-content>\n<div class=\"container1\">\n <p class=\"title_seccion center\">Ingresa tu nueva dirección</p>\n <ion-row class=\"result_search\">\n     <div class=\"custom_form\">\n       <form [formGroup]=\"direccionForm\" (ngSubmit)=\"submit()\">\n         <div class=\"form-group\">\n           <ion-label class=\"label_name\">Ciudad:</ion-label>\n           <ion-input type=\"text\" formControlName=\"ciudad\" class=\"form-control\" [(ngModel)]=\"dir.ciudad\"></ion-input>\n         </div>\n         <div class=\"form-group\">\n          <ion-label class=\"label_name\">Ingresa tu dirección:</ion-label>\n          <ion-input formControlName=\"direccion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"dir.direccion\"></ion-input>\n         </div>\n         <div class=\"form-group\">\n          <ion-label class=\"label_name\">Detalles:</ion-label>\n          <ion-input formControlName=\"detalles\" type=\"text\" class=\"form-control\" placeholder=\"casa/apto/edificio/oficina\" [(ngModel)]=\"dir.detalles\"></ion-input>\n         </div>\n         <div class=\"form-group\">\n          <ion-label class=\"label_name\">Nombre de la dirección:</ion-label>\n          <ion-input formControlName=\"nombredir\" type=\"text\" class=\"form-control\" placeholder=\"ej, Mi casa\" [(ngModel)]=\"dir.nombredir\"></ion-input>\n         </div>\n         <ion-row>\n         <ion-col size=\"6\" class=\"mt-20\">\n          <ion-button class=\"btn_alerts\">C<p class=\"btntext\" (click)=\"cancelar()\">ancelar</p></ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"mt-20\">\n         <ion-button class=\"btn_alerts\" [disabled]=\"!direccionForm.valid\" (click)=\"addDirection(dir)\">G<p class=\"btntext\">uardar</p></ion-button>\n       </ion-col>\n       </ion-row>\n       </form>\n     </div>\n     \n </ion-row>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/adddirection/adddirection-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/adddirection/adddirection-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdddirectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddirectionPageRoutingModule", function() { return AdddirectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adddirection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adddirection.page */ "./src/app/pages/adddirection/adddirection.page.ts");




const routes = [
    {
        path: '',
        component: _adddirection_page__WEBPACK_IMPORTED_MODULE_3__["AdddirectionPage"]
    }
];
let AdddirectionPageRoutingModule = class AdddirectionPageRoutingModule {
};
AdddirectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdddirectionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/adddirection/adddirection.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/adddirection/adddirection.module.ts ***!
  \***********************************************************/
/*! exports provided: AdddirectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddirectionPageModule", function() { return AdddirectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adddirection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adddirection-routing.module */ "./src/app/pages/adddirection/adddirection-routing.module.ts");
/* harmony import */ var _adddirection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adddirection.page */ "./src/app/pages/adddirection/adddirection.page.ts");







let AdddirectionPageModule = class AdddirectionPageModule {
};
AdddirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adddirection_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdddirectionPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_adddirection_page__WEBPACK_IMPORTED_MODULE_6__["AdddirectionPage"]]
    })
], AdddirectionPageModule);



/***/ }),

/***/ "./src/app/pages/adddirection/adddirection.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/adddirection/adddirection.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 10px;\n  padding-bottom: -5px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: white;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.container1 {\n  align-self: center !important;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: #fff;\n}\n\n.center {\n  text-align: center;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.custom_form {\n  width: 100% !important;\n  padding: 20px 20px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.label_name {\n  color: #727070 !important;\n  display: inline-block;\n  margin-bottom: 0.8rem;\n}\n\nion-input {\n  border: 1px solid #ced4da;\n  border-radius: 20px;\n  width: 100%;\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 400;\n  color: #3d3f41;\n  background-color: #fff;\n  background-clip: padding-box;\n  padding-left: 10px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.btn_alerts {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  height: 60px !important;\n  display: block !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 30px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  ion-input {\n    border: 3px solid #ced4da;\n    border-radius: 20px;\n    width: 100%;\n    display: block;\n    font-size: 25px;\n    font-weight: 400;\n    color: #3d3f41;\n    background-color: #fff;\n    background-clip: padding-box;\n    height: 55px;\n    padding-left: 10px !important;\n  }\n\n  .btn_alerts {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 30px !important;\n    font-weight: 600 !important;\n    height: 80px !important;\n    display: block !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .label_name {\n    color: #727070 !important;\n    display: inline-block;\n    margin-bottom: 0.8rem;\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvYWRkZGlyZWN0aW9uL2FkZGRpcmVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZGRpcmVjdGlvbi9hZGRkaXJlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGdDQUFBO0VBQ0EsdUNBQUE7QUNFRjs7QURDQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNJRjs7QUREQTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7QUNJRjs7QURGQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ09GOztBRExBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ1FGOztBRE5BO0VBQ0UsbUJBQUE7QUNTRjs7QURQQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ1VGOztBRFJBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNXRjs7QURUQTtFQUNFLDJCQUFBO0FDWUY7O0FEVkE7RUFDRSxvQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDY0Y7O0FEWkE7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDZUY7O0VEYkE7SUFDRSxhQUFBO0VDZ0JGOztFRGJBO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtFQ2dCRjs7RURkQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ2lCRjs7RURmQTtJQUNFLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0VDa0JGOztFRGhCQTtJQUNFLGdDQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQ21CRjs7RURqQkE7SUFDRSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VDb0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRkaXJlY3Rpb24vYWRkZGlyZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC01cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuLmNvbnRhaW5lcjEge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jdXN0b21fZm9ybSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmxhYmVsX25hbWUge1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkM2Y0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cbi5idG5fYWxlcnRzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzZDNmNDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYnRuX2FsZXJ0cyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxhYmVsX25hbWUge1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cbiIsIi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC01cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY29udGFpbmVyMSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlX3NlY2Npb24ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuXG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmN1c3RvbV9mb3JtIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmxhYmVsX25hbWUge1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjM2QzZjQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9hbGVydHMge1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjM2QzZjQxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuX2FsZXJ0cyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGFiZWxfbmFtZSB7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/adddirection/adddirection.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/adddirection/adddirection.page.ts ***!
  \*********************************************************/
/*! exports provided: AdddirectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddirectionPage", function() { return AdddirectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_direcciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/direcciones.service */ "./src/app/services/direcciones.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let AdddirectionPage = class AdddirectionPage {
    constructor(formBuilder, router, directionService, menuCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.directionService = directionService;
        this.menuCtrl = menuCtrl;
        this.direccionForm = this.formBuilder.group({
            ciudad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            detalles: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            nombredir: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.dir = {
            ciudad: '',
            direccion: '',
            detalles: '',
            nombredir: ''
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    submit() {
        console.log(this.direccionForm.value);
        this.direccionForm.reset();
    }
    misDirecciones() {
        this.router.navigate(['misdirecciones']);
    }
    addDirection(direcciones) {
        this.directionService.addDirection(direcciones);
        this.router.navigate(['misdirecciones']);
    }
    cancelar() {
        this.direccionForm.reset();
    }
};
AdddirectionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_direcciones_service__WEBPACK_IMPORTED_MODULE_4__["DireccionesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
AdddirectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adddirection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adddirection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adddirection/adddirection.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adddirection.page.scss */ "./src/app/pages/adddirection/adddirection.page.scss")).default]
    })
], AdddirectionPage);



/***/ })

}]);
//# sourceMappingURL=pages-adddirection-adddirection-module-es2015.js.map