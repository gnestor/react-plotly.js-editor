'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown = require('../widgets/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _RadioBlocks = require('../widgets/RadioBlocks');

var _RadioBlocks2 = _interopRequireDefault(_RadioBlocks);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxesSelector = function (_Component) {
  _inherits(AxesSelector, _Component);

  function AxesSelector(props, context) {
    _classCallCheck(this, AxesSelector);

    var _this = _possibleConstructorReturn(this, (AxesSelector.__proto__ || Object.getPrototypeOf(AxesSelector)).call(this, props, context));

    if (!context.axesTargetHandler) {
      throw new Error('AxesSelector must be nested within a connectAxesToPlot component');
    }
    return _this;
  }

  _createClass(AxesSelector, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _context = this.context,
          axesTargetHandler = _context.axesTargetHandler,
          axesOptions = _context.axesOptions,
          axesTarget = _context.axesTarget;
      var _ = this.props.localize;

      var hasSecondaryAxis = axesOptions && axesOptions.some(function (option) {
        return option.axisGroup && _this2.context.fullLayout._subplots[option.axisGroup].length > 1;
      });

      if (hasSecondaryAxis) {
        return _react2.default.createElement(
          _Field2.default,
          _extends({}, this.props, { label: _('Axis to Style') }),
          _react2.default.createElement(_Dropdown2.default, {
            options: axesOptions.map(function (option) {
              if (option.value !== 'allaxes') {
                return {
                  label: option.title,
                  value: option.value
                };
              }

              return option;
            }),
            value: axesTarget,
            onChange: axesTargetHandler,
            clearable: false
          })
        );
      }

      return _react2.default.createElement(
        _Field2.default,
        _extends({}, this.props, { center: true }),
        _react2.default.createElement(_RadioBlocks2.default, {
          options: axesOptions,
          activeOption: axesTarget,
          onOptionChange: axesTargetHandler
        })
      );
    }
  }]);

  return AxesSelector;
}(_react.Component);

AxesSelector.contextTypes = {
  axesTargetHandler: _propTypes2.default.func,
  axesOptions: _propTypes2.default.array,
  axesTarget: _propTypes2.default.string,
  fullLayout: _propTypes2.default.object
};

AxesSelector.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(AxesSelector);
//# sourceMappingURL=AxesSelector.js.map