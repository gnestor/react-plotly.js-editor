'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PanelEmpty = require('./PanelEmpty');

var _PanelEmpty2 = _interopRequireDefault(_PanelEmpty);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _derived = require('./derived');

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TraceRequiredPanel = function (_Component) {
  _inherits(TraceRequiredPanel, _Component);

  function TraceRequiredPanel(props) {
    _classCallCheck(this, TraceRequiredPanel);

    var _this = _possibleConstructorReturn(this, (TraceRequiredPanel.__proto__ || Object.getPrototypeOf(TraceRequiredPanel)).call(this, props));

    _this.state = {
      hasTraces: false
    };
    return _this;
  }

  _createClass(TraceRequiredPanel, [{
    key: 'checkTraceExistence',
    value: function checkTraceExistence() {
      var visible = this.props.visible;
      var fullData = this.context.fullData;
      var hasTraces = this.state.hasTraces;

      if (visible) {
        if (fullData.filter(function (trace) {
          return trace.visible;
        }).length === 0 && hasTraces) {
          this.setState({
            hasTraces: false
          });
        }
        if (fullData.filter(function (trace) {
          return trace.visible;
        }).length > 0 && !hasTraces) {
          this.setState({
            hasTraces: true
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkTraceExistence();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkTraceExistence();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _ = _props.localize,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['localize', 'children']);

      var hasTraces = this.state.hasTraces;


      if (this.props.visible) {
        return hasTraces ? _react2.default.createElement(
          _derived.LayoutPanel,
          rest,
          children
        ) : _react2.default.createElement(_PanelEmpty2.default, {
          heading: _("Looks like there aren't any traces defined yet."),
          message: _("Go to the 'Create' tab to define traces.")
        });
      }
      return null;
    }
  }]);

  return TraceRequiredPanel;
}(_react.Component);

TraceRequiredPanel.propTypes = {
  children: _propTypes2.default.node,
  localize: _propTypes2.default.func,
  visible: _propTypes2.default.bool
};

TraceRequiredPanel.defaultProps = {
  visible: true
};

TraceRequiredPanel.contextTypes = {
  fullData: _propTypes2.default.array
};

exports.default = (0, _lib.localize)(TraceRequiredPanel);
//# sourceMappingURL=TraceRequiredPanel.js.map