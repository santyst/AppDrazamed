(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mispedidos-mispedidos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mispedidos/mispedidos.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mispedidos/mispedidos.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n  <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"goBack()\">\n        <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-38.png\" class=\"carro1\">\n      </ion-button>\n\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n<div class=\"container\">\n  <p class=\"title_seccion center\">Mis pedidos</p>\n  <ion-row class=\"result_search\">\n    <ion-col size=\"6\" class=\"mt-20\">\n      <ion-button class=\"btn_product\" (click)=\"isYesClicked=true;isNoClicked=false\" [color]=\"!isNoClicked?'medium':'dark'\">P<p class=\"btntext\">endientes</p></ion-button>\n    </ion-col>\n    <ion-col size=\"6\" class=\"mt-20\">\n      <ion-button class=\"btn_product\" (click)=\"isYesClicked=false;isNoClicked=true\" [color]=\"isNoClicked?'medium':'dark'\">C<p class=\"btntext\">ompletados</p></ion-button>\n    </ion-col>\n\n    <ion-col size=\"12\" *ngIf=\"!isNoClicked\">\n       <div class=\"request_sqare\" *ngFor=\"let d of pendientes\">\n         <ion-row>\n           <ion-col size=\"12\" class=\"mb-10 right\">\n              <p class=\"name_category\" *ngIf=\"d.status === 1\">Sin Verificar</p>\n              <p class=\"name_category1\" *ngIf=\"d.status === 2\">Verificado</p>\n           </ion-col>\n           \n           <ion-col size=\"8\" class=\"align-self\">\n              <p class=\"name_product\">Pedido en curso</p>\n              <p class=\"description_product\">\n                <b>Fecha: </b>\n                {{d.created_at}}\n              </p>\n              <p class=\"description_product\">\n                <b># de orden: </b>\n                {{d.id}}\n              </p>\n           </ion-col>\n           <ion-col size=\"4\">\n            <ion-buttons>\n              <ion-button class=\"trash\" (click)=\"removeOrder(d)\"><img src=\"../../../assets/img/RECURSOS/trash.png\"\n                  width=\"100%\"></ion-button>\n            </ion-buttons>\n           </ion-col>\n         </ion-row>\n         <ion-row class=\"mt-20\">\n             <ion-col size=\"6\">\n              <ion-button class=\"btn_product\" coloR=\"dark\" (click)=\"goPago(d)\" *ngIf=\"d.status == 2\">P<p class=\"btntext\">agar</p></ion-button>\n             </ion-col>\n             <ion-col size=\"6\">\n              <ion-button class=\"btn_product\" color=\"medium\" (click)=\"goOpen(d)\">V<p class=\"btntext\">er detalles</p></ion-button>\n             </ion-col>\n         </ion-row>\n       </div>\n    </ion-col>\n\n    <ion-col size=\"12\" *ngIf=\"isNoClicked\">\n      <div class=\"request_sqare\" *ngFor=\"let v of completados\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"mb-10 right\">\n            <p class=\"name_category1\" *ngIf=\"v.status === 4\">Pagado</p>\n          </ion-col>\n          <ion-col size=\"8\" class=\"align-self\">\n             <p class=\"description_product\">\n               <b>Fecha: </b>\n               {{v.created_at}}\n             </p>\n             <p class=\"description_product\">\n               <b># de orden</b>\n              {{v.id}}\n             </p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"mt-20\">\n            <ion-col size=\"6\">\n              <ion-button class=\"calificar_btn\">C<p class=\"btntext\">alificar</p></ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button class=\"btn_product\" color=\"medium\" (click)=\"goClosed(v)\">V<p class=\"btntext\">er detalles</p></ion-button>\n            </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n\n  </ion-row>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mispedidos/mispedidos-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mispedidos/mispedidos-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MispedidosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MispedidosPageRoutingModule", function() { return MispedidosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mispedidos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mispedidos.page */ "./src/app/pages/mispedidos/mispedidos.page.ts");




const routes = [
    {
        path: '',
        component: _mispedidos_page__WEBPACK_IMPORTED_MODULE_3__["MispedidosPage"]
    }
];
let MispedidosPageRoutingModule = class MispedidosPageRoutingModule {
};
MispedidosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MispedidosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mispedidos/mispedidos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mispedidos/mispedidos.module.ts ***!
  \*******************************************************/
/*! exports provided: MispedidosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MispedidosPageModule", function() { return MispedidosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mispedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mispedidos-routing.module */ "./src/app/pages/mispedidos/mispedidos-routing.module.ts");
/* harmony import */ var _mispedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mispedidos.page */ "./src/app/pages/mispedidos/mispedidos.page.ts");







let MispedidosPageModule = class MispedidosPageModule {
};
MispedidosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mispedidos_routing_module__WEBPACK_IMPORTED_MODULE_5__["MispedidosPageRoutingModule"]
        ],
        declarations: [_mispedidos_page__WEBPACK_IMPORTED_MODULE_6__["MispedidosPage"]]
    })
], MispedidosPageModule);



/***/ }),

/***/ "./src/app/pages/mispedidos/mispedidos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/mispedidos/mispedidos.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  align-self: center !important;\n  background-color: #fff;\n}\n\n.center {\n  text-align: center;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.btn_product {\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  display: block !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  height: 60px !important;\n}\n\n.btn_product1 {\n  background-color: #00a2dd;\n  padding: 10px !important;\n  border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  display: block !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  height: 60px !important;\n}\n\n.trash {\n  float: right !important;\n  --background: #fff !important;\n  border-radius: 100% !important;\n  width: 100%;\n  height: 100%;\n  margin-left: 60%;\n}\n\n.calificar_btn {\n  --background: #fff;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #00a2dd !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  display: block !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  height: 60px !important;\n}\n\na {\n  text-decoration: none;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.request_sqare {\n  background: #fff !important;\n  border-radius: 30px;\n  padding: 20px;\n  margin: 20px 0px;\n}\n\n.mb-10 {\n  margin-bottom: 10px !important;\n}\n\n.right {\n  text-align: right !important;\n}\n\n.name_category {\n  font-size: 14px !important;\n  font-weight: 700 !important;\n  color: #00a2dd !important;\n  margin: 0px !important;\n  line-height: 15px !important;\n}\n\n.name_category1 {\n  font-size: 14px !important;\n  font-weight: 700 !important;\n  color: #05bb23 !important;\n  margin: 0px !important;\n  line-height: 15px !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.col-img {\n  align-self: center !important;\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.price_product {\n  font-size: 21px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-buttons {\n    margin-left: 20px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 35px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .btn_product {\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 26px !important;\n    font-weight: 600 !important;\n    display: block !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    height: 80px !important;\n  }\n\n  .description_product {\n    font-size: 23px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 15px 0px !important;\n  }\n\n  .name_product {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 5px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .name_category {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #00a2dd !important;\n    margin: 0px !important;\n    line-height: 15px !important;\n  }\n\n  .trash {\n    float: right !important;\n    --background: #fff !important;\n    border-radius: 100% !important;\n    width: 60%;\n  }\n\n  .calificar_btn {\n    --background: #fff;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #00a2dd !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 26px !important;\n    font-weight: 600 !important;\n    display: block !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    height: 60px !important;\n  }\n\n  .price_product {\n    font-size: 26px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvbWlzcGVkaWRvcy9taXNwZWRpZG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWlzcGVkaWRvcy9taXNwZWRpZG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsdUNBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDTUY7O0FESkE7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FDT0Y7O0FETEE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNRRjs7QUROQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQ1VGOztBRFBBO0VBQ0UscUJBQUE7QUNVRjs7QURSQTtFQUNFLG9DQUFBO0FDV0Y7O0FEVEE7RUFDRSwyQkFBQTtBQ1lGOztBRFZBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2FGOztBRFhBO0VBQ0UsOEJBQUE7QUNjRjs7QURaQTtFQUNFLDRCQUFBO0FDZUY7O0FEYkE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ2lCRjs7QURmQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsNkJBQUE7RUFDQSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ21CRjs7QURqQkE7RUFDRSw2QkFBQTtBQ29CRjs7QURsQkE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDcUJGOztBRG5CQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDc0JGOztBRHBCQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDdUJGOztBRHBCQTtFQUNFO0lBQ0UsZ0NBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUN1QkY7O0VEckJBO0lBQ0UsYUFBQTtFQ3dCRjs7RUR0QkE7SUFDRSxjQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0VDeUJGOztFRHZCQTtJQUNFLGlCQUFBO0VDMEJGOztFRHhCQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQzJCRjs7RUR6QkY7SUFDRSx3QkFBQTtJQUNBLGdDQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLHVCQUFBO0VDNEJBOztFRDFCRjtJQUNFLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VDNkJBOztFRDNCRjtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUM4QkE7O0VENUJGO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQytCQTs7RUQ1QkE7SUFDRSx1QkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSxVQUFBO0VDK0JGOztFRDVCQTtJQUNFLGtCQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSx1QkFBQTtFQytCRjs7RUQ3QkY7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtFQ2dDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWlzcGVkaWRvcy9taXNwZWRpZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIzNiwgMjM1LCAyMzg7XG59XG5cbi5jYXJyaXRvIHtcbiAgd2lkdGg6IDE0JTtcbiAgaGVpZ2h0OiAxNCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJ0bl9wcm9kdWN0IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuLmJ0bl9wcm9kdWN0MSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEyZGQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4udHJhc2gge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cbi5jYWxpZmljYXJfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cbi5yZXF1ZXN0X3NxYXJlIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLm1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5uYW1lX2NhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cbi5uYW1lX2NhdGVnb3J5MSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDViYjIzICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ubXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuLmNvbC1pbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFsaWduLXNlbGYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuLnByaWNlX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG4gIGlvbi1idXR0b25ze1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmJ0bl9wcm9kdWN0IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xufVxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLm5hbWVfY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4gIC50cmFzaCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA2MCU7XG5cbiAgfVxuICAuY2FsaWZpY2FyX2J0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuLnByaWNlX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxufVxuIiwiaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYnRuX3Byb2R1Y3Qge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcHJvZHVjdDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMmRkO1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4udHJhc2gge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cblxuLmNhbGlmaWNhcl9idG4ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnJlcXVlc3Rfc3FhcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLm5hbWVfY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZV9jYXRlZ29yeTEge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzA1YmIyMyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uY29sLWltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLmNhcnJvMSB7XG4gICAgbWF4LXdpZHRoOiA2OCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1yaWdodDogLTQxcHg7XG4gIH1cblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAudGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuXG4gIC5idG5fcHJvZHVjdCB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmFtZV9jYXRlZ29yeSB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRyYXNoIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5jYWxpZmljYXJfYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpY2VfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mispedidos/mispedidos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mispedidos/mispedidos.page.ts ***!
  \*****************************************************/
/*! exports provided: MispedidosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MispedidosPage", function() { return MispedidosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tratamientos.service */ "./src/app/services/tratamientos.service.ts");









let MispedidosPage = class MispedidosPage {
    constructor(iab, router, http, auth, menuCtrl, config, alertController, loadingController, tratamientoService) {
        this.iab = iab;
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.config = config;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.tratamientoService = tratamientoService;
        this.isYesClicked = false;
        this.isNoClicked = false;
        this.orden = [];
        this.payment_url = `medicine/make-mercado-pago-payment/`;
        this.pendientes = [];
        this.completados = [];
        this.base_url = config.get_base_url();
        this.user1 = this.auth.getusuario();
        this.userid = this.user1.email;
        this.orders = this.http.get(`${this.base_url}my-prescriptions?email=${this.userid}`).subscribe((val) => {
            this.orden = val;
            for (let notVer of this.orden) {
                if (notVer.status === 1 || notVer.status === 2) {
                    this.pendientes.push(notVer);
                }
                else if (notVer.status >= 4) {
                    this.completados.push(notVer);
                }
            }
            console.log('pendientes', this.pendientes);
            console.log('completados', this.completados);
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['home']);
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
        this.tratamientoService.getTreatmen();
    }
    goOpen(ordenes) {
        let navigationExtras = {
            state: {
                user: ordenes,
            }
        };
        this.router.navigate(['request-open'], navigationExtras);
    }
    goClosed(completados) {
        let navigationExtras = {
            state: {
                user: completados,
            }
        };
        this.router.navigate(['request-closed'], navigationExtras);
    }
    goPago(orden) {
        this.cart_med = orden.get_cart;
        this.id = orden.id;
        this.status = orden.status;
        console.log(orden);
        console.log(this.cart_med);
        this.invoice_i = this.cart_med[0].invoice_id;
        console.log(this.invoice_i);
        this.http.get(`${this.base_url}${this.payment_url}${this.invoice_i}/1?email=${this.userid}`).subscribe(pay => {
            this.ad = pay;
            this.address = this.ad.posted.address;
            this.linkpay = this.ad.preference.init_point;
            this.iab.create(this.linkpay, '_blank');
        });
    }
    removeOrder(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">¿Deseas eliminar el pedido?',
                mode: 'ios',
                cssClass: 'failed',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Si',
                        cssClass: 'btnalert',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                cssClass: 'loading',
                                message: 'Por favor espera...',
                                mode: 'ios',
                                spinner: 'dots'
                            });
                            yield loading.present();
                            this.user = this.auth.getusuario();
                            this.userid1 = this.user.email;
                            this.http.get(`${this.base_url}user/pres-delete/${order.id}`).subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.estado = val;
                                this.estado1 = this.estado.status;
                                if (this.estado1 === 'SUCCESS') {
                                    loading.dismiss();
                                    for (let [index, p] of this.pendientes.entries()) {
                                        if (p.id === order.id) {
                                            this.pendientes.splice(index, 1);
                                        }
                                    }
                                    const alert2 = yield this.alertController.create({
                                        message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Se ha eliminado tu pedido',
                                        mode: 'ios',
                                        cssClass: 'failed',
                                        buttons: [
                                            { text: 'ok', cssClass: 'btnalert' }
                                        ]
                                    });
                                    yield alert2.present();
                                }
                            }));
                        })
                    },
                    {
                        text: 'No',
                        cssClass: 'btnalert',
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MispedidosPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_8__["TratamientosService"] }
];
MispedidosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mispedidos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mispedidos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mispedidos/mispedidos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mispedidos.page.scss */ "./src/app/pages/mispedidos/mispedidos.page.scss")).default]
    })
], MispedidosPage);



/***/ })

}]);
//# sourceMappingURL=pages-mispedidos-mispedidos-module-es2015.js.map