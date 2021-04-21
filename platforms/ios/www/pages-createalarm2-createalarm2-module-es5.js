function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-createalarm2-createalarm2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createalarm2/createalarm2.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createalarm2/createalarm2.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreatealarm2Createalarm2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"updateAlarm()\" >\n        Ok\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"container\">\n    <p class=\"title_seccion center\">Crea una alarma</p>\n  </div>\n  <div class=\"container1\">\n    <ion-row class=\"result_search\">\n        <ion-col size=\"4\">\n          <div class=\"img_product\">\n            <img src={{base_url}}{{apiUrl7}}{{items.item_code}}{{apiUrl8}} class=\"img-fluid\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\" class=\"align-self\">\n          <p class=\"name_product\" style=\"color: #00a1dd !important;\">{{items.item_name}}</p>\n          <p class=\"description_product\">{{items.composition}}</p>\n        </ion-col>\n        \n        <ion-col size=\"12\" class=\"mt-20 padding\">\n          <form [formGroup]=\"alarmasForm\" #form=\"ngForm\">\n            <p class=\"name_product\" style=\"color: #00a1dd !important;\">Mensaje</p>\n            <div class=\"form-group\">\n              <ion-input formControlName=\"obs\" placeholder=\"Ingresa tu mensaje\" class=\"form-control\"  [(ngModel)]=\"alarmas.obs\" name=\"obs\" ngControl=\"obs\"></ion-input>\n            </div>\n            <p class=\"name_product\" style=\"color: #00a1dd !important;\">Crear alarma</p>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Tomar cada: </p>\n              <div class=\"input-group\">\n                <ion-select  placeholder=\"Selecciona un periodo\" class=\"custom_select\" mode=\"ios\" [(ngModel)]=\"alarmas.freq\" formControlName=\"freq\" name=\"freq\" ngControl=\"freq\">\n                  <ion-select-option *ngFor=\"let inter of intervalo\" [value]=\"inter.id\">{{inter.name}}</ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Empezar tratamiento: </p>\n              <div class=\"input-group\">\n                <ion-datetime  mode=\"md\" display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"alarmas.time\"  \n                class=\"form-control\" placeholder=\"Hora de Inicio\" formControlName=\"time\" name=\"time\" ngControl=\"time\"></ion-datetime>\n              </div>\n            </div>\n            <!--<div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Dósis por toma: </p>\n              <div class=\"input-group\">\n                <ion-select placeholder=\"Selecciona un periodo\" class=\"custom_select\" mode=\"ios\">\n                  <ion-select-option *ngFor=\"let dos of dosis\">{{dos}}</ion-select-option>\n                </ion-select>\n              </div>\n            </div>-->\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Fecha de inicio: </p>\n              <div class=\"input-group\">\n                <ion-datetime  mode=\"md\" drag-content=\"false\" displayFormat=\"DD/MM/YYYY\" class=\"form-control\"\n                  placeholder=\"Dia/Mes/Año\" [(ngModel)]=\"alarmas.date\" formControlName=\"date\" name=\"date\" ngControl=\"date\"></ion-datetime>\n              </div>\n            </div>\n          </form>\n        </ion-col>\n    </ion-row>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/createalarm2/createalarm2-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/createalarm2/createalarm2-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: Createalarm2PageRoutingModule */

  /***/
  function srcAppPagesCreatealarm2Createalarm2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Createalarm2PageRoutingModule", function () {
      return Createalarm2PageRoutingModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _createalarm2_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./createalarm2.page */
    "./src/app/pages/createalarm2/createalarm2.page.ts");

    var routes = [{
      path: '',
      component: _createalarm2_page__WEBPACK_IMPORTED_MODULE_4__["Createalarm2Page"]
    }];

    var Createalarm2PageRoutingModule = function Createalarm2PageRoutingModule() {
      _classCallCheck(this, Createalarm2PageRoutingModule);
    };

    Createalarm2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Createalarm2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/createalarm2/createalarm2.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/createalarm2/createalarm2.module.ts ***!
    \***********************************************************/

  /*! exports provided: Createalarm2PageModule */

  /***/
  function srcAppPagesCreatealarm2Createalarm2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Createalarm2PageModule", function () {
      return Createalarm2PageModule;
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


    var _createalarm2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./createalarm2-routing.module */
    "./src/app/pages/createalarm2/createalarm2-routing.module.ts");
    /* harmony import */


    var _createalarm2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createalarm2.page */
    "./src/app/pages/createalarm2/createalarm2.page.ts");

    var Createalarm2PageModule = function Createalarm2PageModule() {
      _classCallCheck(this, Createalarm2PageModule);
    };

    Createalarm2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _createalarm2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Createalarm2PageRoutingModule"]],
      declarations: [_createalarm2_page__WEBPACK_IMPORTED_MODULE_6__["Createalarm2Page"]]
    })], Createalarm2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/createalarm2/createalarm2.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/createalarm2/createalarm2.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreatealarm2Createalarm2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.div_medis {\n  width: 100%;\n  height: 130px;\n  overflow: auto;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n  --background: #009bd7;\n  color: #fff !important;\n  font-size: 25px;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  align-self: center !important;\n  background-color: #fff;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.container1 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n  margin-left: 5px !important;\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.padding {\n  padding-left: 15px !important;\n  padding-right: 15px !important;\n}\n\n.select_options {\n  background-color: #fff;\n  padding: 20px;\n  margin: 15px 0px;\n  width: 100% !important;\n  border-radius: 20px;\n}\n\n.input-group {\n  align-items: stretch;\n  width: 100%;\n  flex-wrap: wrap;\n  position: relative;\n  display: flex;\n  border: 1px solid #ced4da;\n  border-radius: 7px;\n}\n\n.custom_select {\n  width: 100%;\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\nion-select::part(text) {\n  color: #495057;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-buttons {\n    margin-left: 25px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 34px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .name_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 11px 0px !important;\n    line-height: 30px !important;\n  }\n\n  .description_product {\n    font-size: 26px !important;\n    color: #727070 !important;\n    line-height: 30px !important;\n    margin: 15px 0px !important;\n  }\n\n  .div_medis {\n    width: 100%;\n    height: 260px;\n    overflow: auto;\n  }\n\n  ion-item {\n    --background: #f2f2f2;\n  }\n\n  .form-control {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 25px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 2px solid #ced4da;\n    border-radius: 0.25rem;\n  }\n\n  .custom_select {\n    width: 100%;\n    margin-right: auto !important;\n    font-size: 25px;\n    margin-left: auto !important;\n    border: 2px solid #ced4da;\n  }\n\n  .carrito {\n    width: 14%;\n    height: 14%;\n    margin-left: 65%;\n    margin-bottom: 2% !important;\n    --background: #009bd7;\n    color: #fff !important;\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvY3JlYXRlYWxhcm0yL2NyZWF0ZWFsYXJtMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZWFsYXJtMi9jcmVhdGVhbGFybTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSx1Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSw0QkFBQTtFQUNBLHlDQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkE7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QURORTtFQUNFLDZCQUFBO0FDU0o7O0FEUEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJFO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDV0o7O0FEVEU7RUFDRSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FDWUo7O0FEVkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFhFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFpFO0VBQ0UsNkJBQUE7QUNlSjs7QURiRTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNnQko7O0FEZEU7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2lCSjs7QURmRTtFQUNFLDJCQUFBO0FDa0JKOztBRGhCRTtFQUNFLG1CQUFBO0FDbUJKOztBRGpCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDb0JKOztBRGxCRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNxQko7O0FEbkJFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDc0JKOztBRHBCRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDdUJKOztBRHJCRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDd0JKOztBRHRCRTtFQUNFLGNBQUE7QUN5Qko7O0FEdkJFO0VBQ0U7SUFDRSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQzBCSjs7RUR4QkU7SUFDRSxhQUFBO0VDMkJKOztFRHpCRTtJQUNFLGlCQUFBO0VDNEJKOztFRDFCRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQzZCSjs7RUQzQkU7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0VDOEJKOztFRDVCRTtJQUNFLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VDK0JKOztFRDdCRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ2dDSjs7RUQ5QkU7SUFDRSxxQkFBQTtFQ2lDSjs7RUQvQkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLG1DQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtFQ2tDSjs7RURoQ0U7SUFDRSxXQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQ21DSjs7RURqQ0U7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQ29DSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlYWxhcm0yL2NyZWF0ZWFsYXJtMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogNTAlO1xufVxuLmNvbnRlbnQtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIGJvcmRlcjogMDtcbn1cbi5kaXZfbWVkaXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cbi5jYXJyaXRvIHtcbiAgICB3aWR0aDogMTQlO1xuICAgIGhlaWdodDogMTQlO1xuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG4uaWNvbm8ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG59XG4uY29udGFpbmVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lcjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuICAucmVzdWx0X3NlYXJjaCB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuaW1nX3Byb2R1Y3Qge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmltZy1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG4gIC5hbGlnbi1zZWxmIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LTIwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIH1cbiAgLnBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VsZWN0X29wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAuY3VzdG9tX3NlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuICAgIC50aXRsZV9zZWNjaW9uIHtcbiAgICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgfVxuICAgIC5uYW1lX3Byb2R1Y3Qge1xuICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAxMXB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdl9tZWRpcyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIH1cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICB9XG4gICAgLmN1c3RvbV9zZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICAgIH1cbiAgICAuY2Fycml0byB7XG4gICAgICB3aWR0aDogMTQlO1xuICAgICAgaGVpZ2h0OiAxNCU7XG4gICAgICBtYXJnaW4tbGVmdDogNjUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNztcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gICIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cblxuLmRpdl9tZWRpcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRpdGxlX3NlY2Npb24ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW1nX3Byb2R1Y3Qge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0X29wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDE1cHggMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jdXN0b21fc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuXG4gIC50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kaXZfbWVkaXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIH1cblxuICAuY3VzdG9tX3NlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbiAgfVxuXG4gIC5jYXJyaXRvIHtcbiAgICB3aWR0aDogMTQlO1xuICAgIGhlaWdodDogMTQlO1xuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/createalarm2/createalarm2.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/createalarm2/createalarm2.page.ts ***!
    \*********************************************************/

  /*! exports provided: Createalarm2Page */

  /***/
  function srcAppPagesCreatealarm2Createalarm2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Createalarm2Page", function () {
      return Createalarm2Page;
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


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/tratamientos.service */
    "./src/app/services/tratamientos.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var Createalarm2Page = /*#__PURE__*/function () {
      function Createalarm2Page(router, route, config, localNotifications, loadingController, alertCtrl, formBuilder, storage, tratamientoService, htpp, auth, http, plt) {
        _classCallCheck(this, Createalarm2Page);

        this.router = router;
        this.route = route;
        this.config = config;
        this.localNotifications = localNotifications;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.tratamientoService = tratamientoService;
        this.htpp = htpp;
        this.auth = auth;
        this.http = http;
        this.plt = plt;
        this.currentnot = 0;
        this.currentnot1 = 0;
        this.currentnot3 = 0;
        this.items = 0;
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
        this.base_url = 0;
        this.alarmas = 0;
        this.intervaloNumber = 0;
        this.key2 = 'alarma';
        this.user1 = 0;
        this.userid = 0;
        this.aleatory = 0;
        this.tomadas = 0;
        this.not = 0;
        this.intervalo1 = 0;
        this.nottrigger = 0;
        this.loop = 0;
        this.fecha = 0;
        this.hora = 0;
        this.intervalo = [{
          id: 4,
          name: '4 Horas'
        }, {
          id: 8,
          name: '8 Horas'
        }, {
          id: 12,
          name: '12 Horas'
        }, {
          id: 16,
          name: '16 Horas'
        }, {
          id: 24,
          name: '24 Horas'
        }, {
          id: 48,
          name: '48 Horas'
        }, {
          id: 72,
          name: '72 Horas'
        }];
        this.dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
        this.timeLeft = this.intervaloNumber;
        this.base_url = config.get_base_url();
        this.user1 = this.auth.getusuario();
        this.userid = this.user1.email;
        this.alarmasForm = this.formBuilder.group({
          obs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          time: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          freq: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
      }

      _createClass(Createalarm2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.items = _this.router.getCurrentNavigation().extras.state.user;
              console.log(_this.items);
            }
          });
          this.fecha = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
          this.hora = moment__WEBPACK_IMPORTED_MODULE_5__().format('LTS');
          this.alarmas = {
            email: this.userid,
            freq: this.intervaloNumber,
            date: moment__WEBPACK_IMPORTED_MODULE_5__(this.fecha).format('YYYY-MM-DD'),
            time: moment__WEBPACK_IMPORTED_MODULE_5__(this.hora).format('LTS'),
            obs: this.items.item_name,
            item_name: this.items.item_name,
            composition: this.items.composition,
            dosis: 1,
            total: this.items.units_value,
            units: this.items.units,
            item_code: this.items.item_code
          };
          console.log('json inicial');
          console.log(this.alarmas);
          this.alarmasForm.reset();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['createalarm']);
        }
      }, {
        key: "doSomething",
        value: function doSomething(fecha) {
          moment__WEBPACK_IMPORTED_MODULE_5__(fecha).format('YYYY-MM-DD');
        }
      }, {
        key: "doSomethingh",
        value: function doSomethingh(hora) {
          moment__WEBPACK_IMPORTED_MODULE_5__(hora).format('LTS');
        }
      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      cssClass: 'loading',
                      message: 'Por favor espera...',
                      mode: 'ios',
                      spinner: 'dots',
                      duration: 50
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "updateAlarm",
        value: function updateAlarm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var date, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.aleatory = Math.floor(Math.random() * 10) + 1;
                    date = new Date(this.alarmas.date + ' ' + this.alarmas.time);
                    console.log(date);
                    this.load();
                    _context2.next = 6;
                    return this.alertCtrl.create({
                      message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">La alarma fue creada.',
                      mode: 'ios',
                      cssClass: 'failed',
                      buttons: [{
                        text: 'Aceptar',
                        cssClass: 'btnalert'
                      }]
                    });

                  case 6:
                    alert = _context2.sent;
                    _context2.next = 9;
                    return alert.present();

                  case 9:
                    // this.storage.set(this.key2, this.alarmas);

                    /*this.localNotifications.on('yes').subscribe(val => {
                      this.tomadas = {
                        email: this.userid,
                        item_code: this.alarmas.item_code,
                        taken: 1
                      };
                      this.http.post(`${this.base_url}treatment/update-treatment`, this.tomadas).subscribe(value => {
                       console.log(value);
                      });
                    });*/
                    this.check(this.alarmas.item_code);
                    this.alarmas.tomadas = 0;
                    this.tratamientoService.addAlarm(this.alarmas);
                    console.log(this.alarmas);
                    this.router.navigate(['mipastillero']);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "check",
        value: function check(id) {
          var _this2 = this;

          this.loop = this.alarmas.freq * 60000;
          var pastillas = 0;
          pastillas = this.alarmas.total;
          var i = 1;
          var horas_totales = 0;
          horas_totales = this.alarmas.freq * pastillas;
          var dateObjetive = 0;
          dateObjetive = new Date("".concat(this.alarmas.date, "T").concat(this.alarmas.time)).getTime();
          var dateObjetive2 = new Date("".concat(this.alarmas.date, "T").concat(this.alarmas.time));
          var nowstart = new Date();
          var nowstart2 = moment__WEBPACK_IMPORTED_MODULE_5__(nowstart);
          var dateObjetive3 = moment__WEBPACK_IMPORTED_MODULE_5__(dateObjetive2);
          var endDate = moment__WEBPACK_IMPORTED_MODULE_5__(dateObjetive2).add(horas_totales, 'hours').format();
          var proxima = moment__WEBPACK_IMPORTED_MODULE_5__(endDate).subtract(48, 'hours').format('YYYY-MM-DD');
          console.log('Fecha final' + ' ' + endDate);
          console.log('Proxima entrega' + ' ' + proxima); // console.log((date2));

          var dif = dateObjetive3.diff(nowstart2, 'minutes');
          var hora = moment__WEBPACK_IMPORTED_MODULE_5__(nowstart).add(dif, 'minutes').add(1, 'minute').format('LT'); //document.getElementById('hora').innerHTML = 'a las ' + hora;

          this.alarmas.prox = hora;
          this.alarmas.proxima_entrega = proxima;
          this.tratamientoService.addAlarm(this.alarmas);
          this.intervalo1 = window.setInterval(function () {
            var now = new Date().getTime();
            var now1 = moment__WEBPACK_IMPORTED_MODULE_5__(now).format(); // console.log(now1);

            var timeleft = 0;
            timeleft = dateObjetive - now;
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60)); //document.getElementById('days').innerHTML = days + 'd '
            //document.getElementById('hours').innerHTML = hours + 'h '
            // document.getElementById('mins').innerHTML = minutes + 'm '

            _this2.alarmas.timeH = hours;
            _this2.alarmas.timeM = minutes;
            _this2.alarmas.timeD = days;
            _this2.alarmas.toma = 'T0';

            _this2.tratamientoService.addAlarm(_this2.alarmas); // Display the message when countdown is over


            if (timeleft < 0) {
              window.clearInterval(_this2.intervalo1);
              _this2.alarmas.timeH = '';
              _this2.alarmas.timeM = '';
              _this2.alarmas.timeD = '';
              _this2.alarmas.toma = 'T0';

              _this2.tratamientoService.addAlarm(_this2.alarmas); //document.getElementById('days').innerHTML = ''
              //document.getElementById('hours').innerHTML = '' 
              // document.getElementById('mins').innerHTML = ''
              //document.getElementById('hora').innerHTML = ''
              // //document.getElementById('end').innerHTML = 'TIME UP!!';

            }

            var verify = moment__WEBPACK_IMPORTED_MODULE_5__(dateObjetive).isSame(now1);

            if (verify === true) {
              window.clearInterval(_this2.intervalo1); // console.log('notificacion 1' + ' ' + this.alarmas.item_name );

              _this2.localNotifications.schedule({
                id: id,
                title: _this2.items.item_name,
                text: 'Hora de un medicamento.',
                foreground: true,
                lockscreen: true,
                wakeup: true,
                priority: 2,
                silent: false
              });

              _this2.currentnot1 = _this2.localNotifications.on('click').subscribe(function (val) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var _this3 = this;

                  var alert;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          console.log(val);
                          _context3.next = 3;
                          return this.alertCtrl.create({
                            mode: 'ios',
                            cssClass: 'failed',
                            backdropDismiss: false,
                            buttons: [{
                              text: 'Tomar',
                              cssClass: 'btnalert',
                              handler: function handler(data) {
                                console.log('alarmas');
                                console.log(_this3.alarmas);
                                _this3.alarmas.toma = 'T1';

                                _this3.tratamientoService.addAlarm(_this3.alarmas);

                                _this3.currentnot1.unsubscribe();
                              }
                            }, {
                              text: 'Posponer',
                              cssClass: 'btnalert',
                              handler: function handler(datos) {
                                _this3.currentnot1.unsubscribe();

                                _this3.postpone(val.id, _this3.alarmas);
                              }
                            }]
                          });

                        case 3:
                          alert = _context3.sent;
                          _context3.next = 6;
                          return alert.present();

                        case 6:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });

              _this2.countdown();
            }
          }, 1000);
          var intervaloGrande = window.setInterval(function () {
            i++; // console.log('notificacion' + i + ' ' + this.alarmas.item_name );

            _this2.localNotifications.schedule({
              id: id,
              title: _this2.items.item_name,
              text: 'Hora de un medicamento.',
              foreground: true,
              lockscreen: true,
              wakeup: true,
              priority: 2,
              silent: false
            });

            _this2.currentnot = _this2.localNotifications.on('click').subscribe(function (val) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this4 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        console.log(val);
                        _context4.next = 3;
                        return this.alertCtrl.create({
                          mode: 'ios',
                          cssClass: 'failed',
                          backdropDismiss: false,
                          buttons: [{
                            text: 'Tomar',
                            cssClass: 'btnalert',
                            handler: function handler(data) {
                              console.log('alarmas');
                              console.log(_this4.alarmas);
                              _this4.alarmas.toma = 'T1';

                              _this4.tratamientoService.addAlarm(_this4.alarmas);

                              _this4.currentnot.unsubscribe();
                            }
                          }, {
                            text: 'Posponer',
                            cssClass: 'btnalert',
                            handler: function handler(datos) {
                              _this4.currentnot.unsubscribe();

                              _this4.postpone(val.id, _this4.alarmas);
                            }
                          }]
                        });

                      case 3:
                        alert = _context4.sent;
                        _context4.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });

            if (i < pastillas) {
              _this2.countdown();
            }

            if (i === pastillas) {
              window.clearInterval(intervaloGrande);
            }
          }, this.loop);
        }
      }, {
        key: "countdown",
        value: function countdown() {
          var _this5 = this;

          var now = new Date();
          var now2 = moment__WEBPACK_IMPORTED_MODULE_5__(now).format();
          var objectiveDate = moment__WEBPACK_IMPORTED_MODULE_5__(now2).add(this.alarmas.freq, 'minutes').format('LT');
          var objectiveDate2 = moment__WEBPACK_IMPORTED_MODULE_5__(now2).add(this.alarmas.freq, 'minutes').format();
          var objectiveDate3 = new Date(objectiveDate2).getTime(); // console.log((date2));
          //document.getElementById('hora').innerHTML = 'a las ' + objectiveDate;

          this.alarmas.prox = objectiveDate;
          this.tratamientoService.addAlarm(this.alarmas);
          var intervalo1 = window.setInterval(function () {
            var date1 = new Date().getTime();
            var date1_1 = moment__WEBPACK_IMPORTED_MODULE_5__(date1).format(); // console.log(date1_1);

            var timeleft = objectiveDate3 - date1;
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
            _this5.alarmas.timeH = hours;
            _this5.alarmas.timeM = minutes;
            _this5.alarmas.timeD = days;
            _this5.alarmas.toma = 'T0';

            _this5.tratamientoService.addAlarm(_this5.alarmas); // document.getElementById('days').innerHTML = days + 'd '
            //document.getElementById('hours').innerHTML = hours + 'h '
            /// document.getElementById('mins').innerHTML = minutes + 'm '
            // Display the message when countdown is over


            if (timeleft < 0) {
              window.clearInterval(intervalo1);
              _this5.alarmas.timeH = '';
              _this5.alarmas.timeM = '';
              _this5.alarmas.timeD = '';
              _this5.alarmas.toma = 'T0';

              _this5.tratamientoService.addAlarm(_this5.alarmas); // document.getElementById('days').innerHTML = ''
              //document.getElementById('hours').innerHTML = '' 
              // document.getElementById('mins').innerHTML = ''
              // document.getElementById('hora').innerHTML = ''
              // document.getElementById('end').innerHTML = 'TIME UP!!';

            }
          }, 1000);
        }
      }, {
        key: "postpone",
        value: function postpone(id, alarma) {
          var _this6 = this;

          var int4 = window.setInterval(function () {
            _this6.localNotifications.schedule({
              id: id,
              title: _this6.items.item_name,
              text: 'Hora de un medicamento.',
              foreground: true,
              lockscreen: true,
              wakeup: true,
              priority: 2,
              silent: false
            });

            _this6.currentnot3 = _this6.localNotifications.on('click').subscribe(function (val) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this7 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        console.log(val);
                        _context5.next = 3;
                        return this.alertCtrl.create({
                          mode: 'ios',
                          cssClass: 'failed',
                          backdropDismiss: false,
                          buttons: [{
                            text: 'Tomar',
                            cssClass: 'btnalert',
                            handler: function handler(data) {
                              console.log('alarmas');
                              console.log(alarma);
                              _this7.alarmas.toma = 'T1';

                              _this7.tratamientoService.addAlarm(alarma);

                              _this7.currentnot3.unsubscribe();

                              window.clearInterval(int4);
                            }
                          }, {
                            text: 'Posponer',
                            cssClass: 'btnalert',
                            handler: function handler(datos) {
                              _this7.currentnot3.unsubscribe();

                              _this7.postpone(id, alarma);
                            }
                          }]
                        });

                      case 3:
                        alert = _context5.sent;
                        _context5.next = 6;
                        return alert.present();

                      case 6:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }, 60000);
        }
      }]);

      return Createalarm2Page;
    }();

    Createalarm2Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_9__["TratamientosService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };

    Createalarm2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createalarm2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./createalarm2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createalarm2/createalarm2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./createalarm2.page.scss */
      "./src/app/pages/createalarm2/createalarm2.page.scss"))["default"]]
    })], Createalarm2Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-createalarm2-createalarm2-module-es5.js.map