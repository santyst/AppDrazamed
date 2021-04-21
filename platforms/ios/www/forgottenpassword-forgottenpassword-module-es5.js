function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgottenpassword-forgottenpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgottenpassword/forgottenpassword.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgottenpassword/forgottenpassword.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgottenpasswordForgottenpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header without a border -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"header-styles\">\n<img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1 copia.png\" alt=\"\">\n  </ion-toolbar>  \n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\"ready2 !== 'SUCCESS'\">\n    <form  [formGroup]=\"forgottenForm\" #form=\"ngForm\">\n      <div id=\"container\">\n        <ion-list>\n          <!--<img class=\"logo-form\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED-04.png\">-->\n          <p>Olvidé la contraseña</p>\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"label\">Correo electrónico</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\" [(ngModel)]=\"correo.email\" name=\"email\" ngControl=\"email\">\n            </ion-input>\n          </ion-item>\n          <div *ngFor=\"let error of error_messages.email\">\n            <ng-container *ngIf=\"forgottenForm.get('email').hasError(error.type) && \n              (forgottenForm.get('email').dirty || forgottenForm.get('email').touched)\">\n              <small class=\"error-message\">{{ error.message }}</small>\n            </ng-container>\n          </div>\n          <ion-button class=\"btn-continue\" [disabled]=\"!forgottenForm.valid\" expand=\"block\" (click)=\"forgottenPass()\">\n            ENVÍAR</ion-button>\n        </ion-list>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"ready2 === 'SUCCESS'\">\n    <form  [formGroup]=\"getNewForm\" #form=\"ngForm\">\n      <div id=\"container1\">\n        <ion-list>\n          <img class=\"logo-form1\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED-04.png\">\n          <p>Reestablecer contraseña</p>\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"label\">Correo electrónico</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\" [(ngModel)]=\"forgotten.email\" name=\"email\"\n              ngControl=\"email\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"label\">Código de seguridad</ion-label>\n            <ion-input type=\"number\" formControlName=\"security_code\" [(ngModel)]=\"forgotten.security_code\"\n              name=\"security_code\" ngControl=\"security_code\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"label\">Nueva contraseña</ion-label>\n            <ion-input type=\"password\" formControlName=\"new_password\" [(ngModel)]=\"forgotten.new_password\"\n              name=\"new_password\" ngControl=\"new_password\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\" class=\"label\">Confirmar contraseña</ion-label>\n            <ion-input type=\"password\" formControlName=\"confirm_password\" [(ngModel)]=\"forgotten.confirm_password\"\n              name=\"confirm_password\" ngControl=\"confirm_password\"></ion-input>\n          </ion-item>\n          <div>\n            \n            <small class=\"error-message\"\n              *ngIf=\"!getNewForm.get('confirm_password').errors && getNewForm.hasError('passwordNotMatch') && (getNewForm.get('confirm_password').dirty || getNewForm.get('confirm_password').touched)\">\n              Las contraseñas no coinciden\n            </small>\n          </div>\n        </ion-list>\n        <ion-button class=\"btn-continue\" [disabled]=\"!getNewForm.valid\" expand=\"block\" (click)=\"resetPass()\">\n          Reestablecer</ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/forgottenpassword/forgottenpassword-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/forgottenpassword/forgottenpassword-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ForgottenpasswordPageRoutingModule */

  /***/
  function srcAppForgottenpasswordForgottenpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgottenpasswordPageRoutingModule", function () {
      return ForgottenpasswordPageRoutingModule;
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


    var _forgottenpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgottenpassword.page */
    "./src/app/forgottenpassword/forgottenpassword.page.ts");

    var routes = [{
      path: '',
      component: _forgottenpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgottenpasswordPage"]
    }];

    var ForgottenpasswordPageRoutingModule = function ForgottenpasswordPageRoutingModule() {
      _classCallCheck(this, ForgottenpasswordPageRoutingModule);
    };

    ForgottenpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgottenpasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/forgottenpassword/forgottenpassword.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/forgottenpassword/forgottenpassword.module.ts ***!
    \***************************************************************/

  /*! exports provided: ForgottenpasswordPageModule */

  /***/
  function srcAppForgottenpasswordForgottenpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgottenpasswordPageModule", function () {
      return ForgottenpasswordPageModule;
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


    var _forgottenpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgottenpassword-routing.module */
    "./src/app/forgottenpassword/forgottenpassword-routing.module.ts");
    /* harmony import */


    var _forgottenpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgottenpassword.page */
    "./src/app/forgottenpassword/forgottenpassword.page.ts");

    var ForgottenpasswordPageModule = function ForgottenpasswordPageModule() {
      _classCallCheck(this, ForgottenpasswordPageModule);
    };

    ForgottenpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _forgottenpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgottenpasswordPageRoutingModule"]],
      declarations: [_forgottenpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgottenpasswordPage"]]
    })], ForgottenpasswordPageModule);
    /***/
  },

  /***/
  "./src/app/forgottenpassword/forgottenpassword.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/forgottenpassword/forgottenpassword.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgottenpasswordForgottenpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #009bd7;\n  --ion-background-color-rgb: 0,155,215;\n}\n\n.header-styles {\n  --background: #fff!important;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\n#container, #container1 {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  background: white;\n  --ion-background-color: #fff;\n  max-width: 85% !important;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  padding-right: 20px;\n  margin-top: 30px;\n  border-radius: 35px;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\n.logo-form {\n  text-align: center;\n  position: absolute;\n  left: 75.5%;\n  right: 0;\n  top: 15%;\n  transform: translateY(-76%);\n  width: 27%;\n}\n\n.logo-form1 {\n  text-align: center;\n  position: absolute;\n  left: 75%;\n  right: 0;\n  top: 15%;\n  transform: translateY(-110%);\n  width: 27%;\n}\n\nion-item {\n  --padding-start:0px;\n  --border-style:none;\n}\n\nion-label {\n  --color: #b4b4b4!important;\n}\n\nion-input {\n  border: 1px solid #eeeeee;\n  border-radius: 16px;\n  padding-left: 10px !important;\n  margin-top: 5px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n.btn-continue {\n  margin-top: 10% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --background: #015670!important;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  width: 50%;\n  --border-radius: 16px!important;\n}\n\np {\n  font-weight: bold;\n  color: #7e7e7e;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  #container {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    background: white;\n    --ion-background-color: #fff;\n    max-width: 85% !important;\n    padding-top: 10px;\n    padding-bottom: 50px;\n    padding-left: 30px;\n    padding-right: 20px;\n    margin-top: 80px;\n    border-radius: 35px;\n    height: 360px !important;\n  }\n\n  #container1 {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    background: white;\n    --ion-background-color: #fff;\n    max-width: 85% !important;\n    padding-top: 10px;\n    padding-bottom: 50px;\n    padding-left: 30px;\n    padding-right: 20px;\n    margin-top: 80px;\n    border-radius: 35px;\n    height: 760px !important;\n  }\n\n  .logo-form {\n    text-align: center;\n    position: absolute;\n    left: 70%;\n    right: 0;\n    top: 15%;\n    transform: translateY(-60%);\n    width: 25%;\n  }\n\n  .logo-form1 {\n    text-align: center;\n    position: absolute;\n    left: 70%;\n    right: 0;\n    top: 15%;\n    transform: translateY(-80%);\n    width: 25%;\n  }\n\n  p {\n    font-weight: bold;\n    color: #7e7e7e;\n    font-size: 30px;\n  }\n\n  .label {\n    --color: #b4b4b4 !important;\n    font-size: 35px;\n  }\n\n  ion-input,\nion-datetime {\n    border: 3px solid #eeeeee;\n    border-radius: 16px;\n    padding-left: 10px !important;\n    margin-top: 12px;\n    min-height: 60px !important;\n    font-size: 25px;\n  }\n\n  .btn-continue {\n    margin-top: 5% !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --background: #015670 !important;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n    width: 50%;\n    --border-radius: 16px !important;\n    font-size: 30px;\n    height: 50px;\n  }\n\n  .error-message {\n    color: var(--ion-color-danger);\n    font-size: 25px;\n  }\n\n  .header-styles {\n    --background: #fff !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-header {\n    height: 100px;\n  }\n\n  ion-checkbox {\n    width: 9%;\n    height: 49px;\n  }\n\n  .label-checkbox {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvZm9yZ290dGVucGFzc3dvcmQvZm9yZ290dGVucGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3R0ZW5wYXNzd29yZC9mb3Jnb3R0ZW5wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksOEJBQUE7QUNHSjs7QUREQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQ0lKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FEREE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtFQ0lOOztFREZFO0lBQ0ksNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGlCQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHdCQUFBO0VDS047O0VESEU7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VDTU47O0VESkU7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VDT047O0VETEU7SUFDSSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDUU47O0VETkU7SUFDSSwyQkFBQTtJQUNBLGVBQUE7RUNTTjs7RURQRTs7SUFFSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtFQ1VOOztFRFJFO0lBQ0kseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUNXTjs7RURURTtJQUNJLDhCQUFBO0lBQ0EsZUFBQTtFQ1lOOztFRFZFO0lBQ0ksNkJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUNhTjs7RURYRTtJQUNJLGFBQUE7RUNjTjs7RURaRTtJQUNJLGFBQUE7RUNlTjs7RURiRTtJQUNJLFNBQUE7SUFDQSxZQUFBO0VDZ0JOOztFRGRFO0lBQ0ksZUFBQTtFQ2lCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290dGVucGFzc3dvcmQvZm9yZ290dGVucGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmQ3O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMTU1LDIxNTtcclxufVxyXG5cclxuLmhlYWRlci1zdHlsZXN7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIsICNjb250YWluZXIxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1heC13aWR0aDogODUlIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxufVxyXG5cclxuLmxvZ28taGVhZGVye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1MCU7ICAgIFxyXG59XHJcblxyXG4ubG9nby1mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNzUuNSU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NiUpO1xyXG4gICAgd2lkdGg6IDI3JTtcclxufVxyXG4ubG9nby1mb3JtMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xyXG4gICAgd2lkdGg6IDI3JTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xyXG4gICAgLS1ib3JkZXItc3R5bGU6bm9uZTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgLS1jb2xvcjogI2I0YjRiNCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgfVxyXG4uYnRuLWNvbnRpbnVle1xyXG4gICAgbWFyZ2luLXRvcDogMTAlIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTU2NzAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzdlN2U3ZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KXtcclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjY29udGFpbmVyMSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogNzYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2dvLWZvcm0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tZm9ybTEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNzAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAlKTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM3ZTdlN2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0LFxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb250aW51ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItc3R5bGVzIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250ZW50LWltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDklO1xyXG4gICAgICAgIGhlaWdodDogNDlweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1jaGVja2JveHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDE1NSwyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4jY29udGFpbmVyLCAjY29udGFpbmVyMSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxvZ28tZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3NS41JTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc2JSk7XG4gIHdpZHRoOiAyNyU7XG59XG5cbi5sb2dvLWZvcm0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc1JTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xuICB3aWR0aDogMjclO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDowcHg7XG4gIC0tYm9yZGVyLXN0eWxlOm5vbmU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIC0tY29sb3I6ICNiNGI0YjQhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmJ0bi1jb250aW51ZSB7XG4gIG1hcmdpbi10b3A6IDEwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDE1NjcwIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2lkdGg6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IWltcG9ydGFudDtcbn1cblxucCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBoZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjY29udGFpbmVyMSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGhlaWdodDogNzYwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb2dvLWZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNzAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLmxvZ28tZm9ybTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNzAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAlKTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmxhYmVsIHtcbiAgICAtLWNvbG9yOiAjYjRiNGI0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG5cbiAgaW9uLWlucHV0LFxuaW9uLWRhdGV0aW1lIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmJ0bi1jb250aW51ZSB7XG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogIzAxNTY3MCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5oZWFkZXItc3R5bGVzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50LWltYWdlIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgaW9uLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIGlvbi1jaGVja2JveCB7XG4gICAgd2lkdGg6IDklO1xuICAgIGhlaWdodDogNDlweDtcbiAgfVxuXG4gIC5sYWJlbC1jaGVja2JveCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/forgottenpassword/forgottenpassword.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/forgottenpassword/forgottenpassword.page.ts ***!
    \*************************************************************/

  /*! exports provided: ForgottenpasswordPage */

  /***/
  function srcAppForgottenpasswordForgottenpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgottenpasswordPage", function () {
      return ForgottenpasswordPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");

    var ForgottenpasswordPage = /*#__PURE__*/function () {
      function ForgottenpasswordPage(menuCtrl, http, formBuilder, router, loadingController, alertController, config) {
        _classCallCheck(this, ForgottenpasswordPage);

        this.menuCtrl = menuCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.config = config;
        this.postForget = "user/reset-password";
        this.resetUrl = "user/reset-password";
        this.error_messages = {
          email: [{
            type: 'pattern',
            message: 'Ingresa un email valido'
          }]
        };
        this.correo = {
          email: ''
        };
        this.forgotten = {
          email: '',
          security_code: '',
          new_password: '',
          confirm_password: ''
        };
        this.base_url = config.get_base_url();
        this.forgottenForm = this.formBuilder.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')])
        });
        this.getNewForm = this.formBuilder.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')]),
          security_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        }, {
          validators: this.password.bind(this)
        });
      }

      _createClass(ForgottenpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "password",
        value: function password(formGroup) {
          var _formGroup$get = formGroup.get('new_password'),
              new_password = _formGroup$get.value;

          var _formGroup$get2 = formGroup.get('confirm_password'),
              confirmPassword = _formGroup$get2.value;

          return new_password === confirmPassword ? null : {
            passwordNotMatch: true
          };
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "forgottenPass",
        value: function forgottenPass() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading;
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
                    this.http.post("".concat(this.base_url).concat(this.postForget), this.correo, {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                        'Content-Type': 'application/json'
                      })
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                      loading.dismiss();
                    })).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert, _alert;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.ready = res;
                                this.ready2 = this.ready.status;

                                if (!(this.ready2 !== 'SUCCESS')) {
                                  _context.next = 9;
                                  break;
                                }

                                _context.next = 5;
                                return this.alertController.create({
                                  message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">No existe un usuario con este correo',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert'
                                  }]
                                });

                              case 5:
                                alert = _context.sent;
                                alert.present();
                                _context.next = 13;
                                break;

                              case 9:
                                _context.next = 11;
                                return this.alertController.create({
                                  header: 'Verifica tu correo electrónico para ver el código de seguridad',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert'
                                  }]
                                });

                              case 11:
                                _alert = _context.sent;

                                _alert.present();

                              case 13:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "resetPass",
        value: function resetPass() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      cssClass: 'loading',
                      message: 'Por favor espera...',
                      mode: 'ios',
                      spinner: 'dots'
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    this.http.post("".concat(this.base_url).concat(this.resetUrl), this.forgotten).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                      loading.dismiss();
                    })).subscribe(function (val) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this3 = this;

                        var alert, _alert2;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.ready3 = val;
                                this.ready4 = this.ready3.status;

                                if (!(this.ready4 === 'SUCCESS')) {
                                  _context3.next = 9;
                                  break;
                                }

                                _context3.next = 5;
                                return this.alertController.create({
                                  message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Se ha reestablecido tu contraseña',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert',
                                    handler: function handler(data) {
                                      _this3.router.navigate(['login2']);
                                    }
                                  }]
                                });

                              case 5:
                                alert = _context3.sent;
                                alert.present();
                                _context3.next = 13;
                                break;

                              case 9:
                                _context3.next = 11;
                                return this.alertController.create({
                                  message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">No se ha reestablecer tu contraseña',
                                  mode: 'ios',
                                  cssClass: 'failed',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Aceptar',
                                    cssClass: 'btnalert'
                                  }]
                                });

                              case 11:
                                _alert2 = _context3.sent;

                                _alert2.present();

                              case 13:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ForgottenpasswordPage;
    }();

    ForgottenpasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }];
    };

    ForgottenpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-forgottenpassword',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgottenpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgottenpassword/forgottenpassword.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgottenpassword.page.scss */
      "./src/app/forgottenpassword/forgottenpassword.page.scss"))["default"]]
    })], ForgottenpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=forgottenpassword-forgottenpassword-module-es5.js.map