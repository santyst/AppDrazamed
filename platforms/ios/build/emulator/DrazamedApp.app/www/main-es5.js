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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy recursive":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy namespace object ***!
    \************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCordovaPluginFcmWithDependecyUpdatedIonicNgxNode_modulesAngularCoreFesm2015LazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\n\n\t<ion-header class=\"ion-no-border\" mode=\"ios\">\n\t\t<ion-toolbar class=\"header-styles\">\n\t\t  <img class=\"content-image\" src=\"../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n\t\t</ion-toolbar>\n\t  </ion-header>\n\t    \t    \n    <ion-content class=\"side-menu\" mode=\"md\">\n\t\n\n\t\t<div class=\"user\">\n\t\t <img class=\"img-profile\" src=\"../../assets/img/RECURSOS/iconos drazamed-24.png\" alt=\"\">\n\t\t <span class=\"username\">¡Hola!</span>\n\t\t</div>\n\n\n       <ion-list class=\"menu-items\" lines=\"none\"> \n\n\t\t <ion-menu-toggle>\n\t\t\t <ion-item on-click=\"goHome()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../../assets/img/RECURSOS/iconos drazamed-cc-05.png\">\n\t\t\t\t<p>Inicio</p>\n\t\t\t </ion-item>\n\t\t </ion-menu-toggle>\n    \n\t\t <ion-menu-toggle>\n\t\t\t<ion-item on-click=\"goPerfil()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../../assets/img/RECURSOS/iconos drazamed-cc_Mesa de trabajo 1.png\">\n\t\t\t\t<p>Mi perfil</p>\n\t\t\t</ion-item>\n\t\t </ion-menu-toggle>\n\n       \t <ion-menu-toggle>\n\t\t\t<ion-item on-click=\"goMedicamentos()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../../assets/img/RECURSOS/iconos drazamed-cc-03.png\">\n       \t \t   <p>Buscar Medicamentos</p>\n       \t    </ion-item>\n\t\t</ion-menu-toggle>\n\n\t\t<ion-menu-toggle>\n            <ion-item on-click=\"goMensajes()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../../assets/img/RECURSOS/iconos drazamed-cc-11.png\">\n       \t \t  <p>Mensajes / PQRS</p>\n       \t    </ion-item>\n\t\t</ion-menu-toggle>\n\n       \t<ion-menu-toggle>\n\t\t\t<ion-item on-click=\"goPastillero()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../assets/img/RECURSOS/iconos drazamed-cc-60.png\">\n       \t \t    <p>Mi pastillero</p>\n       \t    </ion-item>\n\t\t</ion-menu-toggle> \n\n       \t<ion-menu-toggle>\n\t\t\t<ion-item on-click=\"goAcercade()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../../assets/img/RECURSOS/iconos drazamed-cc-15.png\">\n       \t \t    <p>Acerca de Drazamed</p>\n       \t    </ion-item>\n\t\t</ion-menu-toggle>\n\t\t   \n\t\t<ion-menu-toggle>\n\t\t\t<ion-item on-click=\"goOut()\">\n\t\t\t\t<img class=\"button-logos\" src=\"../../assets/img/RECURSOS/iconos drazamed-cc-17.png\">\n       \t \t    <p>Cerrar sesión</p>\n       \t    </ion-item>\n\t\t</ion-menu-toggle>\n\n\t   </ion-list>\n  \t</ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/auto-login.guard */
    "./src/app/guards/auto-login.guard.ts");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: 'slideshow',
      pathMatch: 'full'
    }, {
      path: 'login1',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login1-login1-module */
        "login1-login1-module").then(__webpack_require__.bind(null,
        /*! ./login1/login1.module */
        "./src/app/login1/login1.module.ts")).then(function (m) {
          return m.Login1PageModule;
        });
      }
    }, {
      path: 'login2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login2-login2-module */
        "login2-login2-module").then(__webpack_require__.bind(null,
        /*! ./login2/login2.module */
        "./src/app/login2/login2.module.ts")).then(function (m) {
          return m.Login2PageModule;
        });
      }
    }, {
      path: 'createaccount',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | createaccount-createaccount-module */
        [__webpack_require__.e("common"), __webpack_require__.e("createaccount-createaccount-module")]).then(__webpack_require__.bind(null,
        /*! ./createaccount/createaccount.module */
        "./src/app/createaccount/createaccount.module.ts")).then(function (m) {
          return m.CreateaccountPageModule;
        });
      }
    }, {
      path: 'createaccount2',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | createaccount2-createaccount2-module */
        [__webpack_require__.e("common"), __webpack_require__.e("createaccount2-createaccount2-module")]).then(__webpack_require__.bind(null,
        /*! ./createaccount2/createaccount2.module */
        "./src/app/createaccount2/createaccount2.module.ts")).then(function (m) {
          return m.Createaccount2PageModule;
        });
      }
    }, {
      path: 'forgottenpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgottenpassword-forgottenpassword-module */
        "forgottenpassword-forgottenpassword-module").then(__webpack_require__.bind(null,
        /*! ./forgottenpassword/forgottenpassword.module */
        "./src/app/forgottenpassword/forgottenpassword.module.ts")).then(function (m) {
          return m.ForgottenpasswordPageModule;
        });
      }
    }, {
      path: 'perfil',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-perfil-perfil-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-perfil-perfil-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/perfil/perfil.module */
        "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
          return m.PerfilPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'medicamentos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-medicamentos-medicamentos-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-medicamentos-medicamentos-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/medicamentos/medicamentos.module */
        "./src/app/pages/medicamentos/medicamentos.module.ts")).then(function (m) {
          return m.MedicamentosPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'mensajes',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-mensajes-mensajes-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-mensajes-mensajes-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/mensajes/mensajes.module */
        "./src/app/pages/mensajes/mensajes.module.ts")).then(function (m) {
          return m.MensajesPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'acercade',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-acercade-acercade-module */
        "pages-acercade-acercade-module").then(__webpack_require__.bind(null,
        /*! ./pages/acercade/acercade.module */
        "./src/app/pages/acercade/acercade.module.ts")).then(function (m) {
          return m.AcercadePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'slideshow',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slideshow-slideshow-module */
        "slideshow-slideshow-module").then(__webpack_require__.bind(null,
        /*! ./slideshow/slideshow.module */
        "./src/app/slideshow/slideshow.module.ts")).then(function (m) {
          return m.SlideshowPageModule;
        });
      },
      canActivate: [_guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_4__["AutoLoginGuard"]]
    }, {
      path: 'carrito',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-carrito-carrito-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-carrito-carrito-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/carrito/carrito.module */
        "./src/app/pages/carrito/carrito.module.ts")).then(function (m) {
          return m.CarritoPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'resultsearch',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-resultsearch-resultsearch-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-resultsearch-resultsearch-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/resultsearch/resultsearch.module */
        "./src/app/pages/resultsearch/resultsearch.module.ts")).then(function (m) {
          return m.ResultsearchPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'avisoprivacidad',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terminos-avisoprivacidad-avisoprivacidad-module */
        "pages-terminos-avisoprivacidad-avisoprivacidad-module").then(__webpack_require__.bind(null,
        /*! ./pages/terminos/avisoprivacidad/avisoprivacidad.module */
        "./src/app/pages/terminos/avisoprivacidad/avisoprivacidad.module.ts")).then(function (m) {
          return m.AvisoprivacidadPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'politicagarantia',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terminos-politicagarantia-politicagarantia-module */
        "pages-terminos-politicagarantia-politicagarantia-module").then(__webpack_require__.bind(null,
        /*! ./pages/terminos/politicagarantia/politicagarantia.module */
        "./src/app/pages/terminos/politicagarantia/politicagarantia.module.ts")).then(function (m) {
          return m.PoliticagarantiaPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'politicadevolucion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terminos-politicadevolucion-politicadevolucion-module */
        "pages-terminos-politicadevolucion-politicadevolucion-module").then(__webpack_require__.bind(null,
        /*! ./pages/terminos/politicadevolucion/politicadevolucion.module */
        "./src/app/pages/terminos/politicadevolucion/politicadevolucion.module.ts")).then(function (m) {
          return m.PoliticadevolucionPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'politicaretracto',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terminos-politicaretracto-politicaretracto-module */
        "pages-terminos-politicaretracto-politicaretracto-module").then(__webpack_require__.bind(null,
        /*! ./pages/terminos/politicaretracto/politicaretracto.module */
        "./src/app/pages/terminos/politicaretracto/politicaretracto.module.ts")).then(function (m) {
          return m.PoliticaretractoPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'manejodatos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terminos-manejodatos-manejodatos-module */
        "pages-terminos-manejodatos-manejodatos-module").then(__webpack_require__.bind(null,
        /*! ./pages/terminos/manejodatos/manejodatos.module */
        "./src/app/pages/terminos/manejodatos/manejodatos.module.ts")).then(function (m) {
          return m.ManejodatosPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'categorias',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-categorias-categorias-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-categorias-categorias-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/categorias/categorias.module */
        "./src/app/pages/categorias/categorias.module.ts")).then(function (m) {
          return m.CategoriasPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'mipastillero',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-mipastillero-mipastillero-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-mipastillero-mipastillero-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/mipastillero/mipastillero.module */
        "./src/app/pages/mipastillero/mipastillero.module.ts")).then(function (m) {
          return m.MipastilleroPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'misdirecciones',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-misdirecciones-misdirecciones-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-misdirecciones-misdirecciones-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/misdirecciones/misdirecciones.module */
        "./src/app/pages/misdirecciones/misdirecciones.module.ts")).then(function (m) {
          return m.MisdireccionesPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'editprofile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-editprofile-editprofile-module */
        "pages-editprofile-editprofile-module").then(__webpack_require__.bind(null,
        /*! ./pages/editprofile/editprofile.module */
        "./src/app/pages/editprofile/editprofile.module.ts")).then(function (m) {
          return m.EditprofilePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'mispedidos',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mispedidos-mispedidos-module */
        "pages-mispedidos-mispedidos-module").then(__webpack_require__.bind(null,
        /*! ./pages/mispedidos/mispedidos.module */
        "./src/app/pages/mispedidos/mispedidos.module.ts")).then(function (m) {
          return m.MispedidosPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'pedidoscompletados',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedidoscompletados-pedidoscompletados-module */
        "pages-pedidoscompletados-pedidoscompletados-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedidoscompletados/pedidoscompletados.module */
        "./src/app/pages/pedidoscompletados/pedidoscompletados.module.ts")).then(function (m) {
          return m.PedidoscompletadosPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'createalarm',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-createalarm-createalarm-module */
        "pages-createalarm-createalarm-module").then(__webpack_require__.bind(null,
        /*! ./pages/createalarm/createalarm.module */
        "./src/app/pages/createalarm/createalarm.module.ts")).then(function (m) {
          return m.CreatealarmPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'adddirection',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-adddirection-adddirection-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-adddirection-adddirection-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/adddirection/adddirection.module */
        "./src/app/pages/adddirection/adddirection.module.ts")).then(function (m) {
          return m.AdddirectionPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'processtreatment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-processtreatment-processtreatment-module */
        "pages-processtreatment-processtreatment-module").then(__webpack_require__.bind(null,
        /*! ./pages/processtreatment/processtreatment.module */
        "./src/app/pages/processtreatment/processtreatment.module.ts")).then(function (m) {
          return m.ProcesstreatmentPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'checkout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-checkout-checkout-module */
        "pages-checkout-checkout-module").then(__webpack_require__.bind(null,
        /*! ./pages/checkout/checkout.module */
        "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'request-open',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-request-open-request-open-module */
        "pages-request-open-request-open-module").then(__webpack_require__.bind(null,
        /*! ./pages/request-open/request-open.module */
        "./src/app/pages/request-open/request-open.module.ts")).then(function (m) {
          return m.RequestOpenPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'request-closed',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-request-closed-request-closed-module */
        "pages-request-closed-request-closed-module").then(__webpack_require__.bind(null,
        /*! ./pages/request-closed/request-closed.module */
        "./src/app/pages/request-closed/request-closed.module.ts")).then(function (m) {
          return m.RequestClosedPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'createalarm2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-createalarm2-createalarm2-module */
        "pages-createalarm2-createalarm2-module").then(__webpack_require__.bind(null,
        /*! ./pages/createalarm2/createalarm2.module */
        "./src/app/pages/createalarm2/createalarm2.module.ts")).then(function (m) {
          return m.Createalarm2PageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'edit-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-edit-address-edit-address-module */
        "pages-edit-address-edit-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/edit-address/edit-address.module */
        "./src/app/pages/edit-address/edit-address.module.ts")).then(function (m) {
          return m.EditAddressPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'edit-alarm',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-edit-alarm-edit-alarm-module */
        "pages-edit-alarm-edit-alarm-module").then(__webpack_require__.bind(null,
        /*! ./pages/edit-alarm/edit-alarm.module */
        "./src/app/pages/edit-alarm/edit-alarm.module.ts")).then(function (m) {
          return m.EditAlarmPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'prueba',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prueba-prueba-module */
        "pages-prueba-prueba-module").then(__webpack_require__.bind(null,
        /*! ./pages/prueba/prueba.module */
        "./src/app/pages/prueba/prueba.module.ts")).then(function (m) {
          return m.PruebaPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'proxima-entrega',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-proxima-entrega-proxima-entrega-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-proxima-entrega-proxima-entrega-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/proxima-entrega/proxima-entrega.module */
        "./src/app/pages/proxima-entrega/proxima-entrega.module.ts")).then(function (m) {
          return m.ProximaEntregaPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #f0efef;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-item {\n  padding-left: 5px;\n  margin-bottom: 10px;\n}\n\n.button-logos {\n  width: 15%;\n  margin-right: 3%;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.user {\n  margin-bottom: 5%;\n  margin-left: 20px;\n}\n\n.username {\n  margin-left: 3.4vw;\n  position: absolute;\n  top: 6%;\n  /* IE 9 */\n  /* Chrome, Safari, Opera */\n  transform: translateY(-50%);\n  color: #737375;\n  font-weight: bold;\n  font-style: italic;\n}\n\n.img-profile {\n  width: 20%;\n  margin-top: 5%;\n}\n\np {\n  color: #737375;\n  font-weight: bold;\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  p {\n    color: #737375;\n    font-weight: bold;\n    font-size: 21px;\n  }\n\n  .img-profile {\n    width: 20%;\n    margin-top: 5%;\n  }\n\n  .button-logos {\n    width: 19%;\n    margin-right: 3%;\n  }\n\n  .menu-items {\n    margin: 0px;\n  }\n  .menu-items ion-item {\n    padding-left: 5px;\n    margin-bottom: 25px;\n  }\n\n  .img-profile {\n    width: 25%;\n    margin-top: 5%;\n  }\n\n  .username {\n    margin-left: 3.4vw;\n    position: absolute;\n    top: 5%;\n    transform: translateY(-50%);\n    color: #737375;\n    font-weight: bold;\n    font-style: italic;\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywrQkFBQTtFQUNBLHlDQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FER0E7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNBRDs7QURHQTtFQUNDLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FERUE7RUFDQyxjQUFBO0VBQ0EsU0FBQTtBQ0NEOztBRENBO0VBQ0MsZ0NBQUE7RUFDQSx1Q0FBQTtBQ0VEOztBRENBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQ0VEOztBRENBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDaUMsU0FBQTtFQUNJLDBCQUFBO0VBQ3JDLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJRDs7QUREQTtFQUNDLFVBQUE7RUFDQSxjQUFBO0FDSUQ7O0FEREE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNJRDs7QURGQTtFQUNDO0lBQ0MsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ0tBOztFREhEO0lBQ0MsVUFBQTtJQUNBLGNBQUE7RUNNQTs7RURKRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ09BOztFRExEO0lBQ0MsV0FBQTtFQ1FBO0VETkE7SUFDQyxpQkFBQTtJQUNBLG1CQUFBO0VDUUQ7O0VETEQ7SUFDQyxVQUFBO0lBQ0EsY0FBQTtFQ1FBOztFRE5EO0lBQ0Msa0JBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSwyQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ1NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YwZWZlZjtcclxuXHQtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcclxufVxyXG5cclxuLm1lbnUtaXRlbXMge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uYnV0dG9uLWxvZ29zIHtcclxuXHR3aWR0aDogMTUlO1xyXG5cdG1hcmdpbi1yaWdodDogMyU7XHJcbn1cclxuXHJcbi5oZWFkZXItc3R5bGVzIHtcclxuXHQtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnQtaW1hZ2Uge1xyXG5cdG1heC13aWR0aDogNjAlO1xyXG5cdGJvcmRlcjogMDtcclxufVxyXG5pb24taGVhZGVyIHtcclxuXHQtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcclxuXHQtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuXHRtYXJnaW4tYm90dG9tOiA1JTtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnVzZXJuYW1lIHtcclxuXHRtYXJnaW4tbGVmdDogMy40dnc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNiU7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgLyogSUUgOSAqL1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0Y29sb3I6ICM3MzczNzU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaW1nLXByb2ZpbGUge1xyXG5cdHdpZHRoOiAyMCU7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbnAge1xyXG5cdGNvbG9yOiAjNzM3Mzc1O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xyXG5cdHAge1xyXG5cdFx0Y29sb3I6ICM3MzczNzU7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGZvbnQtc2l6ZTogMjFweDtcclxuXHR9XHJcblx0LmltZy1wcm9maWxlIHtcclxuXHRcdHdpZHRoOiAyMCU7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblx0LmJ1dHRvbi1sb2dvcyB7XHJcblx0XHR3aWR0aDogMTklO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzJTtcclxuXHR9XHJcblx0Lm1lbnUtaXRlbXMge1xyXG5cdFx0bWFyZ2luOiAwcHg7XHJcblxyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmltZy1wcm9maWxlIHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRtYXJnaW4tdG9wOiA1JTtcclxuXHR9XHJcblx0LnVzZXJuYW1lIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzLjR2dztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNSU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0XHRjb2xvcjogIzczNzM3NTtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdH1cclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMGVmZWY7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuXG4ubWVudS1pdGVtcyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm1lbnUtaXRlbXMgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ1dHRvbi1sb2dvcyB7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1pbWFnZSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4udXNlciB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnVzZXJuYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDMuNHZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNiU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjNzM3Mzc1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaW1nLXByb2ZpbGUge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxucCB7XG4gIGNvbG9yOiAjNzM3Mzc1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk1MHB4KSB7XG4gIHAge1xuICAgIGNvbG9yOiAjNzM3Mzc1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxuXG4gIC5pbWctcHJvZmlsZSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5idXR0b24tbG9nb3Mge1xuICAgIHdpZHRoOiAxOSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgfVxuXG4gIC5tZW51LWl0ZW1zIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAubWVudS1pdGVtcyBpb24taXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIC5pbWctcHJvZmlsZSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC51c2VybmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBjb2xvcjogIzczNzM3NTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var pusher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! pusher-js */
    "./node_modules/pusher-js/dist/web/pusher.js");
    /* harmony import */


    var pusher_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
    "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
    /* harmony import */


    var _services_tratamientos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/tratamientos.service */
    "./src/app/services/tratamientos.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, auth, localNotifications, tratamientoService, fcm, http, config, alertCtrl, iab) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.auth = auth;
        this.localNotifications = localNotifications;
        this.tratamientoService = tratamientoService;
        this.fcm = fcm;
        this.http = http;
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.payment_url = "medicine/make-mercado-pago-payment/";
        this.key = 'token-fcm';
        this.initializeApp();
        this.base_url = config.get_base_url();
      }

      _createClass(AppComponent, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log(this.user);
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            // this.backgroundMode.enable();
            // this.getPush();
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.localNotifications.hasPermission().then(function (val) {
              if (val === false) {
                _this.localNotifications.requestPermission();
              } else if (val === true) {
                console.log('hay permisos');
              }
            });

            _this.setupFCM();
          });
        }
      }, {
        key: "pushSet",
        value: function pushSet() {
          var _this2 = this;

          var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_7___default.a('270a27c11d1a38de071b', {
            cluster: 'us2'
          });
          pusher_js__WEBPACK_IMPORTED_MODULE_7___default.a.logToConsole = true;
          var channel = pusher.subscribe('Drazamed');
          channel.bind('orderStatus', function (data) {
            console.log(data);
            _this2.user1 = data.user.email;
            _this2.user = _this2.auth.getusuario();
            _this2.userid = _this2.user.email;
            console.log(_this2.userid);
            console.log(_this2.user1);

            if (_this2.user1 === _this2.userid) {
              _this2.localNotifications.schedule({
                text: 'Orden verificada',
                lockscreen: true
              });
            }
          });
        }
      }, {
        key: "sendToma",
        value: function sendToma(treatment_id, body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var treatmentId, alert, alarma;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.user = this.auth.getusuario();
                    this.userid = this.user.email;
                    console.log("TreatmentId:", treatment_id);
                    console.log("email:", this.userid);
                    treatmentId = treatment_id; // acá entra la notificacion con id de tratamiento

                    _context.next = 7;
                    return this.alertCtrl.create({
                      mode: 'ios',
                      cssClass: 'failed',
                      message: body,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Posponer',
                        cssClass: 'btnalert',
                        handler: function handler(datos) {
                          console.log("Posponer");
                          var urlTreatment = "".concat(_this3.base_url, "treatment/treatment-by-id?id=") + treatmentId;
                          console.log('url', urlTreatment);

                          _this3.http.get(urlTreatment).subscribe(function (res) {
                            _this3.respuestapost = res;
                            _this3.respuestapost3 = _this3.respuestapost.status;
                            _this3.item_codeP = _this3.respuestapost.data[0].item_code;
                            console.log("Post:", _this3.respuestapost3);
                            console.log("tratamiento:", res);
                            console.log("item_code:", _this3.item_codeP);

                            if (_this3.respuestapost3 === "SUCCESS") {
                              var alarma2 = {
                                email: _this3.userid,
                                taken: 0,
                                item_code: _this3.item_codeP
                              };
                              console.log('envio posponer');
                              console.log(alarma2);

                              _this3.http.post("".concat(_this3.base_url, "treatment/update-treatment"), alarma2).subscribe(function (resp) {
                                _this3.respuestapost = resp;
                                _this3.respuestapost2 = _this3.respuestapost.status;

                                if (_this3.respuestapost2 === "SUCCESS") {
                                  var alarma1 = {
                                    taken: 0,
                                    timeM: 0,
                                    timeH: 0,
                                    timeD: 0,
                                    item_code: _this3.item_codeP
                                  }; // this.tratamientoService.addAlarm(alarma1);

                                  _this3.tratamientoService.getTreatmen();
                                }
                              });
                            }

                            ;
                          });
                        }
                      }, {
                        text: 'Tomar',
                        cssClass: 'btnalert',
                        handler: function handler(data) {
                          _this3.http.get("".concat(_this3.base_url, "treatment/treatment-by-id?id=").concat(treatment_id)).subscribe(function (res) {
                            _this3.respuestapost = res;
                            _this3.respuestapost1 = _this3.respuestapost.status;
                            _this3.item_codeT = _this3.respuestapost.data[0].item_code;
                            _this3.dosis = _this3.respuestapost.data[0].dosis;
                            var alarma = {
                              email: _this3.userid,
                              taken: _this3.dosis,
                              item_code: _this3.item_codeT
                            };
                            console.log(alarma);

                            _this3.http.post("".concat(_this3.base_url, "treatment/update-treatment"), alarma).subscribe(function (resp) {
                              _this3.respuestapost = resp;
                              _this3.respuestapost1 = _this3.respuestapost.status;
                              console.log(_this3.respuestapost1);

                              if (_this3.respuestapost1 === "SUCCESS") {
                                /* this.router.navigate(['home']); */
                                var alarma1 = {
                                  taken: 1,
                                  timeM: 0,
                                  timeH: 0,
                                  timeD: 0,
                                  item_code: _this3.item_codeT
                                };
                                /* this.tratamientoService.addAlarm(alarma1); */

                                _this3.tratamientoService.getTreatmen();
                              }
                            });
                          });
                        }
                      }]
                    });

                  case 7:
                    alert = _context.sent;
                    _context.next = 10;
                    return alert.present();

                  case 10:
                    alarma = {
                      email: this.userid,
                      toma: 'T1',
                      item_code: '7702184010655'
                    }; //  this.tratamientoService.addAlarm(alarma);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sendToma1",
        value: function sendToma1(body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      mode: 'ios',
                      cssClass: 'failed',
                      message: body,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Ver',
                        cssClass: 'btnalert',
                        handler: function handler(d) {
                          _this4.router.navigate(['proxima-entrega']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sendToma2",
        value: function sendToma2(body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      mode: 'ios',
                      cssClass: 'failed',
                      message: body,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'btnalert'
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "sendToma3",
        value: function sendToma3(body, invoice_id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.user = this.auth.getusuario();
                    this.userid = this.user.email;
                    _context4.next = 4;
                    return this.alertCtrl.create({
                      mode: 'ios',
                      cssClass: 'failed',
                      message: body,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Pagar',
                        cssClass: 'btnalert',
                        handler: function handler(pp) {
                          _this5.http.get("".concat(_this5.base_url).concat(_this5.payment_url).concat(invoice_id, "/1?email=").concat(_this5.userid)).subscribe(function (pay) {
                            _this5.ad = pay;
                            _this5.address = _this5.ad.posted.address;
                            _this5.linkpay = _this5.ad.preference.init_point;

                            _this5.iab.create(_this5.linkpay, '_blank');
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context4.sent;
                    _context4.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setupFCM",
        value: function setupFCM() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var intApns;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.platform.ready();

                  case 2:
                    console.log('FCM setup started');

                    if (this.platform.is('cordova')) {
                      _context6.next = 5;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 5:
                    console.log('In cordova platform');
                    console.log('Subscribing to token updates');
                    this.fcm.onTokenRefresh().subscribe(function (newToken) {
                      _this6.token = newToken;
                      console.log('onTokenRefresh received event with: ', newToken);
                      window.localStorage.setItem('refresh-token', newToken);
                    });
                    console.log('Subscribing to new notifications');
                    this.fcm.onNotification().subscribe(function (payload) {
                      _this6.pushPayload = payload;

                      if (_this6.platform.is('ios')) {
                        console.log('onNotification received event with id: ', payload.a_data.treatment_id); // let data = JSON.parse(payload.a_data);

                        if (payload.a_data.msg_type === 1) {
                          _this6.sendToma(payload.a_data.treatment_id, payload.body);
                        } else if (payload.a_data.msg_type === 2) {
                          _this6.sendToma1(payload.body);
                        } else if (payload.a_data.msg_type === 3) {
                          _this6.sendToma2(payload.body);
                        } else if (payload.a_data.msg_type === 4) {
                          _this6.sendToma3(payload.body, payload.a_data.treatment_id);
                        } else if (payload.a_data.msg_type === 5) {
                          _this6.sendToma2(payload.body);
                        } else if (payload.a_data.msg_type === 6) {
                          _this6.sendToma2(payload.body);
                        }
                      } else {
                        console.log('onNotification received event with id: ', payload);
                        var data = JSON.parse(payload.a_data);

                        if (data.msg_type === 1) {
                          _this6.sendToma(data.treatment_id, payload.body);
                        } else if (data.msg_type === 2) {
                          _this6.sendToma1(payload.body);
                        } else if (data.msg_type === 3) {
                          _this6.sendToma2(payload.body);
                        } else if (data.msg_type === 4) {
                          _this6.sendToma3(payload.body, data.treatment_id);
                        } else if (payload.a_data.msg_type === 5) {
                          _this6.sendToma2(payload.body);
                        } else if (payload.a_data.msg_type === 6) {
                          _this6.sendToma2(payload.body);
                        }
                      }
                    });
                    _context6.next = 12;
                    return this.fcm.requestPushPermission();

                  case 12:
                    this.hasPermission = _context6.sent;
                    console.log('requestPushPermission result: ', this.hasPermission);
                    _context6.next = 16;
                    return this.fcm.hasPermission();

                  case 16:
                    this.hasIosPermission = _context6.sent;
                    console.log('requestIosPushPermission result: ', this.hasIosPermission);
                    _context6.next = 20;
                    return this.fcm.getToken();

                  case 20:
                    this.token = _context6.sent;
                    window.localStorage.setItem(this.key, this.token);
                    console.log('getToken result: ', this.token);

                    if (this.platform.is('ios')) {
                      intApns = setInterval(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.fcm.getAPNSToken();

                                case 2:
                                  this.apnstoken = _context5.sent;
                                  console.log('getAPNSToken result: ', this.apnstoken);

                                  if (this.apnstoken) {
                                    clearInterval(intApns);
                                    window.localStorage.setItem('apnsToken', this.apnstoken);
                                  }

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, 2000);
                    }

                    _context6.next = 26;
                    return this.fcm.getInitialPushPayload();

                  case 26:
                    this.pushPayload = _context6.sent;
                    console.log('getInitialPushPayload result: ', this.pushPayload);

                    if (this.pushPayload !== null) {
                      // let data = JSON.parse(this.pushPayload.a_data);
                      if (this.pushPayload.a_data.msg_type === 1) {
                        this.sendToma(this.pushPayload.a_data.treatment_id, this.pushPayload.body);
                      } else if (this.pushPayload.a_data.msg_type === 2) {
                        this.sendToma1(this.pushPayload.body);
                      } else if (this.pushPayload.a_data.msg_type === 3) {
                        this.sendToma2(this.pushPayload.body);
                      } else if (this.pushPayload.a_data.msg_type === 4) {
                        this.sendToma3(this.pushPayload.body, this.pushPayload.a_data.treatment_id);
                      } else if (this.pushPayload.a_data.msg_type === 5) {
                        this.sendToma2(this.pushPayload.body);
                      } else if (this.pushPayload.a_data.msg_type === 6) {
                        this.sendToma2(this.pushPayload.body);
                      }
                    }

                  case 29:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "goHome",
        // getPush() {
        //   this.push.hasPermission().then((res) => {
        //     if (res.isEnabled) {
        //       console.log('Si hay permisos para notificaciones push');
        //     } else {
        //       console.log('No hay permisos para notificaciones push');
        //     }
        //   });
        //   const options: PushOptions = {
        //     android: {
        //       senderID: '193162804196',
        //       forceShow: true
        //     },
        //     ios: {
        //       // senderID: 'SENDER_ID',//si no lo pones, se generará un token para APNS
        //       alert: 'true',
        //       badge: true,
        //       sound: 'false'
        //     },
        //     windows: {}
        //   };
        //   const pushObject: PushObject = this.push.init(options);
        //   pushObject.on('notification').subscribe((notification: any) => {
        //     //aquí recibimos las notificaciones de firebase
        //     console.log(notification);
        //     alert(notification);
        //   });
        //   pushObject.on('registration').subscribe((registration: any) => {
        //     const registrationId = registration.registrationId;
        //     console.log("registration",registrationId);
        //     //registrationId lo debes guardar en mysql o similar para reutilizar
        //   });
        //   pushObject.on('error').subscribe(error => {
        //     console.error('Error with Push plugin', error)
        //   });
        // }
        value: function goHome() {
          this.router.navigate(['home']);
        }
      }, {
        key: "goPerfil",
        value: function goPerfil() {
          this.router.navigate(['perfil']);
        }
      }, {
        key: "goMedicamentos",
        value: function goMedicamentos() {
          this.router.navigate(['medicamentos']);
        }
      }, {
        key: "goMensajes",
        value: function goMensajes() {
          this.router.navigate(['mensajes']);
        }
      }, {
        key: "goPastillero",
        value: function goPastillero() {
          this.router.navigate(['mipastillero']);
        }
      }, {
        key: "goAcercade",
        value: function goAcercade() {
          this.router.navigate(['acercade']);
        }
      }, {
        key: "goOut",
        value: function goOut() {
          this.auth.logout();
        }
      }, {
        key: "pushPayloadString",
        get: function get() {
          return JSON.stringify(this.pushPayload, null, 4);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"]
      }, {
        type: _services_tratamientos_service__WEBPACK_IMPORTED_MODULE_10__["TratamientosService"]
      }, {
        type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
      }, {
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/background-mode/ngx */
    "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
    "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js"); // import { GooglePlus } from '@ionic-native/google-plus/ngx';
    // import { Facebook } from '@ionic-native/facebook/ngx';
    //FCM


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_19__["FCM"], // GooglePlus,
      // Facebook,
      {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], File, _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_17__["NativeStorage"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__["LocalNotifications"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_18__["BackgroundMode"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router, alertController) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
        this.alertController = alertController;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var _this7 = this;

          return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            console.log('in canactivate', user);

            if (!user) {
              _this7.alertController.create({
                animated: true,
                header: 'Acceso denegado',
                message: 'No tienes acceso a esta pagina',
                buttons: ['OK']
              }).then(function (alert) {
                return alert.present();
              });

              return false;
            } else {
              return true;
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/auto-login.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/guards/auto-login.guard.ts ***!
    \********************************************/

  /*! exports provided: AutoLoginGuard */

  /***/
  function srcAppGuardsAutoLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoLoginGuard", function () {
      return AutoLoginGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AutoLoginGuard = /*#__PURE__*/function () {
      function AutoLoginGuard(authService, router) {
        _classCallCheck(this, AutoLoginGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AutoLoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this8 = this;

          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), // Otherwise the Observable doesn't complete!
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            console.log('Found previous token, automatic login');

            if (user) {
              // Directly open inside area       
              _this8.router.navigate(['home']);
            } else {
              // Simply allow access to the login
              return true;
            }
          }));
        }
      }]);

      return AutoLoginGuard;
    }();

    AutoLoginGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AutoLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AutoLoginGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/config.service */
    "./src/app/services/config.service.ts"); // import { GooglePlus } from '@ionic-native/google-plus/ngx';
    // import { Facebook } from '@ionic-native/facebook/ngx';


    var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
    var TOKEN_KEY = 'jwt-token';
    var USUARIOS = 'user-logged';

    var AuthService = /*#__PURE__*/function () {
      function AuthService(storage, http, plt, router, // private facebook: Facebook,
      // private googlePlus: GooglePlus,
      config, alertController) {
        _classCallCheck(this, AuthService);

        this.storage = storage;
        this.http = http;
        this.plt = plt;
        this.router = router;
        this.config = config;
        this.alertController = alertController;
        this.apiURL = "user/user-login/0?";
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.normalLogin = false;
        this.googleLogin = false;
        this.fbLogin = false;
        this.base_url = config.get_base_url();
        this.loadStoredToken();
      }

      _createClass(AuthService, [{
        key: "loadStoredToken",
        value: function loadStoredToken() {
          var _this9 = this;

          var platformObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.plt.ready());
          this.user = platformObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this9.storage.get(TOKEN_KEY));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (token) {
            console.log('token from storage', token);

            if (token) {
              var decoded = helper.decodeToken(token); // console.log('decoded: ', decoded);

              _this9.userData.next(decoded);

              return true;
            } else {
              return null;
            }
          }));
        }
      }, {
        key: "login",
        value: function login(credentials) {
          var _this10 = this;

          var data;
          data = this.http.get("".concat(this.base_url).concat(this.apiURL, "email=").concat(credentials.email, "&password=").concat(credentials.password));
          data.subscribe(function (result) {
            _this10.items = result;
            _this10.items2 = _this10.items.data.status;
            /* if (this.items) {
              this.usuario = { name: this.items.name, email: this.items.email, user_id: this.items.data.user_id };
            } */
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.items3 = err.status;
                      console.log('this.items3: ', this.items3);

                      if (!(this.items3 === 401 || credentials.email === '' || credentials.password === '')) {
                        _context7.next = 10;
                        break;
                      }

                      console.log('Usuario o contraseña incorrecto');
                      _context7.next = 6;
                      return this.alertController.create({
                        header: 'Login Failed',
                        message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">Usuario o contraseña incorrectos',
                        mode: 'ios',
                        cssClass: 'failed',
                        buttons: [{
                          text: 'Aceptar',
                          cssClass: 'btnalert'
                        }]
                      });

                    case 6:
                      alert = _context7.sent;
                      _context7.next = 9;
                      return alert.present();

                    case 9:
                      return _context7.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null));

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }, function () {
            console.log(':logueo exitoso mediante correo', _this10.items);
            _this10.usuario = {
              name: _this10.items.name,
              email: _this10.items.email,
              user_id: _this10.items.data.user_id
            };
            console.log('this.usuario: ', _this10.usuario);
            _this10.normalLogin = true;
          });
          return this.http.get("".concat(this.base_url).concat(this.apiURL, "email=").concat(credentials.email, "&password=").concat(credentials.password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
            return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRyYXphbWVkIiwiaWF0IjoxNTE2MjM5MDIyfQ.4x0iejWjRVH3V7ULcX0-vRmxeR8NLdlFGvx69CuBrrY";
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (token) {
            var decoded = helper.decodeToken(token); // console.log('login decoded: ', decoded);

            _this10.userData.next(decoded);

            window.localStorage.setItem(USUARIOS, JSON.stringify(_this10.usuario));
            var storageObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(_this10.storage.set(TOKEN_KEY, token));
            /* if (this.items2 !== 'ACTIVE'){
              return of(null);
            } */

            return storageObs;
          }));
        } // loginGoogle(datas){
        //   return this.http.get(`https://randomuser.me/api/`).pipe(
        //     take(1),
        //     map(res => {
        //       return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRyYXphbWVkIiwiaWF0IjoxNTE2MjM5MDIyfQ.4x0iejWjRVH3V7ULcX0-vRmxeR8NLdlFGvx69CuBrrY`;
        //     }),
        //     switchMap((token) => {
        //       let decoded = helper.decodeToken(token);
        //       // console.log('login decoded: ', decoded);
        //       this.userData.next(decoded);
        //       window.localStorage.setItem(USUARIOS, JSON.stringify(datas));
        //       let storageObs = from(this.storage.set(TOKEN_KEY, token));
        //       this.googleLogin = true;
        //       /* if (this.items2 !== 'ACTIVE'){
        //         return of(null);
        //       } */
        //       return  storageObs;
        //     })
        //   );
        // }
        // loginFacebook(dataFacebook){
        // console.log('dataFacebook: ', dataFacebook);
        //   return this.http.get(`https://randomuser.me/api/`).pipe(
        //     take(1),
        //     map(res => {
        //       return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRyYXphbWVkIiwiaWF0IjoxNTE2MjM5MDIyfQ.4x0iejWjRVH3V7ULcX0-vRmxeR8NLdlFGvx69CuBrrY`;
        //     }),
        //     switchMap((token) => {
        //       let decoded = helper.decodeToken(token);
        //       // console.log('login decoded: ', decoded);
        //       this.userData.next(decoded);
        //       window.localStorage.setItem(USUARIOS, JSON.stringify(dataFacebook));
        //       let storageObs = from(this.storage.set(TOKEN_KEY, token));
        //       this.fbLogin = true;
        //       /* if (this.items2 !== 'ACTIVE'){
        //         return of(null);
        //       } */
        //       return  storageObs;
        //     })
        //   );
        // }
        // loginApple(){}

      }, {
        key: "getusuario",
        value: function getusuario() {
          return JSON.parse(window.localStorage.getItem(USUARIOS));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this11 = this;

          console.log('normal login', this.normalLogin);
          console.log('google login', this.googleLogin); // console.log('facebook login', this.fbLogin);

          if (this.normalLogin === true) {
            this.storage.remove(TOKEN_KEY).then(function () {
              window.localStorage.removeItem(USUARIOS);

              _this11.router.navigateByUrl('/login1');

              _this11.userData.next(null);

              _this11.normalLogin = false;
            });
          } // else if(this.googleLogin === true){
          //   this.googlePlus.logout().then(logOutRes =>{
          //     console.log('logOutRes: ', logOutRes);
          //       window.localStorage.removeItem('GoogleUser');
          //       this.router.navigateByUrl('/login1');
          //       this.userData.next(null);
          //       this.googleLogin = false;
          //   });
          // }else if(this.fbLogin === true){
          //   this.facebook.logout().then(res => {
          //     console.log('res: ', res);
          //     window.localStorage.removeItem('FacebookUser');
          //       this.router.navigateByUrl('/login1');
          //       this.userData.next(null);
          //       this.fbLogin = false;
          //   });
          // }

        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/config.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/config.service.ts ***!
    \********************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);

        this.base_url = 'https://drazamed.com/';
      }

      _createClass(ConfigService, [{
        key: "get_base_url",
        value: function get_base_url() {
          return this.base_url;
        }
      }]);

      return ConfigService;
    }();

    ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConfigService);
    /***/
  },

  /***/
  "./src/app/services/tratamientos.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/tratamientos.service.ts ***!
    \**************************************************/

  /*! exports provided: TratamientosService */

  /***/
  function srcAppServicesTratamientosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TratamientosService", function () {
      return TratamientosService;
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


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/services/config.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var TratamientosService = /*#__PURE__*/function () {
      function TratamientosService(storage, platform, http, config, auth, localNotifications) {
        _classCallCheck(this, TratamientosService);

        this.storage = storage;
        this.platform = platform;
        this.http = http;
        this.config = config;
        this.auth = auth;
        this.localNotifications = localNotifications;
        this.alarm = [];
        this.alarmas = [];
        this.key = 'getAlarma';
        this.apiUrl = "my-treatments?email=";
        this.cartUrl = "medicine/add-cart/0?";
        this.cart2 = [];
        this.items2 = [];
        this.proxPedido = [];
        this.intervalos = [];
        this.mycart = "my-cart-app?email=";
        this.base_url = config.get_base_url();
      }

      _createClass(TratamientosService, [{
        key: "getTreatmen",
        value: function getTreatmen() {
          var _this12 = this;

          var _iterator = _createForOfIteratorHelper(this.alarm),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var tim = _step.value;
              clearInterval(this.intervalos[tim.item_code]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.proxPedido.splice(0, this.proxPedido.length);
          this.alarm.splice(0, this.alarm.length);
          this.items2.splice(0, this.items2.length);
          this.user1 = this.auth.getusuario();
          this.userid = this.user1.email;
          this.http.get("".concat(this.base_url).concat(this.apiUrl).concat(this.userid)).subscribe(function (val) {
            _this12.items = val;

            var _iterator2 = _createForOfIteratorHelper(_this12.items),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                var next_date = item.next_time;
                item.next_time = moment__WEBPACK_IMPORTED_MODULE_8__(item.next_time).format('LT');
                item.medicines[0].next_time = item.next_time;
                item.medicines[0].next_date = next_date;
                item.medicines[0].dosis = item.dosis;
                item.medicines[0].frequency = item.frequency;
                item.medicines[0].taken = item.taken;
                item.medicines[0].total = item.total;
                item.medicines[0].buy_time = moment__WEBPACK_IMPORTED_MODULE_8__(item.buy_time).format();
                item.medicines[0].isReorden = item.hasReorden;
                _this12.items3 = item.medicines;

                for (var i = 0; i < _this12.items3.length; i++) {
                  _this12.items2.push(_this12.items3[i]);

                  _this12.alarm = _this12.items2;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(_this12.alarm),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var time = _step3.value;

                _this12.TimeRemaining(time.item_code, time.next_date);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            console.log(_this12.alarm);

            _this12.setCurrentPedido(_this12.alarm);
          });
        }
      }, {
        key: "getAlarma",
        value: function getAlarma() {
          return this.alarm;
        }
      }, {
        key: "TimeRemaining",
        value: function TimeRemaining(item_code, next_time) {
          var _this13 = this;

          if (next_time !== null) {
            var alarma = {
              timeH: 0,
              timeM: 0,
              timeD: 0,
              item_code: item_code,
              taken: 0
            };
            this.intervalos[item_code] = setInterval(function () {
              var dateObjective = moment__WEBPACK_IMPORTED_MODULE_8__(next_time);
              var now = moment__WEBPACK_IMPORTED_MODULE_8__();
              var timeleft = 0;
              timeleft = dateObjective.diff(now);
              var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
              var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60) + 1);

              if (minutes !== 60) {
                alarma.timeH = hours;
                alarma.timeM = minutes;
                alarma.timeD = days; // console.log("Dias:", days, "Minutos:", minutes, "Horas:", hours);

                _this13.addAlarm(alarma);
              } else {
                alarma.timeH = hours + 1;
                alarma.timeM = 0;
                alarma.timeD = days;

                _this13.addAlarm(alarma);
              }

              if (timeleft < 0) {
                alarma.timeH = 0;
                alarma.timeM = 0;
                alarma.timeD = 0;
                console.log(alarma);
                clearInterval(_this13.intervalos[item_code]);

                _this13.addAlarm(alarma); //  this.TimeRemaining(item_code, next_time);

              }
            }, 1000);
          } else {
            var _alarma = {
              timeH: 0,
              timeM: 0,
              timeD: 0,
              item_code: item_code,
              taken: 0
            };
            _alarma.timeH = 0;
            _alarma.timeM = 0;
            _alarma.timeD = 0;
            console.log(_alarma);
            this.addAlarm(_alarma);
          }
        }
      }, {
        key: "addAlarm",
        value: function addAlarm(alarma) {
          //console.log(alarma);
          var added = false;

          var _iterator4 = _createForOfIteratorHelper(this.alarm),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var alar = _step4.value;

              if (alar.item_code === alarma.item_code) {
                if (alarma.taken !== 0) {
                  alar.taken += alarma.taken;
                  break;
                } else {
                  alar.taken += 0;
                  break;
                }
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var _iterator5 = _createForOfIteratorHelper(this.alarm),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var al = _step5.value;

              if (al.item_code === alarma.item_code) {
                al.timeM = alarma.timeM;
                al.timeH = alarma.timeH;
                al.timeD = alarma.timeD;
              }

              added = true;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (!added) {
            this.alarm.push(alarma);
            console.log(this.alarm);
          }
        }
      }, {
        key: "removeAlarm",
        value: function removeAlarm(alarma) {
          var _iterator6 = _createForOfIteratorHelper(this.alarm.entries()),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _step6$value = _slicedToArray(_step6.value, 2),
                  index = _step6$value[0],
                  p = _step6$value[1];

              if (p.item_code === alarma.item_code) {
                this.alarm.splice(index, 1);
                clearInterval(this.intervalos[alarma.item_code]);
                this.user1 = this.auth.getusuario();
                this.userid = this.user1.email;
                this.del = {
                  email: this.userid,
                  item_code: alarma.item_code
                };
                this.http.post("".concat(this.base_url, "treatment/delete-treatment"), this.del).subscribe(function (val) {
                  console.log(val); //this.getTreatmen();
                });
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }, {
        key: "setCurrentPedido",
        value: function setCurrentPedido(treatment) {
          var _this14 = this;

          this.user1 = this.auth.getusuario();
          this.userid = this.user1.email;

          if (this.proxPedido.length !== 0) {
            var _iterator7 = _createForOfIteratorHelper(treatment),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var trt = _step7.value;

                var _iterator8 = _createForOfIteratorHelper(this.proxPedido),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var trt2 = _step8.value;

                    if (trt.isReorden !== 1) {
                      if (trt2.item_code !== trt.item_code) {
                        this.proxPedido.push(trt);
                        break;
                      }
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } else {
            var _iterator9 = _createForOfIteratorHelper(treatment),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _trt = _step9.value;

                if (_trt.isReorden !== 1) {
                  this.proxPedido.push(_trt);
                  this.http.get("".concat(this.base_url).concat(this.mycart).concat(this.userid)).subscribe(function (val) {
                    _this14.items = val; // this.cart = this.items.items;

                    _this14.cart2 = _this14.items.items;

                    var _iterator10 = _createForOfIteratorHelper(_this14.cart2),
                        _step10;

                    try {
                      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                        var NormalCart = _step10.value;

                        if (NormalCart.isReorden === 1) {
                          _this14.proxPedido.push(NormalCart);
                        }
                      }
                    } catch (err) {
                      _iterator10.e(err);
                    } finally {
                      _iterator10.f();
                    }
                  });
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }
      }, {
        key: "getProxPedido",
        value: function getProxPedido() {
          return this.proxPedido;
        }
      }, {
        key: "addMedProxPedido",
        value: function addMedProxPedido(product) {
          var added = false;

          var _iterator11 = _createForOfIteratorHelper(this.proxPedido),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var p = _step11.value;

              if (p.item_code == product.item_code) {
                added = true;
                break;
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          if (!added) {
            this.proxPedido.push(product);
            this.user = this.auth.getusuario();
            this.userid = this.user.user_id;
            this.http.get("".concat(this.base_url).concat(this.cartUrl, "id=").concat(product.id, "&medicine=").concat(product.value || product.name, "&med_quantity=1&is_reorden=1&hidden_item_code=").concat(product.item_code, "\n      &hidden_selling_price=").concat(product.mrp, "&pres_required=").concat(product.is_pres_required, "&user_id=").concat(this.userid)).subscribe(function (val) {
              console.log(val);
            });
          }
        }
      }, {
        key: "rmMedProxPedido",
        value: function rmMedProxPedido(medicine) {
          var _iterator12 = _createForOfIteratorHelper(this.proxPedido.entries()),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _step12$value = _slicedToArray(_step12.value, 2),
                  index = _step12$value[0],
                  p = _step12$value[1];

              if (p.item_code === medicine.item_code) {
                this.proxPedido.splice(index, 1);
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
      }, {
        key: "rmAllProx",
        value: function rmAllProx() {
          this.proxPedido.length = 0;
        }
      }]);

      return TratamientosService;
    }();

    TratamientosService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"]
      }];
    };

    TratamientosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], TratamientosService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/user197396/AppDrazamed/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map