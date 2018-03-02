'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultEditor = require('./DefaultEditor');

var _DefaultEditor2 = _interopRequireDefault(_DefaultEditor);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('./lib');

var _shame = require('./shame');

var _constants = require('./lib/constants');

var _fastIsnumeric = require('fast-isnumeric');

var _fastIsnumeric2 = _interopRequireDefault(_fastIsnumeric);

var _nested_property = require('plotly.js/src/lib/nested_property');

var _nested_property2 = _interopRequireDefault(_nested_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlotlyEditor = function (_Component) {
  _inherits(PlotlyEditor, _Component);

  function PlotlyEditor(props, context) {
    _classCallCheck(this, PlotlyEditor);

    // we only need to compute this once.
    var _this = _possibleConstructorReturn(this, (PlotlyEditor.__proto__ || Object.getPrototypeOf(PlotlyEditor)).call(this, props, context));

    if (_this.props.plotly) {
      _this.plotSchema = _this.props.plotly.PlotSchema.get();
    }
    return _this;
  }

  _createClass(PlotlyEditor, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.revision === void 0 || nextProps.revision !== this.props.revision || nextProps.dataSources !== this.props.dataSources || nextProps.dataSourceOptions !== this.props.dataSourceOptions) {
        return true;
      }
      return false;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var gd = this.props.graphDiv || {};
      return {
        config: gd._context,
        data: gd.data,
        dataSources: this.props.dataSources,
        dataSourceOptions: this.props.dataSourceOptions,
        dataSourceValueRenderer: this.props.dataSourceValueRenderer,
        dataSourceOptionRenderer: this.props.dataSourceOptionRenderer,
        dictionaries: this.props.dictionaries || {},
        fullData: gd._fullData,
        fullLayout: gd._fullLayout,
        graphDiv: gd,
        layout: gd.layout,
        locale: this.props.locale,
        onUpdate: this.handleUpdate.bind(this),
        plotSchema: this.plotSchema,
        plotly: this.props.plotly
      };
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate(_ref) {
      var type = _ref.type,
          payload = _ref.payload;
      var graphDiv = this.props.graphDiv;


      switch (type) {
        case _constants.EDITOR_ACTIONS.UPDATE_TRACES:
          if (this.props.beforeUpdateTraces) {
            this.props.beforeUpdateTraces(payload);
          }

          // until we start utilizing Plotly.react in `react-plotly.js`
          // force clear axes types when a `src` has changed.
          (0, _shame.maybeClearAxisTypes)(graphDiv, payload.traceIndexes, payload.update);

          for (var i = 0; i < payload.traceIndexes.length; i++) {
            for (var attr in payload.update) {
              var traceIndex = payload.traceIndexes[i];
              var prop = (0, _nested_property2.default)(graphDiv.data[traceIndex], attr);
              var value = payload.update[attr];
              if (value !== void 0) {
                prop.set(value);
              }
            }
          }
          if (this.props.afterUpdateTraces) {
            this.props.afterUpdateTraces(payload);
          }
          if (this.props.onUpdate) {
            this.props.onUpdate();
          }
          break;

        case _constants.EDITOR_ACTIONS.UPDATE_LAYOUT:
          if (this.props.beforeUpdateLayout) {
            this.props.beforeUpdateLayout(payload);
          }
          for (var _attr in payload.update) {
            var _prop = (0, _nested_property2.default)(graphDiv.layout, _attr);
            var _value = payload.update[_attr];
            if (_value !== void 0) {
              _prop.set(_value);
            }
          }
          if (this.props.afterUpdateLayout) {
            this.props.afterUpdateLayout(payload);
          }
          if (this.props.onUpdate) {
            this.props.onUpdate();
          }
          break;

        case _constants.EDITOR_ACTIONS.UPDATE_AXIS_REFERENCES:
          payload.tracesToAdjust.forEach(function (trace) {
            var axis = trace[payload.attrToAdjust].charAt(0);
            // n.b: currentAxisIdNumber will never be 0, i.e. Number('x'.slice(1)),
            // because payload.tracesToAdjust is a filter of all traces that have
            // an axis ID above the one of the axis ID we deprecated
            var currentAxisIdNumber = Number(trace[payload.attrToAdjust].slice(1));
            var adjustedAxisIdNumber = currentAxisIdNumber - 1;

            var currentAxisLayoutProperties = _extends({}, graphDiv.layout[payload.attrToAdjust + currentAxisIdNumber]);

            graphDiv.data[trace.index][payload.attrToAdjust] =
            // for cases when we're adjusting x2 => x, so that it becomes x not x1
            adjustedAxisIdNumber === 1 ? axis : axis + adjustedAxisIdNumber;

            graphDiv.layout[payload.attrToAdjust + adjustedAxisIdNumber] = currentAxisLayoutProperties;
          });
          break;

        case _constants.EDITOR_ACTIONS.ADD_TRACE:
          if (this.props.beforeAddTrace) {
            this.props.beforeAddTrace(payload);
          }
          graphDiv.data.push({ type: 'scatter', mode: 'markers' });
          if (this.props.afterAddTrace) {
            this.props.afterAddTrace(payload);
          }
          if (this.props.onUpdate) {
            this.props.onUpdate();
          }
          break;

        case _constants.EDITOR_ACTIONS.DELETE_TRACE:
          if (payload.traceIndexes && payload.traceIndexes.length) {
            if (this.props.beforeDeleteTrace) {
              this.props.beforeDeleteTrace(payload);
            }
            graphDiv.data.splice(payload.traceIndexes[0], 1);
            if (this.props.afterDeleteTrace) {
              this.props.afterDeleteTrace(payload);
            }
            if (this.props.onUpdate) {
              this.props.onUpdate();
            }
          }
          break;

        case _constants.EDITOR_ACTIONS.DELETE_ANNOTATION:
          if ((0, _fastIsnumeric2.default)(payload.annotationIndex)) {
            if (this.props.beforeDeleteAnnotation) {
              this.props.beforeDeleteAnnotation(payload);
            }
            graphDiv.layout.annotations.splice(payload.annotationIndex, 1);
            if (this.props.afterDeleteAnnotation) {
              this.props.afterDeleteAnnotation(payload);
            }
            if (this.props.onUpdate) {
              this.props.onUpdate();
            }
          }
          break;

        case _constants.EDITOR_ACTIONS.DELETE_SHAPE:
          if ((0, _fastIsnumeric2.default)(payload.shapeIndex)) {
            if (this.props.beforeDeleteShape) {
              this.props.beforeDeleteShape(payload);
            }
            graphDiv.layout.shapes.splice(payload.shapeIndex, 1);
            if (this.props.afterDeleteShape) {
              this.props.afterDeleteShape(payload);
            }
            if (this.props.onUpdate) {
              this.props.onUpdate();
            }
          }
          break;

        case _constants.EDITOR_ACTIONS.DELETE_IMAGE:
          if ((0, _fastIsnumeric2.default)(payload.imageIndex)) {
            if (this.props.beforeDeleteImage) {
              this.props.beforeDeleteImage(payload);
            }
            graphDiv.layout.images.splice(payload.imageIndex, 1);
            if (this.props.afterDeleteImage) {
              this.props.afterDeleteImage(payload);
            }
            if (this.props.onUpdate) {
              this.props.onUpdate();
            }
          }
          break;

        default:
          throw new Error('must specify an action type to handleEditorUpdate');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: (0, _lib.bem)('plotly-editor') + ' plotly-editor--theme-provider' + ('' + (this.props.className ? ' ' + this.props.className : ''))
        },
        this.props.graphDiv && this.props.graphDiv._fullLayout && (this.props.children ? this.props.children : _react2.default.createElement(_DefaultEditor2.default, null))
      );
    }
  }]);

  return PlotlyEditor;
}(_react.Component);

PlotlyEditor.propTypes = {
  afterAddTrace: _propTypes2.default.func,
  afterDeleteAnnotation: _propTypes2.default.func,
  afterDeleteShape: _propTypes2.default.func,
  afterDeleteImage: _propTypes2.default.func,
  afterDeleteTrace: _propTypes2.default.func,
  afterUpdateLayout: _propTypes2.default.func,
  afterUpdateTraces: _propTypes2.default.func,
  beforeAddTrace: _propTypes2.default.func,
  beforeDeleteAnnotation: _propTypes2.default.func,
  beforeDeleteShape: _propTypes2.default.func,
  beforeDeleteImage: _propTypes2.default.func,
  beforeDeleteTrace: _propTypes2.default.func,
  beforeUpdateLayout: _propTypes2.default.func,
  beforeUpdateTraces: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dataSourceOptionRenderer: _propTypes2.default.func,
  dataSourceOptions: _propTypes2.default.array,
  dataSourceValueRenderer: _propTypes2.default.func,
  dictionaries: _propTypes2.default.object,
  dataSources: _propTypes2.default.object,
  graphDiv: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  onUpdate: _propTypes2.default.func,
  plotly: _propTypes2.default.object,
  revision: _propTypes2.default.any
};

PlotlyEditor.defaultProps = {
  locale: 'en'
};

PlotlyEditor.childContextTypes = {
  config: _propTypes2.default.object,
  data: _propTypes2.default.array,
  dataSources: _propTypes2.default.object,
  dataSourceOptions: _propTypes2.default.array,
  dataSourceValueRenderer: _propTypes2.default.func,
  dataSourceOptionRenderer: _propTypes2.default.func,
  dictionaries: _propTypes2.default.object,
  fullData: _propTypes2.default.array,
  fullLayout: _propTypes2.default.object,
  graphDiv: _propTypes2.default.any,
  layout: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  onUpdate: _propTypes2.default.func,
  plotSchema: _propTypes2.default.object,
  plotly: _propTypes2.default.object
};

exports.default = PlotlyEditor;
//# sourceMappingURL=PlotlyEditor.js.map