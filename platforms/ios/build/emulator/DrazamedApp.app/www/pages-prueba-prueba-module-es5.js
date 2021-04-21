function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prueba-prueba-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPruebaPruebaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"createAlarm()\" [disabled]=\"!alarmasForm.valid\">\n        Ok\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"container\">\n    <p class=\"title_seccion center\">Crea una alarma</p>\n  </div>\n  <div class=\"container1\">\n    <ion-row class=\"result_search\">\n        <ion-col size=\"4\">\n          <div class=\"img_product\">\n            <img src={{base_url}}{{apiUrl7}}{{items.item_code}}{{apiUrl8}} class=\"img-fluid\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\" class=\"align-self\">\n          <p class=\"name_product\" style=\"color: #00a1dd !important;\">{{items.item_name}}</p>\n          <p class=\"description_product\">{{items.composition}}</p>\n        </ion-col>\n        \n        <ion-col size=\"12\" class=\"mt-20 padding\">\n          <form [formGroup]=\"alarmasForm\" #form=\"ngForm\">\n            <p class=\"name_product\" style=\"color: #00a1dd !important;\">Mensaje</p>\n            <div class=\"form-group\">\n              <ion-input formControlName=\"obs\" placeholder=\"Ingresa tu mensaje\" class=\"form-control\"  [(ngModel)]=\"alarmas.obs\" name=\"obs\" ngControl=\"obs\"></ion-input>\n            </div>\n            <p class=\"name_product\" style=\"color: #00a1dd !important;\">Crear alarma</p>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Tomar cada: </p>\n              <div class=\"input-group\">\n                <ion-select  placeholder=\"Selecciona un periodo\" class=\"custom_select\" mode=\"ios\" [(ngModel)]=\"freq\" formControlName=\"freq\" name=\"freq\" ngControl=\"freq\">\n                  <ion-select-option *ngFor=\"let inter of intervalo\" [value]=\"inter.id\">{{inter.name}}</ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Empezar tratamiento: </p>\n              <div class=\"input-group\">\n                <ion-datetime  mode=\"md\" display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"alarmas.time\"  \n                class=\"form-control\" placeholder=\"Hora de Inicio\" formControlName=\"time\" name=\"time\" ngControl=\"time\"></ion-datetime>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Dosis por toma: </p>\n              <div class=\"input-group\">\n                <ion-select placeholder=\"Selecciona la dosis\" class=\"custom_select\" mode=\"ios\" [(ngModel)]=\"alarmas.dosis\" formControlName=\"dosis\" name=\"dosis\" ngControl=\"dosis\">\n                  <ion-select-option *ngFor=\"let dos of dosis\">{{dos}}</ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Fecha de inicio: </p>\n              <div class=\"input-group\">\n                <ion-datetime  mode=\"md\" drag-content=\"false\" displayFormat=\"DD/MM/YYYY\" class=\"form-control\"\n                  placeholder=\"Dia/Mes/Año\" [(ngModel)]=\"alarmas.date\" formControlName=\"date\" name=\"date\" ngControl=\"date\"></ion-datetime>\n              </div>\n            </div>\n          </form>\n        </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/prueba/prueba-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/prueba/prueba-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PruebaPageRoutingModule */

  /***/
  function srcAppPagesPruebaPruebaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PruebaPageRoutingModule", function () {
      return PruebaPageRoutingModule;
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


    var _prueba_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prueba.page */
    "./src/app/pages/prueba/prueba.page.ts");

    var routes = [{
      path: '',
      component: _prueba_page__WEBPACK_IMPORTED_MODULE_3__["PruebaPage"]
    }];

    var PruebaPageRoutingModule = function PruebaPageRoutingModule() {
      _classCallCheck(this, PruebaPageRoutingModule);
    };

    PruebaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PruebaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prueba/prueba.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/prueba/prueba.module.ts ***!
    \***********************************************/

  /*! exports provided: PruebaPageModule */

  /***/
  function srcAppPagesPruebaPruebaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PruebaPageModule", function () {
      return PruebaPageModule;
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


    var _prueba_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prueba-routing.module */
    "./src/app/pages/prueba/prueba-routing.module.ts");
    /* harmony import */


    var _prueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prueba.page */
    "./src/app/pages/prueba/prueba.page.ts");

    var PruebaPageModule = function PruebaPageModule() {
      _classCallCheck(this, PruebaPageModule);
    };

    PruebaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prueba_routing_module__WEBPACK_IMPORTED_MODULE_5__["PruebaPageRoutingModule"]],
      declarations: [_prueba_page__WEBPACK_IMPORTED_MODULE_6__["PruebaPage"]]
    })], PruebaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prueba/prueba.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/prueba/prueba.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPruebaPruebaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.div_medis {\n  width: 100%;\n  height: 130px;\n  overflow: auto;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n  --background: #009bd7;\n  color: #fff !important;\n  font-size: 25px;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  align-self: center !important;\n  background-color: #fff;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.container1 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n  margin-left: 5px !important;\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.padding {\n  padding-left: 15px !important;\n  padding-right: 15px !important;\n}\n\n.select_options {\n  background-color: #fff;\n  padding: 20px;\n  margin: 15px 0px;\n  width: 100% !important;\n  border-radius: 20px;\n}\n\n.input-group {\n  align-items: stretch;\n  width: 100%;\n  flex-wrap: wrap;\n  position: relative;\n  display: flex;\n  border: 1px solid #ced4da;\n  border-radius: 7px;\n}\n\n.custom_select {\n  width: 100%;\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\nion-select::part(text) {\n  color: #495057;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-buttons {\n    margin-left: 25px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 34px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .name_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 11px 0px !important;\n    line-height: 30px !important;\n  }\n\n  .description_product {\n    font-size: 26px !important;\n    color: #727070 !important;\n    line-height: 30px !important;\n    margin: 15px 0px !important;\n  }\n\n  .div_medis {\n    width: 100%;\n    height: 260px;\n    overflow: auto;\n  }\n\n  ion-item {\n    --background: #f2f2f2;\n  }\n\n  .form-control {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 25px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 2px solid #ced4da;\n    border-radius: 0.25rem;\n  }\n\n  .custom_select {\n    width: 100%;\n    margin-right: auto !important;\n    font-size: 25px;\n    margin-left: auto !important;\n    border: 2px solid #ced4da;\n  }\n\n  .carrito {\n    width: 14%;\n    height: 14%;\n    margin-left: 65%;\n    margin-bottom: 2% !important;\n    --background: #009bd7;\n    color: #fff !important;\n    font-size: 40px;\n  }\n}\n\n.timer {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 1.4em;\n  letter-spacing: -1px;\n}\n\n.timer span {\n  font-size: 2em;\n  margin: 0 3px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcHJ1ZWJhL3BydWViYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BydWViYS9wcnVlYmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSx1Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSw0QkFBQTtFQUNBLHlDQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkE7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QURORTtFQUNFLDZCQUFBO0FDU0o7O0FEUEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJFO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDV0o7O0FEVEU7RUFDRSxzREFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FDWUo7O0FEVkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFhFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFpFO0VBQ0UsNkJBQUE7QUNlSjs7QURiRTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNnQko7O0FEZEU7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2lCSjs7QURmRTtFQUNFLDJCQUFBO0FDa0JKOztBRGhCRTtFQUNFLG1CQUFBO0FDbUJKOztBRGpCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDb0JKOztBRGxCRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNxQko7O0FEbkJFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDc0JKOztBRHBCRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDdUJKOztBRHJCRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDd0JKOztBRHRCRTtFQUNFLGNBQUE7QUN5Qko7O0FEdkJFO0VBQ0U7SUFDRSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQzBCSjs7RUR4QkU7SUFDRSxhQUFBO0VDMkJKOztFRHpCRTtJQUNFLGlCQUFBO0VDNEJKOztFRDFCRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQzZCSjs7RUQzQkU7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0VDOEJKOztFRDVCRTtJQUNFLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VDK0JKOztFRDdCRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ2dDSjs7RUQ5QkU7SUFDRSxxQkFBQTtFQ2lDSjs7RUQvQkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLG1DQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtFQ2tDSjs7RURoQ0U7SUFDRSxXQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtFQ21DSjs7RURqQ0U7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQ29DSjtBQUNGOztBRGpDRTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDbUNKOztBRGpDRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQ29DSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BydWViYS9wcnVlYmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5jb250ZW50LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IDA7XG59XG4uZGl2X21lZGlzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIzNiwgMjM1LCAyMzg7XG59XG4uY2Fycml0byB7XG4gICAgd2lkdGg6IDE0JTtcbiAgICBoZWlnaHQ6IDE0JTtcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZGl2LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmljb25vIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIC50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICB9XG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXIxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgLnJlc3VsdF9zZWFyY2gge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmltZ19wcm9kdWN0IHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbWctZmx1aWQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuICAuYWxpZ24tc2VsZiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB9XG4gIC5wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlbGVjdF9vcHRpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgLmlucHV0LWdyb3VwIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgLmN1c3RvbV9zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gICAgLmhlYWRlci1zdHlsZXMge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250ZW50LWltYWdlIHtcbiAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgfVxuICAgIGlvbi1idXR0b25zIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIH1cbiAgICAudGl0bGVfc2VjY2lvbiB7XG4gICAgICBjb2xvcjogIzAwYTJkZDtcbiAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZV9wcm9kdWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMTFweCAwcHggIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDE1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXZfbWVkaXMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgfVxuICAgIC5jdXN0b21fc2VsZWN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbiAgICB9XG4gICAgLmNhcnJpdG8ge1xuICAgICAgd2lkdGg6IDE0JTtcbiAgICAgIGhlaWdodDogMTQlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG4gICAgICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnRpbWVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIH1cbiAgLnRpbWVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogMCAzcHggMCAxNXB4O1xuICB9IiwiaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZGl2X21lZGlzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lcjEge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbWdfcHJvZHVjdCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmFsaWduLXNlbGYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3Rfb3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmN1c3RvbV9zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDExcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRpdl9tZWRpcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgfVxuXG4gIC5jdXN0b21fc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICB9XG5cbiAgLmNhcnJpdG8ge1xuICAgIHdpZHRoOiAxNCU7XG4gICAgaGVpZ2h0OiAxNCU7XG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNztcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuLnRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuXG4udGltZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAgM3B4IDAgMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/prueba/prueba.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/prueba/prueba.page.ts ***!
    \*********************************************/

  /*! exports provided: PruebaPage */

  /***/
  function srcAppPagesPruebaPruebaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PruebaPage", function () {
      return PruebaPage;
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


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/tratamientos.service */
    "./src/app/services/tratamientos.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PruebaPage = /*#__PURE__*/function () {
      function PruebaPage(router, route, config, menuCtrl, loadingController, alertCtrl, formBuilder, storage, tratamientoService, htpp, auth, http, plt) {
        _classCallCheck(this, PruebaPage);

        this.router = router;
        this.route = route;
        this.config = config;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.tratamientoService = tratamientoService;
        this.htpp = htpp;
        this.auth = auth;
        this.http = http;
        this.plt = plt;
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
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
        this.dosis = [1, 2, 3, 4, 5];
        this.fecha = 0;
        this.hora = 0;
        this.alarmasForm = this.formBuilder.group({
          obs: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          time: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          freq: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
          dosis: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
        });
        this.base_url = config.get_base_url();
        this.user1 = this.auth.getusuario();
        this.userid = this.user1.email;
      }

      _createClass(PruebaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.items = _this.router.getCurrentNavigation().extras.state.user;
              console.log(_this.items);
            }
          });
          this.fecha = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
          this.hora = moment__WEBPACK_IMPORTED_MODULE_4__().format('LTS');
          this.freq = this.intervaloNumber;
          this.alarmas = {
            date: moment__WEBPACK_IMPORTED_MODULE_4__(this.fecha).format('YYYY-MM-DD'),
            time: '',
            item_name: this.items.item_name,
            obs: this.items.item_name,
            composition: this.items.composition,
            units: this.items.units,
            toma: 'T0',
            dosis: ''
          };
          console.log('json inicial');
          console.log(this.alarmas);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['createalarm']);
        }
      }, {
        key: "doSomething",
        value: function doSomething(fecha) {
          moment__WEBPACK_IMPORTED_MODULE_4__(fecha).format('YYYY-MM-DD');
        }
      }, {
        key: "doSomethingh",
        value: function doSomethingh(hora) {
          moment__WEBPACK_IMPORTED_MODULE_4__(hora).format('LTS');
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
        key: "createAlarm",
        value: function createAlarm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.alarmas.time = moment__WEBPACK_IMPORTED_MODULE_4__(this.alarmas.time).format('HH:mm');
                    this.tratamiento = {
                      email: this.userid,
                      item_code: this.items.item_code,
                      total: this.items.units_value,
                      dosis: this.alarmas.dosis,
                      freq: this.freq,
                      start_time: "".concat(this.alarmas.date, "T").concat(this.alarmas.time, ":00"),
                      obs: "".concat(this.items.item_name, ", tomar ").concat(this.alarmas.dosis, " cada ").concat(this.freq, " horas")
                    };
                    _context3.next = 4;
                    return this.loadingController.create({
                      cssClass: 'loading',
                      message: 'Por favor espera...',
                      mode: 'ios',
                      spinner: 'dots',
                      duration: 50
                    });

                  case 4:
                    loading = _context3.sent;
                    _context3.next = 7;
                    return loading.present();

                  case 7:
                    console.log(this.tratamiento);
                    this.http.post("".concat(this.base_url, "treatment/create-treatment"), this.tratamiento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                      loading.dismiss();
                    })).subscribe(function (msj) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var alert, next;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log(msj);
                                this.response = msj;
                                this.medicamento = this.response.data;
                                console.log(this.medicamento);
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
                                next = this.medicamento.next_time;
                                this.alarmas.taken = this.medicamento.taken;
                                this.alarmas.total = this.medicamento.total;
                                this.alarmas.next_time = moment__WEBPACK_IMPORTED_MODULE_4__(this.medicamento.next_time).format('LT');
                                this.alarmas.item_code = this.medicamento.item_code;
                                this.alarmas.buy_time = moment__WEBPACK_IMPORTED_MODULE_4__(this.medicamento.buy_time.date).format('ll'); //this.alarmas.dosis = this.medicamento.dosis;

                                /*  this.tratamientoService.addAlarm(this.alarmas);
                                 this.tratamientoService.TimeRemaining(this.alarmas.item_code, next); */

                                this.tratamientoService.getTreatmen();
                                console.log(this.alarmas);
                                this.router.navigate(['home']);
                                this.alarmasForm.reset();

                              case 19:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "check",
        value: function check(id) {
          var pastillas = 0;
          pastillas = this.alarmas.total;
          var horas_totales = 0;
          horas_totales = this.alarmas.freq * pastillas;
          var dateObjetive2 = new Date("".concat(this.alarmas.date, "T").concat(this.alarmas.time));
          var nowstart = new Date();
          var nowstart2 = moment__WEBPACK_IMPORTED_MODULE_4__(nowstart);
          var dateObjetive3 = moment__WEBPACK_IMPORTED_MODULE_4__(dateObjetive2);
          var endDate = moment__WEBPACK_IMPORTED_MODULE_4__(dateObjetive2).add(horas_totales, 'hours').format();
          var proxima = moment__WEBPACK_IMPORTED_MODULE_4__(endDate).subtract(48, 'hours').format('YYYY-MM-DD');
          console.log('Fecha final' + ' ' + endDate);
          console.log('Proxima entrega' + ' ' + proxima);
        }
      }]);

      return PruebaPage;
    }();

    PruebaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_8__["TratamientosService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }];
    };

    PruebaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prueba',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prueba.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prueba/prueba.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prueba.page.scss */
      "./src/app/pages/prueba/prueba.page.scss"))["default"]]
    })], PruebaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prueba-prueba-module-es5.js.map