function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-proxima-entrega-proxima-entrega-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proxima-entrega/proxima-entrega.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proxima-entrega/proxima-entrega.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProximaEntregaProximaEntregaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons class=\"btn_i\">\n      <ion-button slot=\"start\" (click)=\"Volver()\" class=\"txtVolver\">Cerrar</ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"ios\">\n  <div class=\"titulo\">\n    <p class=\"title_seccion\">Próximo pedido</p>\n  </div>\n  <div class=\"titulo\">\n    <p *ngIf=\"pedidoArr.length === 0\" class=\"carrito_vacio\">No tienes pedidos pendientes</p>\n  </div>\n  <div class=\"container\">\n    <ion-row class=\"result_search\" *ngFor=\"let p of pedidoArr\">\n      <ion-col size=\"3\" class=\"align-self-center\">\n        <div>\n          <img src={{base_url}}{{apiImg}}{{p.item_code}}{{apiUrl8}} class=\"img_product\" width=\"100%\">\n        </div>\n      </ion-col>\n\n      <ion-col size=\"5\" class=\"align-self-center\">\n        <p class=\"name_product\">{{p.item_name}}{{p.value}}{{p.medicine_name}}</p>\n        <p class=\"description_product\">{{p.composition}}</p>\n        <p class=\"price_product\">${{ 1 * p.mrp | number }}{{1 * p.unit_price | number}}</p>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-buttons>\n          <ion-button class=\"trash\"  (click)=\"removeMed(p)\" [disabled]=\"conditionSmaller > 4 || pedidoArr.length === 0\"><img src=\"../../../assets/img/RECURSOS/trash.png\"\n              width=\"100%\" class=\"basurita\"></ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"agregar\">\n        <ion-button class=\"btn-continue\" expand=\"block\" (click)=\"goBuscar()\" [disabled]=\"conditionSmaller > 4 || pedidoArr.length === 0\">A<p class=\"btntext\">gregar más productos\n          </p>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"result_search\" *ngIf=\"pedidoArr.length !== 0\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"name_product\">Subtotal</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"description_product\">${{getTax() | number}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"name_product\">Costo de envío</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"description_product\">$2000</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"name_product\">Impuesto</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"description_product\">${{ impuesto() | number}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"name_product\">Total</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"description_product\">${{getTotal() | number}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-row>\n    <ion-button class=\"btn-continue\" expand=\"block\" [disabled]=\"conditionSmaller > 4 || pedidoArr.length === 0\" (click)=\"send()\">C<p class=\"btntext\">\n      rear Orden</p>\n    </ion-button>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/proxima-entrega/proxima-entrega-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/proxima-entrega/proxima-entrega-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ProximaEntregaPageRoutingModule */

  /***/
  function srcAppPagesProximaEntregaProximaEntregaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProximaEntregaPageRoutingModule", function () {
      return ProximaEntregaPageRoutingModule;
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


    var _proxima_entrega_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./proxima-entrega.page */
    "./src/app/pages/proxima-entrega/proxima-entrega.page.ts");

    var routes = [{
      path: '',
      component: _proxima_entrega_page__WEBPACK_IMPORTED_MODULE_3__["ProximaEntregaPage"]
    }];

    var ProximaEntregaPageRoutingModule = function ProximaEntregaPageRoutingModule() {
      _classCallCheck(this, ProximaEntregaPageRoutingModule);
    };

    ProximaEntregaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProximaEntregaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/proxima-entrega/proxima-entrega.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/proxima-entrega/proxima-entrega.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProximaEntregaPageModule */

  /***/
  function srcAppPagesProximaEntregaProximaEntregaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProximaEntregaPageModule", function () {
      return ProximaEntregaPageModule;
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


    var _proxima_entrega_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./proxima-entrega-routing.module */
    "./src/app/pages/proxima-entrega/proxima-entrega-routing.module.ts");
    /* harmony import */


    var _proxima_entrega_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./proxima-entrega.page */
    "./src/app/pages/proxima-entrega/proxima-entrega.page.ts");

    var ProximaEntregaPageModule = function ProximaEntregaPageModule() {
      _classCallCheck(this, ProximaEntregaPageModule);
    };

    ProximaEntregaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _proxima_entrega_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProximaEntregaPageRoutingModule"]],
      declarations: [_proxima_entrega_page__WEBPACK_IMPORTED_MODULE_6__["ProximaEntregaPage"]]
    })], ProximaEntregaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/proxima-entrega/proxima-entrega.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/proxima-entrega/proxima-entrega.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProximaEntregaProximaEntregaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n  min-width: 100% !important;\n  max-width: 100% !important;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.carrito_vacio {\n  color: red;\n  font-size: 16px;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n  position: static;\n}\n\n.txtVolver {\n  margin-left: 20px;\n  font-size: 24px;\n  padding-bottom: 10px;\n  color: white;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\n.titulo {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n  background: white;\n  text-align: center !important;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.price_product {\n  font-size: 21px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.trash {\n  float: right !important;\n  --background: #f2f2f2 !important;\n  border-radius: 100% !important;\n  width: 100%;\n  height: 100%;\n  margin-left: 60%;\n}\n\n.btn-continue {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #00a2dd !important;\n  font-weight: 600 !important;\n  font-size: 17.5px !important;\n  width: 75% !important;\n  --border-radius: 8px !important;\n}\n\n.agregar {\n  align-self: center !important;\n  padding-top: 20px !important;\n  padding-bottom: 30px !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .txtVolver {\n    margin-left: 30px;\n    font-size: 30px;\n    padding-bottom: 11px;\n    color: white;\n    height: 40px;\n  }\n\n  .btn_i {\n    padding-top: 4px;\n    height: 40px;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carrito_vacio {\n    color: red;\n    font-size: 26px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 36px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .btn-continue {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #00a2dd !important;\n    font-weight: 600 !important;\n    font-size: 27.5px !important;\n    width: 75% !important;\n    --border-radius: 8px !important;\n  }\n\n  .name_product {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 5px 0px !important;\n    line-height: 29px !important;\n  }\n\n  .description_product {\n    font-size: 21px !important;\n    color: #727070 !important;\n    line-height: 22px !important;\n    margin: 5px 0px !important;\n  }\n\n  .price_product {\n    font-size: 25px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .basurita {\n    max-width: 78%;\n    border: 0;\n  }\n\n  .img_product {\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n    padding: 10px !important;\n    border-radius: 30px !important;\n    background-color: #fff !important;\n    max-width: 78% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcHJveGltYS1lbnRyZWdhL3Byb3hpbWEtZW50cmVnYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb3hpbWEtZW50cmVnYS9wcm94aW1hLWVudHJlZ2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FDSUo7O0FERkE7RUFDSSw0QkFBQTtFQUNBLHlDQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDU0o7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNZSjs7QURWQTtFQUNJLDZCQUFBO0FDYUo7O0FEWEE7RUFDSSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ2NKOztBRFpBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ2VKOztBRGJBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNnQko7O0FEZEE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ2lCSjs7QURmQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNtQko7O0FEakJBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDb0JKOztBRGxCQTtFQUNJLG9DQUFBO0FDcUJKOztBRG5CQTtFQUNJO0lBQ0ksZ0NBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUNzQk47O0VEcEJFO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ3VCTjs7RURyQkU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7RUN3Qk47O0VEdEJFO0lBQ0ksYUFBQTtFQ3lCTjs7RUR2QkU7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQzBCTjs7RUR4QkU7SUFDSSxjQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0VDMkJOOztFRHpCRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQzRCTjs7RUQxQkU7SUFDSSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EscUJBQUE7SUFDQSwrQkFBQTtFQzZCTjs7RUQzQkU7SUFDSSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtJQUNBLDRCQUFBO0VDOEJOOztFRDVCRTtJQUNJLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDBCQUFBO0VDK0JOOztFRDdCRTtJQUNJLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0VDZ0NOOztFRDlCRTtJQUNJLGNBQUE7SUFDQSxTQUFBO0VDaUNOOztFRC9CRTtJQUNJLHNEQUFBO0lBQ0Esd0JBQUE7SUFDQSw4QkFBQTtJQUNBLGlDQUFBO0lBQ0EseUJBQUE7RUNrQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3hpbWEtZW50cmVnYS9wcm94aW1hLWVudHJlZ2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2Fycml0b192YWNpb3tcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5sb2dvLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5jb250ZW50LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IDA7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cbi5kaXYtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjUlO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG59XG4udHh0Vm9sdmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bl9pIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRpdHVsbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnJlc3VsdF9zZWFyY2gge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYWxpZ24tc2VsZi1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmltZ19wcm9kdWN0IHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5wcmljZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnRyYXNoIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XG59XG4uYnRuLWNvbnRpbnVlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE3LjVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xufVxuLmFncmVnYXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cbi5idG50ZXh0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAudHh0Vm9sdmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAuYnRuX2kge1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgIC5jb250ZW50LWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICB9XG4gICAgLmNhcnJpdG9fdmFjaW97XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgLmNhcnJvMSB7XG4gICAgICAgIG1heC13aWR0aDogNjglO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTQxcHg7XG4gICAgfVxuICAgIC50aXRsZV9zZWNjaW9uIHtcbiAgICAgICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICB9XG4gICAgLmJ0bi1jb250aW51ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDI3LjVweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5uYW1lX3Byb2R1Y3Qge1xuICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgICAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wcmljZV9wcm9kdWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJhc3VyaXRhIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3OCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICAgLmltZ19wcm9kdWN0IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IDc4JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJyaXRvX3ZhY2lvIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLnR4dFZvbHZlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmVzdWx0X3NlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnByaWNlX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4udHJhc2gge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbn1cblxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3LjVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZ3JlZ2FyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG50ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnR4dFZvbHZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICAuYnRuX2kge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICAuY2Fycml0b192YWNpbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cblxuICAuY2Fycm8xIHtcbiAgICBtYXgtd2lkdGg6IDY4JTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNDFweDtcbiAgfVxuXG4gIC50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICB9XG5cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGEyZGQgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNy41cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmFzdXJpdGEge1xuICAgIG1heC13aWR0aDogNzglO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC5pbWdfcHJvZHVjdCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNzglICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/proxima-entrega/proxima-entrega.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/proxima-entrega/proxima-entrega.page.ts ***!
    \***************************************************************/

  /*! exports provided: ProximaEntregaPage */

  /***/
  function srcAppPagesProximaEntregaProximaEntregaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProximaEntregaPage", function () {
      return ProximaEntregaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
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


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");

    var ProximaEntregaPage = /*#__PURE__*/function () {
      function ProximaEntregaPage(router, menuCtrl, route, config, alertCtrl, loadingController, auth, http, tratamientoService, cartService) {
        var _this = this;

        _classCallCheck(this, ProximaEntregaPage);

        this.router = router;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.auth = auth;
        this.http = http;
        this.tratamientoService = tratamientoService;
        this.cartService = cartService;
        this.tratamientos = [];
        this.pedidoArr = [];
        this.pedidoArr1 = [];
        this.apiImg = "images/products/";
        this.apiUrl8 = ".jpg";
        this.proxima = [];
        this.cantidad = [];
        this.item_code = [];
        this.formula = [];
        this.addedMed = false;
        this.cartUrl3 = "medicine/remove-from-cart-app?";
        this.base_url = config.get_base_url();
        this.route.queryParams.subscribe(function (params) {
          _this.base_url = config.get_base_url();

          if (_this.router.getCurrentNavigation().extras.state) {
            _this.addedMed = _this.router.getCurrentNavigation().extras.state.user;
          }
        });
      }

      _createClass(ProximaEntregaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.menuCtrl.enable(false); //  this.tratamientos.splice(0, this.tratamientos.length);

          this.tratamientos = this.tratamientoService.getProxPedido();
          this.smallerDate = 0;
          this.proxima.splice(0, this.proxima.length);

          var _iterator = _createForOfIteratorHelper(this.tratamientos),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var al = _step.value;
              this.proxima.push(al.buy_time);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log(': this.proxima', this.proxima);
          var prxFormatted = this.proxima.map(function (f) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(f);
          });
          this.smallerDate = moment__WEBPACK_IMPORTED_MODULE_5__["min"](prxFormatted).format('ll');
          console.log('this.tratamientos: ', this.tratamientos);
          var smaller = this.tratamientos.filter(function (sm) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(sm.buy_time).format('ll') === _this2.smallerDate;
          });
          console.log('smaller: ', smaller, this.smallerDate);
          var smallerFmatted = new Date(this.smallerDate).toISOString();
          this.conditionSmaller = moment__WEBPACK_IMPORTED_MODULE_5__(smallerFmatted).diff(moment__WEBPACK_IMPORTED_MODULE_5__(), 'days');
          console.log('this.conditionSmaller: ', this.conditionSmaller);

          var _iterator2 = _createForOfIteratorHelper(this.tratamientos),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var trt = _step2.value;

              if (moment__WEBPACK_IMPORTED_MODULE_5__(trt.buy_time).diff(moment__WEBPACK_IMPORTED_MODULE_5__(smallerFmatted), 'days') <= 4) {
                this.pedidoArr1.push(trt);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.pedidoArr = this.pedidoArr1.filter(function (item, index, array) {
            return array.indexOf(item) === index;
          });
          console.log(': pedido arr ', this.pedidoArr);
        }
      }, {
        key: "Volver",
        value: function Volver() {
          this.router.navigate(['perfil']);
        }
      }, {
        key: "goBuscar",
        value: function goBuscar() {
          var navigationExtras = {
            state: {
              fromProx: true
            }
          };
          this.router.navigate(['medicamentos'], navigationExtras);
        }
      }, {
        key: "getSubTotal",
        value: function getSubTotal() {
          return this.pedidoArr.reduce(function (i, j) {
            return i + (j.mrp || +j.unit_price);
          }, 0);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          if (this.pedidoArr.length !== 0) {
            return this.getSubTotal() + 2000;
          } else {
            return 0;
          }
        }
      }, {
        key: "getTax",
        value: function getTax() {
          this.subtotal = 0;
          this.subtotal1 = 0;

          var _iterator3 = _createForOfIteratorHelper(this.pedidoArr),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var ta = _step3.value;
              this.total = ta.mrp * 1 || ta.unit_price * 1;
              this.tax1 = ta.tax ? ta.tax : 0;
              this.subtotal = Math.floor(this.total / ((100 + this.tax1) / 100));
              this.subtotal1 += this.subtotal;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return this.subtotal1;
        }
      }, {
        key: "impuesto",
        value: function impuesto() {
          return this.getSubTotal() - this.getTax();
        }
      }, {
        key: "removeMed",
        value: function removeMed(medicine) {
          this.tratamientoService.rmMedProxPedido(medicine);

          var _iterator4 = _createForOfIteratorHelper(this.pedidoArr.entries()),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                  index = _step4$value[0],
                  p = _step4$value[1];

              if (p.item_code === medicine.item_code) {
                this.pedidoArr.splice(index, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          this.cartService.removeProduct(medicine);
        }
      }, {
        key: "send",
        value: function send() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var loading, _iterator5, _step5, code;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      cssClass: 'loading',
                      message: 'Por favor espera...',
                      mode: 'ios',
                      spinner: 'dots'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    this.user1 = this.auth.getusuario();
                    this.userid = this.user1.email;
                    _iterator5 = _createForOfIteratorHelper(this.pedidoArr);

                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        code = _step5.value;
                        this.item_code.push(code.item_code);
                        this.cantidad.push(code.medicine_count = 1);
                        this.formula.push(code.is_pres_required);
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }

                    this.orden = {
                      email: this.userid,
                      cart_length: this.pedidoArr.length,
                      shipping_cost: 2000,
                      quantity: this.cantidad,
                      is_pres_required: 0,
                      item_code: this.item_code
                    };
                    this.http.post("".concat(this.base_url, "medicine/store-prescription/0"), this.orden).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                      loading.dismiss();
                    })).subscribe(function (mensaje) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this4 = this;

                        var alert, alert2, _alert;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.code = mensaje;
                                this.code2 = this.code.status;

                                if (!(this.code2 === 'SUCCESS')) {
                                  _context.next = 13;
                                  break;
                                }

                                _context.next = 5;
                                return this.alertCtrl.create({
                                  message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Tu orden fue creada',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert',
                                    handler: function handler(data) {
                                      alert2.present();
                                    }
                                  }]
                                });

                              case 5:
                                alert = _context.sent;
                                _context.next = 8;
                                return this.alertCtrl.create({
                                  message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">En algunos minutos verificaremos tu orden',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert',
                                    handler: function handler(data) {
                                      var _iterator6 = _createForOfIteratorHelper(_this4.pedidoArr),
                                          _step6;

                                      try {
                                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                                          var remIsReorden = _step6.value;

                                          if (remIsReorden.isReorden === 1) {
                                            _this4.http.get("".concat(_this4.base_url).concat(_this4.cartUrl3, "email=").concat(_this4.userid, "&item_code=").concat(remIsReorden.item_code)).subscribe(function (val) {
                                              console.log(val);
                                            });
                                          }
                                        }
                                      } catch (err) {
                                        _iterator6.e(err);
                                      } finally {
                                        _iterator6.f();
                                      }

                                      _this4.router.navigate(['mispedidos']);

                                      _this4.user1 = _this4.auth.getusuario();
                                      _this4.userid = _this4.user1.email;
                                      var i = 0;

                                      var _iterator7 = _createForOfIteratorHelper(_this4.pedidoArr),
                                          _step7;

                                      try {
                                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                                          var reorder = _step7.value;
                                          var postUpdate = {
                                            email: _this4.userid,
                                            item_code: reorder.item_code
                                          };

                                          _this4.http.post("".concat(_this4.base_url, "treatment/update-reorden"), postUpdate).subscribe(function (res) {
                                            console.log('res reorden: ', res);
                                          });
                                        }
                                      } catch (err) {
                                        _iterator7.e(err);
                                      } finally {
                                        _iterator7.f();
                                      }
                                    }
                                  }]
                                });

                              case 8:
                                alert2 = _context.sent;
                                _context.next = 11;
                                return alert.present();

                              case 11:
                                _context.next = 19;
                                break;

                              case 13:
                                console.log(mensaje);
                                _context.next = 16;
                                return this.alertCtrl.create({
                                  message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">Su orden no fue creada, intente de nuevo',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert'
                                  }]
                                });

                              case 16:
                                _alert = _context.sent;
                                _context.next = 19;
                                return _alert.present();

                              case 19:
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
      }]);

      return ProximaEntregaPage;
    }();

    ProximaEntregaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_9__["TratamientosService"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"]
      }];
    };

    ProximaEntregaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-proxima-entrega',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./proxima-entrega.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proxima-entrega/proxima-entrega.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./proxima-entrega.page.scss */
      "./src/app/pages/proxima-entrega/proxima-entrega.page.scss"))["default"]]
    })], ProximaEntregaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-proxima-entrega-proxima-entrega-module-es5.js.map