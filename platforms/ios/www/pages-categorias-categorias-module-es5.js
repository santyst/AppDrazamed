function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorias-categorias-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriasCategoriasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n  <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\" >\n  </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-menu-button slot=\"start\" menu=\"main-menu\"></ion-menu-button>\n      <ion-button class=\"carrito\" (click)=\"goCarrito()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n      <ion-badge>{{ cartItemCount | async }}</ion-badge>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"searchbar\">\n    <ion-grid>\n      <ion-button expand=\"block\" class=\"btn-continue\" (click)=\"buscarMed()\"><ion-icon class=\"search\" name=\"search-outline\"></ion-icon>\n        <div class=\"letra\"><p class=\"btntext\"><first-letter>B</first-letter>usca aquí tus productos</p></div></ion-button>\n     </ion-grid>\n  </div>\n \n  <div class=\"container\">\n    <div class=\"title\">\n      <p class=\"title_seccion\">{{categorias}}</p>\n    </div>\n    <div class=\"categorias\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n             <div class=\"product\" >\n              <ion-segment scrollable class=\"scrolli\">\n                <ion-card class=\"card_product\" color=\"light\" *ngFor=\"let datas of searchres5\"> \n                  <div class=\"elementos\">\n                    <div class=\" align-self-center pt-10 pb-10\">\n                        <img src={{base_url}}{{apiUrl5}}{{datas.url_img}} alt=\"\" class=\"img-fluid\">\n                         \n                    </div>\n                    <div class=\"align-self-center\">\n                      <ion-card-title class=\"price_product pt-20\">${{datas.mrp | number}}</ion-card-title>\n                      <p class=\"price_product1\" *ngIf=\" datas.units_value !== 0\">{{datas.units}} a\n                        ${{(datas.mrp / datas.units_value).toFixed(2)}}</p>\n                      <p class=\"price_product1\" *ngIf=\"datas.units_value == 0\">{{datas.units}} a $0</p>\n                        <p class=\"name_product ion-text-wrap textadjust\">{{datas.name}}</p>      \n                        <p class=\"description_product \">{{datas.composition}}</p>\n                        <p *ngIf=\"datas.quantity <= 50\" class=\"notavailable\">No disponible</p>\n                        <p *ngIf=\"datas.quantity > 50\" class=\"available\">Disponible</p>\n                      </div>\n                    </div>\n                    <ion-button class=\"btn_product\" (click)=\"addToCart(datas)\" [disabled]=\"datas.quantity < 50\">Agregar</ion-button> \n                 </ion-card>\n               <ion-card class=\"card_product\" color=\"light\" *ngFor=\"let datas of searchres4\"> \n                <div class=\"elementos\">\n                  <div class=\" align-self-center pt-10 pb-10\">\n                      <img src={{base_url}}{{apiUrl5}}{{datas.url_img}} alt=\"\" class=\"img-fluid\">\n                      \n                  </div>\n                  <div class=\"align-self-center\">\n                    <ion-card-title class=\"price_product pt-20\">${{datas.mrp | number}}</ion-card-title>\n                    <p class=\"price_product1\" *ngIf=\" datas.units_value !== 0\">{{datas.units}} a\n                      ${{(datas.mrp / datas.units_value).toFixed(2)}}</p>\n                    <p class=\"price_product1\" *ngIf=\"datas.units_value == 0\">{{datas.units}} a $0</p>\n                      <p class=\"name_product ion-text-wrap textadjust\">{{datas.name}}</p>      \n                      <p class=\"description_product \">{{datas.composition}}</p>\n                      <p *ngIf=\"datas.quantity <= 40\" class=\"notavailable\">No disponible</p>\n                      <p *ngIf=\"datas.quantity > 40\" class=\"available\">Disponible</p>\n                    </div>\n                  </div>\n                  <ion-button class=\"btn_product\" (click)=\"addToCart(datas)\" [disabled]=\"datas.quantity <= 40\">Agregar</ion-button> \n               </ion-card>\n              </ion-segment>\n             </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriasPageRoutingModule */

  /***/
  function srcAppPagesCategoriasCategoriasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function () {
      return CategoriasPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/pages/categorias/categorias.page.ts");

    var routes = [{
      path: '',
      component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }];

    var CategoriasPageRoutingModule = function CategoriasPageRoutingModule() {
      _classCallCheck(this, CategoriasPageRoutingModule);
    };

    CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categorias/categorias.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriasPageModule */

  /***/
  function srcAppPagesCategoriasCategoriasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function () {
      return CategoriasPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categorias-routing.module */
    "./src/app/pages/categorias/categorias-routing.module.ts");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/pages/categorias/categorias.page.ts");

    var CategoriasPageModule = function CategoriasPageModule() {
      _classCallCheck(this, CategoriasPageModule);
    };

    CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]],
      declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CategoriasPageModule);
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categorias/categorias.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriasCategoriasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container1 {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 60px !important;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #eeeef1;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: 2px;\n  right: 9px;\n  --background: #c9c9c9;\n  width: 28px;\n  height: 20px;\n  font-size: 16px;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\nion-searchbar {\n  --icon-color: #fff;\n  --background: #00a2dd !important;\n  --border-radius: 20px !important;\n  --placeholder-color: #fff !important;\n  --placeholder-opacity: 1;\n}\n\n.searchbar {\n  margin-top: -2px !important;\n}\n\n.btn-continue {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #00a2dd !important;\n  font-weight: 600 !important;\n  font-size: 17.5px !important;\n  width: 95% !important;\n  --border-radius: 20px !important;\n  height: 41px !important;\n}\n\nion-grid {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  background: #eeeef1;\n}\n\n.btntext::first-letter {\n  text-transform: uppercase !important;\n}\n\n.search {\n  margin-right: 35px;\n}\n\nion-icon {\n  min-width: 21px;\n  max-width: 21px;\n  margin-left: -40px;\n}\n\n.letra {\n  margin-left: -20px;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.container {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: -18px !important;\n  background: #eeeef1;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n  text-transform: lowercase !important;\n}\n\n.title_seccion::first-letter {\n  text-transform: uppercase !important;\n}\n\n.categorias {\n  margin-top: -23px !important;\n  background: #eeeef1;\n}\n\nion-grid {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  background: #eeeef1;\n}\n\n.product {\n  margin-bottom: 30px !important;\n}\n\n.card_product {\n  padding: 20px !important;\n  border-radius: 20px !important;\n  margin-bottom: 15px !important;\n  min-width: 50% !important;\n  max-width: 50% !important;\n}\n\n.card_product1 {\n  padding: 20px !important;\n  border-radius: 20px !important;\n  margin-bottom: 15px !important;\n  min-width: 170px !important;\n  max-width: 170px !important;\n}\n\n@media (min-width: 400px) and (max-width: 420px) {\n  .card_product1 {\n    padding: 20px !important;\n    border-radius: 20px !important;\n    margin-bottom: 15px !important;\n    min-width: 200px !important;\n    max-width: 200px !important;\n  }\n}\n\n.name_product {\n  font-size: 100% !important;\n  font-weight: 1000 !important;\n  color: #535353 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 100% !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n  text-transform: lowercase !important;\n}\n\n.price_product1 {\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.btn_product {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  height: 50px !important;\n  width: 102% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.img-fluid {\n  height: 100px !important;\n}\n\n.elementos {\n  min-height: 260px !important;\n  max-height: 260px !important;\n}\n\n.scrolli {\n  background: #eeeef1;\n}\n\n.title {\n  padding-left: 10px !important;\n}\n\n@media (max-width: 360px) {\n  .textadjust {\n    font-size: 10px !important;\n  }\n}\n\n@media (min-width: 373px) {\n  .textadjust {\n    font-size: 10px !important;\n  }\n}\n\n@media (max-width: 340px) {\n  .price_product {\n    font-size: 16px !important;\n  }\n}\n\n@media (max-width: 323px) {\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 13.5px !important;\n    width: 95% !important;\n    --border-radius: 20px !important;\n    height: 41px !important;\n  }\n}\n\n@media (min-width: 400px) and (max-width: 417px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: 2px;\n    right: 9px;\n    --background: #c9c9c9;\n    width: 28px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 336px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 5px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 337px) and (max-width: 350px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 10px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n.available {\n  font-size: 17px !important;\n  color: #008000 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.notavailable {\n  font-size: 17px !important;\n  color: #ff0000 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 39px;\n    --background: #c9c9c9;\n    width: 45px;\n    height: 29px;\n    font-size: 25px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 25px !important;\n    width: 95% !important;\n    --border-radius: 20px !important;\n    height: 55px !important;\n  }\n\n  ion-icon {\n    min-width: 43px;\n    max-width: 43px;\n    margin-left: -40px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 35px;\n    font-weight: 700;\n    margin: 20px 0px;\n    text-transform: lowercase !important;\n  }\n\n  .img-fluid {\n    height: 150px !important;\n  }\n\n  .elementos {\n    min-height: 260px !important;\n    max-height: 260px !important;\n    margin-bottom: 75px;\n  }\n\n  .price_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .price_product1 {\n    font-size: 21px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .name_product {\n    font-size: 21px !important;\n    font-weight: 1000 !important;\n    color: #535353 !important;\n    margin: 8px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .description_product {\n    font-size: 25px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 12px 0px !important;\n    text-transform: lowercase !important;\n  }\n\n  .btn_product {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 21px !important;\n    font-weight: 600 !important;\n    height: 65px !important;\n    width: 102% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .available {\n    font-size: 23px !important;\n    color: #008000 !important;\n    line-height: 18px !important;\n    margin: 15px 0px !important;\n  }\n\n  .notavailable {\n    font-size: 23px !important;\n    color: #ff0000 !important;\n    line-height: 18px !important;\n    margin: 15px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ0dGOztBRERBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDSUY7O0FEREE7RUFDRSwrQkFBQTtFQUNBLHlDQUFBO0FDSUY7O0FEREE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0lGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQ0lGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUNPRjs7QURMQTtFQUNFLDJCQUFBO0FDUUY7O0FETkE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFB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QUNBLDhCQUFBO0lBQ0EsNkJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7RUNnREY7O0VEOUNBO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7RUNpREY7O0VEL0NBO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7RUNrREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDYwcHggIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWVlZjE7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYnRuX2kge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gIC0taWNvbi1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbi5zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTcuNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDFweCAhaW1wb3J0YW50O1xufVxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cbi5idG50ZXh0OjpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIxcHg7XG4gIG1heC13aWR0aDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuLmxldHJhIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0xOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cbi50aXRsZV9zZWNjaW9uOjpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcmlhcyB7XG4gIG1hcmdpbi10b3A6IC0yM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZWVlZWYxO1xufVxuLnByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZF9wcm9kdWN0IHtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cbi5jYXJkX3Byb2R1Y3QxIHtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY2FyZF9wcm9kdWN0MSB7XG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMTAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUzNTM1MyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4ucHJpY2VfcHJvZHVjdDEge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmJ0bl9wcm9kdWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAyJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5pbWctZmx1aWQge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG4uZWxlbWVudG9zIHtcbiAgbWluLWhlaWdodDogMjYwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjYwcHggIWltcG9ydGFudDtcbn1cbi5zY3JvbGxpIHtcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cbi50aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50ZXh0YWRqdXN0IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM3M3B4KSB7XG4gIC50ZXh0YWRqdXN0IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gIC5wcmljZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyM3B4KSB7XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDFweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTdweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA5cHg7XG4gIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzMzZweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMzdweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5hdmFpbGFibGUge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDgwMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm90YXZhaWxhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAzOXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuYnRuLWNvbnRpbnVlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIG1pbi13aWR0aDogNDNweDtcbiAgICBtYXgtd2lkdGg6IDQzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICB9XG4gIC50aXRsZV9zZWNjaW9ue1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5pbWctZmx1aWQge1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZWxlbWVudG9zIHtcbiAgICBtaW4taGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgfVxuICAucHJpY2VfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJpY2VfcHJvZHVjdDEge1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzUzNTM1MyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogOHB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEycHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5idG5fcHJvZHVjdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmF2YWlsYWJsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDgwMDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuICAubm90YXZhaWxhYmxlIHtcbiAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIuY29udGFpbmVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDYwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWVlZjE7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5pb24tYmFkZ2Uge1xuICBjb2xvcjogIzA0NmE4ZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gIHRvcDogMnB4O1xuICByaWdodDogOXB4O1xuICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJ0bl9pIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0taWNvbi1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuLnNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3LjVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQxcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cblxuLmJ0bnRleHQ6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cblxuaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIxcHg7XG4gIG1heC13aWR0aDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4ubGV0cmEge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5idG50ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0xOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG5cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGVfc2VjY2lvbjo6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcmlhcyB7XG4gIG1hcmdpbi10b3A6IC0yM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG5cbi5wcm9kdWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZF9wcm9kdWN0IHtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmNhcmRfcHJvZHVjdDEge1xuICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTcwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNhcmRfcHJvZHVjdDEge1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1MzUzNTMgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZV9wcm9kdWN0MSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcHJvZHVjdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctZmx1aWQge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVtZW50b3Mge1xuICBtaW4taGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsaSB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLnRleHRhZGp1c3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzczcHgpIHtcbiAgLnRleHRhZGp1c3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIzcHgpIHtcbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMy41cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQxN3B4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IDJweDtcbiAgICByaWdodDogOXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzMzZweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMzdweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5hdmFpbGFibGUge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDgwMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RhdmFpbGFibGUge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMzlweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBtaW4td2lkdGg6IDQzcHg7XG4gICAgbWF4LXdpZHRoOiA0M3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgfVxuXG4gIC50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctZmx1aWQge1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5lbGVtZW50b3Mge1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICB9XG5cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpY2VfcHJvZHVjdDEge1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMTAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNTM1MzUzICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA4cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMnB4IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG5fcHJvZHVjdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXZhaWxhYmxlIHtcbiAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5vdGF2YWlsYWJsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/categorias/categorias.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categorias/categorias.page.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriasPage */

  /***/
  function srcAppPagesCategoriasCategoriasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPage", function () {
      return CategoriasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CategoriasPage = /*#__PURE__*/function () {
      function CategoriasPage(cartService, router, route, http, config, alertCtrl, menuCtrl) {
        var _this = this;

        _classCallCheck(this, CategoriasPage);

        this.cartService = cartService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.apiUrl = "favorites";
        this.apiUrl2 = "medicine/load-medicine-web/1?term=";
        this.apiUrl3 = "medicine/load-medicine-web/0?n=";
        this.apiUrl4 = "medicine/search-medicine/1?cat=";
        this.apiUrl5 = "";
        this.apiUrl6 = "images/products/default.png";
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
        this.base_url = config.get_base_url();
        this.cartItemCount = this.cartService.getCartItemCount();
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.categorias = _this.router.getCurrentNavigation().extras.state.cat;
            console.log(_this.categorias);

            _this.http.get("".concat(_this.base_url).concat(_this.apiUrl)).subscribe(function (favorito) {
              _this.fav = favorito;
              _this.fav2 = _this.fav.result.msg;
            });

            _this.http.get("".concat(_this.base_url).concat(_this.apiUrl4).concat(_this.categorias, "&lab=icom")).subscribe(function (res) {
              _this.searchres = res; // this.searchres2 = this.searchres.result.status;

              _this.searchres5 = _this.searchres.result.msg; // console.log(this.searchres2);

              console.log(_this.searchres5);
            });

            _this.http.get("".concat(_this.base_url).concat(_this.apiUrl4).concat(_this.categorias, "&xlab=icom")).subscribe(function (res) {
              _this.searchres3 = res;
              _this.searchres4 = _this.searchres3.result.msg;
              console.log(_this.searchres4);
            });
          }
        });
      }

      _createClass(CategoriasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
        }
      }, {
        key: "buscarMed",
        value: function buscarMed() {
          this.router.navigate(['medicamentos']);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Producto agregado con éxito',
                      mode: 'ios',
                      cssClass: 'failed',
                      buttons: [{
                        text: 'Aceptar',
                        cssClass: 'btnalert'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    this.cartService.addProduct(product);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goCarrito",
        value: function goCarrito() {
          this.router.navigate(['carrito']);
        }
      }]);

      return CategoriasPage;
    }();

    CategoriasPage.ctorParameters = function () {
      return [{
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
      }];
    };

    CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorias',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categorias.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categorias.page.scss */
      "./src/app/pages/categorias/categorias.page.scss"))["default"]]
    })], CategoriasPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-categorias-categorias-module-es5.js.map