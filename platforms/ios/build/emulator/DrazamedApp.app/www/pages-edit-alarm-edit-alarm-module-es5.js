function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-alarm-edit-alarm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-alarm/edit-alarm.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-alarm/edit-alarm.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditAlarmEditAlarmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n    <ion-toolbar class=\"header-styles\">\n      <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n    </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"editAlarm()\" [disabled]=\"!alarmasForm.valid\">\n        Ok\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div class=\"container\">\n    <p class=\"title_seccion center\">Editar alarma</p>\n  </div>\n  <div class=\"container1\">\n    <ion-row class=\"result_search\">\n        <ion-col size=\"4\">\n          <div class=\"img_product\">\n            <img src={{base_url}}{{apiUrl7}}{{items.item_code}}{{apiUrl8}} class=\"img-fluid\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\" class=\"align-self\">\n          <p class=\"name_product\" style=\"color: #00a1dd !important;\">{{items.item_name}}</p>\n          <p class=\"description_product\">{{items.composition}}</p>\n        </ion-col>\n        \n        <ion-col size=\"12\" class=\"mt-20 padding\">\n          <form [formGroup]=\"alarmasForm\">\n            <p class=\"name_product\" style=\"color: #00a1dd !important;\">Mensaje</p>\n            <div class=\"form-group\">\n              <ion-input formControlName=\"mensaje\" placeholder=\"Ingresa tu mensaje\" class=\"form-control\"  [(ngModel)]=\"alarmas.mensaje\" name=\"mensaje\"></ion-input>\n            </div>\n            <p class=\"name_product\" style=\"color: #00a1dd !important;\">Editar alarma</p>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Tomar cada: </p>\n              <div class=\"input-group\">\n                <ion-select  placeholder=\"Selecciona un periodo\" class=\"custom_select\" mode=\"ios\" name=\"freq\" [(ngModel)]=\"freq\" formControlName=\"freq\">\n                  <ion-select-option *ngFor=\"let inter of intervalo\" [value]=\"inter.id\">{{inter.name}}</ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Empezar tratamiento: </p>\n              <div class=\"input-group\">\n                <ion-datetime  mode=\"md\" display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"alarmas.time\"  \n                class=\"form-control\" name=\"time\" placeholder=\"Hora de Inicio\" formControlName=\"time\"></ion-datetime>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Dosis por toma: </p>\n              <div class=\"input-group\">\n                <ion-select placeholder=\"Selecciona la dosis\" class=\"custom_select\" mode=\"ios\" \n                [(ngModel)]=\"alarmas.dosis\" name=\"dosis\" formControlName=\"dosis\">\n                  <ion-select-option *ngFor=\"let dos of dosis\">{{dos}}</ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n            <div class=\"select_options\">\n              <p class=\"name_product\" style=\"color: #00a1dd !important;\">Fecha de inicio: </p>\n              <div class=\"input-group\">\n                <ion-datetime  mode=\"md\" drag-content=\"false\" displayFormat=\"DD/MM/YYYY\" class=\"form-control\"\n                  placeholder=\"Dia/Mes/Año\" [(ngModel)]=\"alarmas.date\" name=\"date\" formControlName=\"date\"></ion-datetime>\n              </div>\n            </div>\n          </form>\n        </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/edit-alarm/edit-alarm-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/edit-alarm/edit-alarm-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EditAlarmPageRoutingModule */

  /***/
  function srcAppPagesEditAlarmEditAlarmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAlarmPageRoutingModule", function () {
      return EditAlarmPageRoutingModule;
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


    var _edit_alarm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-alarm.page */
    "./src/app/pages/edit-alarm/edit-alarm.page.ts");

    var routes = [{
      path: '',
      component: _edit_alarm_page__WEBPACK_IMPORTED_MODULE_3__["EditAlarmPage"]
    }];

    var EditAlarmPageRoutingModule = function EditAlarmPageRoutingModule() {
      _classCallCheck(this, EditAlarmPageRoutingModule);
    };

    EditAlarmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditAlarmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-alarm/edit-alarm.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/edit-alarm/edit-alarm.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditAlarmPageModule */

  /***/
  function srcAppPagesEditAlarmEditAlarmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAlarmPageModule", function () {
      return EditAlarmPageModule;
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


    var _edit_alarm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-alarm-routing.module */
    "./src/app/pages/edit-alarm/edit-alarm-routing.module.ts");
    /* harmony import */


    var _edit_alarm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-alarm.page */
    "./src/app/pages/edit-alarm/edit-alarm.page.ts");

    var EditAlarmPageModule = function EditAlarmPageModule() {
      _classCallCheck(this, EditAlarmPageModule);
    };

    EditAlarmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_alarm_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditAlarmPageRoutingModule"]],
      declarations: [_edit_alarm_page__WEBPACK_IMPORTED_MODULE_6__["EditAlarmPage"]]
    })], EditAlarmPageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-alarm/edit-alarm.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/edit-alarm/edit-alarm.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditAlarmEditAlarmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.div_medis {\n  width: 100%;\n  height: 130px;\n  overflow: auto;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n  --background: #009bd7;\n  color: #fff !important;\n  font-size: 25px;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  align-self: center !important;\n  background-color: #fff;\n  padding-bottom: 10px !important;\n  padding-top: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.container1 {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.img_product {\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1) !important;\n  padding: 10px !important;\n  border-radius: 30px !important;\n  background-color: #fff !important;\n  margin-left: 5px !important;\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #727070 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.padding {\n  padding-left: 15px !important;\n  padding-right: 15px !important;\n}\n\n.select_options {\n  background-color: #fff;\n  padding: 20px;\n  margin: 15px 0px;\n  width: 100% !important;\n  border-radius: 20px;\n}\n\n.input-group {\n  align-items: stretch;\n  width: 100%;\n  flex-wrap: wrap;\n  position: relative;\n  display: flex;\n  border: 1px solid #ced4da;\n  border-radius: 7px;\n}\n\n.custom_select {\n  width: 100%;\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\nion-select::part(text) {\n  color: #495057;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-buttons {\n    margin-left: 25px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 34px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .name_product {\n    font-size: 30px !important;\n    font-weight: 700 !important;\n    color: #727070 !important;\n    margin: 11px 0px !important;\n    line-height: 30px !important;\n  }\n\n  .description_product {\n    font-size: 26px !important;\n    color: #727070 !important;\n    line-height: 30px !important;\n    margin: 15px 0px !important;\n  }\n\n  .div_medis {\n    width: 100%;\n    height: 260px;\n    overflow: auto;\n  }\n\n  ion-item {\n    --background: #f2f2f2;\n  }\n\n  .form-control {\n    display: block;\n    width: 100%;\n    height: calc(1.5em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 25px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 2px solid #ced4da;\n    border-radius: 0.25rem;\n  }\n\n  .custom_select {\n    width: 100%;\n    margin-right: auto !important;\n    font-size: 25px;\n    margin-left: auto !important;\n    border: 2px solid #ced4da;\n  }\n\n  .carrito {\n    width: 14%;\n    height: 14%;\n    margin-left: 65%;\n    margin-bottom: 2% !important;\n    --background: #009bd7;\n    color: #fff !important;\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvZWRpdC1hbGFybS9lZGl0LWFsYXJtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1hbGFybS9lZGl0LWFsYXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsdUNBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksNEJBQUE7RUFDQSx5Q0FBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNLSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkU7RUFDRSw2QkFBQTtBQ1NKOztBRFBFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURSRTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ1dKOztBRFRFO0VBQ0Usc0RBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ1lKOztBRFZFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNhSjs7QURYRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNjSjs7QURaRTtFQUNFLDZCQUFBO0FDZUo7O0FEYkU7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDZ0JKOztBRGRFO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNpQko7O0FEZkU7RUFDRSwyQkFBQTtBQ2tCSjs7QURoQkU7RUFDRSxtQkFBQTtBQ21CSjs7QURqQkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ29CSjs7QURsQkU7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDcUJKOztBRG5CRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ3NCSjs7QURwQkU7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3VCSjs7QURyQkU7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ3dCSjs7QUR0QkU7RUFDRSxjQUFBO0FDeUJKOztBRHZCRTtFQUNFO0lBQ0UsZ0NBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUMwQko7O0VEeEJFO0lBQ0UsYUFBQTtFQzJCSjs7RUR6QkU7SUFDRSxpQkFBQTtFQzRCSjs7RUQxQkU7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUM2Qko7O0VEM0JFO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtFQzhCSjs7RUQ1QkU7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtFQytCSjs7RUQ3QkU7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUNnQ0o7O0VEOUJFO0lBQ0UscUJBQUE7RUNpQ0o7O0VEL0JFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxtQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7RUNrQ0o7O0VEaENFO0lBQ0UsV0FBQTtJQUNBLDZCQUFBO0lBQ0EsZUFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7RUNtQ0o7O0VEakNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLDRCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNvQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtYWxhcm0vZWRpdC1hbGFybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogNTAlO1xufVxuLmNvbnRlbnQtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIGJvcmRlcjogMDtcbn1cbi5kaXZfbWVkaXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cbi5jYXJyaXRvIHtcbiAgICB3aWR0aDogMTQlO1xuICAgIGhlaWdodDogMTQlO1xuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG4uaWNvbm8ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG59XG4uY29udGFpbmVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lcjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuICAucmVzdWx0X3NlYXJjaCB7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuaW1nX3Byb2R1Y3Qge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmltZy1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG4gIC5hbGlnbi1zZWxmIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LTIwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIH1cbiAgLnBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VsZWN0X29wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAuY3VzdG9tX3NlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuICAgIC50aXRsZV9zZWNjaW9uIHtcbiAgICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgfVxuICAgIC5uYW1lX3Byb2R1Y3Qge1xuICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAxMXB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICAgICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdl9tZWRpcyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIH1cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICB9XG4gICAgLmN1c3RvbV9zZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICAgIH1cbiAgICAuY2Fycml0byB7XG4gICAgICB3aWR0aDogMTQlO1xuICAgICAgaGVpZ2h0OiAxNCU7XG4gICAgICBtYXJnaW4tbGVmdDogNjUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNztcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG4gICIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cblxuLmRpdl9tZWRpcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRpdGxlX3NlY2Npb24ge1xuICBjb2xvcjogIzAwYTJkZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW1nX3Byb2R1Y3Qge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0X29wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDE1cHggMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jdXN0b21fc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuXG4gIC50aXRsZV9zZWNjaW9uIHtcbiAgICBjb2xvcjogIzAwYTJkZDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kaXZfbWVkaXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIH1cblxuICAuY3VzdG9tX3NlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbiAgfVxuXG4gIC5jYXJyaXRvIHtcbiAgICB3aWR0aDogMTQlO1xuICAgIGhlaWdodDogMTQlO1xuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/edit-alarm/edit-alarm.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/edit-alarm/edit-alarm.page.ts ***!
    \*****************************************************/

  /*! exports provided: EditAlarmPage */

  /***/
  function srcAppPagesEditAlarmEditAlarmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAlarmPage", function () {
      return EditAlarmPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/tratamientos.service */
    "./src/app/services/tratamientos.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var EditAlarmPage = /*#__PURE__*/function () {
      function EditAlarmPage(config, formBuilder, route, router, auth, http, tratamientoService, alertCtrl, menuCtrl) {
        _classCallCheck(this, EditAlarmPage);

        this.config = config;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.http = http;
        this.tratamientoService = tratamientoService;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
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
        this.alarmasForm = this.formBuilder.group({
          mensaje: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          freq: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          dosis: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.base_url = config.get_base_url();
      }

      _createClass(EditAlarmPage, [{
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
          this.freq = this.intervaloNumber;
          this.alarmas = {
            date: moment__WEBPACK_IMPORTED_MODULE_5__(this.fecha).format('YYYY-MM-DD'),
            time: '',
            mensaje: this.items.item_name,
            item_name: this.items.item_name,
            composition: this.items.composition,
            item_code: this.items.item_code,
            dosis: ''
          };
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "doSomething",
        value: function doSomething(date) {
          moment__WEBPACK_IMPORTED_MODULE_5__(date).format('YYYY-MM-DD');
        }
      }, {
        key: "doSomethingh",
        value: function doSomethingh(time) {
          moment__WEBPACK_IMPORTED_MODULE_5__(time).format('LT');
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['perfil']);
        }
      }, {
        key: "editAlarm",
        value: function editAlarm() {
          var _this2 = this;

          this.user1 = this.auth.getusuario();
          this.userid = this.user1.email;
          this.alarmas.time = moment__WEBPACK_IMPORTED_MODULE_5__(this.alarmas.time).format('HH:mm');
          this.tratamiento = {
            email: this.userid,
            item_code: this.items.item_code,
            dosis: this.alarmas.dosis,
            freq: this.freq,
            start_time: "".concat(this.alarmas.date, "T").concat(this.alarmas.time, ":00")
          };
          console.log(this.tratamiento);
          this.http.post("".concat(this.base_url, "treatment/edit-treatment"), this.tratamiento).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response, response1, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(res);
                      response = res;
                      response1 = response.status;

                      if (!(response1 === 'SUCCESS')) {
                        _context.next = 12;
                        break;
                      }

                      _context.next = 6;
                      return this.alertCtrl.create({
                        message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">La alarma fue editada.',
                        mode: 'ios',
                        cssClass: 'failed',
                        buttons: [{
                          text: 'Aceptar',
                          cssClass: 'btnalert'
                        }]
                      });

                    case 6:
                      alert = _context.sent;
                      _context.next = 9;
                      return alert.present();

                    case 9:
                      this.tratamientoService.getTreatmen();
                      this.router.navigate(['perfil']);
                      this.alarmasForm.reset();

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }]);

      return EditAlarmPage;
    }();

    EditAlarmPage.ctorParameters = function () {
      return [{
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: src_app_services_tratamientos_service__WEBPACK_IMPORTED_MODULE_8__["TratamientosService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]
      }];
    };

    EditAlarmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-alarm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-alarm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-alarm/edit-alarm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-alarm.page.scss */
      "./src/app/pages/edit-alarm/edit-alarm.page.scss"))["default"]]
    })], EditAlarmPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-alarm-edit-alarm-module-es5.js.map