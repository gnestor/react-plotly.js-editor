'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _localize = require('../../lib/localize');

var _localize2 = _interopRequireDefault(_localize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TraceMarkerSection = function (_Component) {
  _inherits(TraceMarkerSection, _Component);

  function TraceMarkerSection(props, context) {
    _classCallCheck(this, TraceMarkerSection);

    var _this = _possibleConstructorReturn(this, (TraceMarkerSection.__proto__ || Object.getPrototypeOf(TraceMarkerSection)).call(this, props, context));

    _this.setLocals(context);
    return _this;
  }

  _createClass(TraceMarkerSection, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextContext);
    }
  }, {
    key: 'setLocals',
    value: function setLocals(context) {
      var _ = this.props.localize;
      var traceType = context.fullContainer._fullInput.type;
      if (['bar', 'histogram'].includes(traceType)) {
        this.name = _('Bars');
      } else {
        this.name = _('Points');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Section2.default,
        { name: this.name },
        this.props.children
      );
    }
  }]);

  return TraceMarkerSection;
}(_react.Component);

TraceMarkerSection.propTypes = {
  children: _propTypes2.default.node,
  localize: _propTypes2.default.func,
  name: _propTypes2.default.string
};

TraceMarkerSection.contextTypes = {
  fullContainer: _propTypes2.default.object
};

exports.default = (0, _localize2.default)(TraceMarkerSection);
//# sourceMappingURL=TraceMarkerSection.js.map