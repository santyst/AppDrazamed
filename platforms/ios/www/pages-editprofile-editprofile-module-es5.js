function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editprofile-editprofile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editprofile/editprofile.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editprofile/editprofile.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditprofileEditprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n   <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons>\n      <ion-menu-button slot=\"start\" menu=\"main-menu\"></ion-menu-button>\n      <ion-button class=\"carrito\" (click)=\"updateProfile()\">\n        Actualizar\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content>\n<div class=\"container1\">\n <ion-row>\n   <ion-col size=\"2\">\n     <img src=\"../../../assets/img/RECURSOS/iconos drazamed-24.png\" width=\"180%\">\n   </ion-col>\n   <ion-col size=\"6\">\n     <p class=\"title_seccion_head\">Perfil</p>\n     <p class=\"description_product\" *ngIf=\"user\">{{user.name}}</p>\n   </ion-col>\n   <ion-col size=\"4\" class=\"pt-10\">\n     <ion-buttons>\n      <ion-button class=\"btn_product\">C<p class=\"btntext\">ambiar foto</p></ion-button>\n     </ion-buttons>\n   </ion-col>\n </ion-row>\n</div>\n<div class=\"container\">\n   <ion-row class=\"result_search\">\n       <div class=\"custom_form\">\n         <form action=\"\">\n           <div class=\"form-group\">\n             <ion-label class=\"grey\">Nombre</ion-label>\n             <ion-input type=\"text\" class=\"form-control\" value=\"{{firstName}}\"></ion-input>\n           </div>\n           <div class=\"form-group\">\n            <ion-label class=\"grey\">Apellido</ion-label>\n            <ion-input type=\"text\" class=\"form-control\" value=\"{{lastName}}\"></ion-input>\n          </div>\n           <div class=\"form-group\">\n            <ion-label class=\"grey\">Correo</ion-label>\n            <ion-input type=\"email\" class=\"form-control\" value=\"{{mail}}\"></ion-input>\n          </div>\n          <div class=\"form-group\">\n            <ion-label class=\"grey\">Documento de identidad</ion-label>\n            <ion-input type=\"number\" class=\"form-control\" value=\"{{id}}\"></ion-input>\n          </div>\n          <div class=\"form-group\">\n            <ion-label class=\"grey\">Dirección para entrega de pedidos</ion-label>\n            <ion-input type=\"text\" class=\"form-control\" value=\"{{address}}\"></ion-input>\n          </div>\n          <div class=\"form-group\">\n          <ion-label class=\"grey\">Teléfono de contacto</ion-label>\n            <ion-input type=\"number\" class=\"form-control\" value=\"{{phone}}\"></ion-input>\n          </div>\n          <!--<div class=\"form-group\">\n            <ion-label class=\"grey\">Genero</ion-label>\n            <ion-input type=\"text\" class=\"form-control\"></ion-input>\n          </div>\n          <div class=\"form-group\">\n            <ion-label class=\"grey\">Convenio</ion-label>\n            <ion-input type=\"text\" class=\"form-control\"></ion-input>\n          </div>-->\n         </form>\n       </div>\n   </ion-row>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/editprofile/editprofile-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/editprofile/editprofile-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EditprofilePageRoutingModule */

  /***/
  function srcAppPagesEditprofileEditprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
      return EditprofilePageRoutingModule;
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


    var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editprofile.page */
    "./src/app/pages/editprofile/editprofile.page.ts");

    var routes = [{
      path: '',
      component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
    }];

    var EditprofilePageRoutingModule = function EditprofilePageRoutingModule() {
      _classCallCheck(this, EditprofilePageRoutingModule);
    };

    EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditprofilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/editprofile/editprofile.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/editprofile/editprofile.module.ts ***!
    \*********************************************************/

  /*! exports provided: EditprofilePageModule */

  /***/
  function srcAppPagesEditprofileEditprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
      return EditprofilePageModule;
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


    var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editprofile-routing.module */
    "./src/app/pages/editprofile/editprofile-routing.module.ts");
    /* harmony import */


    var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editprofile.page */
    "./src/app/pages/editprofile/editprofile.page.ts");

    var EditprofilePageModule = function EditprofilePageModule() {
      _classCallCheck(this, EditprofilePageModule);
    };

    EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]],
      declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
    })], EditprofilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/editprofile/editprofile.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/editprofile/editprofile.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditprofileEditprofilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: #fff;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 31%;\n  height: 14%;\n  margin-left: 50%;\n  margin-bottom: 2% !important;\n  --background: #009bd7;\n  color: #fff !important;\n  font-size: 21px;\n}\n\n.div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\nion-menu-button {\n  color: white;\n  margin-left: 5%;\n}\n\nion-badge {\n  color: #046a8f;\n  position: absolute;\n  --border-radius: 200%;\n  top: -3px;\n  right: 15px;\n  --background: #c9c9c9;\n  width: 20px;\n  height: 20px;\n  font-size: 16px;\n}\n\n.container1 {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  align-self: center !important;\n  padding-top: 20px !important;\n  background-color: #fff;\n}\n\n.pt-10 {\n  padding-top: 10px !important;\n}\n\n.title_seccion_head {\n  color: #00a2dd;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.btn_product {\n  color: #036d97;\n  --background: #fff;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  --border-radius: 15px !important;\n  font-size: 16px !important;\n  margin-top: 19px;\n  text-align: center !important;\n}\n\n.btntext {\n  text-transform: lowercase !important;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px !important;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.custom_form {\n  width: 100% !important;\n  padding: 20px 20px !important;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.grey {\n  color: #727070 !important;\n}\n\nion-input {\n  border: 1px solid #ced4da;\n  border-radius: 20px;\n  width: 100%;\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 400;\n  color: #3d3f41;\n  background-color: #fff;\n  background-clip: padding-box;\n  padding-left: 10px !important;\n}\n\nion-label {\n  display: inline-block;\n  margin-bottom: 0.8rem;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  ion-menu-button {\n    color: white;\n    margin-left: 5%;\n    font-size: 50px !important;\n    margin-bottom: 2% !important;\n  }\n\n  .carrito {\n    width: 31%;\n    height: 14%;\n    margin-left: 54%;\n    margin-bottom: 2% !important;\n    --background: #009bd7;\n    color: #fff !important;\n    font-size: 39px;\n  }\n\n  ion-buttons {\n    margin-left: 20px;\n  }\n\n  img {\n    max-width: 80%;\n    border: 0;\n  }\n\n  .title_seccion_head {\n    color: #00a2dd;\n    font-size: 26px;\n    font-weight: 700;\n    margin: 0px !important;\n  }\n\n  .btn_product {\n    color: #036d97;\n    --background: #fff;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    --border-radius: 15px !important;\n    font-size: 25px !important;\n    margin-top: 19px;\n    text-align: center !important;\n    height: 40px;\n  }\n\n  ion-label {\n    display: inline-block;\n    margin-bottom: 0.8rem;\n    font-size: 25px;\n  }\n\n  ion-input {\n    border: 3px solid #ced4da;\n    border-radius: 20px;\n    width: 100%;\n    display: block;\n    font-size: 25px;\n    font-weight: 400;\n    color: #3d3f41;\n    background-color: #fff;\n    background-clip: padding-box;\n    height: 55px;\n    padding-left: 10px !important;\n  }\n\n  .description_product {\n    font-size: 24px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 14px 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSw0QkFBQTtFQUNBLHlDQUFBO0FDR0Y7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDS0Y7O0FESEE7RUFDRSw0QkFBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDT0Y7O0FETEE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDU0Y7O0FEUEE7RUFDRSxvQ0FBQTtBQ1VGOztBRFJBO0VBQ0UsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ1NGOztBRFBBO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDVUY7O0FEUkE7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FDV0Y7O0FEVEE7RUFDRSxtQkFBQTtBQ1lGOztBRFZBO0VBQ0UseUJBQUE7QUNhRjs7QURYQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDY0Y7O0FEWkE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0FDZUY7O0FEYkE7RUFDRTtJQUNFLGdDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0VDZ0JGOztFRGRBO0lBQ0UsYUFBQTtFQ2lCRjs7RURkQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFQ2lCRjs7RURmQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSw0QkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VDa0JGOztFRGhCQTtJQUNFLGlCQUFBO0VDbUJGOztFRGpCQTtJQUNFLGNBQUE7SUFDQSxTQUFBO0VDb0JGOztFRGxCQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQ3FCRjs7RURuQkY7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VDc0JBOztFRHBCRjtJQUNFLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VDdUJBOztFRHJCRjtJQUNFLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0VDd0JBOztFRHRCRjtJQUNFLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtJQUNBLDJCQUFBO0VDeUJBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAxNTUsIDIxNTtcbn1cblxuLmhlYWRlci1zdHlsZXMge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMzElO1xuICBoZWlnaHQ6IDE0JTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICMwNDZhOGY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMDAlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICAtLWJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLnRpdGxlX3NlY2Npb25faGVhZCB7XG4gIGNvbG9yOiAjMDBhMmRkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cbi5idG5fcHJvZHVjdCB7XG4gIGNvbG9yOiAjMDM2ZDk3O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmJ0bnRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIC8vIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY3VzdG9tX2Zvcm0ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5ncmV5IHtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbn1cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkM2Y0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgfVxuICAuY2Fycml0byB7XG4gICAgd2lkdGg6IDMxJTtcbiAgICBoZWlnaHQ6IDE0JTtcbiAgICBtYXJnaW4tbGVmdDogNTQlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzOXB4O1xuICB9XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBpbWd7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC50aXRsZV9zZWNjaW9uX2hlYWQge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuX3Byb2R1Y3Qge1xuICBjb2xvcjogIzAzNmQ5NztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkM2Y0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTRweCAwcHggIWltcG9ydGFudDtcbn1cbn1cbiIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5sb2dvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMzElO1xuICBoZWlnaHQ6IDE0JTtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5kaXYtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWJkNztcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG5pb24tYmFkZ2Uge1xuICBjb2xvcjogIzA0NmE4ZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDIwMCU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIC0tYmFja2dyb3VuZDogI2M5YzljOTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29udGFpbmVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGVfc2VjY2lvbl9oZWFkIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3Byb2R1Y3Qge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fcHJvZHVjdCB7XG4gIGNvbG9yOiAjMDM2ZDk3O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnRudGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY3VzdG9tX2Zvcm0ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZ3JleSB7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkM2Y0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogOTUwcHgpIHtcbiAgLmhlYWRlci1zdHlsZXMge1xuICAgIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICBpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJyaXRvIHtcbiAgICB3aWR0aDogMzElO1xuICAgIGhlaWdodDogMTQlO1xuICAgIG1hcmdpbi1sZWZ0OiA1NCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiUgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDliZDc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDM5cHg7XG4gIH1cblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC50aXRsZV9zZWNjaW9uX2hlYWQge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuX3Byb2R1Y3Qge1xuICAgIGNvbG9yOiAjMDM2ZDk3O1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDE5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjM2QzZjQxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTRweCAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/editprofile/editprofile.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/editprofile/editprofile.page.ts ***!
    \*******************************************************/

  /*! exports provided: EditprofilePage */

  /***/
  function srcAppPagesEditprofileEditprofilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
      return EditprofilePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts");

    var EditprofilePage = /*#__PURE__*/function () {
      function EditprofilePage(menuCtrl, auth, config, http) {
        var _this = this;

        _classCallCheck(this, EditprofilePage);

        this.menuCtrl = menuCtrl;
        this.auth = auth;
        this.config = config;
        this.http = http;
        this.base_url = config.get_base_url();
        this.menuCtrl.enable(true);
        this.user = this.auth.getusuario();
        this.useremail = this.user.email;
        this.http.get("".concat(this.base_url, "user/get-user-data/0?email=").concat(this.useremail)).subscribe(function (val) {
          _this.profile = val;
          _this.firstName = _this.profile.first_name;
          _this.lastName = _this.profile.last_name;
          _this.mail = _this.profile.mail;
          _this.id = _this.profile.idn;
          _this.address = _this.profile.address;
          _this.phone = _this.profile.phone;
          console.log(_this.profile);
        });
      }

      _createClass(EditprofilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(true);
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {}
      }]);

      return EditprofilePage;
    }();

    EditprofilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-editprofile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editprofile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editprofile/editprofile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editprofile.page.scss */
      "./src/app/pages/editprofile/editprofile.page.scss"))["default"]]
    })], EditprofilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-editprofile-editprofile-module-es5.js.map