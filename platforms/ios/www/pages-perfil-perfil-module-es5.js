function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n    <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-menu-button slot=\"start\" menu=\"main-menu\"></ion-menu-button>\n      <ion-button class=\"carrito\" (click)=\"goCarrito()\">\n        <img src=\"../../assets/img/RECURSOS/iconos drazamed-18.png\" class=\"carro1\">\n      </ion-button>\n      <ion-badge>{{ cartItemCount | async }}</ion-badge>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"container1 ion-align-self-center\">\n     <ion-grid>\n       <ion-row>\n         <ion-col size=\"2\">\n           <img src=\"../../../assets/img/RECURSOS/user.png\" class=\"perfilimg\">\n         </ion-col>\n         <ion-col size=\"6\">\n           <p class=\"title_seccion_head\">Perfil</p>\n           <p class=\"description_product\" *ngIf=\"user\">{{user.name}}</p>\n         </ion-col>\n         <ion-col size=\"4\" class=\"pt-10\">\n          <ion-button class=\"btn-product\" (click)=\"goEdit()\">E<p class=\"btntext\">ditar</p></ion-button>\n         </ion-col>\n       </ion-row>\n     </ion-grid>\n  </div>\n\n  <div class=\"container\">\n    <ion-slides pager=\"true\" [options]=\"sliderOpts\" #mySlider mode=\"ios\">\n    <ion-slide>\n    <div class=\"banner\">\n      <div class=\"inner\">\n    <img src=\"../../assets/img/RECURSOS/banner-2 (2).JPG\" class=\"img_banner\"alt=\"\">\n      </div>\n    </div>\n    </ion-slide>\n    \n    <!-- <ion-slide>\n      <div class=\"banner\">\n        <div class=\"inner\">\n      <img src=\"../../assets/img/RECURSOS/img_banner.jpg\" class=\"img_banner\"alt=\"\">\n        </div>\n      </div>\n      </ion-slide>\n    \n      <ion-slide>\n        <div class=\"banner\">\n          <div class=\"inner\">\n        <img src=\"../../assets/img/RECURSOS/img_banner.jpg\" class=\"img_banner\"alt=\"\">\n          </div>\n        </div>\n        </ion-slide> -->\n    </ion-slides>\n    <ion-row class=\"result_search\"></ion-row>\n    </div>\n\n    <div class=\"container2\">\n      <ion-grid class=\"back\">\n        <ion-row>\n          <ion-col size=\"4\" class=\"col_op\"> \n             <ion-button (click)=\"misPedidos()\" fill=\"clear\" class=\"images\">\n               <img src=\"../../../assets/img/RECURSOS/icon_pedidos.png\" class=\"imagenes\">\n             </ion-button>\n             <p class=\"name_category\">Pedidos</p>\n          </ion-col>\n          <ion-col size=\"4\" class=\"col_op\">\n            <ion-button (click)=\"miPastillero()\" class=\"images\" fill=\"clear\">\n              <img src=\"../../../assets/img/RECURSOS/icon_pastillero.png\" class=\"imagenes\">\n            </ion-button>\n            <p class=\"name_category\">Mi pastillero</p>\n          </ion-col>\n          <ion-col size=\"4\" class=\"col_op\">\n            <ion-button (click)=\"misDirecciones()\" fill=\"clear\" class=\"images\">\n              <img src=\"../../../assets/img/RECURSOS/icon_direcciones.png\" class=\"imagenes\">\n            </ion-button>\n            <p class=\"name_category\">Mis direcciones</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"container3\">\n     \n        <ion-row class=\"result_search\">\n          <ion-col size=\"12\" class=\"address_space\">\n             <ion-row>\n               <ion-col size=\"9\">\n                 <p class=\"name_category\">Próxima entrega</p>\n                 <p class=\"description_product\" mode=\"md\" *ngIf=\"alarmas.length !== 0\">Fecha: {{prox}}</p>\n                 <p class=\"description_product\" mode=\"md\" *ngIf=\"alarmas.length === 0\">No tienes entregas pendientes</p>\n               </ion-col>\n               <ion-col size=\"3\" class=\"col_op\">\n                <ion-button class=\"add\" size=\"small\" fill=\"clear\" (click)=\"PedidoProximo()\">\n                    <img src=\"../../../assets/img/RECURSOS/info.png\" width=\"40px\">\n                </ion-button>\n               </ion-col>\n             </ion-row>\n          </ion-col>\n          <ion-col size=\"12\" class=\"address_space1\">\n            <ion-row>\n              <ion-col size=\"9\">\n                <p class=\"name_category\">¿Cómo va tu tratamiento?</p>\n                <p class=\"description_product\" mode=\"md\">Escribe tus comentarios</p>\n              </ion-col>\n              <ion-col size=\"3\" class=\"col_op\">\n                  <ion-button class=\"add\" size=\"small\" fill=\"clear\" (click)=\"addComment()\">\n                    <img src=\"../../../assets/img/RECURSOS/more.png\" width=\"40px\">\n              </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      \n    </div>\n    <div class=\"container4\" *ngIf=\"alarmas.length !== 0\">\n      <div class=\"sub-cont4\">\n        <p class=\"title_seccion\">Mis tratamientos</p>\n      </div>\n        <ion-row class=\"result_search\" *ngFor=\"let al of alarmas\">\n          <ion-col size=\"6\" class=\"col_trat\">\n            <p class=\"grey\" *ngIf=\"al.timeH !== 0 || al.timeD !== 0 || al.timeM !== 0\">Próxima {{al.timeH}}H {{al.timeM}}Min ({{al.next_time}})</p>\n            <p class=\"grey\" *ngIf=\"al.timeH === 0 && al.timeD === 0 && al.timeM === 0 && al.next_date !== null\">Recalculando próxima toma</p>\n            <p class=\"grey\" *ngIf=\"al.next_date === null\">Fin del tratamiento</p>\n         </ion-col>\n         <ion-col size=\"1\">\n          <ion-toggle checked mode=\"ios\" class=\"toggle\"></ion-toggle>\n         </ion-col>\n         <ion-col size=\"5\">\n          <ion-buttons>\n            <ion-button class=\"trash\" (click)=\"removetreatment(al)\"><img src=\"../../../assets/img/RECURSOS/trash.png\"\n                width=\"100%\" class=\"basurita\"></ion-button>\n          </ion-buttons>\n         </ion-col>\n            <ion-col size=\"3\" class=\"img_product\">\n              <img src={{base_url}}{{apiUrl7}}{{al.item_code}}{{apiUrl8}} class=\"img_med\">\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-5\">\n              <p class=\"name_product\">{{al.item_name}}</p>\n              <p class=\"description_product\">{{al.composition}}</p>\n            </ion-col>\n            <ion-col size=\"4\">\n             <ion-button (click)=\"processTreat(al)\" class=\"btn-product\">E<p class=\"btntext\">stado</p></ion-button>\n             <ion-button (click)=\"editAlarm(al)\" class=\"btn-product\" [disabled]=\"al.next_date === null\">E<p class=\"btntext\">ditar</p></ion-button>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class=\"titulo\" *ngIf=\"alarmas.length === 0\">\n      <p class=\"tratamientos_vacio\">No tienes tratamientos en curso</p>\n    </div>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PerfilPageRoutingModule */

  /***/
  function srcAppPagesPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
      return PerfilPageRoutingModule;
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


    var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var routes = [{
      path: '',
      component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }];

    var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
      _classCallCheck(this, PerfilPageRoutingModule);
    };

    PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PerfilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.module.ts ***!
    \***********************************************/

  /*! exports provided: PerfilPageModule */

  /***/
  function srcAppPagesPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
      return PerfilPageModule;
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


    var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfil-routing.module */
    "./src/app/pages/perfil/perfil-routing.module.ts");
    /* harmony import */


    var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfil.page */
    "./src/app/pages/perfil/perfil.page.ts");

    var PerfilPageModule = function PerfilPageModule() {
      _classCallCheck(this, PerfilPageModule);
    };

    PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
      declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })], PerfilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7!important;\n  --ion-background-color-rgb: 0,155,215;\n  min-width: 100% !important;\n  max-width: 100% !important;\n}\n\n.header-styles {\n  --background: #009bd7!important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.titulo {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  background: white;\n  text-align: center !important;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.tratamientos_vacio {\n  color: #00a2dd;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n  position: static;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: 2px;\n  right: 9px;\n  --background: #c9c9c9;\n  width: 28px;\n  height: 20px;\n  font-size: 16px;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\n.container1 {\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 20px !important;\n  padding-bottom: 10px !important;\n  background-color: #fff;\n}\n\n.title_seccion_head {\n  color: #00a2dd;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.btn_product {\n  --background: #00a2dd !important;\n  --border-radius: 9px !important;\n  color: #fff !important;\n  text-align: center !important;\n  font-weight: 600 !important;\n  font-size: 18px !important;\n  height: 45px !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.pt-10 {\n  padding-bottom: 10px !important;\n}\n\n.banner {\n  width: 95%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px !important;\n  margin-top: 5px !important;\n}\n\n.inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.toggle {\n  text-align: right !important;\n}\n\n.img_banner {\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n\nion-slides {\n  --bullet-background: #232424;\n  --bullet-background-active: #009bd7;\n}\n\n.container {\n  width: 100%;\n  padding-right: 1px;\n  padding-left: 1px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: -18px !important;\n  background-color: #fff;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.container2 {\n  width: 100%;\n  padding-right: 10px;\n  padding-left: 10px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: -20px !important;\n  background-color: #fff;\n}\n\n.col_op {\n  text-align: center;\n}\n\n.name_category {\n  font-size: 14px !important;\n  font-weight: 700 !important;\n  color: #00a2dd !important;\n  margin: 0px !important;\n  line-height: 15px !important;\n}\n\n.address_space {\n  background: #fff;\n  padding: 20px 10px;\n}\n\n.address_space1 {\n  background: #fff;\n  padding: 20px 10px;\n  margin-top: 10px !important;\n}\n\n.container3 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  display: block;\n  margin-bottom: 20px !important;\n}\n\n.container4 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px !important;\n  background-color: #fff !important;\n}\n\n.sub-cont4 {\n  background-color: #fff;\n  display: block !important;\n  margin-left: 10px !important;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.col_trat {\n  text-align: right !important;\n}\n\n.grey {\n  color: #727070 !important;\n  margin-top: 0px;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n  align-self: center !important;\n}\n\n.img_med {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.btn-product {\n  --background: #00a2dd !important;\n  padding: 10px !important;\n  --border-radius: 15px !important;\n  color: #fff !important;\n  margin-bottom: 15px !important;\n  text-align: center !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  display: block !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  text-decoration: none;\n  height: 55px;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #00a1dd !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.col-5 {\n  align-self: center !important;\n}\n\n.col_trat {\n  text-align: left !important;\n}\n\n.trash {\n  float: right !important;\n  --background: #f2f2f2 !important;\n  border-radius: 100% !important;\n  width: 100%;\n  height: 100%;\n  margin-left: 60%;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n@media (min-width: 400px) and (max-width: 417px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: 2px;\n    right: 9px;\n    --background: #c9c9c9;\n    width: 28px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 336px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 5px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 360px) {\n  .name_product {\n    font-size: 14px !important;\n    font-weight: 700 !important;\n    color: #00a1dd !important;\n    margin: 5px 0px !important;\n    line-height: 20px !important;\n  }\n\n  .description_product {\n    font-size: 14px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 5px 0px !important;\n  }\n}\n\n@media (min-width: 337px) and (max-width: 350px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 10px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n.add {\n  --background: #fff;\n  height: 32px;\n}\n\n.btntext {\n  text-transform: lowercase;\n}\n\n.images {\n  height: auto;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .basurita {\n    max-width: 78%;\n    border: 0;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 39px;\n    --background: #c9c9c9;\n    width: 45px;\n    height: 29px;\n    font-size: 25px;\n  }\n\n  .tratamientos_vacio {\n    color: #00a2dd;\n    font-size: 24px;\n    font-weight: 700;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .perfilimg {\n    max-width: 80%;\n    border: 0;\n  }\n\n  .title_seccion_head {\n    color: #00a2dd;\n    font-size: 30px;\n    font-weight: 700;\n    margin: 0px !important;\n  }\n\n  .description_product {\n    font-size: 25px !important;\n    color: #727070 !important;\n    line-height: 28px !important;\n    margin: 15px 0px !important;\n  }\n\n  .btn-product {\n    --background: #00a2dd !important;\n    padding: 10px !important;\n    --border-radius: 15px !important;\n    color: #fff !important;\n    margin-bottom: 15px !important;\n    text-align: center !important;\n    font-size: 27px !important;\n    font-weight: 550 !important;\n    display: block !important;\n    margin-right: auto !important;\n    margin-left: auto !important;\n    text-decoration: none;\n    height: 73px;\n  }\n\n  .name_category {\n    font-size: 23px !important;\n    font-weight: 700 !important;\n    color: #00a2dd !important;\n    margin: 0px !important;\n    line-height: 15px !important;\n  }\n\n  .imagenes {\n    max-width: 60%;\n    border: 0;\n  }\n\n  .grey {\n    color: #727070 !important;\n    font-size: 25px;\n    margin-top: 0px;\n  }\n\n  .name_product {\n    font-size: 29px !important;\n    font-weight: 700 !important;\n    color: #00a1dd !important;\n    margin: 14px 0px !important;\n    line-height: 33px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFRTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNFSjs7QURBRTtFQUNFLDRCQUFBO0VBQ0EseUNBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNJSjs7QURGRTtFQUNFLFVBQUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDS047O0FESEU7RUFDRSxjQUFBO0VBQ0YsZUFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURKRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEU7RUFDRSxjQUFBO0VBQ0Ysa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNFLGdCQUFBO0FDUUo7O0FETkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUNTSjs7QURQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JB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QUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VDa0RBOztFRGhERjtJQUNFLGdDQUFBO0lBQ0Esd0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUNtREE7O0VEakRGO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQ29EQTs7RURsREY7SUFDRSxjQUFBO0lBQ0EsU0FBQTtFQ3FEQTs7RURuREY7SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDc0RBOztFRHBERjtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUN1REE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3IWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwxNTUsMjE1O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuaGVhZGVyLXN0eWxlc3tcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDchaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOi0xMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5sb2dvLWhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogNTAlOyAgICBcbiAgfVxuICAuY29udGVudC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIGlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIzNiwgMjM1LCAyMzg7XG4gIH1cbiAgLnRpdHVsbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJyaXRve1xuICAgIHdpZHRoOiAxNCUgO1xuICAgICAgaGVpZ2h0OiAxNCUgO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRyYXRhbWllbnRvc192YWNpbyB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuZGl2LWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjUlO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgXG4gIGlvbi1tZW51LWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5idG5faXtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgLmNvbnRhaW5lcjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udGl0bGVfc2VjY2lvbl9oZWFkIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5idG5fcHJvZHVjdHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDlweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xufVxuLmJ0bnRleHR7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC0xMHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmFubmVye1xuICAgIHdpZHRoOiA5NSU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgfVxuICAuaW5uZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC50b2dnbGV7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICAuaW1nX2Jhbm5lcntcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzIzMjQyNDtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzAwOWJkNztcbiAgfVxuICAuY29udGFpbmVye1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogLTE4cHggIWltcG9ydGFudDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAucmVzdWx0X3NlYXJjaCB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiAgLmNvbnRhaW5lcjIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xuICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY29sX29we1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmFtZV9jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uYWRkcmVzc19zcGFjZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi5hZGRyZXNzX3NwYWNlMSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lcjMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXI0IHtcbiAgd2lkdGg6IDEwMCU7XG4gICAvL3BhZGRpbmctcmlnaHQ6IDVweDtcbiAgIC8vIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uc3ViLWNvbnQ0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuLnRpdGxlX3NlY2Npb24ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmNvbF90cmF0e1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuLmdyZXl7XG5jb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xubWFyZ2luLXRvcDogMHB4O1xufVxuLmltZ19wcm9kdWN0e1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uaW1nX21lZHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uYnRuLXByb2R1Y3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLmNvbC01e1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jb2xfdHJhdHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuLnRyYXNoIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG59XG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOjQwMHB4KSBhbmQgKG1heC13aWR0aDo0MTdweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA5cHg7XG4gIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6MzM2cHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgcmlnaHQ6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjRweCA7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7XG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwYTFkZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjMzN3B4KSBhbmQgKG1heC13aWR0aDozNTBweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICByaWdodDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjRweCA7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uYWRke1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMzJweDtcbn1cbi5idG50ZXh0e1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLmltYWdlc3tcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYmFzdXJpdGF7XG4gICAgbWF4LXdpZHRoOiA3OCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDM5cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnRyYXRhbWllbnRvc192YWNpbyB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlcmZpbGltZ3tcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgLnRpdGxlX3NlY2Npb25faGVhZCB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbn1cbi5idG4tcHJvZHVjdCB7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDU1MCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBoZWlnaHQ6IDczcHg7XG59XG4ubmFtZV9jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uaW1hZ2VuZXMge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuLmdyZXkge1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDI5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwYTFkZCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE0cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XG59XG5cbn0iLCJpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3IWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMTU1LDIxNTtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi50cmF0YW1pZW50b3NfdmFjaW8ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDlweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50aXRsZV9zZWNjaW9uX2hlYWQge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bl9wcm9kdWN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogOXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYW5uZXIge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b2dnbGUge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW1nX2Jhbm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMjMyNDI0O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzAwOWJkNztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhaW5lcjIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY29sX29wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmFtZV9jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRyZXNzX3NwYWNlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uYWRkcmVzc19zcGFjZTEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lcjMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lcjQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItY29udDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5jb2xfdHJhdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaW1nX3Byb2R1Y3Qge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW1nX21lZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByb2R1Y3Qge1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMGExZGQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtNSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY29sX3RyYXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi50cmFzaCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNjAlO1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDE3cHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogMnB4O1xuICAgIHJpZ2h0OiA5cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzNnB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMzdweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5hZGQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4uaW1hZ2VzIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJhc3VyaXRhIHtcbiAgICBtYXgtd2lkdGg6IDc4JTtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMzlweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC50cmF0YW1pZW50b3NfdmFjaW8ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBlcmZpbGltZyB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLnRpdGxlX3NlY2Npb25faGVhZCB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bi1wcm9kdWN0IHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDU1MCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgaGVpZ2h0OiA3M3B4O1xuICB9XG5cbiAgLm5hbWVfY2F0ZWdvcnkge1xuICAgIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWFnZW5lcyB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLmdyZXkge1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjlweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwYTFkZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTRweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzNweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/perfil/perfil.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/perfil/perfil.page.ts ***!
    \*********************************************/

  /*! exports provided: PerfilPage */

  /***/
  function srcAppPagesPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
      return PerfilPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/tratamientos.service */
    "./src/app/services/tratamientos.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);

    var PerfilPage = /*#__PURE__*/function () {
      function PerfilPage(menuCtrl, cartService, auth, alertCtrl, http, router, config, loadingController, tratamientoService, storage, platform) {
        _classCallCheck(this, PerfilPage);

        this.menuCtrl = menuCtrl;
        this.cartService = cartService;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.router = router;
        this.config = config;
        this.loadingController = loadingController;
        this.tratamientoService = tratamientoService;
        this.storage = storage;
        this.platform = platform;
        this.sliderOpts = {
          autoplay: true,
          speed: 1000,
          zoom: {
            maxRatio: 5
          }
        };
        this.postUrl = "user/contact-us";
        this.alar = [];
        this.alarmas = [];
        this.items2 = [];
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
        this.proxima = [];
        this.apiUrl = "my-treatments?email=";
        this.intervalos = [];
        this.alarm = [];
        this.base_url = config.get_base_url();
        this.cartItemCount = this.cartService.getCartItemCount();
      }

      _createClass(PerfilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('on init'); // this.alarmas = this.tratamientoService.getAlarma()

          this.user = this.auth.getusuario();
          this.userid = this.user.email;
          console.log(this.user); // this.alarmas = this.tratamientoService.getAlarma();
          // console.log(this.alarmas)
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
          this.proxima.splice(0, this.proxima.length);
          this.alarmas = this.tratamientoService.getAlarma();
          console.log(this.alarmas);
          console.log('perfil pagina');
          this.proximaEntrega();
          var prox = this.tratamientoService.getProxPedido();
          console.log('prox: ', prox);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "proximaEntrega",
        value: function proximaEntrega() {
          this.proxima.splice(0, this.proxima.length);
          this.prox = 0;

          var _iterator = _createForOfIteratorHelper(this.alarmas),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var al = _step.value;
              this.proxima.push(al.buy_time); // this.tratamientoService.TimeRemaining(al.item_code, al.next_date);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log(': this.proxima', this.proxima);
          var prxFormatted = this.proxima.map(function (f) {
            return moment__WEBPACK_IMPORTED_MODULE_11__(f);
          });
          this.prox = moment__WEBPACK_IMPORTED_MODULE_11__["min"](prxFormatted).format('ll');
          console.log('this.prox: ', this.prox);
          return this.prox;
        }
      }, {
        key: "addComment",
        value: function addComment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var input;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: '¿Cómo va tu tratamiento?',
                      cssClass: 'failed',
                      mode: 'ios',
                      buttons: [{
                        text: 'Enviar',
                        cssClass: 'btnalert',
                        handler: function handler(data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this2 = this;

                            var loading;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    this.comentarios = data.comentario;
                                    this.usuario = this.auth.getusuario();
                                    this.email = this.usuario.email;
                                    this.nombre = this.usuario.name;
                                    this.datatoSend = {
                                      name: this.nombre,
                                      phone: '',
                                      msg: this.comentarios,
                                      email: this.email
                                    };
                                    _context2.next = 7;
                                    return this.loadingController.create({
                                      cssClass: 'loading',
                                      message: 'Por favor espera...',
                                      mode: 'ios',
                                      spinner: 'dots'
                                    });

                                  case 7:
                                    loading = _context2.sent;
                                    _context2.next = 10;
                                    return loading.present();

                                  case 10:
                                    this.http.post("".concat(this.base_url).concat(this.postUrl), this.datatoSend).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                                      loading.dismiss();
                                    })).subscribe(function (val) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                        var alert;
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                          while (1) {
                                            switch (_context.prev = _context.next) {
                                              case 0:
                                                this.code = val;
                                                this.code2 = this.code.status;

                                                if (!(this.code2 === 'SUCCESS')) {
                                                  _context.next = 8;
                                                  break;
                                                }

                                                _context.next = 5;
                                                return this.alertCtrl.create({
                                                  message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">El comentario fue enviado',
                                                  mode: 'ios',
                                                  cssClass: 'failed',
                                                  buttons: [{
                                                    text: 'Aceptar',
                                                    cssClass: 'btnalert'
                                                  }]
                                                });

                                              case 5:
                                                alert = _context.sent;
                                                _context.next = 8;
                                                return alert.present();

                                              case 8:
                                              case "end":
                                                return _context.stop();
                                            }
                                          }
                                        }, _callee, this);
                                      }));
                                    });

                                  case 11:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }
                      }],
                      inputs: [{
                        name: 'comentario',
                        cssClass: 'inputs',
                        type: 'textarea',
                        placeholder: 'Escribe tu comentario'
                      }]
                    });

                  case 2:
                    input = _context3.sent;
                    _context3.next = 5;
                    return input.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "goEdit",
        value: function goEdit() {
          this.router.navigate(['editprofile']);
        }
      }, {
        key: "PedidoProximo",
        value: function PedidoProximo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.alarmas.length === 0)) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.next = 3;
                    return this.alertCtrl.create({
                      message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">No tienes pedidos pendientes',
                      mode: 'ios',
                      cssClass: 'failed',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Aceptar',
                        cssClass: 'btnalert'
                      }]
                    });

                  case 3:
                    alert = _context4.sent;
                    _context4.next = 6;
                    return alert.present();

                  case 6:
                    _context4.next = 9;
                    break;

                  case 8:
                    this.router.navigate(['proxima-entrega']);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "misPedidos",
        value: function misPedidos() {
          this.router.navigate(['mispedidos']);
        }
      }, {
        key: "miPastillero",
        value: function miPastillero() {
          this.router.navigate(['mipastillero']);
        }
      }, {
        key: "misDirecciones",
        value: function misDirecciones() {
          this.router.navigate(['misdirecciones']);
        }
      }, {
        key: "removetreatment",
        value: function removetreatment(alarma) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">¿Deseas eliminar el tratamiento?',
                      mode: 'ios',
                      cssClass: 'failed',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Si',
                        cssClass: 'btnalert',
                        handler: function handler(data) {
                          _this3.tratamientoService.removeAlarm(alarma);

                          _this3.tratamientoService.rmMedProxPedido(alarma);

                          _this3.proximaEntrega();
                        }
                      }, {
                        text: 'No',
                        cssClass: 'btnalert'
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "processTreat",
        value: function processTreat(alarma) {
          var navigationExtras = {
            state: {
              user: alarma
            }
          };
          this.router.navigate(['processtreatment'], navigationExtras);
        }
      }, {
        key: "editAlarm",
        value: function editAlarm(alarmas) {
          var navigationExtras = {
            state: {
              user: alarmas
            }
          };
          this.router.navigate(['edit-alarm'], navigationExtras);
        }
      }, {
        key: "goCarrito",
        value: function goCarrito() {
          this.router.navigate(['carrito']);
        }
      }]);

      return PerfilPage;
    }();

    PerfilPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_9__["TratamientosService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider')], PerfilPage.prototype, "slider", void 0);
    PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-perfil',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./perfil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./perfil.page.scss */
      "./src/app/pages/perfil/perfil.page.scss"))["default"]]
    })], PerfilPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-perfil-perfil-module-es5.js.map