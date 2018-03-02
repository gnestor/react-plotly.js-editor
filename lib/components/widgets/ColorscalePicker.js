'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactColorscales = require('react-colorscales');

var _reactColorscales2 = _interopRequireDefault(_reactColorscales);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scale = function (_Component) {
  _inherits(Scale, _Component);

  function Scale(props) {
    _classCallCheck(this, Scale);

    var _this = _possibleConstructorReturn(this, (Scale.__proto__ || Object.getPrototypeOf(Scale)).call(this, props));

    _this.state = {
      showColorscalePicker: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Scale, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        showColorscalePicker: !this.state.showColorscalePicker
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          selected = _props.selected,
          onColorscaleChange = _props.onColorscaleChange;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactColorscales.Colorscale, { colorscale: selected, onClick: this.toggle }),
        this.state.showColorscalePicker ? _react2.default.createElement(_reactColorscales2.default, {
          onChange: onColorscaleChange,
          colorscale: selected
        }) : null
      );
    }
  }]);

  return Scale;
}(_react.Component);

Scale.propTypes = {
  onColorscaleChange: _propTypes2.default.func,
  selected: _propTypes2.default.array
};

exports.default = Scale;
//# sourceMappingURL=ColorscalePicker.js.map