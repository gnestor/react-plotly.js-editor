'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayoutContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connectLayoutToPlot;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nested_property = require('plotly.js/src/lib/nested_property');

var _nested_property2 = _interopRequireDefault(_nested_property);

var _lib = require('../lib');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getLayoutContext = exports.getLayoutContext = function getLayoutContext(context) {
  var layout = context.layout,
      fullLayout = context.fullLayout,
      plotly = context.plotly,
      onUpdate = context.onUpdate;


  var updateContainer = function updateContainer(update) {
    if (!onUpdate) {
      return;
    }
    onUpdate({
      type: _constants.EDITOR_ACTIONS.UPDATE_LAYOUT,
      payload: {
        update: update
      }
    });
  };

  var getValObject = void 0;
  if (plotly) {
    getValObject = function getValObject(attr) {
      return plotly.PlotSchema.getLayoutValObject(fullLayout, (0, _nested_property2.default)({}, attr).parts);
    };
  }

  return {
    getValObject: getValObject,
    updateContainer: updateContainer,
    container: layout,
    fullContainer: fullLayout
  };
};

function connectLayoutToPlot(WrappedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var LayoutConnectedComponent = function (_Component) {
    _inherits(LayoutConnectedComponent, _Component);

    function LayoutConnectedComponent() {
      _classCallCheck(this, LayoutConnectedComponent);

      return _possibleConstructorReturn(this, (LayoutConnectedComponent.__proto__ || Object.getPrototypeOf(LayoutConnectedComponent)).apply(this, arguments));
    }

    _createClass(LayoutConnectedComponent, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return getLayoutContext(this.context);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }], [{
      key: 'supplyPlotProps',
      value: function supplyPlotProps(props, context) {
        if (config.supplyPlotProps) {
          return config.supplyPlotProps(props, context);
        }
        if (WrappedComponent.supplyPlotProps) {
          return WrappedComponent.supplyPlotProps(props, context);
        }
        return (0, _lib.unpackPlotProps)(props, context);
      }

      // Run the inner modifications first and allow more recent modifyPlotProp
      // config function to modify last.

    }, {
      key: 'modifyPlotProps',
      value: function modifyPlotProps(props, context, plotProps) {
        if (WrappedComponent.modifyPlotProps) {
          WrappedComponent.modifyPlotProps(props, context, plotProps);
        }
        if (config.modifyPlotProps) {
          config.modifyPlotProps(props, context, plotProps);
        }
      }
    }]);

    return LayoutConnectedComponent;
  }(_react.Component);

  LayoutConnectedComponent.displayName = 'LayoutConnected' + (0, _lib.getDisplayName)(WrappedComponent);

  LayoutConnectedComponent.contextTypes = {
    layout: _propTypes2.default.object,
    fullLayout: _propTypes2.default.object,
    plotly: _propTypes2.default.object,
    onUpdate: _propTypes2.default.func
  };

  LayoutConnectedComponent.childContextTypes = {
    getValObject: _propTypes2.default.func,
    updateContainer: _propTypes2.default.func,
    container: _propTypes2.default.object,
    fullContainer: _propTypes2.default.object
  };

  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;

  LayoutConnectedComponent.plotly_editor_traits = plotly_editor_traits;

  return LayoutConnectedComponent;
}
//# sourceMappingURL=connectLayoutToPlot.js.map