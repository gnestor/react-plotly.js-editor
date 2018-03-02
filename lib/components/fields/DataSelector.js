'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedDataSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.attributeIsData = attributeIsData;

var _Dropdown = require('../widgets/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _nested_property = require('plotly.js/src/lib/nested_property');

var _nested_property2 = _interopRequireDefault(_nested_property);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function attributeIsData() {
  var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return meta.valType === 'data_array' || meta.arrayOk;
}

var UnconnectedDataSelector = exports.UnconnectedDataSelector = function (_Component) {
  _inherits(UnconnectedDataSelector, _Component);

  function UnconnectedDataSelector(props, context) {
    _classCallCheck(this, UnconnectedDataSelector);

    var _this = _possibleConstructorReturn(this, (UnconnectedDataSelector.__proto__ || Object.getPrototypeOf(UnconnectedDataSelector)).call(this, props, context));

    _this.updatePlot = _this.updatePlot.bind(_this);
    _this.setLocals(props, context);
    return _this;
  }

  _createClass(UnconnectedDataSelector, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: 'setLocals',
    value: function setLocals(props, context) {
      this.dataSources = context.dataSources || {};
      this.dataSourceOptions = context.dataSourceOptions || [];
      this.dataSrcExists = false;
      if (attributeIsData(props.attrMeta)) {
        this.dataSrcExists = true;
        this.srcAttr = props.attr + 'src';
        this.srcProperty = (0, _nested_property2.default)(props.container, this.srcAttr);
      }

      if (this.dataSrcExists) {
        this.fullValue = this.srcProperty.get();
      } else {
        this.fullValue = this.props.fullValue;
      }

      this.is2D = props.attr === 'z' && ['contour', 'heatmap', 'surface'].includes(props.container.type);
    }
  }, {
    key: 'updatePlot',
    value: function updatePlot(value) {
      var _this2 = this;

      if (!this.props.updateContainer) {
        return;
      }
      var update = {};

      if (Array.isArray(value)) {
        update[this.props.attr] = value.filter(function (v) {
          return Array.isArray(_this2.dataSources[v]);
        }).map(function (v) {
          return _this2.dataSources[v];
        });
        update[this.srcAttr] = value;
      } else {
        update[this.srcAttr] = value;
        update[this.props.attr] = this.dataSources[value] || null;
      }

      this.props.updateContainer(update);
    }
  }, {
    key: 'render',
    value: function render() {
      var label = this.props.label;

      var newLabel = void 0;
      if ((typeof label === 'undefined' ? 'undefined' : _typeof(label)) === 'object') {
        var traceType = this.props.container.type;
        if (label[traceType]) {
          newLabel = label[traceType];
        } else {
          newLabel = label['*'];
        }
      } else {
        newLabel = label;
      }

      return _react2.default.createElement(
        _Field2.default,
        _extends({}, this.props, { label: newLabel }),
        _react2.default.createElement(_Dropdown2.default, {
          options: this.dataSourceOptions,
          value: this.fullValue,
          onChange: this.updatePlot,
          multi: this.is2D,
          optionRenderer: this.context.dataSourceOptionRenderer,
          valueRenderer: this.context.dataSourceValueRenderer,
          clearable: true
        })
      );
    }
  }]);

  return UnconnectedDataSelector;
}(_react.Component);

UnconnectedDataSelector.propTypes = _extends({
  fullValue: _propTypes2.default.any,
  updatePlot: _propTypes2.default.func,
  container: _propTypes2.default.object
}, _Field2.default.propTypes);

UnconnectedDataSelector.contextTypes = {
  dataSources: _propTypes2.default.object,
  dataSourceOptions: _propTypes2.default.array,
  dataSourceValueRenderer: _propTypes2.default.func,
  dataSourceOptionRenderer: _propTypes2.default.func
};

function modifyPlotProps(props, context, plotProps) {
  if (attributeIsData(plotProps.attrMeta)) {
    plotProps.isVisible = true;
  }
}

exports.default = (0, _lib.connectToContainer)(UnconnectedDataSelector, { modifyPlotProps: modifyPlotProps });
//# sourceMappingURL=DataSelector.js.map