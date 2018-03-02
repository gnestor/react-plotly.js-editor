'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PanelEmpty = require('./PanelEmpty');

var _PanelEmpty2 = _interopRequireDefault(_PanelEmpty);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxisRequiredPanel = function (_Component) {
  _inherits(AxisRequiredPanel, _Component);

  function AxisRequiredPanel(props) {
    _classCallCheck(this, AxisRequiredPanel);

    var _this = _possibleConstructorReturn(this, (AxisRequiredPanel.__proto__ || Object.getPrototypeOf(AxisRequiredPanel)).call(this, props));

    _this.state = {
      hasAxis: true
    };
    return _this;
  }

  _createClass(AxisRequiredPanel, [{
    key: 'checkAxisExistence',
    value: function checkAxisExistence() {
      var _this2 = this;

      var hasSubplot = Object.keys(this.context.fullContainer._subplots).filter(function (type) {
        return !['cartesian', 'mapbox'].includes(type) && _this2.context.fullContainer._subplots[type].length > 0;
      }).length > 0;
      if (!hasSubplot) {
        this.setState({ hasAxis: false });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.checkAxisExistence();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkAxisExistence();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.hasAxis) {
        return _react2.default.createElement(
          _Panel2.default,
          null,
          this.props.children
        );
      }
      return _react2.default.createElement(_PanelEmpty2.default, { heading: this.props.emptyPanelHeader });
    }
  }]);

  return AxisRequiredPanel;
}(_react.Component);

AxisRequiredPanel.propTypes = {
  children: _propTypes2.default.node,
  emptyPanelHeader: _propTypes2.default.string
};

AxisRequiredPanel.contextTypes = {
  fullContainer: _propTypes2.default.object
};

exports.default = AxisRequiredPanel;
//# sourceMappingURL=AxisRequiredPanel.js.map