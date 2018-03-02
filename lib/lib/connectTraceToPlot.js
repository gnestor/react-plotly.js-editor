'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connectTraceToPlot;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nested_property = require('plotly.js/src/lib/nested_property');

var _nested_property2 = _interopRequireDefault(_nested_property);

var _lib = require('../lib');

var _multiValues = require('./multiValues');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function connectTraceToPlot(WrappedComponent) {
  var TraceConnectedComponent = function (_Component) {
    _inherits(TraceConnectedComponent, _Component);

    function TraceConnectedComponent(props, context) {
      _classCallCheck(this, TraceConnectedComponent);

      var _this = _possibleConstructorReturn(this, (TraceConnectedComponent.__proto__ || Object.getPrototypeOf(TraceConnectedComponent)).call(this, props, context));

      _this.deleteTrace = _this.deleteTrace.bind(_this);
      _this.updateTrace = _this.updateTrace.bind(_this);
      _this.setLocals(props, context);
      return _this;
    }

    _createClass(TraceConnectedComponent, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: 'setLocals',
      value: function setLocals(props, context) {
        var traceIndexes = props.traceIndexes;
        var data = context.data,
            fullData = context.fullData,
            plotly = context.plotly;


        var trace = traceIndexes.length > 0 ? data[traceIndexes[0]] : {};
        var fullTraceIndex = traceIndexes.length > 0 ? (0, _lib.findFullTraceIndex)(fullData, traceIndexes[0]) : (0, _lib.findFullTraceIndex)(fullData, 0);
        var fullTrace = fullData[fullTraceIndex] || {};

        var getValObject = void 0;
        if (plotly) {
          /*
           * Since fullTrace._fullInput contains the _module.attributes key:
           * https://github.com/plotly/plotly.js/blob/70f3f70ec5b306cf74630355676f5e318f685824/src/plot_api/plot_schema.js#L241
           * this will work for all chart types. This needed to be adjusted as financial charts
           * do not contain their 'true' attributes, but rather attributes of the trace types that are used to compose them
          */
          getValObject = function getValObject(attr) {
            return plotly.PlotSchema.getTraceValObject(fullTrace._fullInput, (0, _nested_property2.default)({}, attr).parts);
          };
        }

        this.childContext = {
          getValObject: getValObject,
          updateContainer: this.updateTrace,
          deleteContainer: this.deleteTrace,
          container: trace,
          fullContainer: fullTrace
        };

        if (traceIndexes.length > 1) {
          var multiValuedContainer = (0, _multiValues.deepCopyPublic)(fullTrace);
          fullData.forEach(function (t) {
            return Object.keys(t).forEach(function (key) {
              return (0, _multiValues.setMultiValuedContainer)(multiValuedContainer, t, key, {
                searchArrays: true
              });
            });
          });
          this.childContext.fullContainer = multiValuedContainer;
          this.childContext.defaultContainer = fullTrace;
          this.childContext.container = {};
        }

        if (trace && fullTrace) {
          this.icon = (0, _lib.renderTraceIcon)((0, _lib.plotlyTraceToCustomTrace)(trace));
          this.name = fullTrace.name;
          var DEFAULT_FIN_CHART_TRACE_NAME = ' - increasing';
          if (fullTrace.name && fullTrace.name.indexOf(DEFAULT_FIN_CHART_TRACE_NAME) && !trace.name) {
            this.name = fullTrace.name.replace(DEFAULT_FIN_CHART_TRACE_NAME, '');
          }
        }
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return this.childContext;
      }
    }, {
      key: 'updateTrace',
      value: function updateTrace(update) {
        if (this.context.onUpdate) {
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.UPDATE_TRACES,
            payload: {
              update: update,
              traceIndexes: this.props.traceIndexes
            }
          });
        }
      }
    }, {
      key: 'deleteTrace',
      value: function deleteTrace() {
        if (this.context.onUpdate) {
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.DELETE_TRACE,
            payload: { traceIndexes: this.props.traceIndexes }
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({ name: this.name, icon: this.icon }, this.props));
      }
    }]);

    return TraceConnectedComponent;
  }(_react.Component);

  TraceConnectedComponent.displayName = 'TraceConnected' + (0, _lib.getDisplayName)(WrappedComponent);

  TraceConnectedComponent.propTypes = {
    traceIndexes: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired
  };

  TraceConnectedComponent.contextTypes = {
    fullData: _propTypes2.default.array,
    data: _propTypes2.default.array,
    plotly: _propTypes2.default.object,
    onUpdate: _propTypes2.default.func
  };

  TraceConnectedComponent.childContextTypes = {
    getValObject: _propTypes2.default.func,
    updateContainer: _propTypes2.default.func,
    deleteContainer: _propTypes2.default.func,
    defaultContainer: _propTypes2.default.object,
    container: _propTypes2.default.object,
    fullContainer: _propTypes2.default.object
  };

  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;

  TraceConnectedComponent.plotly_editor_traits = plotly_editor_traits;

  return TraceConnectedComponent;
}
//# sourceMappingURL=connectTraceToPlot.js.map