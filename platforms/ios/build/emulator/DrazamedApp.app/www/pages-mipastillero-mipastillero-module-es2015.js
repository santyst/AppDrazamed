(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mipastillero-mipastillero-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mipastillero/mipastillero.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mipastillero/mipastillero.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n    <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-menu-button slot=\"start\" menu=\"main-menu\"></ion-menu-button>\n      <ion-button class=\"carrito\" (click)=\"goCarrito()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n      <ion-badge>{{ cartItemCount | async }}</ion-badge>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n<div class=\"container1\">\n<p class=\"title_seccion center\">Mi pastillero</p>\n</div>\n<div class=\"container\">\n  <ion-slides pager=\"true\" [options]=\"sliderOpts\" #mySlider mode=\"ios\">\n  <ion-slide>\n  <div class=\"banner\">\n    <div class=\"inner\">\n  <img src=\"../../assets/img/RECURSOS/banner-2 (2).JPG\" class=\"img_banner\"alt=\"\">\n    </div>\n  </div>\n  </ion-slide>\n  \n  <!-- <ion-slide>\n    <div class=\"banner\">\n      <div class=\"inner\">\n    <img src=\"../../assets/img/RECURSOS/img_banner.jpg\" class=\"img_banner\"alt=\"\">\n      </div>\n    </div>\n    </ion-slide>\n  \n    <ion-slide>\n      <div class=\"banner\">\n        <div class=\"inner\">\n      <img src=\"../../assets/img/RECURSOS/img_banner.jpg\" class=\"img_banner\"alt=\"\">\n        </div>\n      </div>\n      </ion-slide> -->\n  </ion-slides>\n  <ion-row class=\"result_search\">\n   <ion-col size=\"12\" class=\"addres_space\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"align-self\">\n          <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-60.png\" width=\"180%\">\n        </ion-col>\n        <ion-col size=\"10\" class=\"align-self\">\n            <ion-button (click)=\"createAlarm()\" class=\"btn_product\">C<p class=\"btntext\">rear alarma</p></ion-button>\n        </ion-col>\n      </ion-row>\n   </ion-col>\n  </ion-row>\n  \n  </div>\n  <div *ngIf=\"alarmas.length !== 0\">\n  <div class=\"sub-cont4\">\n    <p class=\"title_seccion\">Mis alarmas</p>\n  </div>\n<ion-row class=\"result_search\" *ngFor=\"let al of alarmas\">\n  <ion-col size=\"6\" class=\"col_trat\">\n    <p class=\"grey\" *ngIf=\"al.timeH !== 0 || al.timeD !== 0 || al.timeM !== 0\">Próxima {{al.timeH}}H {{al.timeM}}Min ({{al.next_time}})</p>\n    <p class=\"grey\" *ngIf=\"al.timeH === 0 && al.timeD === 0 && al.timeM === 0 && al.next_date !== null\">Recalculando próxima toma</p>\n    <p class=\"grey\" *ngIf=\"al.next_date === null\">Fin del tratamiento</p>\n  </ion-col>\n <ion-col size=\"1\">\n  <ion-toggle checked mode=\"ios\" class=\"toggle\"></ion-toggle>\n </ion-col>\n <ion-col size=\"5\">\n  <ion-buttons>\n    <ion-button class=\"trash\" (click)=\"removetreatment(al)\"><img src=\"../../../assets/img/RECURSOS/trash.png\"\n        width=\"100%\" class=\"basurita\"></ion-button>\n  </ion-buttons>\n </ion-col>\n <ion-col size=\"3\" class=\"align-self img_product\">\n   <img src={{base_url}}{{apiUrl7}}{{al.item_code}}{{apiUrl8}} width=\"100%\" class=\"imagen_med\">\n </ion-col>\n <ion-col size=\"5\" class=\"align-self\">\n   <p class=\"name_product\">{{al.item_name}}</p>\n   <p class=\"description_product\">{{al.composition}}</p>\n </ion-col>\n <ion-col size=\"4\" class=\"align-self\">\n  <ion-button (click)=\"processTreat(al)\" class=\"btn-product\">E<p class=\"btntext\">stado</p></ion-button>\n  <ion-button (click)=\"editAlarm(al)\" class=\"btn-product\" [disabled]=\"al.next_date === null\">E<p class=\"btntext\">ditar</p></ion-button>\n </ion-col>\n</ion-row>\n</div>\n<div class=\"titulo\" *ngIf=\"alarmas.length === 0\">\n  <p class=\"tratamientos_vacio\">No tienes tratamientos en curso</p>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mipastillero/mipastillero-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/mipastillero/mipastillero-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MipastilleroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MipastilleroPageRoutingModule", function() { return MipastilleroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mipastillero_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mipastillero.page */ "./src/app/pages/mipastillero/mipastillero.page.ts");




const routes = [
    {
        path: '',
        component: _mipastillero_page__WEBPACK_IMPORTED_MODULE_3__["MipastilleroPage"]
    }
];
let MipastilleroPageRoutingModule = class MipastilleroPageRoutingModule {
};
MipastilleroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MipastilleroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mipastillero/mipastillero.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mipastillero/mipastillero.module.ts ***!
  \***********************************************************/
/*! exports provided: MipastilleroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MipastilleroPageModule", function() { return MipastilleroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mipastillero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mipastillero-routing.module */ "./src/app/pages/mipastillero/mipastillero-routing.module.ts");
/* harmony import */ var _mipastillero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mipastillero.page */ "./src/app/pages/mipastillero/mipastillero.page.ts");







let MipastilleroPageModule = class MipastilleroPageModule {
};
MipastilleroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mipastillero_routing_module__WEBPACK_IMPORTED_MODULE_5__["MipastilleroPageRoutingModule"]
        ],
        declarations: [_mipastillero_page__WEBPACK_IMPORTED_MODULE_6__["MipastilleroPage"]]
    })
], MipastilleroPageModule);



/***/ }),

/***/ "./src/app/pages/mipastillero/mipastillero.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/mipastillero/mipastillero.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: 2px;\n  right: 9px;\n  --background: #c9c9c9;\n  width: 28px;\n  height: 20px;\n  font-size: 16px;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: #fff !important;\n  align-self: center !important;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.titulo {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  background: white;\n  text-align: center !important;\n}\n\n.tratamientos_vacio {\n  color: #00a2dd;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.grey {\n  color: #727070 !important;\n  margin-top: 0px;\n}\n\n.col_trat {\n  text-align: left !important;\n}\n\n.trash {\n  float: right !important;\n  --background: #f2f2f2 !important;\n  border-radius: 100% !important;\n  width: 100%;\n  height: 100%;\n  margin-left: 60%;\n}\n\n.toggle {\n  text-align: right !important;\n}\n\n.container1 {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: #fff;\n}\n\n.banner {\n  width: 95%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px !important;\n  margin-top: 5px !important;\n}\n\n.inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.img_banner {\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n\nion-slides {\n  --bullet-background: #232424;\n  --bullet-background-active: #009bd7;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.addres_space {\n  background: #fff;\n  padding: 20px 10px;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.btn_product {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 12px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  height: 60px;\n}\n\n.btn-product {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  display: block !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  text-decoration: none;\n  height: 55px;\n}\n\na {\n  text-decoration: none !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n  color: #00a1dd !important;\n}\n\n.imagen_med {\n  margin-right: auto !important;\n  margin-left: auto !important;\n  display: block !important;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.btn_product1 {\n  background: #00a2dd !important;\n  padding: 10px !important;\n  border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  display: block !important;\n}\n\n.sub-cont4 {\n  background-color: #fff;\n  display: block !important;\n  margin-left: 10px !important;\n}\n\n@media (min-width: 400px) and (max-width: 417px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: 2px;\n    right: 17px;\n    --background: #c9c9c9;\n    width: 29px;\n    height: 22px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 336px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 5px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 337px) and (max-width: 350px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 10px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n.btntext {\n  text-transform: lowercase;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .grey {\n    color: #727070 !important;\n    font-size: 25px;\n    margin-top: 0px;\n  }\n\n  .basurita {\n    max-width: 78%;\n    border: 0;\n  }\n\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .tratamientos_vacio {\n    color: #00a2dd;\n    font-size: 24px;\n    font-weight: 700;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 39px;\n    --background: #c9c9c9;\n    width: 45px;\n    height: 29px;\n    font-size: 25px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 35px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .btn_product {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 12px !important;\n    text-align: center !important;\n    font-size: 28px !important;\n    font-weight: 600 !important;\n    height: 75px;\n  }\n\n  .name_product {\n    font-size: 35px !important;\n    font-weight: 700 !important;\n    margin: 5px 0px !important;\n    line-height: 33px !important;\n    color: #00a1dd !important;\n  }\n\n  .btn-product {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 28px !important;\n    font-weight: 600 !important;\n    display: block !important;\n    margin-right: auto !important;\n    margin-left: auto !important;\n    text-decoration: none;\n    height: 80px;\n  }\n\n  .description_product {\n    font-size: 28px !important;\n    color: #727070 !important;\n    line-height: 27px !important;\n    margin: 5px 0px !important;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 360px) {\n  .name_product {\n    font-size: 14px !important;\n    font-weight: 700 !important;\n    color: #00a1dd !important;\n    margin: 5px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .description_product {\n    font-size: 14px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 5px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvbWlwYXN0aWxsZXJvL21pcGFzdGlsbGVyby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21pcGFzdGlsbGVyby9taXBhc3RpbGxlcm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREFBO0VBQ0UsNEJBQUE7RUFDQSx5Q0FBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDTUY7O0FESkE7RUFDRSw2QkFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDU0Y7O0FETkE7RUFDRSxjQUFBO0VBQ0Ys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Q2tDRTs7RURoQ0E7SUFDRSxhQUFBO0VDbUNGOztFRGpDQTtJQUNFLGNBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUNvQ0Y7O0VEbENBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDcUNGOztFRG5DQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsMEJBQUE7RUNzQ0Y7O0VEcENBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDdUNGOztFRHJDQTtJQUNFLGdDQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSxZQUFBO0VDd0NGOztFRHRDQTtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7RUN5Q0Y7O0VEdkNBO0lBQ0UsZ0NBQUE7SUFDQSx3QkFBQTtJQUNBLGdDQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLDZCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQzBDRjs7RUR4Q0E7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtFQzJDRjtBQUNGOztBRHhDQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFQzBDRjs7RUR4Q0E7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwwQkFBQTtFQzJDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWlwYXN0aWxsZXJvL21pcGFzdGlsbGVyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbmlvbi1iYWRnZSB7XG4gIGNvbG9yOiAjMDQ2YThmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA5cHg7XG4gIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJ0bl9pIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50cmF0YW1pZW50b3NfdmFjaW8ge1xuICBjb2xvcjogIzAwYTJkZDtcbmZvbnQtc2l6ZTogMThweDtcbmZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZ3JleXtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4uY29sX3RyYXR7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbi50cmFzaCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNjAlO1xufVxuLnRvZ2dsZXtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYmFubmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuLmlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdfYmFubmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMjMyNDI0O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzAwOWJkNztcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFkZHJlc19zcGFjZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uYnRuX3Byb2R1Y3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmJ0bi1wcm9kdWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDogNTVweDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMGExZGQgIWltcG9ydGFudDtcbn1cbi5pbWFnZW5fbWVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuLmJ0bl9wcm9kdWN0MSB7XG4gIGJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLnN1Yi1jb250NCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTdweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAycHg7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyOXB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzNnB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMzN3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5ncmV5IHtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLmJhc3VyaXRhe1xuICAgIG1heC13aWR0aDogNzglO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAudHJhdGFtaWVudG9zX3ZhY2lvIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG5mb250LXNpemU6IDI0cHg7XG5mb250LXdlaWdodDogNzAwO1xufVxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAzOXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAudGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuICAuYnRuX3Byb2R1Y3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICB9XG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzNweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bi1wcm9kdWN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxufSIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50cmF0YW1pZW50b3NfdmFjaW8ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZ3JleSB7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNvbF90cmF0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4udHJhc2gge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cblxuLnRvZ2dsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5iYW5uZXIge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWdfYmFubmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMyMzI0MjQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMDA5YmQ3O1xufVxuXG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFkZHJlc19zcGFjZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuLmFsaWduLXNlbGYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9wcm9kdWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmJ0bi1wcm9kdWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDogNTVweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZW5fbWVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcHJvZHVjdDEge1xuICBiYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnN1Yi1jb250NCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQxN3B4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IDJweDtcbiAgICByaWdodDogMTdweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzM2cHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogNXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzM3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuZ3JleSB7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgLmJhc3VyaXRhIHtcbiAgICBtYXgtd2lkdGg6IDc4JTtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudHJhdGFtaWVudG9zX3ZhY2lvIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLmNhcnJvMSB7XG4gICAgbWF4LXdpZHRoOiA2OCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1yaWdodDogLTQxcHg7XG4gIH1cblxuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAzOXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICAuYnRuX3Byb2R1Y3Qge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMGExZGQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4tcHJvZHVjdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwYTFkZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/mipastillero/mipastillero.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mipastillero/mipastillero.page.ts ***!
  \*********************************************************/
/*! exports provided: MipastilleroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MipastilleroPage", function() { return MipastilleroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tratamientos.service */ "./src/app/services/tratamientos.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");










let MipastilleroPage = class MipastilleroPage {
    constructor(cartService, router, storage, platform, config, tratamientoService, alertCtrl, auth, http, menuCtrl) {
        this.cartService = cartService;
        this.router = router;
        this.storage = storage;
        this.platform = platform;
        this.config = config;
        this.tratamientoService = tratamientoService;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.apiUrl7 = `images/products/`;
        this.apiUrl8 = `.jpg`;
        this.alarmas = [];
        this.items2 = [];
        this.proxima = [];
        this.apiUrl = `my-treatments?email=`;
        this.alarm = [];
        this.sliderOpts = {
            autoplay: true,
            speed: 1000,
            zoom: {
                maxRatio: 5
            }
        };
        this.base_url = config.get_base_url();
        this.cartItemCount = this.cartService.getCartItemCount();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.alarmas = this.tratamientoService.getAlarma();
        this.menuCtrl.enable(true);
        console.log(this.alarmas);
        console.log('entrando');
    }
    /*  getTreatments(){
       // this.alarmas.splice(0, this.alarmas.length);
       this.alarm.splice(0, this.alarm.length);
       this.proxima.splice(0, this.proxima.length);
       this.user = this.auth.getusuario();
       console.log(this.user);
         this.user1 = this.auth.getusuario();
         this.userid = this.user1.email;
         this.http.get(`${this.base_url}${this.apiUrl}${this.userid}`).subscribe(val => {
           this.items = val;
           for (let item of this.items) {
             let next_date = item.next_time;
             item.next_time = moment(item.next_time).format('LT');
             item.medicines[0].next_time = item.next_time;
             item.medicines[0].next_date = next_date;
             item.medicines[0].dosis = item.dosis;
             item.medicines[0].taken = item.taken;
             item.medicines[0].total = item.total;
             item.medicines[0].buy_time = moment(item.buy_time).format('ll');
     
             this.items3 = item.medicines
             for (var i = 0; i < this.items3.length; i++) {
               this.items2.push(this.items3[i]);
               this.alarm = this.items2;
             }
           }
           for (let ala of this.alarm) {
             // this.alar.push(ala);
             console.log(ala);
             this.tratamientoService.addAlarm(ala);
           
           }
            this.alarmas = this.tratamientoService.getAlarma();
           for (let al of this.alarmas) {
              this.tratamientoService.TimeRemaining(al.item_code, al.next_date);
           }
          // console.log(this.alarmas);
     
         });
     } */
    createAlarm() {
        this.router.navigate(['createalarm']);
    }
    editAlarm(alarmas) {
        let navigationExtras = {
            state: {
                user: alarmas
            }
        };
        this.router.navigate(['edit-alarm'], navigationExtras);
    }
    goCarrito() {
        this.router.navigate(['carrito']);
    }
    removetreatment(alarma) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">¿Deseas eliminar el tratamiento?',
                mode: 'ios',
                cssClass: 'failed',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Si',
                        cssClass: 'btnalert',
                        handler: data => {
                            this.tratamientoService.removeAlarm(alarma);
                        }
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
    processTreat(alarma) {
        let navigationExtras = {
            state: {
                user: alarma
            }
        };
        this.router.navigate(['processtreatment'], navigationExtras);
    }
};
MipastilleroPage.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_7__["TratamientosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider')
], MipastilleroPage.prototype, "slider", void 0);
MipastilleroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mipastillero',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mipastillero.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mipastillero/mipastillero.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mipastillero.page.scss */ "./src/app/pages/mipastillero/mipastillero.page.scss")).default]
    })
], MipastilleroPage);



/***/ })

}]);
//# sourceMappingURL=pages-mipastillero-mipastillero-module-es2015.js.map