(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("china-location"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactChinaLocation", ["china-location", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactChinaLocation"] = factory(require("china-location"), require("prop-types"), require("react"));
	else
		root["ReactChinaLocation"] = factory(root["china-location"], root["prop-types"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chinaLocation = __webpack_require__(0);

var _chinaLocation2 = _interopRequireDefault(_chinaLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChinaLocation = function (_React$Component) {
  _inherits(ChinaLocation, _React$Component);

  function ChinaLocation(props) {
    _classCallCheck(this, ChinaLocation);

    var _this = _possibleConstructorReturn(this, (ChinaLocation.__proto__ || Object.getPrototypeOf(ChinaLocation)).call(this, props));

    if (!props.list) {
      throw new Error('[ReactChinaLocation] location data "props.list" is required!');
    }

    _this.location = new _chinaLocation2.default(props.list);

    _this.handleProvinceChange = _this.handleProvinceChange.bind(_this);
    _this.handleCityChange = _this.handleCityChange.bind(_this);
    _this.handleDistrictChange = _this.handleDistrictChange.bind(_this);
    _this.updateLocationState = _this.updateLocationState.bind(_this);

    _this.state = {
      activeProvince: _this.location.activeProvince,
      activeCity: _this.location.activeCity,
      activeDistrict: _this.location.activeDistrict,
      currentProvinces: _this.location.getCurrentProvinces(),
      currentCities: _this.location.getCurrentCities(),
      currentDistricts: _this.location.getCurrentDistricts()
    };

    return _this;
  }

  _createClass(ChinaLocation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLocationChange(this.location.getCurrentAddress());
    }
  }, {
    key: 'handleProvinceChange',
    value: function handleProvinceChange(e) {
      var provinceCode = e.target.value;
      this.location.changeProvince(provinceCode);
      this.updateLocationState();
      this.props.onLocationChange(this.location.getCurrentAddress());
    }
  }, {
    key: 'handleCityChange',
    value: function handleCityChange(e) {
      this.location.changeCity(e.target.value);
      this.setState({
        activeCity: this.location.activeCity,
        activeDistrict: this.location.activeDistrict,
        currentDistricts: this.location.getCurrentDistricts()
      });
      this.props.onLocationChange(this.location.getCurrentAddress());
    }
  }, {
    key: 'handleDistrictChange',
    value: function handleDistrictChange(e) {
      this.location.changeDistrict(e.target.value);
      this.setState({
        activeDistrict: this.location.activeDistrict
      });
      this.props.onLocationChange(this.location.getCurrentAddress());
    }
  }, {
    key: 'updateLocationState',
    value: function updateLocationState() {
      this.setState({
        activeProvince: this.location.activeProvince,
        activeCity: this.location.activeCity,
        activeDistrict: this.location.activeDistrict,
        currentProvinces: this.location.getCurrentProvinces(),
        currentCities: this.location.getCurrentCities(),
        currentDistricts: this.location.getCurrentDistricts()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className ? ' ' + this.props.className : '';
      return _react2.default.createElement(
        'div',
        { className: "china-location-wrapper" + className },
        _react2.default.createElement(
          'select',
          { value: this.state.activeProvince, onChange: this.handleProvinceChange },
          this.state.currentProvinces.map(function (ele) {
            return _react2.default.createElement(
              'option',
              { key: ele.code, value: ele.code },
              ele.name
            );
          })
        ),
        _react2.default.createElement(
          'select',
          { value: this.state.activeCity, onChange: this.handleCityChange },
          this.state.currentCities.map(function (ele) {
            return _react2.default.createElement(
              'option',
              { key: ele.code, value: ele.code },
              ele.name
            );
          })
        ),
        _react2.default.createElement(
          'select',
          { value: this.state.activeDistrict, onChange: this.handleDistrictChange },
          this.state.currentDistricts.map(function (ele) {
            return _react2.default.createElement(
              'option',
              { key: ele.code, value: ele.code },
              ele.name
            );
          })
        )
      );
    }
  }]);

  return ChinaLocation;
}(_react2.default.Component);

ChinaLocation.propTypes = {
  onLocationChange: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string
};

exports.default = ChinaLocation;

/***/ })
/******/ ]);
});