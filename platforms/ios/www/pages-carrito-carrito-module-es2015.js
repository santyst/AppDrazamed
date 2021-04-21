(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carrito-carrito-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrito/carrito.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrito/carrito.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goHome()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"goPerfil()\">\n        <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-38.png\" class=\"carro1\">\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"ios\">\n\n  <div class=\"titulo\">\n    <!-- <img src=\"../../../assets/img/RECURSOS/iconos drazamed-17.png\" class=\"img_title\">-->\n    <p class=\"title_seccion\">Carrito de Compras</p>\n  </div>\n  <div class=\"titulo\">\n    <p *ngIf=\"cart.length == 0\" class=\"carrito_vacio\">Carrito Vacío</p>\n  </div>\n  <div class=\"container\">\n    <ion-grid>\n\n      <ion-row class=\"result_search\" *ngFor=\"let p of cart\">\n        <ion-col size=\"3\" class=\"align-self-center\">\n          <div >\n            <img src={{base_url}}{{apiImg}}{{p.item_code}}{{apiUrl8}} class=\"img_product\" width=\"100%\">\n          </div>\n\n         \n        </ion-col>\n\n        <ion-col size=\"5\" class=\"align-self-center\">\n          <p class=\"name_product\">{{p.medicine_name}}{{p.name}}{{p.value}}</p>\n          <p class=\"price_product\">${{ p.medicine_count * p.mrp | number}}{{p.medicine_count * p.unit_price | number}}\n          </p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-buttons>\n            <ion-button class=\"trash\" (click)=\"removeCartItem(p)\"><img src=\"../../../assets/img/RECURSOS/trash.png\"\n                width=\"100%\" class=\"basurita\"></ion-button>\n          </ion-buttons>\n\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\" class=\"butonsaddr1\">\n            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n          <p class=\"qtyty\">{{ p.medicine_count }}</p>\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\" class=\"butonsaddr\">\n            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"agregar\">\n          <ion-button class=\"btn-continue\" expand=\"block\" (click)=\"goBuscar()\" >A<p class=\"btntext\">gregar más productos\n            </p>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"result_search\">\n        <ion-col size=\"12\">\n          <div class=\"formula\">\n            <p class=\"name_product\">Formula médica</p>\n            <p class=\"description_product\">Adjunta aquí tu formula médica. En constantes minutos te verificaremos para\n              seguir con la compra</p>\n          </div>\n          <div class=\"section_attach\" *ngIf=\"formulaImage === ''\">\n            <ion-button fill=\"clear\" class=\"images\" (click)=\"selectImage()\">\n              <img src=\"../../../assets/img/RECURSOS/attach.png\" width=\"24%\">\n            </ion-button>\n            <p class=\"description_product\">Adjuntar formula</p>\n          </div>\n          <div class=\"section_attach\" *ngIf=\"formulaImage !== ''\">\n            <ion-list>\n              <ion-item>\n                <ion-thumbnail slot=\"start\">\n                  <img [src]=\"formulaImage\" class=\"photo_user\">\n                </ion-thumbnail>\n                <!-- <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img)\">\n                  <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n                </ion-button>\n                <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-button> -->\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"result_search\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <p class=\"name_product\">Subtotal</p>\n            </ion-col>\n            <ion-col size=\"6\">\n              <p class=\"description_product\">${{getTax() | number}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <p class=\"name_product\">Costo envío</p>\n            </ion-col>\n            <ion-col size=\"6\">\n              <p class=\"description_product\">$2000</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <p class=\"name_product\">Impuesto</p>\n            </ion-col>\n            <ion-col size=\"6\">\n              <p class=\"description_product\">${{impuesto() | number}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <p class=\"name_product\">Total</p>\n            </ion-col>\n            <ion-col size=\"6\">\n              <p class=\"description_product\">${{ getTotal() | number }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"agregar\">\n          <div *ngIf=\"images.length == 0\">\n\n            <ion-button (click)=\"send()\" class=\"btn-continue\" expand=\"block\" [disabled]=\"cart == []\">C<p class=\"btntext\">\n                rear Orden</p>\n            \n            </ion-button>\n            \n          </div>\n\n          <div *ngFor=\"let p of cart\">\n            <div *ngFor=\"let img of images; index as pos\" text-wrap>\n              <div *ngIf=\"p.is_pres_required === 1\">\n                <!-- <ion-button class=\"btn-continue\" expand=\"block\" (click)=\"startUpload(img)\">C<p class=\"btntext\">rear\n                    Pedido Con</p>\n                </ion-button> -->\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/carrito/carrito-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/carrito/carrito-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CarritoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageRoutingModule", function() { return CarritoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrito.page */ "./src/app/pages/carrito/carrito.page.ts");




const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_3__["CarritoPage"]
    }
];
let CarritoPageRoutingModule = class CarritoPageRoutingModule {
};
CarritoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarritoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/carrito/carrito.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.module.ts ***!
  \*************************************************/
/*! exports provided: CarritoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageModule", function() { return CarritoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrito-routing.module */ "./src/app/pages/carrito/carrito-routing.module.ts");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrito.page */ "./src/app/pages/carrito/carrito.page.ts");







let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carrito_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarritoPageRoutingModule"]
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]]
    })
], CarritoPageModule);



/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: white;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.titulo {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n  background: white;\n  text-align: center !important;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.price_product {\n  font-size: 21px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.trash {\n  float: right !important;\n  --background: #f2f2f2 !important;\n  border-radius: 100% !important;\n  width: 100%;\n  height: 100%;\n  margin-left: 60%;\n}\n\n.btn-continue {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #00a2dd !important;\n  font-weight: 600 !important;\n  font-size: 17.5px !important;\n  width: 75% !important;\n  --border-radius: 8px !important;\n}\n\n.agregar {\n  align-self: center !important;\n  padding-top: 20px !important;\n  padding-bottom: 30px !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.formula {\n  margin-top: 10px !important;\n  margin-left: 5px;\n}\n\n.section_attach {\n  margin-top: 30px !important;\n  margin-bottom: 30px !important;\n  align-self: center !important;\n  text-align: center !important;\n  background: #fff;\n  border-radius: 30px !important;\n  padding: 30px 0px !important;\n}\n\n.qtyty {\n  font-size: 20px;\n  margin-left: 30px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.images {\n  height: auto;\n}\n\n.carrito_vacio {\n  color: red;\n  font-size: 16px;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 36px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .carrito_vacio {\n    color: red;\n    font-size: 26px;\n  }\n\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 27.5px !important;\n    width: 75% !important;\n    --border-radius: 8px !important;\n  }\n\n  .name_product {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 5px 0px !important;\n    line-height: 29px !important;\n  }\n\n  .description_product {\n    font-size: 21px !important;\n    color: #727070 !important;\n    line-height: 22px !important;\n    margin: 5px 0px !important;\n  }\n\n  .price_product {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .butonsaddr {\n    margin-top: -10px;\n    font-size: 22px;\n  }\n\n  .butonsaddr1 {\n    font-size: 22px;\n    margin-top: -40px;\n  }\n\n  .qtyty {\n    font-size: 35px;\n    margin-left: 30px;\n    margin-top: 5px;\n  }\n\n  .basurita {\n    max-width: 78%;\n    border: 0;\n  }\n\n  .img_product {\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n    padding: 10px !important;\n    border-radius: 30px !important;\n    background-color: #fff !important;\n    max-width: 78% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDSUY7O0FEREE7RUFDRSw2QkFBQTtFQUNBLHlDQUFBO0FDSUY7O0FERkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNRRjs7QUROQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0UsNkJBQUE7QUNVRjs7QURSQTtFQUNFLHNEQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDV0Y7O0FEVEE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDWUY7O0FEVkE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNjRjs7QURaQTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNlRjs7QURiQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDaUJGOztBRGZBO0VBQ0Usb0NBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ21CRjs7QURqQkE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQ29CRjs7QURsQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNxQkY7O0FEbkJBO0VBQ0UsWUFBQTtBQ3NCRjs7QURwQkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ3VCRjs7QURyQkE7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDd0JGOztFRHRCQTtJQUNFLGFBQUE7RUN5QkY7O0VEdkJBO0lBQ0UsY0FBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQzBCRjs7RUR4QkE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7O0VEekJBO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUM0QkY7O0VEMUJBO0lBQ0UsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLHFCQUFBO0lBQ0EsK0JBQUE7RUM2QkY7O0VEM0JBO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFQzhCRjs7RUQ1QkE7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtFQytCRjs7RUQ3QkE7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtFQ2dDRjs7RUQ5QkE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNpQ0Y7O0VEL0JBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDa0NGOztFRGhDQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNtQ0Y7O0VEakNBO0lBQ0UsY0FBQTtJQUNBLFNBQUE7RUNvQ0Y7O0VEbENBO0lBQ0Usc0RBQUE7SUFDQSx3QkFBQTtJQUNBLDhCQUFBO0lBQ0EsaUNBQUE7SUFDQSx5QkFBQTtFQ3FDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2Fycml0by9jYXJyaXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uaW1nX3Byb2R1Y3Qge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5wcmljZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi50cmFzaCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNjAlO1xufVxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3LjVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG59XG4uYWdyZWdhciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xufVxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uZm9ybXVsYSB7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zZWN0aW9uX2F0dGFjaCB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMzBweCAwcHggIWltcG9ydGFudDtcbn1cbi5xdHl0eSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmltYWdlcyB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5jYXJyaXRvX3ZhY2lvIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuICAudGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuICAuY2Fycml0b192YWNpbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNy41cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgfVxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICB9XG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ1dG9uc2FkZHIge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuYnV0b25zYWRkcjEge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgfVxuICAucXR5dHkge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgLmJhc3VyaXRhe1xuICAgIG1heC13aWR0aDogNzglO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAuaW1nX3Byb2R1Y3Qge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDc4JSAhaW1wb3J0YW50O1xuICB9XG5cbn1cbiIsIi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnByaWNlX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4udHJhc2gge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cblxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3LjVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZ3JlZ2FyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG50ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybXVsYSB7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNlY3Rpb25fYXR0YWNoIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucXR5dHkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmltYWdlcyB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNhcnJpdG9fdmFjaW8ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG5cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICAuY2Fycml0b192YWNpbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cblxuICAuYnRuLWNvbnRpbnVlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI3LjVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpY2VfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXRvbnNhZGRyIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuYnV0b25zYWRkcjEge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgfVxuXG4gIC5xdHl0eSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5iYXN1cml0YSB7XG4gICAgbWF4LXdpZHRoOiA3OCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLmltZ19wcm9kdWN0IHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA3OCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.ts ***!
  \***********************************************/
/*! exports provided: CarritoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPage", function() { return CarritoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");












let CarritoPage = class CarritoPage {
    constructor(router, menuCtrl, cartService, alertCtrl, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, platform, auth, config) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.cartService = cartService;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.platform = platform;
        this.auth = auth;
        this.config = config;
        this.images = [];
        this.cantidad = [];
        this.item_code = [];
        this.formula = [];
        this.imgUrl = `images/products/default.png`;
        this.apiImg = `images/products/`;
        this.apiUrl8 = `.jpg`;
        this.delete_cart = `empty-cart?email=`;
        this.formulaImage = "";
        this.cart = [];
        this.base_url = config.get_base_url();
        this.mycart = this.cartService.getCurrent();
        console.log(this.mycart);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    goPerfil() {
        this.router.navigate(['perfil']);
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cart = this.cartService.getCart();
            console.log(this.cart);
            this.menuCtrl.enable(false);
            this.user = this.auth.getusuario();
            this.userid = this.user.email;
            console.log(this.userid);
            for (const formula of this.cart) {
                if (formula.is_pres_required === 1) {
                    this.value = formula.value;
                    this.name = formula.name;
                    this.med = formula.medicine_name;
                    this.text = `El medicamento ${this.value || this.name || this.med} requiere adjuntar fórmula médica`;
                    const alert = yield this.alertCtrl.create({
                        header: this.text,
                        message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">',
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
            }
        });
    }
    goHome() {
        this.router.navigate(['home']);
    }
    decreaseCartItem(product) {
        this.cartService.decreaseProduct(product);
    }
    increaseCartItem(product) {
        this.cartService.addProduct(product);
    }
    removeCartItem(product) {
        this.cartService.removeProduct(product);
    }
    getSubTotal() {
        return this.cart.reduce((i, j) => i + (j.unit_price * j.medicine_count || +j.mrp * j.medicine_count), 0);
    }
    getTotal() {
        if (this.cart.length !== 0) {
            return this.getSubTotal() + 2000;
        }
        else {
            return 0;
        }
    }
    getTax() {
        this.subtotal = 0;
        this.subtotal1 = 0;
        for (let ta of this.cart) {
            this.total = (ta.mrp * ta.medicine_count || ta.unit_price * ta.medicine_count);
            this.tax1 = ta.tax ? ta.tax : 0;
            this.subtotal = Math.floor(this.total / (((100) + this.tax1) / 100));
            this.subtotal1 += this.subtotal;
        }
        return this.subtotal1;
    }
    envio() {
        if (this.cart.length === 0) {
            return 0;
        }
        else {
            return 2000;
        }
    }
    impuesto() {
        return this.getSubTotal() - this.getTax();
    }
    goBuscar() {
        this.router.navigate(['medicamentos']);
    }
    // --------------------- codigo para subir formula
    showAlert1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert1">Tu fórmula ha sido subida correctamente',
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
        });
    }
    showAlert2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert1">Ha ocurrido un error al subir tu fórmula, intenta de nuevo',
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
        });
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Selecciona una imagen',
                mode: 'ios',
                buttons: [{
                        text: 'Buscar en galeria',
                        handler: () => {
                            this.galeria();
                            /* this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY); */
                        }
                    },
                    {
                        text: 'Usar camara',
                        handler: () => {
                            this.foto();
                            /* this.takePicture(this.camera.PictureSourceType.CAMERA); */
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    foto() {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.formulaImage = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
        });
    }
    galeria() {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.formulaImage = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
        });
    }
    // --------------------- codigo para crear una orden.
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                message: 'Por favor espera...',
                mode: 'ios',
                spinner: 'dots'
            });
            yield loading.present();
            this.user1 = this.auth.getusuario();
            this.userid = this.user1.email;
            console.log(this.formulaImage);
            for (let code of this.cart) {
                this.item_code.push(code.item_code);
                this.cantidad.push(code.medicine_count);
                this.formula.push(code.is_pres_required);
            }
            this.orden = {
                email: this.userid,
                cart_length: this.cart.length,
                shipping_cost: 2000,
                quantity: this.cantidad,
                is_pres_required: 0,
                item_code: this.item_code,
                prescription: this.formulaImage
            };
            this.http.post(`${this.base_url}medicine/store-prescription/0`, this.orden, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ "Content-Type": "application/json" }) })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe((mensaje) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.code = mensaje;
                this.code2 = this.code.status;
                if (this.code2 === 'SUCCESS') {
                    const alert = yield this.alertCtrl.create({
                        message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Tu orden fue creada',
                        mode: 'ios',
                        cssClass: 'failed',
                        backdropDismiss: false,
                        buttons: [
                            {
                                text: 'Aceptar',
                                cssClass: 'btnalert',
                                handler: (data) => { alert2.present(); }
                            }
                        ]
                    });
                    const alert2 = yield this.alertCtrl.create({
                        message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">En algunos minutos verificaremos tu orden',
                        mode: 'ios',
                        cssClass: 'failed',
                        backdropDismiss: false,
                        buttons: [
                            {
                                text: 'Aceptar',
                                cssClass: 'btnalert',
                                handler: (data) => { this.router.navigate(['mispedidos']); }
                            }
                        ]
                    });
                    this.http.get(`${this.base_url}${this.delete_cart}${this.userid}`).subscribe(val => {
                        console.log(val);
                    });
                    this.cartService.removeAll();
                    yield alert.present();
                }
                else {
                    console.log(mensaje);
                    const alert = yield this.alertCtrl.create({
                        message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">Su orden no fue creada, intente de nuevo',
                        mode: 'ios',
                        cssClass: 'failed',
                        backdropDismiss: false,
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
CarritoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: File },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"] }
];
CarritoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrito.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carrito/carrito.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrito.page.scss */ "./src/app/pages/carrito/carrito.page.scss")).default]
    })
], CarritoPage);



/***/ })

}]);
//# sourceMappingURL=pages-carrito-carrito-module-es2015.js.map