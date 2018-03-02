'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dropdown = require('./Dropdown');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function computeTraceOptionsFromSchema(schema, _, context) {
  // Filter out Polar "area" type as it is fairly broken and we want to present
  // scatter with fill as an "area" chart type for convenience.
  var traceTypes = Object.keys(schema.traces).filter(function (t) {
    return !['area', 'scattermapbox'].includes(t);
  });

  // explicit map of all supported trace types (as of plotlyjs 1.32)
  var traceOptions = [{ value: 'scatter', label: _('Scatter') }, { value: 'box', label: _('Box') }, { value: 'bar', label: _('Bar') }, { value: 'heatmap', label: _('Heatmap') },
  // {value: 'histogram', label: _('Histogram')},
  // {value: 'histogram2d', label: _('2D Histogram')},
  // {value: 'histogram2dcontour', label: _('2D Contour Histogram')},
  { value: 'pie', label: _('Pie') }, { value: 'contour', label: _('Contour') }, { value: 'scatterternary', label: _('Ternary Scatter') },
  // {value: 'violin', label: _('Violin')},
  { value: 'scatter3d', label: _('3D Scatter') }, { value: 'surface', label: _('Surface') }, { value: 'mesh3d', label: _('3D Mesh') }, { value: 'scattergeo', label: _('Atlas Map') }, { value: 'choropleth', label: _('Choropleth') },
  // {value: 'scattergl', label: _('Scatter GL')},
  // {value: 'pointcloud', label: _('Point Cloud')},
  // {value: 'heatmapgl', label: _('Heatmap GL')},
  // {value: 'parcoords', label: _('Parallel Coordinates')},
  // {value: 'sankey', label: _('Sankey')},
  // {value: 'table', label: _('Table')},
  // {value: 'carpet', label: _('Carpet')},
  // {value: 'scattercarpet', label: _('Carpet Scatter')},
  // {value: 'contourcarpet', label: _('Carpet Contour')},
  { value: 'ohlc', label: _('OHLC') }, { value: 'candlestick', label: _('Candlestick') }].filter(function (obj) {
    return traceTypes.indexOf(obj.value) !== -1;
  });

  var traceIndex = function traceIndex(traceType) {
    return traceOptions.findIndex(function (opt) {
      return opt.value === traceType;
    });
  };

  traceOptions.splice(traceIndex('scatter') + 1, 0, { label: _('Line'), value: 'line' }, { label: _('Area'), value: 'area' });

  traceOptions.splice(traceIndex('scatter3d') + 1, 0, {
    label: _('3D Line'),
    value: 'line3d'
  });

  if (context.config && context.config.mapboxAccessToken) {
    traceOptions.push({ value: 'scattermapbox', label: _('Satellite Map') });
  }

  return traceOptions;
}

var TraceSelector = function (_Component) {
  _inherits(TraceSelector, _Component);

  function TraceSelector(props, context) {
    _classCallCheck(this, TraceSelector);

    var _this = _possibleConstructorReturn(this, (TraceSelector.__proto__ || Object.getPrototypeOf(TraceSelector)).call(this, props, context));

    _this.updatePlot = _this.updatePlot.bind(_this);

    var fillMeta = void 0;
    if (props.getValObject) {
      fillMeta = props.getValObject('fill');
    }
    if (fillMeta) {
      _this.fillTypes = fillMeta.values.filter(function (v) {
        return v !== 'none';
      });
    } else {
      _this.fillTypes = ['tozeroy', 'tozerox', 'tonexty', 'tonextx', 'toself', 'tonext'];
    }
    _this.setTraceDefaults(props.container, props.fullContainer, props.updateContainer);
    _this.setLocals(props, context);
    return _this;
  }

  _createClass(TraceSelector, [{
    key: 'setLocals',
    value: function setLocals(props, context) {
      var _ = props.localize;
      if (props.traceOptions) {
        this.traceOptions = props.traceOptions;
      } else if (context.plotSchema) {
        this.traceOptions = computeTraceOptionsFromSchema(context.plotSchema, _, this.context);
      } else {
        this.traceOptions = [{ label: _('Scatter'), value: 'scatter' }];
      }
      if (props.container) {
        this.fullValue = (0, _lib.plotlyTraceToCustomTrace)(props.container);
      }
    }
  }, {
    key: 'setTraceDefaults',
    value: function setTraceDefaults(container, fullContainer, updateContainer) {
      if (container && container.uid && !container.mode && fullContainer._fullInput.type === 'scatter') {
        updateContainer({
          type: 'scatter',
          mode: fullContainer.mode || 'markers'
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var container = nextProps.container,
          fullContainer = nextProps.fullContainer,
          updateContainer = nextProps.updateContainer;

      this.setTraceDefaults(container, fullContainer, updateContainer);
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: 'updatePlot',
    value: function updatePlot(value) {
      var updateContainer = this.props.updateContainer;


      if (updateContainer) {
        updateContainer((0, _lib.traceTypeToPlotlyInitFigure)(value));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = Object.assign({}, this.props, {
        fullValue: this.fullValue,
        updatePlot: this.updatePlot,
        options: this.traceOptions,
        clearable: false
      });

      return _react2.default.createElement(_Dropdown.UnconnectedDropdown, props);
    }
  }]);

  return TraceSelector;
}(_react.Component);

TraceSelector.contextTypes = {
  plotSchema: _propTypes2.default.object,
  config: _propTypes2.default.object
};

TraceSelector.propTypes = {
  getValObject: _propTypes2.default.func,
  container: _propTypes2.default.object.isRequired,
  fullContainer: _propTypes2.default.object.isRequired,
  fullValue: _propTypes2.default.any.isRequired,
  localize: _propTypes2.default.func,
  updateContainer: _propTypes2.default.func
};

exports.default = (0, _lib.connectToContainer)((0, _lib.localize)(TraceSelector));
//# sourceMappingURL=TraceSelector.js.map