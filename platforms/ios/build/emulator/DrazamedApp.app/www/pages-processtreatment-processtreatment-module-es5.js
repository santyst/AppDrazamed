function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-processtreatment-processtreatment-module"], {
  /***/
  "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js ***!
    \*************************************************************************************/

  /*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */

  /***/
  function node_modulesNgCircleProgress__ivy_ngcc__Fesm2015NgCircleProgressJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function () {
      return CircleProgressComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function () {
      return CircleProgressOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function () {
      return NgCircleProgressModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "linearGradient");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.svg.outerLinearGradient.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.svg.radialGradient.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("fill", "url(#", ctx_r9.svg.radialGradient.id, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 7, "circle", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.options.backgroundGradient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.options.backgroundGradient);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("stroke", "url(#", ctx_r11.svg.outerLinearGradient.id, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 5, "path", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.options.outerStrokeGradient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.outerStrokeGradient);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tspan_r16 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r16.span);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.svg.title.tspans);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.svg.units.text);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tspan_r18 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r18.span);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.svg.subtitle.tspans);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showUnits);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showSubtitle);
      }
    }

    function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 9);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
      }
    }

    function CircleProgressComponent__svg_svg_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleProgressComponent__svg_svg_0_Template__svg_svg_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.emitClickEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0.svg.viewBox)("height", ctx_r0.svg.height)("width", ctx_r0.svg.width)("class", ctx_r0.options["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.outerStrokeGradient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.backgroundGradient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showBackground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showInnerStroke);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.percent - 0 !== 0 || ctx_r0.options.showZeroOuterStroke);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options.showImage && (ctx_r0.options.showTitle || ctx_r0.options.showUnits || ctx_r0.options.showSubtitle));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showImage);
      }
    }

    var CircleProgressOptions = function CircleProgressOptions() {
      _classCallCheck(this, CircleProgressOptions);

      this["class"] = '';
      this.backgroundGradient = false;
      this.backgroundColor = 'transparent';
      this.backgroundGradientStopColor = 'transparent';
      this.backgroundOpacity = 1;
      this.backgroundStroke = 'transparent';
      this.backgroundStrokeWidth = 0;
      this.backgroundPadding = 5;
      this.percent = 0;
      this.radius = 90;
      this.space = 4;
      this.toFixed = 0;
      this.maxPercent = 1000;
      this.renderOnClick = true;
      this.units = '%';
      this.unitsFontSize = '10';
      this.unitsFontWeight = 'normal';
      this.unitsColor = '#444444';
      this.outerStrokeGradient = false;
      this.outerStrokeWidth = 8;
      this.outerStrokeColor = '#78C000';
      this.outerStrokeGradientStopColor = 'transparent';
      this.outerStrokeLinecap = 'round';
      this.innerStrokeColor = '#C7E596';
      this.innerStrokeWidth = 4;
      this.titleFormat = undefined;
      this.title = 'auto';
      this.titleColor = '#444444';
      this.titleFontSize = '20';
      this.titleFontWeight = 'normal';
      this.subtitleFormat = undefined;
      this.subtitle = 'progress';
      this.subtitleColor = '#A9A9A9';
      this.subtitleFontSize = '10';
      this.subtitleFontWeight = 'normal';
      this.imageSrc = undefined;
      this.imageHeight = undefined;
      this.imageWidth = undefined;
      this.animation = true;
      this.animateTitle = true;
      this.animateSubtitle = false;
      this.animationDuration = 500;
      this.showTitle = true;
      this.showSubtitle = true;
      this.showUnits = true;
      this.showImage = false;
      this.showBackground = true;
      this.showInnerStroke = true;
      this.clockwise = true;
      this.responsive = false;
      this.startFromZero = true;
      this.showZeroOuterStroke = true;
      this.lazy = false;
    };
    /** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */


    var CircleProgressComponent = /*#__PURE__*/function () {
      function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;

        _classCallCheck(this, CircleProgressComponent);

        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // <svg> of component

        this.svgElement = null; // whether <svg> is in viewport

        this.isInViewport = false; // event for notifying viewport change caused by scrolling or resizing

        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;

        this.render = function () {
          _this.applyOptions();

          if (_this.options.lazy) {
            // Draw svg if it doesn't exist
            _this.svgElement === null && _this.draw(_this._lastPercent); // Draw it only when it's in the viewport

            if (_this.isInViewport) {
              // Draw it at the latest position when I am in.
              if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate(_this._lastPercent, _this.options.percent);
              } else {
                _this.draw(_this.options.percent);
              }

              _this._lastPercent = _this.options.percent;
            }
          } else {
            if (_this.options.animation && _this.options.animationDuration > 0) {
              _this.animate(_this._lastPercent, _this.options.percent);
            } else {
              _this.draw(_this.options.percent);
            }

            _this._lastPercent = _this.options.percent;
          }
        };

        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
          var angleInRadius = angleInDegrees * Math.PI / 180;
          var x = centerX + Math.sin(angleInRadius) * radius;
          var y = centerY - Math.cos(angleInRadius) * radius;
          return {
            x: x,
            y: y
          };
        };

        this.draw = function (percent) {
          // make percent reasonable
          percent = percent === undefined ? _this.options.percent : Math.abs(percent); // circle percent shouldn't be greater than 100%.

          var circlePercent = percent > 100 ? 100 : percent; // determine box size

          var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;

          if (_this.options.showBackground) {
            boxSize += _this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2);
          } // the centre of the circle


          var centre = {
            x: boxSize / 2,
            y: boxSize / 2
          }; // the start point of the arc

          var startPoint = {
            x: centre.x,
            y: centre.y - _this.options.radius
          }; // get the end point of the arc

          var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ? circlePercent : 100 - circlePercent) / 100); // ####################
          // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.


          if (circlePercent === 100) {
            endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
          } // largeArcFlag and sweepFlag


          var largeArcFlag, sweepFlag;

          if (circlePercent > 50) {
            var _ref = _this.options.clockwise ? [1, 1] : [1, 0];

            var _ref2 = _slicedToArray(_ref, 2);

            largeArcFlag = _ref2[0];
            sweepFlag = _ref2[1];
          } else {
            var _ref3 = _this.options.clockwise ? [0, 1] : [0, 0];

            var _ref4 = _slicedToArray(_ref3, 2);

            largeArcFlag = _ref4[0];
            sweepFlag = _ref4[1];
          } // percent may not equal the actual percent


          var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
          var titleTextPercent = titlePercent > _this.options.maxPercent ? "".concat(_this.options.maxPercent.toFixed(_this.options.toFixed), "+") : titlePercent.toFixed(_this.options.toFixed);
          var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent; // get title object

          var title = {
            x: centre.x,
            y: centre.y,
            textAnchor: 'middle',
            color: _this.options.titleColor,
            fontSize: _this.options.titleFontSize,
            fontWeight: _this.options.titleFontWeight,
            texts: [],
            tspans: []
          }; // from v0.9.9, both title and titleFormat(...) may be an array of string.

          if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
            var formatted = _this.options.titleFormat(titlePercent);

            if (formatted instanceof Array) {
              title.texts = _toConsumableArray(formatted);
            } else {
              title.texts.push(formatted.toString());
            }
          } else {
            if (_this.options.title === 'auto') {
              title.texts.push(titleTextPercent);
            } else {
              if (_this.options.title instanceof Array) {
                title.texts = _toConsumableArray(_this.options.title);
              } else {
                title.texts.push(_this.options.title.toString());
              }
            }
          } // get subtitle object


          var subtitle = {
            x: centre.x,
            y: centre.y,
            textAnchor: 'middle',
            color: _this.options.subtitleColor,
            fontSize: _this.options.subtitleFontSize,
            fontWeight: _this.options.subtitleFontWeight,
            texts: [],
            tspans: []
          }; // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.

          if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
            var _formatted = _this.options.subtitleFormat(subtitlePercent);

            if (_formatted instanceof Array) {
              subtitle.texts = _toConsumableArray(_formatted);
            } else {
              subtitle.texts.push(_formatted.toString());
            }
          } else {
            if (_this.options.subtitle instanceof Array) {
              subtitle.texts = _toConsumableArray(_this.options.subtitle);
            } else {
              subtitle.texts.push(_this.options.subtitle.toString());
            }
          } // get units object


          var units = {
            text: "".concat(_this.options.units),
            fontSize: _this.options.unitsFontSize,
            fontWeight: _this.options.unitsFontWeight,
            color: _this.options.unitsColor
          }; // get total count of text lines to be shown

          var rowCount = 0,
              rowNum = 1;
          _this.options.showTitle && (rowCount += title.texts.length);
          _this.options.showSubtitle && (rowCount += subtitle.texts.length); // calc dy for each tspan for title

          if (_this.options.showTitle) {
            var _iterator = _createForOfIteratorHelper(title.texts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var span = _step.value;
                title.tspans.push({
                  span: span,
                  dy: _this.getRelativeY(rowNum, rowCount)
                });
                rowNum++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } // calc dy for each tspan for subtitle


          if (_this.options.showSubtitle) {
            var _iterator2 = _createForOfIteratorHelper(subtitle.texts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _span = _step2.value;
                subtitle.tspans.push({
                  span: _span,
                  dy: _this.getRelativeY(rowNum, rowCount)
                });
                rowNum++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // create ID for gradient element


          if (null === _this._gradientUUID) {
            _this._gradientUUID = _this.uuid();
          } // Bring it all together


          _this.svg = {
            viewBox: "0 0 ".concat(boxSize, " ").concat(boxSize),
            // Set both width and height to '100%' if it's responsive
            width: _this.options.responsive ? '100%' : boxSize,
            height: _this.options.responsive ? '100%' : boxSize,
            backgroundCircle: {
              cx: centre.x,
              cy: centre.y,
              r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
              fill: _this.options.backgroundColor,
              fillOpacity: _this.options.backgroundOpacity,
              stroke: _this.options.backgroundStroke,
              strokeWidth: _this.options.backgroundStrokeWidth
            },
            path: {
              // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
              d: "M ".concat(startPoint.x, " ").concat(startPoint.y, "\n        A ").concat(_this.options.radius, " ").concat(_this.options.radius, " 0 ").concat(largeArcFlag, " ").concat(sweepFlag, " ").concat(endPoint.x, " ").concat(endPoint.y),
              stroke: _this.options.outerStrokeColor,
              strokeWidth: _this.options.outerStrokeWidth,
              strokeLinecap: _this.options.outerStrokeLinecap,
              fill: 'none'
            },
            circle: {
              cx: centre.x,
              cy: centre.y,
              r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
              fill: 'none',
              stroke: _this.options.innerStrokeColor,
              strokeWidth: _this.options.innerStrokeWidth
            },
            title: title,
            units: units,
            subtitle: subtitle,
            image: {
              x: centre.x - _this.options.imageWidth / 2,
              y: centre.y - _this.options.imageHeight / 2,
              src: _this.options.imageSrc,
              width: _this.options.imageWidth,
              height: _this.options.imageHeight
            },
            outerLinearGradient: {
              id: 'outer-linear-' + _this._gradientUUID,
              colorStop1: _this.options.outerStrokeColor,
              colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor
            },
            radialGradient: {
              id: 'radial-' + _this._gradientUUID,
              colorStop1: _this.options.backgroundColor,
              colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor
            }
          };
        };

        this.getAnimationParameters = function (previousPercent, currentPercent) {
          var MIN_INTERVAL = 10;
          var times, step, interval;
          var fromPercent = _this.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
          var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
          var delta = Math.abs(Math.round(toPercent - fromPercent));

          if (delta >= 100) {
            // we will finish animation in 100 times
            times = 100;

            if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
              step = 1;
            } else {
              // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
              step = Math.round(delta / times);
            }
          } else {
            // we will finish in as many times as the number of percent.
            times = delta;
            step = 1;
          } // Get the interval of timer


          interval = Math.round(_this.options.animationDuration / times); // Readjust all values if the interval of timer is extremely small.

          if (interval < MIN_INTERVAL) {
            interval = MIN_INTERVAL;
            times = _this.options.animationDuration / interval;

            if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
              step = Math.round(100 / times);
            } else {
              step = Math.round(delta / times);
            }
          } // step must be greater than 0.


          if (step < 1) {
            step = 1;
          }

          return {
            times: times,
            step: step,
            interval: interval
          };
        };

        this.animate = function (previousPercent, currentPercent) {
          if (_this._timerSubscription && !_this._timerSubscription.closed) {
            _this._timerSubscription.unsubscribe();
          }

          var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
          var toPercent = currentPercent;

          var _this$getAnimationPar = _this.getAnimationParameters(fromPercent, toPercent),
              step = _this$getAnimationPar.step,
              interval = _this$getAnimationPar.interval;

          var count = fromPercent;

          if (fromPercent < toPercent) {
            _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
              count += step;

              if (count <= toPercent) {
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                } else {
                  _this.draw(count);
                }
              } else {
                _this.draw(toPercent);

                _this._timerSubscription.unsubscribe();
              }
            });
          } else {
            _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
              count -= step;

              if (count >= toPercent) {
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                } else {
                  _this.draw(count);
                }
              } else {
                _this.draw(toPercent);

                _this._timerSubscription.unsubscribe();
              }
            });
          }
        };

        this.emitClickEvent = function (event) {
          if (_this.options.renderOnClick) {
            _this.animate(0, _this.options.percent);
          }

          _this.onClick.emit(event);
        };

        this.applyOptions = function () {
          // the options of <circle-progress> may change already
          for (var _i2 = 0, _Object$keys = Object.keys(_this.options); _i2 < _Object$keys.length; _i2++) {
            var name = _Object$keys[_i2];

            if (_this.hasOwnProperty(name) && _this[name] !== undefined) {
              _this.options[name] = _this[name];
            } else if (_this.templateOptions && _this.templateOptions[name] !== undefined) {
              _this.options[name] = _this.templateOptions[name];
            }
          } // make sure key options valid


          _this.options.radius = Math.abs(+_this.options.radius);
          _this.options.space = +_this.options.space;
          _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
          _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
          _this.options.animationDuration = Math.abs(_this.options.animationDuration);
          _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
          _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
          _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };

        this.getRelativeY = function (rowNum, rowCount) {
          // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
          var initialOffset = -0.18,
              offset = 1;
          return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };

        this.min = function (a, b) {
          return a < b ? a : b;
        };

        this.max = function (a, b) {
          return a > b ? a : b;
        };

        this.uuid = function () {
          // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
          var dt = new Date().getTime();
          var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
          });
          return uuid;
        };

        this.findSvgElement = function () {
          if (this.svgElement === null) {
            var tags = this.elRef.nativeElement.getElementsByTagName('svg');

            if (tags.length > 0) {
              this.svgElement = tags[0];
            }
          }
        };

        this.checkViewport = function () {
          _this.findSvgElement();

          var previousValue = _this.isInViewport;
          _this.isInViewport = _this.isElementInViewport(_this.svgElement);

          if (previousValue !== _this.isInViewport) {
            _this.onViewportChanged.emit({
              oldValue: previousValue,
              newValue: _this.isInViewport
            });
          }
        };

        this.onScroll = function (event) {
          _this.checkViewport();
        };

        this.loadEventsForLazyMode = function () {
          if (_this.options.lazy) {
            _this.document.addEventListener('scroll', _this.onScroll, true);

            _this.window.addEventListener('resize', _this.onScroll, true);

            if (_this._viewportChangedSubscriber === null) {
              _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_ref5) {
                var oldValue = _ref5.oldValue,
                    newValue = _ref5.newValue;
                newValue ? _this.render() : null;
              });
            } // svgElement must be created in DOM before being checked.
            // Is there a better way to check the existence of svgElemnt?


            var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(function () {
              _this.svgElement === null ? _this.checkViewport() : _timer.unsubscribe();
            });
          }
        };

        this.unloadEventsForLazyMode = function () {
          // Remove event listeners
          _this.document.removeEventListener('scroll', _this.onScroll, true);

          _this.window.removeEventListener('resize', _this.onScroll, true); // Unsubscribe onViewportChanged


          if (_this._viewportChangedSubscriber !== null) {
            _this._viewportChangedSubscriber.unsubscribe();

            _this._viewportChangedSubscriber = null;
          }
        };

        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
      }

      _createClass(CircleProgressComponent, [{
        key: "isDrawing",
        value: function isDrawing() {
          return this._timerSubscription && !this._timerSubscription.closed;
        }
      }, {
        key: "isElementInViewport",
        value: function isElementInViewport(el) {
          // Return false if el has not been created in page.
          if (el === null || el === undefined) return false; // Check if the element is out of view due to a container scrolling

          var rect = el.getBoundingClientRect(),
              parent = el.parentNode,
              parentRect;

          do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom) return false;
            if (rect.bottom <= parentRect.top) return false;
            if (rect.left >= parentRect.right) return false;
            if (rect.right <= parentRect.left) return false;
            parent = parent.parentNode;
          } while (parent != this.document.body); // Check its within the document viewport


          if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
          if (rect.bottom <= 0) return false;
          if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
          if (rect.right <= 0) return false;
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEventsForLazyMode();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unloadEventsForLazyMode();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.render();

          if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
          }
        }
      }]);

      return CircleProgressComponent;
    }();

    CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(t) {
      return new (t || CircleProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CircleProgressOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    CircleProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CircleProgressComponent,
      selectors: [["circle-progress"]],
      inputs: {
        name: "name",
        "class": "class",
        backgroundGradient: "backgroundGradient",
        backgroundColor: "backgroundColor",
        backgroundGradientStopColor: "backgroundGradientStopColor",
        backgroundOpacity: "backgroundOpacity",
        backgroundStroke: "backgroundStroke",
        backgroundStrokeWidth: "backgroundStrokeWidth",
        backgroundPadding: "backgroundPadding",
        radius: "radius",
        space: "space",
        percent: "percent",
        toFixed: "toFixed",
        maxPercent: "maxPercent",
        renderOnClick: "renderOnClick",
        units: "units",
        unitsFontSize: "unitsFontSize",
        unitsFontWeight: "unitsFontWeight",
        unitsColor: "unitsColor",
        outerStrokeGradient: "outerStrokeGradient",
        outerStrokeWidth: "outerStrokeWidth",
        outerStrokeColor: "outerStrokeColor",
        outerStrokeGradientStopColor: "outerStrokeGradientStopColor",
        outerStrokeLinecap: "outerStrokeLinecap",
        innerStrokeColor: "innerStrokeColor",
        innerStrokeWidth: "innerStrokeWidth",
        titleFormat: "titleFormat",
        title: "title",
        titleColor: "titleColor",
        titleFontSize: "titleFontSize",
        titleFontWeight: "titleFontWeight",
        subtitleFormat: "subtitleFormat",
        subtitle: "subtitle",
        subtitleColor: "subtitleColor",
        subtitleFontSize: "subtitleFontSize",
        subtitleFontWeight: "subtitleFontWeight",
        imageSrc: "imageSrc",
        imageHeight: "imageHeight",
        imageWidth: "imageWidth",
        animation: "animation",
        animateTitle: "animateTitle",
        animateSubtitle: "animateSubtitle",
        animationDuration: "animationDuration",
        showTitle: "showTitle",
        showSubtitle: "showSubtitle",
        showUnits: "showUnits",
        showImage: "showImage",
        showBackground: "showBackground",
        showInnerStroke: "showInnerStroke",
        clockwise: "clockwise",
        responsive: "responsive",
        startFromZero: "startFromZero",
        showZeroOuterStroke: "showZeroOuterStroke",
        lazy: "lazy",
        templateOptions: ["options", "templateOptions"]
      },
      outputs: {
        onClick: "onClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]],
      template: function CircleProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      encapsulation: 2
    });

    CircleProgressComponent.ctorParameters = function () {
      return [{
        type: CircleProgressOptions
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CircleProgressComponent.propDecorators = {
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "class": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundGradient: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundGradientStopColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundStroke: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundStrokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundPadding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      space: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      percent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      toFixed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxPercent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      renderOnClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      units: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      unitsFontSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      unitsFontWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      unitsColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outerStrokeGradient: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outerStrokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outerStrokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outerStrokeGradientStopColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outerStrokeLinecap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      innerStrokeColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      innerStrokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleFormat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleFontSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleFontWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitleFormat: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitleColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitleFontSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      subtitleFontWeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageSrc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animateTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animateSubtitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showSubtitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showUnits: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showBackground: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showInnerStroke: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clockwise: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      responsive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      startFromZero: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showZeroOuterStroke: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lazy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      templateOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['options']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'circle-progress',
          template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
        }]
      }], function () {
        return [{
          type: CircleProgressOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundGradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundGradientStopColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        space: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        percent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toFixed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        renderOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeGradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeGradientStopColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeLinecap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        innerStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        innerStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showUnits: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBackground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showInnerStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clockwise: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startFromZero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showZeroOuterStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lazy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templateOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['options']
        }]
      });
    })();

    var NgCircleProgressModule = /*#__PURE__*/function () {
      function NgCircleProgressModule() {
        _classCallCheck(this, NgCircleProgressModule);
      }

      _createClass(NgCircleProgressModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: NgCircleProgressModule,
            providers: [{
              provide: CircleProgressOptions,
              useValue: options
            }]
          };
        }
      }]);

      return NgCircleProgressModule;
    }();

    NgCircleProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgCircleProgressModule
    });
    NgCircleProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgCircleProgressModule_Factory(t) {
        return new (t || NgCircleProgressModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgCircleProgressModule, {
        declarations: function declarations() {
          return [CircleProgressComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [CircleProgressComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCircleProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [CircleProgressComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [CircleProgressComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of ng-circle-progress
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-circle-progress.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/processtreatment/processtreatment.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/processtreatment/processtreatment.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProcesstreatmentProcesstreatmentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <div class=\"div-header\">\n  <ion-toolbar class=\"header-styles\">\n    <img class=\"content-image\" src=\"../../../assets/img/LOGOS/LOGOS DRAZAMED_Mesa de trabajo 1.png\" alt=\"\">\n  </ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\" class=\"icono\" (click)=\"goHome()\">\n        <ion-icon size=\"large\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"carrito\" (click)=\"goPerfil\">\n        <img src=\"../../../assets/img/RECURSOS/iconos drazamed-cc-38.png\" class=\"carro1\">\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-header>\n\n<ion-content mode=\"md\">\n<div class=\"container\">\n  <p class=\"title_seccion center\">Proceso médico</p>\n  <ion-row class=\"result_search\">\n    <div class=\"select_options\">\n      <ion-col size=\"12\" class=\"align-self\">\n        <img src={{base_url}}{{apiUrl7}}{{alarma.item_code}}{{apiUrl8}} width=\"40%\" class=\"mx-auto d-block\">\n      </ion-col>\n    </div>\n    <div class=\"select_options\">\n      <ion-col size=\"12\">\n        <p class=\"name_product\">{{alarma.item_name}}</p>\n        <p class=\"description_product mt-20\">{{alarma.composition}}</p>\n        <p class=\"description_product mt-20\">\n          <b>{{alarma.dosis}} Tableta(s) cada {{alarma.frequency}} Horas</b>\n        </p>\n      </ion-col>\n    </div>\n    <div class=\"select_options center\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <p class=\"name_product\" *ngIf=\"alarma.next_date !== null\">Próxima</p>\n          <p class=\"description_product mt-20\" *ngIf=\"alarma.next_date !== null\">{{fecha}} {{alarma.next_time}}</p>\n          <p class=\"name_product2\" *ngIf=\"alarma.next_date === null\">Fin del tratamiento</p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col-item\">\n          <p class=\"name_product\">Tomadas</p>\n          <p class=\"description_product mt-20\">{{taken}} {{alarma.units}}</p>\n        </ion-col> \n        <ion-col size=\"4\" class=\"col-item\">\n          <p class=\"name_product\">Faltan</p>\n          <p class=\"description_product mt-20\">{{faltantes}} {{alarma.units}}</p>\n        </ion-col> \n      </ion-row>\n    </div>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"7\">\n      <circle-progress\n  [percent]=\"porcentaje\"\n></circle-progress>\n    </ion-col>\n    <ion-col size=\"5\" class=\"col-txt\">\n      <p class=\"name_product1\" *ngIf=\"restante !== 0\">Te falta el {{restante}}% de tu tratamiento médico.</p>\n      <p class=\"name_product1\" *ngIf=\"restante === 0\">Tu tratamiento ha finalizado</p>\n    </ion-col>\n  </ion-row>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/processtreatment/processtreatment-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/processtreatment/processtreatment-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProcesstreatmentPageRoutingModule */

  /***/
  function srcAppPagesProcesstreatmentProcesstreatmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcesstreatmentPageRoutingModule", function () {
      return ProcesstreatmentPageRoutingModule;
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


    var _processtreatment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./processtreatment.page */
    "./src/app/pages/processtreatment/processtreatment.page.ts");

    var routes = [{
      path: '',
      component: _processtreatment_page__WEBPACK_IMPORTED_MODULE_3__["ProcesstreatmentPage"]
    }];

    var ProcesstreatmentPageRoutingModule = function ProcesstreatmentPageRoutingModule() {
      _classCallCheck(this, ProcesstreatmentPageRoutingModule);
    };

    ProcesstreatmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProcesstreatmentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/processtreatment/processtreatment.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/processtreatment/processtreatment.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProcesstreatmentPageModule */

  /***/
  function srcAppPagesProcesstreatmentProcesstreatmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcesstreatmentPageModule", function () {
      return ProcesstreatmentPageModule;
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


    var _processtreatment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./processtreatment-routing.module */
    "./src/app/pages/processtreatment/processtreatment-routing.module.ts");
    /* harmony import */


    var _processtreatment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./processtreatment.page */
    "./src/app/pages/processtreatment/processtreatment.page.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

    var ProcesstreatmentPageModule = function ProcesstreatmentPageModule() {
      _classCallCheck(this, ProcesstreatmentPageModule);
    };

    ProcesstreatmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _processtreatment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProcesstreatmentPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
        backgroundOpacity: 1,
        backgroundStroke: '#f7f3f3',
        backgroundStrokeWidth: 0,
        backgroundPadding: 0,
        radius: 80,
        space: -17,
        toFixed: 0,
        maxPercent: 100,
        unitsFontSize: '50',
        unitsFontWeight: '700',
        unitsColor: '#00a2dd',
        outerStrokeWidth: 17,
        outerStrokeColor: '#00a2dd',
        outerStrokeGradientStopColor: '#b23838',
        outerStrokeLinecap: 'square',
        innerStrokeColor: '#ced3c5',
        innerStrokeWidth: 17,
        titleColor: '#00a2dd',
        titleFontSize: '50',
        titleFontWeight: '700',
        subtitleFontWeight: '100',
        animationDuration: 300,
        showSubtitle: false
      })],
      declarations: [_processtreatment_page__WEBPACK_IMPORTED_MODULE_6__["ProcesstreatmentPage"]]
    })], ProcesstreatmentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/processtreatment/processtreatment.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/processtreatment/processtreatment.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProcesstreatmentProcesstreatmentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div-header {\n  background-color: #009bd7;\n  padding-bottom: 0.5%;\n}\n\n.icono {\n  color: white;\n  margin-left: 4%;\n}\n\nion-header {\n  --background: #009bd7 !important;\n  --ion-background-color-rgb: 0, 155, 215;\n}\n\n.header-styles {\n  --background: #009bd7 !important;\n  padding-top: 30px;\n  padding-bottom: -100px;\n  text-align: center;\n}\n\n.content-image {\n  max-width: 60%;\n  border: 0;\n}\n\n.logo-header {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 50%;\n}\n\nion-content {\n  --ion-background-color: white;\n  --ion-background-color-rgb: 236, 235, 238;\n}\n\n.carrito {\n  width: 14%;\n  height: 14%;\n  border-radius: 100% !important;\n  margin-left: 65%;\n  margin-bottom: 2% !important;\n}\n\n.container {\n  background-color: #fff;\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  align-self: center !important;\n}\n\n.center {\n  text-align: center !important;\n}\n\n.title_seccion {\n  color: #00a2dd;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 20px 0px;\n}\n\n.result_search {\n  background: #f2f2f2 !important;\n  padding: 20px 0px !important;\n  margin-bottom: 15px;\n}\n\n.select_options {\n  background-color: #fff;\n  padding: 20px;\n  margin: 15px 0px;\n  width: 100% !important;\n  border-radius: 20px;\n}\n\n.align-self {\n  align-self: center !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.name_product {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #00a1dd !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.name_product2 {\n  font-size: 17px !important;\n  font-weight: 700 !important;\n  color: #008000 !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.name_product1 {\n  font-size: 19px !important;\n  font-weight: 700 !important;\n  color: #00a1dd !important;\n  margin: 5px 0px !important;\n  line-height: 20px !important;\n}\n\n.description_product {\n  font-size: 17px !important;\n  color: #727070 !important;\n  line-height: 18px !important;\n  margin: 5px 0px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.col-item {\n  border-left: 1px solid #727070;\n}\n\n.col-txt {\n  padding-top: 110px;\n  padding-right: 12px;\n}\n\n@media (min-width: 319px) and (max-width: 339px) {\n  .name_product1 {\n    font-size: 19px !important;\n    font-weight: 700 !important;\n    color: #00a1dd !important;\n    margin: 5px 0px !important;\n    line-height: 20px !important;\n    padding-left: 12px;\n  }\n}\n\n@media (min-width: 600px) and (min-height: 950px) {\n  .header-styles {\n    --background: #009bd7 !important;\n    padding-top: 0px;\n    padding-bottom: 10px;\n    text-align: center;\n  }\n\n  .content-image {\n    height: 110px;\n  }\n\n  .carro1 {\n    max-width: 68%;\n    border: 0;\n    margin-right: -41px;\n  }\n\n  .title_seccion {\n    color: #00a2dd;\n    font-size: 35px;\n    font-weight: 700;\n    margin: 20px 0px;\n  }\n\n  .name_product {\n    font-size: 26px !important;\n    font-weight: 700 !important;\n    color: #00a1dd !important;\n    margin: 5px 0px !important;\n    line-height: 27px !important;\n  }\n\n  .name_product2 {\n    font-size: 24px !important;\n    font-weight: 700 !important;\n    color: #008000 !important;\n    margin: 5px 0px !important;\n    line-height: 27px !important;\n  }\n\n  .description_product {\n    font-size: 26px !important;\n    color: #727070 !important;\n    line-height: 18px !important;\n    margin: 10px 0px !important;\n  }\n\n  .name_product1 {\n    font-size: 26px !important;\n    font-weight: 700 !important;\n    color: #00a1dd !important;\n    margin: 5px 0px !important;\n    line-height: 27px !important;\n  }\n\n  b {\n    font-weight: bold;\n    line-height: 28px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTk3Mzk2L0FwcERyYXphbWVkL3NyYy9hcHAvcGFnZXMvcHJvY2Vzc3RyZWF0bWVudC9wcm9jZXNzdHJlYXRtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvY2Vzc3RyZWF0bWVudC9wcm9jZXNzdHJlYXRtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLHlDQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0lGOztBREZBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0tGOztBREhBO0VBQ0UsNkJBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNTRjs7QURQQTtFQUNFLDZCQUFBO0FDVUY7O0FEUkE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FDV0Y7O0FEVEE7RUFDRSx5QkFBQTtBQ1lGOztBRFZBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ2FGOztBRFhBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ2NGOztBRFpBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ2VGOztBRFpBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNlRjs7QURiQTtFQUNFLDJCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsOEJBQUE7QUNpQkY7O0FEZkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDa0JGOztBRGhCQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0VDbUJGO0FBQ0Y7O0FEakJBO0VBQ0U7SUFDRSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQ21CRjs7RURqQkE7SUFDRSxhQUFBO0VDb0JGOztFRGxCQTtJQUNFLGNBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUNxQkY7O0VEbkJBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDc0JGOztFRHBCQTtJQUNFLDBCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUN1QkY7O0VEckJBO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFQ3dCRjs7RUR0QkE7SUFDRSwwQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtFQ3lCRjs7RUR2QkE7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7SUFDQSwwQkFBQTtJQUNBLDRCQUFBO0VDMEJGOztFRHhCQTtJQUNFLGlCQUFBO0lBQ0EsNEJBQUE7RUMyQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3N0cmVhdG1lbnQvcHJvY2Vzc3RyZWF0bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDliZDcgIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDE1NSwgMjE1O1xufVxuXG4uaGVhZGVyLXN0eWxlcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMzYsIDIzNSwgMjM4O1xufVxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5yZXN1bHRfc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNlbGVjdF9vcHRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4ubXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuLmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuLm5hbWVfcHJvZHVjdDIge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5uYW1lX3Byb2R1Y3QxIHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMGExZGQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbl9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzI3MDcwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuLmNvbC1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzI3MDcwO1xufVxuLmNvbC10eHQge1xuICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzE5cHgpIGFuZCAobWF4LXdpZHRoOiAzMzlweCkge1xuICAubmFtZV9wcm9kdWN0MSB7XG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRlbnQtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cbiAgLmNhcnJvMSB7XG4gICAgbWF4LXdpZHRoOiA2OCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1yaWdodDogLTQxcHg7XG4gIH1cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLm5hbWVfcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcbiAgfVxuICAubmFtZV9wcm9kdWN0MiB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcbiAgfVxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgfVxuICAubmFtZV9wcm9kdWN0MSB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcbiAgfVxuICBie1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG59XG4iLCIuZGl2LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZDc7XG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xufVxuXG4uaWNvbm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkNyAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMTU1LCAyMTU7XG59XG5cbi5oZWFkZXItc3R5bGVzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMDtcbn1cblxuLmxvZ28taGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjM2LCAyMzUsIDIzODtcbn1cblxuLmNhcnJpdG8ge1xuICB3aWR0aDogMTQlO1xuICBoZWlnaHQ6IDE0JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNjUlO1xuICBtYXJnaW4tYm90dG9tOiAyJSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZV9zZWNjaW9uIHtcbiAgY29sb3I6ICMwMGEyZGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLnJlc3VsdF9zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zZWxlY3Rfb3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5hbWVfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZV9wcm9kdWN0MiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZV9wcm9kdWN0MSB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzcyNzA3MCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLm10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sLWl0ZW0ge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3MjcwNzA7XG59XG5cbi5jb2wtdHh0IHtcbiAgcGFkZGluZy10b3A6IDExMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzE5cHgpIGFuZCAobWF4LXdpZHRoOiAzMzlweCkge1xuICAubmFtZV9wcm9kdWN0MSB7XG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDBhMWRkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5NTBweCkge1xuICAuaGVhZGVyLXN0eWxlcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5YmQ3ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5jYXJybzEge1xuICAgIG1heC13aWR0aDogNjglO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00MXB4O1xuICB9XG5cbiAgLnRpdGxlX3NlY2Npb24ge1xuICAgIGNvbG9yOiAjMDBhMmRkO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICAubmFtZV9wcm9kdWN0IHtcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMGExZGQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hbWVfcHJvZHVjdDIge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb25fcHJvZHVjdCB7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM3MjcwNzAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYW1lX3Byb2R1Y3QxIHtcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMGExZGQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/processtreatment/processtreatment.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/processtreatment/processtreatment.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ProcesstreatmentPage */

  /***/
  function srcAppPagesProcesstreatmentProcesstreatmentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcesstreatmentPage", function () {
      return ProcesstreatmentPage;
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

    var ProcesstreatmentPage = /*#__PURE__*/function () {
      function ProcesstreatmentPage(router, route, config, menuCtrl) {
        var _this2 = this;

        _classCallCheck(this, ProcesstreatmentPage);

        this.router = router;
        this.route = route;
        this.config = config;
        this.menuCtrl = menuCtrl;
        this.apiUrl7 = "images/products/";
        this.apiUrl8 = ".jpg";
        this.base_url = config.get_base_url();
        this.route.queryParams.subscribe(function (params) {
          if (_this2.router.getCurrentNavigation().extras.state) {
            _this2.alarma = _this2.router.getCurrentNavigation().extras.state.user;
            _this2.fecha = moment__WEBPACK_IMPORTED_MODULE_4__(_this2.alarma.next_date).format('L');
            console.log(_this2.alarma);
            _this2.taken = _this2.alarma.taken;
            _this2.porcentaje = _this2.taken / _this2.alarma.total * 100;
            _this2.restante = Math.ceil(100 - _this2.porcentaje);
            _this2.faltantes = _this2.alarma.total - _this2.taken;
            console.log('Se ha tomado ' + _this2.taken);
          }
        });
        /*this.taken = this.pastillas - 1;
        console.log(this.taken);
        this.porcentaje = (this.taken / this.pastillas) * 100;
        this.restante = 100 - this.porcentaje;*/
      }

      _createClass(ProcesstreatmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCtrl.enable(false);
        }
      }, {
        key: "goHome",
        value: function goHome() {
          this.router.navigate(['perfil']);
        }
      }, {
        key: "goPerfil",
        value: function goPerfil() {
          this.router.navigate(['perfil']);
        }
      }]);

      return ProcesstreatmentPage;
    }();

    ProcesstreatmentPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    ProcesstreatmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-processtreatment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./processtreatment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/processtreatment/processtreatment.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./processtreatment.page.scss */
      "./src/app/pages/processtreatment/processtreatment.page.scss"))["default"]]
    })], ProcesstreatmentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-processtreatment-processtreatment-module-es5.js.map