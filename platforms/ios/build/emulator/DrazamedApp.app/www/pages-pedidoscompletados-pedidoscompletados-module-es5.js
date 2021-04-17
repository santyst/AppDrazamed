function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pedidoscompletados-pedidoscompletados-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidoscompletados/pedidoscompletados.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidoscompletados/pedidoscompletados.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPedidoscompletadosPedidoscompletadosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n    <ion-title><img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\"></ion-title>\n  </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goBack()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"goBack()\">\n        <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-38.png\">\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"container\">\n    <p class=\"title_seccion center\">Mis pedidos</p>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/pedidoscompletados/pedidoscompletados-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/pedidoscompletados/pedidoscompletados-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: PedidoscompletadosPageRoutingModule */

  /***/
  function srcAppPagesPedidoscompletadosPedidoscompletadosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoscompletadosPageRoutingModule", function () {
      return PedidoscompletadosPageRoutingModule;
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


    var _pedidoscompletados_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pedidoscompletados.page */
    "./src/app/pages/pedidoscompletados/pedidoscompletados.page.ts");

    var routes = [{
      path: '',
      component: _pedidoscompletados_page__WEBPACK_IMPORTED_MODULE_3__["PedidoscompletadosPage"]
    }];

    var PedidoscompletadosPageRoutingModule = function PedidoscompletadosPageRoutingModule() {
      _classCallCheck(this, PedidoscompletadosPageRoutingModule);
    };

    PedidoscompletadosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PedidoscompletadosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pedidoscompletados/pedidoscompletados.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/pedidoscompletados/pedidoscompletados.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PedidoscompletadosPageModule */

  /***/
  function srcAppPagesPedidoscompletadosPedidoscompletadosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoscompletadosPageModule", function () {
      return PedidoscompletadosPageModule;
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


    var _pedidoscompletados_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pedidoscompletados-routing.module */
    "./src/app/pages/pedidoscompletados/pedidoscompletados-routing.module.ts");
    /* harmony import */


    var _pedidoscompletados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedidoscompletados.page */
    "./src/app/pages/pedidoscompletados/pedidoscompletados.page.ts");

    var PedidoscompletadosPageModule = function PedidoscompletadosPageModule() {
      _classCallCheck(this, PedidoscompletadosPageModule);
    };

    PedidoscompletadosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pedidoscompletados_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidoscompletadosPageRoutingModule"]],
      declarations: [_pedidoscompletados_page__WEBPACK_IMPORTED_MODULE_6__["PedidoscompletadosPage"]]
    })], PedidoscompletadosPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pedidoscompletados/pedidoscompletados.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/pedidoscompletados/pedidoscompletados.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPedidoscompletadosPedidoscompletadosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7!important;\n  --ion-background-color-rgb: 0,155,215;\n}\n\n.header-styles {\n  --background: #009bd7!important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  align-self: center !important;\n  background-color: #fff;\n}\n\n.center {\n  text-align: center;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcGVkaWRvc2NvbXBsZXRhZG9zL3BlZGlkb3Njb21wbGV0YWRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlZGlkb3Njb21wbGV0YWRvcy9wZWRpZG9zY29tcGxldGFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxxQ0FBQTtBQ0NKOztBREVFO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsNEJBQUE7RUFDQSx5Q0FBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNDTjs7QURFRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZWRpZG9zY29tcGxldGFkb3MvcGVkaWRvc2NvbXBsZXRhZG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMTU1LDIxNTtcbiAgfVxuICBcbiAgLmhlYWRlci1zdHlsZXN7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3IWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTotMTAwcHg7XG4gIH1cbiAgXG4gIC5sb2dvLWhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogNTAlOyAgICBcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbiAgfVxuICBcbiAgLmNhcnJpdG97XG4gICAgd2lkdGg6IDE0JSA7XG4gICAgICBoZWlnaHQ6IDE0JSA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tbGVmdDogNjUlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmRpdi1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41JTtcbiAgfVxuICBcbiAgLmljb25ve1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgO1xufVxuLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGVfc2VjY2lvbiB7XG4gICAgY29sb3I6ICMwMGEyZGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn0iLCJpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3IWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMTU1LDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDchaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4uY2Fycml0byB7XG4gIHdpZHRoOiAxNCU7XG4gIGhlaWdodDogMTQlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA2NSU7XG4gIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbi5pY29ubyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGVfc2VjY2lvbiB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/pedidoscompletados/pedidoscompletados.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/pedidoscompletados/pedidoscompletados.page.ts ***!
    \*********************************************************************/

  /*! exports provided: PedidoscompletadosPage */

  /***/
  function srcAppPagesPedidoscompletadosPedidoscompletadosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoscompletadosPage", function () {
      return PedidoscompletadosPage;
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

    var PedidoscompletadosPage = /*#__PURE__*/function () {
      function PedidoscompletadosPage(menuCtrl) {
        _classCallCheck(this, PedidoscompletadosPage);

        this.menuCtrl = menuCtrl;
      }

      _createClass(PedidoscompletadosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
        }
      }, {
        key: "goBack",
        value: function goBack() {// this.router.navigate(['mipastillero']);
        }
      }]);

      return PedidoscompletadosPage;
    }();

    PedidoscompletadosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    PedidoscompletadosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedidoscompletados',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pedidoscompletados.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidoscompletados/pedidoscompletados.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pedidoscompletados.page.scss */
      "./src/app/pages/pedidoscompletados/pedidoscompletados.page.scss"))["default"]]
    })], PedidoscompletadosPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pedidoscompletados-pedidoscompletados-module-es5.js.map