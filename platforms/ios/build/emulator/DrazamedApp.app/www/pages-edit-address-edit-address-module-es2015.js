(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-address-edit-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-address/edit-address.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-address/edit-address.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n<img class=\"content-image\" src=\"../../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"misDirecciones()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n\n<ion-content>\n<div class=\"container1\">\n <p class=\"title_seccion center\">Ingresa tu nueva dirección</p>\n <ion-row class=\"result_search\">\n     <div class=\"custom_form\">\n       <form [formGroup]=\"direccionForm\">\n         <div class=\"form-group\">\n          <ion-label class=\"label_name\">Ingresa tu dirección:</ion-label>\n          <ion-input formControlName=\"direccion\" type=\"text\" class=\"form-control\" [(ngModel)]=\"dir.direccion\" name=\"direccion\"></ion-input>\n         </div>\n         <div class=\"form-group\">\n          <ion-label class=\"label_name\">Detalles:</ion-label>\n          <ion-input formControlName=\"detalles\" type=\"text\" class=\"form-control\" placeholder=\"casa/apto/edificio/oficina\" [(ngModel)]=\"dir.detalles\"></ion-input>\n         </div>\n         <ion-row>\n         <ion-col size=\"6\" class=\"mt-20\">\n          <ion-button class=\"btn_alerts\">C<p class=\"btntext\" (click)=\"cancelar()\">ancelar</p></ion-button>\n        </ion-col>\n        <ion-col size=\"6\" class=\"mt-20\">\n         <ion-button class=\"btn_alerts\" [disabled]=\"!direccionForm.valid\" (click)=\"addDirection(dir)\">G<p class=\"btntext\">uardar</p></ion-button>\n       </ion-col>\n       </ion-row>\n       </form>\n     </div>\n </ion-row>\n</div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/edit-address/edit-address-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-address/edit-address-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPageRoutingModule", function() { return EditAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-address.page */ "./src/app/pages/edit-address/edit-address.page.ts");




const routes = [
    {
        path: '',
        component: _edit_address_page__WEBPACK_IMPORTED_MODULE_3__["EditAddressPage"]
    }
];
let EditAddressPageRoutingModule = class EditAddressPageRoutingModule {
};
EditAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit-address/edit-address.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-address/edit-address.module.ts ***!
  \***********************************************************/
/*! exports provided: EditAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPageModule", function() { return EditAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-address-routing.module */ "./src/app/pages/edit-address/edit-address-routing.module.ts");
/* harmony import */ var _edit_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-address.page */ "./src/app/pages/edit-address/edit-address.page.ts");







let EditAddressPageModule = class EditAddressPageModule {
};
EditAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditAddressPageRoutingModule"]
        ],
        declarations: [_edit_address_page__WEBPACK_IMPORTED_MODULE_6__["EditAddressPage"]]
    })
], EditAddressPageModule);



/***/ }),

/***/ "./src/app/pages/edit-address/edit-address.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-address/edit-address.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 10px;\n  padding-bottom: -5px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: white;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.container1 {\n  align-self: center !important;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: #fff;\n}\n\n.center {\n  text-align: center;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.custom_form {\n  width: 100% !important;\n  padding: 20px 20px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.label_name {\n  color: #727070 !important;\n  display: inline-block;\n  margin-bottom: 0.8rem;\n}\n\nion-input {\n  border: 1px solid #ced4da;\n  border-radius: 20px;\n  width: 100%;\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 400;\n  color: #3d3f41;\n  background-color: #fff;\n  background-clip: padding-box;\n  padding-left: 10px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.btn_alerts {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  height: 60px !important;\n  display: block !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 30px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  ion-input {\n    border: 3px solid #ced4da;\n    border-radius: 20px;\n    width: 100%;\n    display: block;\n    font-size: 25px;\n    font-weight: 400;\n    color: #3d3f41;\n    background-color: #fff;\n    background-clip: padding-box;\n    height: 55px;\n    padding-left: 10px !important;\n  }\n\n  .btn_alerts {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 30px !important;\n    font-weight: 600 !important;\n    height: 80px !important;\n    display: block !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .label_name {\n    color: #727070 !important;\n    display: inline-block;\n    margin-bottom: 0.8rem;\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvZWRpdC1hZGRyZXNzL2VkaXQtYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQtYWRkcmVzcy9lZGl0LWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDRTtFQUNFLGdDQUFBO0VBQ0EsdUNBQUE7QUNFSjs7QURDRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ0dKOztBRERFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNJSjs7QURERTtFQUNFLDZCQUFBO0VBQ0EseUNBQUE7QUNJSjs7QURGRTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNJSjs7QURGRTtFQUNFLGtCQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKRTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ1FKOztBRE5FO0VBQ0UsbUJBQUE7QUNTSjs7QURQRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ1VKOztBRFJFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNXSjs7QURURTtFQUNFLDJCQUFBO0FDWUo7O0FEVkU7RUFDRSxvQ0FBQTtBQ2FKOztBRFhFO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDY0o7O0FEWkU7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDZUo7O0VEYkU7SUFDRSxhQUFBO0VDZ0JKOztFRGJFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtFQ2dCSjs7RURkRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ2lCSjs7RURmRTtJQUNFLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0VDa0JKOztFRGhCRTtJQUNFLGdDQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQ21CSjs7RURqQkU7SUFDRSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VDb0JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LWFkZHJlc3MvZWRpdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjUlO1xuICB9XG4gIFxuICAuaWNvbm8ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cbiAgaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xuICB9XG4gIFxuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAubG9nby1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAtNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbiAgfVxuICAuY29udGFpbmVyMSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLnJlc3VsdF9zZWFyY2gge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmN1c3RvbV9mb3JtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5sYWJlbF9uYW1lIHtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIH1cbiAgaW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzZDNmNDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5idG50ZXh0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bl9hbGVydHMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAgIC5oZWFkZXItc3R5bGVzIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGVudC1pbWFnZSB7XG4gICAgICBoZWlnaHQ6IDExMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudGl0bGVfc2VjY2lvbiB7XG4gICAgICBjb2xvcjogIzAwYTJkZDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2NlZDRkYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiAjM2QzZjQxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bl9hbGVydHMge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGFiZWxfbmFtZSB7XG4gICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgfVxuICAiLCIuZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtNXB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNvbnRhaW5lcjEge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jdXN0b21fZm9ybSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5sYWJlbF9uYW1lIHtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkM2Y0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fYWxlcnRzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzNkM2Y0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bl9hbGVydHMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxhYmVsX25hbWUge1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit-address/edit-address.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-address/edit-address.page.ts ***!
  \*********************************************************/
/*! exports provided: EditAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPage", function() { return EditAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");







let EditAddressPage = class EditAddressPage {
    constructor(route, http, config, router, formBuilder, menuCtrl) {
        this.route = route;
        this.http = http;
        this.config = config;
        this.router = router;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.direccionForm = this.formBuilder.group({
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            detalles: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.base_url = config.get_base_url();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.address = this.router.getCurrentNavigation().extras.state.user;
                console.log(this.address);
            }
        });
        this.dir = {
            direccion: this.address,
            detalles: '',
        };
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    cancelar() {
        this.direccionForm.reset();
        this.router.navigate(['misdirecciones']);
    }
    misDirecciones() {
        this.router.navigate(['misdirecciones']);
    }
    addDirection(dir) {
        console.log(dir.direccion + ' ' + dir.detalles);
        this.router.navigate(['misdirecciones']);
    }
};
EditAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
EditAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-address/edit-address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-address.page.scss */ "./src/app/pages/edit-address/edit-address.page.scss")).default]
    })
], EditAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-address-edit-address-module-es2015.js.map