function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createalarm-createalarm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createalarm/createalarm.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createalarm/createalarm.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreatealarmCreatealarmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"container\">\n    <p class=\"title_seccion center\">Ingresa un nuevo medicamento</p>\n  </div>\n  <div class=\"searchbar\">\n    <ion-searchbar  autocomplete=\"on\"debounce=\"1000\" [(ngModel)]=\"searchbarInput\" (ionChange)=\"getItems($event)\" placeholder=\"Busca aquí tus productos\"></ion-searchbar>\n    <div class=\"label\">\n      <ion-label class=\"description_product1\">Busca o selecciona un medicamento para crear una alarma</ion-label>\n    </div>\n    <ion-list *ngIf=\"isItemAvailable\" class=\"list\">\n      <ion-item  button *ngFor=\"let it of items \" (click)=\"fillSearchbarText(it)\">\n        <ion-row class=\"result_search\">\n          <ion-col size=\"3\" class=\"align-self img_product\">\n            <img src={{base_url}}{{apiUrl7}}{{it.item_code}}{{apiUrl8}} class=\"mx-auto d-block\" width=\"100%\">\n          </ion-col>\n          <ion-col size=\"9\" class=\"align-self\">\n             <p class=\"name_product\">{{it.item_name}}</p>\n             <p class=\"description_product\">{{it.composition}}</p>\n            </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/createalarm/createalarm-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/createalarm/createalarm-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CreatealarmPageRoutingModule */

  /***/
  function srcAppPagesCreatealarmCreatealarmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatealarmPageRoutingModule", function () {
      return CreatealarmPageRoutingModule;
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


    var _createalarm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./createalarm.page */
    "./src/app/pages/createalarm/createalarm.page.ts");

    var routes = [{
      path: '',
      component: _createalarm_page__WEBPACK_IMPORTED_MODULE_3__["CreatealarmPage"]
    }];

    var CreatealarmPageRoutingModule = function CreatealarmPageRoutingModule() {
      _classCallCheck(this, CreatealarmPageRoutingModule);
    };

    CreatealarmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreatealarmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/createalarm/createalarm.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createalarm/createalarm.module.ts ***!
    \*********************************************************/

  /*! exports provided: CreatealarmPageModule */

  /***/
  function srcAppPagesCreatealarmCreatealarmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatealarmPageModule", function () {
      return CreatealarmPageModule;
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


    var _createalarm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./createalarm-routing.module */
    "./src/app/pages/createalarm/createalarm-routing.module.ts");
    /* harmony import */


    var _createalarm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createalarm.page */
    "./src/app/pages/createalarm/createalarm.page.ts");

    var CreatealarmPageModule = function CreatealarmPageModule() {
      _classCallCheck(this, CreatealarmPageModule);
    };

    CreatealarmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _createalarm_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatealarmPageRoutingModule"]],
      declarations: [_createalarm_page__WEBPACK_IMPORTED_MODULE_6__["CreatealarmPage"]]
    })], CreatealarmPageModule);
    /***/
  },

  /***/
  "./src/app/pages/createalarm/createalarm.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createalarm/createalarm.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreatealarmCreatealarmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  align-self: center !important;\n  background-color: #fff;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.label {\n  padding-top: 10px;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #eeeef1;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\nion-searchbar {\n  --icon-color: #fff;\n  --background: #00a2dd !important;\n  --border-radius: 20px !important;\n  --placeholder-color: #fff !important;\n  --placeholder-opacity: 1;\n}\n\n.searchbar {\n  margin-top: -5px !important;\n  padding-top: 5px !important;\n}\n\n.description_product1 {\n  color: #727070 !important;\n  line-height: 18px !important;\n  text-align: center !important;\n  margin-right: 10px !important;\n  margin-left: 10px !important;\n  display: flex;\n  margin: auto;\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: -1px;\n  right: 15px;\n  --background: #c9c9c9;\n  width: 24px;\n  height: 20px;\n  font-size: 16px;\n}\n\n.btn_i {\n  padding-top: 5px;\n}\n\n@media (min-width: 400px) and (max-width: 417px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 21px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 336px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 5px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 337px) and (max-width: 350px) {\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 10px;\n    --background: #c9c9c9;\n    width: 24px;\n    height: 20px;\n    font-size: 16px;\n  }\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n  width: 100%;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.d-block {\n  display: block;\n}\n\n.price_product {\n  font-size: 21px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 0px !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.available {\n  font-size: 17px !important;\n  color: #008000 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.notavailable {\n  font-size: 17px !important;\n  color: #ff0000 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.list {\n  width: 100%;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 30px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  ion-badge {\n    color: #046a8f;\n    position: absolute;\n    --border-radius: 200%;\n    top: -1px;\n    right: 39px;\n    --background: #c9c9c9;\n    width: 45px;\n    height: 29px;\n    font-size: 25px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n  }\n\n  .description_product1 {\n    color: #727070 !important;\n    line-height: 34px !important;\n    text-align: center !important;\n    margin-right: 10px !important;\n    margin-left: 10px !important;\n    display: flex;\n    margin: auto;\n    font-size: 30px;\n  }\n\n  .name_product {\n    font-size: 26px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 5px 0px !important;\n    line-height: 30px !important;\n  }\n\n  .description_product {\n    font-size: 24px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 10px 0px !important;\n  }\n\n  .price_product {\n    font-size: 29px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 0px !important;\n  }\n\n  .available {\n    font-size: 25px !important;\n    color: #008000 !important;\n    line-height: 18px !important;\n    margin: 10px 0px !important;\n  }\n\n  .notavailable {\n    font-size: 25px !important;\n    color: #ff0000 !important;\n    line-height: 18px !important;\n    margin: 10px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvY3JlYXRlYWxhcm0vY3JlYXRlYWxhcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGVhbGFybS9jcmVhdGVhbGFybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLGdDQUFBO0VBQ0EsdUNBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDT0Y7O0FETEE7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRExBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUNRRjs7QURMQTtFQUNFLCtCQUFBO0VBQ0EseUNBQUE7QUNRRjs7QUROQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDU0Y7O0FEUEE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtBQ1dGOztBRFRBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtBQ1lGOztBRFZBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDYUY7O0FEWEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNjRjs7QURaQTtFQUNFLGdCQUFBO0FDZUY7O0FEYkE7RUFDRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ2dCRjtBQUNGOztBRGRBO0VBQ0U7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNnQkY7QUFDRjs7QURkQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDZ0JGO0FBQ0Y7O0FEZEE7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDZ0JGOztBRGRBO0VBQ0UsNkJBQUE7QUNpQkY7O0FEZEE7RUFDRSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ2lCRjs7QURmQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsY0FBQTtBQ21CRjs7QURqQkE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ29CRjs7QURsQkE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDcUJGOztBRG5CQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDc0JGOztBRHBCQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDdUJGOztBRHJCQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDd0JGOztBRHRCQTtFQUNFLFdBQUE7QUN5QkY7O0FEdkJBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUMwQkY7O0VEeEJBO0lBQ0UsZ0NBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUMyQkY7O0VEekJBO0lBQ0UsYUFBQTtFQzRCRjs7RUQxQkE7SUFDRSxjQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0VDNkJGOztFRDNCQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQzhCRjs7RUQ1QkE7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLDBCQUFBO0VDK0JGOztFRDdCQTtJQUNFLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNnQ0Y7O0VEOUJBO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFQ2lDRjs7RUQvQkE7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtFQ2tDRjs7RURoQ0E7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtFQ21DRjs7RURqQ0E7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtFQ29DRjs7RURsQ0E7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtFQ3FDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlYWxhcm0vY3JlYXRlYWxhcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnRpdGxlX3NlY2Npb24ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmRpdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbn1cbi5sYWJlbHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuLmljb25ve1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgfVxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWVlZjE7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuaW9uLXNlYXJjaGJhciB7XG4gIC0taWNvbi1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhMmRkICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbi5zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0MSB7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTdweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiAyMXB4O1xuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzMzZweCkge1xuICBpb24tYmFkZ2Uge1xuICAgIGNvbG9yOiAjMDQ2YThmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMzdweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJpY2VfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5hdmFpbGFibGUge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDgwMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm90YXZhaWxhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuLmxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAudGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDM5cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0MSB7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5uYW1lX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjlweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmF2YWlsYWJsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDgwMDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgfVxuICAubm90YXZhaWxhYmxlIHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmljb25vIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNCU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWYxO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWljb24tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwYTJkZCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5cbi5zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3QxIHtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1iYWRnZSB7XG4gIGNvbG9yOiAjMDQ2YThmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgdG9wOiAtMXB4O1xuICByaWdodDogMTVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idG5faSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkgYW5kIChtYXgtd2lkdGg6IDQxN3B4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDIxcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzljOWM5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzNnB4KSB7XG4gIGlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICMwNDZhOGY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjAwJTtcbiAgICB0b3A6IC0xcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMzN3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ24tc2VsZiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW1nX3Byb2R1Y3Qge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByaWNlX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZV9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYXZhaWxhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm90YXZhaWxhYmxlIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBjb2xvcjogIzA0NmE4ZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICAgIHRvcDogLTFweDtcbiAgICByaWdodDogMzlweDtcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0MSB7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByaWNlX3Byb2R1Y3Qge1xuICAgIGZvbnQtc2l6ZTogMjlweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXZhaWxhYmxlIHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5vdGF2YWlsYWJsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/createalarm/createalarm.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/createalarm/createalarm.page.ts ***!
    \*******************************************************/

  /*! exports provided: CreatealarmPage */

  /***/
  function srcAppPagesCreatealarmCreatealarmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatealarmPage", function () {
      return CreatealarmPage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");

    var CreatealarmPage = /*#__PURE__*/function () {
      function CreatealarmPage(router, http, config, auth, menuCtrl) {
        _classCallCheck(this, CreatealarmPage);

        this.router = router;
        this.http = http;
        this.config = config;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isItemAvailable = false;
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
        this.items2 = [];
        this.items5 = [];
        this.items7 = [];
        this.items = [];
        this.isItemAvailable = true;
        this.base_url = config.get_base_url();
      }

      _createClass(CreatealarmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.menuCtrl.enable(true);
          this.user = this.auth.getusuario();
          this.userid = this.user.email;
          this.http.get("".concat(this.base_url, "my-prescriptions?email=").concat(this.userid)).subscribe(function (res) {
            _this.pedidos = res;
            console.log('this.pedidos: ', _this.pedidos);

            var _iterator = _createForOfIteratorHelper(_this.pedidos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                _this.items3 = item.get_cart;

                if (item.status === 4 || item.status === 5) {
                  for (var i = 0; i < _this.items3.length; i++) {
                    _this.items2.push(_this.items3[i]);
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(_this.items2),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var uni = _step2.value;

                if (uni.units !== 'ML' && uni.units !== 'NoD' && uni.units !== 'GR') {
                  _this.items5.push(uni);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            console.log(_this.items5);
            var a = [];

            var _iterator3 = _createForOfIteratorHelper(_this.items5),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var items = _step3.value;
                var infoMed = {
                  composition: items.composition,
                  units: items.units,
                  units_value: items.units_value,
                  item_code: items.item_code,
                  item_name: items.item_name
                };
                a.push(infoMed);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _this.items7 = a.filter(function (thing, index) {
              var _thing = JSON.stringify(thing);

              return index === a.findIndex(function (obj) {
                return JSON.stringify(obj) === _thing;
              });
            });
            console.log(': ', _this.items7);

            if (_this.pedidos !== '') {
              _this.initializeItems();
            }
          });
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.items = this.items7;
          console.log('this.items: ', this.items);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['mipastillero']);
        }
      }, {
        key: "updateAlarm",
        value: function updateAlarm() {}
      }, {
        key: "getItems",
        value: function getItems(ev) {
          // Reset items back to all of the items
          this.initializeItems(); // set val to the value of the searchbar

          var val = ev.target.value; // if the value is an empty string don't filter the items

          if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            this.items = this.items7.filter(function (item) {
              return item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          } else {
            this.isItemAvailable = true;
          }
        }
      }, {
        key: "fillSearchbarText",
        value: function fillSearchbarText(item) {
          this.searchbarInput = item.item_name;
          this.itemSelected.emit(item.item_name);
          this.items4 = item;
          var navigationExtras = {
            state: {
              user: item
            }
          };
          this.router.navigate(['prueba'], navigationExtras);
          this.searchbarInput = '';
        }
      }]);

      return CreatealarmPage;
    }();

    CreatealarmPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CreatealarmPage.prototype, "itemSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchBarInput', {
      "static": true
    })], CreatealarmPage.prototype, "searchbarInput", void 0);
    CreatealarmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-createalarm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./createalarm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createalarm/createalarm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./createalarm.page.scss */
      "./src/app/pages/createalarm/createalarm.page.scss"))["default"]]
    })], CreatealarmPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-createalarm-createalarm-module-es5.js.map