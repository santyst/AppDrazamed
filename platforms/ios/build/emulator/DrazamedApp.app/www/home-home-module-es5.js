function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-menu-button slot=\"start\" menu=\"main-menu\"></ion-menu-button>\n      <ion-button class=\"carrito\" (click)=\"goCarrito()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n      <ion-badge>{{ cartItemCount | async }}</ion-badge>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"searchbar\">\n    <ion-grid>\n      <ion-button expand=\"block\" class=\"btn-continue\" (click)=\"buscarMed()\">\n        <ion-icon class=\"search\" name=\"search-outline\"></ion-icon>\n        <div class=\"letra\">\n          <p class=\"btntext\">\n            <first-letter>B</first-letter>usca aquí tus productos\n          </p>\n        </div>\n      </ion-button>\n    </ion-grid>\n  </div>\n  <div class=\"container\">\n    <p class=\"title_seccion\">Categorías</p>\n    <div class=\"categorias\">\n      <ion-grid class=\"grid-categorias\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable class=\"scrolli\">\n              <ion-button class=\"btn_category ion-text-wrap textadjust\" *ngFor=\"let data of items2\"\n                (click)=\"goCat(data.group)\">{{ data.group }}</ion-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <div class=\"container\">\n    <ion-slides pager=\"true\" [options]=\"sliderOpts\" #mySlider mode=\"ios\">\n      <!-- <ion-slide>\n        <div class=\"banner\">\n          <div class=\"inner\">\n            <img src=\"../../assets/img/RECURSOS/prueba-banner.jpeg\" class=\"img_banner\" alt=\"\">\n          </div>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"banner\">\n          <div class=\"inner\">\n            <img src=\"../../assets/img/RECURSOS/img_banner.jpg\" class=\"img_banner\" alt=\"\">\n          </div>\n        </div>\n      </ion-slide> -->\n\n      <ion-slide>\n        <div class=\"banner\">\n          <div class=\"inner\">\n            <img src=\"../../assets/img/RECURSOS/banner-2 (2).JPG\" class=\"img_banner\" alt=\"\">\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!--<div class=\"container\">\n<p class=\"title_seccion\">Ofertas</p>\n<div class=\"categorias\">\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"6\">\n         <div class=\"product\">\n           <ion-card class=\"card_product\">\n            <div>\n              <div class=\" align-self-center pt-10 pb-10\">\n                  <img src=\"../../assets/img/RECURSOS/dolex.jpeg\" alt=\"\" class=\"img-fluid\">\n              </div>\n              <div class=\"align-self-center\">\n                <ion-card-title class=\"price_product pt-20\">$000.00</ion-card-title>\n                  <p class=\"name_product\">Nombre</p>\n                \n                  <p class=\"description_product\">Lorem ipsum dolor sit amet.</p>\n              </div>\n          </div>\n          <ion-button class=\"btn_product\">Agregar</ion-button>\n           </ion-card>\n         </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n</div>-->\n\n  <div class=\"container\">\n    <p class=\"title_seccion\">Nuestros productos</p>\n    <div class=\"categorias\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"product\">\n              <ion-segment scrollable class=\"scrolli\">\n                <ion-card class=\"card_product\" color=\"light\" *ngFor=\"let datas of items4\">\n                  <div class=\"elementos\">\n                    <div class=\" align-self-center pt-10 pb-10\">\n                      <img src={{base_url}}{{apiURL3}}{{datas.url_img}} alt=\"\" class=\"img-fluid\">\n                      <!-- <img src={{base_url}}{{apiUrl1}} class=\"img-fluid\">-->\n                    </div>\n                    <div class=\"parrafos\">\n                      <ion-card-title class=\"price_product pt-20\">${{datas.mrp | number}}</ion-card-title>\n                      <p class=\"price_product1\" *ngIf=\" datas.units_value !== 0\">{{datas.units}} a\n                        ${{(datas.mrp / datas.units_value).toFixed(2)}}</p>\n                      <p class=\"price_product1\" *ngIf=\"datas.units_value == 0\">{{datas.units}} a $0</p>\n                      <p class=\"name_product ion-text-wrap textadjust\">{{datas.name}}</p>\n                      <p class=\"description_product \">{{datas.composition}}</p>\n                      <p *ngIf=\"datas.quantity <= 40\" class=\"notavailable\">No disponible</p>\n                      <p *ngIf=\"datas.quantity > 40\" class=\"available\">Disponible</p>\n\n                    </div>\n                  </div>\n                  <ion-button class=\"btn_product\" (click)=\"addToCart(datas)\" [disabled]=\"datas.quantity <= 40\">Agregar\n                  </ion-button>\n                </ion-card>\n              </ion-segment>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\nion-content {\n  --ion-background-color: #eeeef1;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-searchbar {\n  --icon-color: #fff;\n  --background: #00a2dd !important;\n  --border-radius: 20px !important;\n  --placeholder-color: #fff !important;\n  --placeholder-opacity: 1;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 12px 0px;\n  text-align: center;\n  padding-top: -4%;\n}\n\n.btn_category {\n  --background: #015670 !important;\n  padding: 5px 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 10px !important;\n  text-align: center !important;\n  font-size: 10.5px !important;\n  font-weight: 600 !important;\n  min-height: 90px !important;\n  max-width: 155px !important;\n  min-width: 155px !important;\n  max-height: 90px !important;\n}\n\n.banner {\n  width: 95%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px !important;\n  margin-top: 5px !important;\n}\n\n.inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.img_banner {\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n\nion-slides {\n  --bullet-background: #232424;\n  --bullet-background-active: #009bd7;\n}\n\n.container {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: -18px !important;\n  background: #eeeef1;\n}\n\n.product {\n  margin-bottom: 30px !important;\n}\n\n.card_product {\n  padding: 20px !important;\n  border-radius: 20px !important;\n  margin-bottom: 15px !important;\n  min-width: 50% !important;\n  max-width: 50% !important;\n}\n\n.price_product {\n  font-size: 20px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.price_product1 {\n  font-size: 16px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.name_product {\n  font-size: 100% !important;\n  font-weight: 1000 !important;\n  color: #535353 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 100% !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n  text-transform: lowercase !important;\n}\n\n.btn_product {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  height: 50px !important;\n  width: 102% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.scrolli {\n  background: #eeeef1;\n}\n\n@media (max-width: 360px) {\n  .textadjust {\n    font-size: 10px !important;\n  }\n}\n\n@media (min-width: 373px) {\n  .textadjust {\n    font-size: 10px !important;\n  }\n}\n\n@media (max-width: 340px) {\n  .price_product {\n    font-size: 16px !important;\n  }\n}\n\n.img-fluid {\n  height: 100px !important;\n}\n\n.categorias {\n  margin-top: -23px !important;\n  background: #eeeef1;\n}\n\nion-grid {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  background: #eeeef1;\n}\n\n.searchbar {\n  margin-top: -2px !important;\n}\n\n.elementos {\n  min-height: 260px !important;\n  max-height: 260px !important;\n}\n\n.btn-continue {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #00a2dd !important;\n  font-weight: 600 !important;\n  font-size: 17.5px !important;\n  width: 95% !important;\n  --border-radius: 20px !important;\n  height: 41px !important;\n}\n\n@media (max-width: 353px) {\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 15px !important;\n    width: 95% !important;\n    --border-radius: 20px !important;\n    height: 41px !important;\n  }\n}\n\n@media (max-width: 323px) {\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 13.5px !important;\n    width: 95% !important;\n    --border-radius: 20px !important;\n    height: 41px !important;\n  }\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.btntext::first-letter {\n  text-transform: uppercase !important;\n}\n\n.search {\n  margin-right: 35px;\n}\n\nion-icon {\n  min-width: 21px;\n  max-width: 21px;\n  margin-left: -40px;\n}\n\n.letra {\n  margin-left: -20px;\n}\n\n@media (max-width: 350px) {\n  .letra {\n    margin-left: -20px;\n  }\n\n  ion-icon {\n    margin-left: -5px;\n  }\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: 2px;\n  right: 9px;\n  --background: #c9c9c9;\n  width: 28px;\n  height: 20px;\n  font-size: 16px;\n}\n\n@media (min-width: 400px) and (max-width: 417px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: 2px;\n    right: 17px;\n    --background: #c9c9c9;\n    width: 29px;\n    height: 22px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 336px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 5px;\n    --background: #c9c9c9;\n    width: 26px;\n    height: 20px;\n    font-size: 15px;\n  }\n}\n\n@media (min-width: 337px) and (max-width: 350px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 10px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n.available {\n  font-size: 17px !important;\n  color: #008000 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.notavailable {\n  font-size: 17px !important;\n  color: #ff0000 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n@media (min-width: 600px) and (min-height: 900px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 39px;\n    --background: #c9c9c9;\n    width: 45px;\n    height: 29px;\n    font-size: 25px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 25px !important;\n    width: 95% !important;\n    --border-radius: 20px !important;\n    height: 55px !important;\n  }\n\n  ion-icon {\n    min-width: 43px;\n    max-width: 43px;\n    margin-left: -40px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 33px;\n    font-weight: 700;\n    margin: 12px 0px;\n    text-align: center;\n    padding-top: -4%;\n  }\n\n  .btn_category {\n    --background: #015670 !important;\n    padding: 5px 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 10px !important;\n    text-align: center !important;\n    font-size: 16px !important;\n    font-weight: 600 !important;\n    min-height: 90px !important;\n    max-width: 221px !important;\n    min-width: 221px !important;\n    max-height: 90px !important;\n  }\n\n  .img-fluid {\n    height: 150px !important;\n  }\n\n  .elementos {\n    min-height: 260px !important;\n    max-height: 260px !important;\n    margin-bottom: 75px;\n  }\n\n  .price_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .price_product1 {\n    font-size: 21px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .name_product {\n    font-size: 21px !important;\n    font-weight: 1000 !important;\n    color: #535353 !important;\n    margin: 8px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .description_product {\n    font-size: 25px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 12px 0px !important;\n    text-transform: lowercase !important;\n  }\n\n  .btn_product {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 21px !important;\n    font-weight: 600 !important;\n    height: 65px !important;\n    width: 102% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .available {\n    font-size: 23px !important;\n    color: #008000 !important;\n    line-height: 18px !important;\n    margin: 15px 0px !important;\n  }\n\n  .notavailable {\n    font-size: 23px !important;\n    color: #ff0000 !important;\n    line-height: 18px !important;\n    margin: 15px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsdUNBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNFRjs7QURBQTtFQUNFLCtCQUFBO0VBQ0EseUNBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNLRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUNLRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURGQTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ0tGOztBREZBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURK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dENBO0lBQ0UsNEJBQUE7SUFDQSw0QkFBQTtJQUNBLG1CQUFBO0VDeUNGOztFRHZDQTtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0VDMENGOztFRHhDQTtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0VDMkNGOztFRHpDQTtJQUNFLDBCQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUM0Q0Y7O0VEMUNBO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7SUFDQSxvQ0FBQTtFQzZDRjs7RUQzQ0E7SUFDRSxnQ0FBQTtJQUNBLHdCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0EsNkJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7RUM4Q0Y7O0VENUNBO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7RUMrQ0Y7O0VEN0NBO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtJQUNBLDRCQUFBO0lBQ0EsMkJBQUE7RUNnREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWYxO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuLmJ0bl9pIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1pY29uLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTJweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IC00JTtcbn1cblxuLmJ0bl9jYXRlZ29yeSB7XG4gIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMC41cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTU1cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxNTVweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYW5uZXIge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG4uaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZ19iYW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMyMzI0MjQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMDA5YmQ3O1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWVlZWYxO1xufVxuLnByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZF9wcm9kdWN0IHtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cbi5wcmljZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5wcmljZV9wcm9kdWN0MSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTM1MzUzICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cbi5idG5fcHJvZHVjdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGxpIHtcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50ZXh0YWRqdXN0IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM3M3B4KSB7XG4gIC50ZXh0YWRqdXN0IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gIC5wcmljZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmltZy1mbHVpZCB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbi5jYXRlZ29yaWFzIHtcbiAgbWFyZ2luLXRvcDogLTIzcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cbmlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNlZWVlZjE7XG59XG4uc2VhcmNoYmFyIHtcbiAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xufVxuLmVsZW1lbnRvcyB7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuLWNvbnRpbnVlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTcuNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDFweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM1M3B4KSB7XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQxcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyM3B4KSB7XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDFweCAhaW1wb3J0YW50O1xuICB9XG59XG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cbi5idG50ZXh0OjpmaXJzdC1sZXR0ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIxcHg7XG4gIG1heC13aWR0aDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuLmxldHJhIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5sZXRyYSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxufVxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTdweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAycHg7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyOXB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzNnB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMzN3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmF2YWlsYWJsZSB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5ub3RhdmFpbGFibGUge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTAwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDM5cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgbWluLXdpZHRoOiA0M3B4O1xuICAgIG1heC13aWR0aDogNDNweDtcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gIH1cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMTJweCAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAtNCU7XG4gIH1cbiAgLmJ0bl9jYXRlZ29yeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDE1NjcwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogOTBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjIxcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDIyMXB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogOTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbWctZmx1aWQge1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZWxlbWVudG9zIHtcbiAgICBtaW4taGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgfVxuICAucHJpY2VfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJpY2VfcHJvZHVjdDEge1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzUzNTM1MyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogOHB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEycHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5idG5fcHJvZHVjdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmF2YWlsYWJsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDgwMDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuICAubm90YXZhaWxhYmxlIHtcbiAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2VlZWVmMTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIzNiwgMjM1LCAyMzg7XG59XG5cbi5jYXJyaXRvIHtcbiAgd2lkdGg6IDE0JTtcbiAgaGVpZ2h0OiAxNCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9pIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWljb24tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMnB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogLTQlO1xufVxuXG4uYnRuX2NhdGVnb3J5IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDE1NjcwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwLjVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNTVweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDE1NXB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbn1cblxuLmJhbm5lciB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZ19iYW5uZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzIzMjQyNDtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICMwMDliZDc7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTE4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cblxuLnByb2R1Y3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkX3Byb2R1Y3Qge1xuICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2VfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZV9wcm9kdWN0MSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1MzUzNTMgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcHJvZHVjdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGxpIHtcbiAgYmFja2dyb3VuZDogI2VlZWVmMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50ZXh0YWRqdXN0IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM3M3B4KSB7XG4gIC50ZXh0YWRqdXN0IHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gIC5wcmljZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmltZy1mbHVpZCB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3JpYXMge1xuICBtYXJnaW4tdG9wOiAtMjNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWVlZWYxO1xufVxuXG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZWVlZWYxO1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xufVxuXG4uZWxlbWVudG9zIHtcbiAgbWluLWhlaWdodDogMjYwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjYwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3LjVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQxcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1M3B4KSB7XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQxcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyM3B4KSB7XG4gIC5idG4tY29udGludWUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDFweCAhaW1wb3J0YW50O1xuICB9XG59XG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmJ0bnRleHQ6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cblxuaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIxcHg7XG4gIG1heC13aWR0aDogMjFweDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4ubGV0cmEge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuICAubGV0cmEge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxufVxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQxN3B4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IDJweDtcbiAgICByaWdodDogMTdweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzM2cHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogNXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzM3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uYXZhaWxhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm90YXZhaWxhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTAwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuXG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDM5cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuLWNvbnRpbnVlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgbWluLXdpZHRoOiA0M3B4O1xuICAgIG1heC13aWR0aDogNDNweDtcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gIH1cblxuICAudGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAxMnB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IC00JTtcbiAgfVxuXG4gIC5idG5fY2F0ZWdvcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDIyMXB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyMjFweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctZmx1aWQge1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5lbGVtZW50b3Mge1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICB9XG5cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpY2VfcHJvZHVjdDEge1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMTAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNTM1MzUzICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA4cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMnB4IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG5fcHJvZHVjdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAyJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXZhaWxhYmxlIHtcbiAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5vdGF2YWlsYWJsZSB7XG4gICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var _services_tratamientos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/tratamientos.service */
    "./src/app/services/tratamientos.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(router, menuCtrl, http, cartService, config, routerOutlet, tratamientosService, alertCtrl, platform, auth) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.router = router;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.cartService = cartService;
        this.config = config;
        this.routerOutlet = routerOutlet;
        this.tratamientosService = tratamientosService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.auth = auth;
        this.sliderOpts = {
          autoplay: true,
          speed: 1000,
          zoom: {
            maxRatio: 5
          }
        };
        this.apiURL = "medicine/load-medicine-cats/0";
        this.apiURL2 = "favorites";
        this.apiURL3 = "";
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
        this.apiUrl1 = "images/products/default.png";
        this.alarmas = [];
        this.base_url = config.get_base_url();
        this.http.get("".concat(this.base_url).concat(this.apiURL)).subscribe(function (response) {
          _this.items = response;
          _this.items2 = _this.items[0].result.msg;
        });
        this.http.get("".concat(this.base_url).concat(this.apiURL2)).subscribe(function (response) {
          _this.items3 = response;
          _this.items4 = _this.items3.result.msg;
        });
        this.cartItemCount = this.cartService.getCartItemCount();
        this.tratamientosService.getTreatmen();
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
          this.routerOutlet.swipeGesture = false; // console.log('usuario activo', this.auth.getusuario());
        }
      }, {
        key: "goCarrito",
        value: function goCarrito() {
          this.router.navigate(['carrito']);
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
        key: "goCat",
        value: function goCat(item) {
          var navigationsExtras = {
            state: {
              cat: item
            }
          };
          this.router.navigate(['categorias'], navigationsExtras);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
      }, {
        type: _services_tratamientos_service__WEBPACK_IMPORTED_MODULE_7__["TratamientosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider')], HomePage.prototype, "slider", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map