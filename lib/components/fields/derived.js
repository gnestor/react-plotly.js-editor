'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FillDropdown = exports.HoverInfo = exports.GeoProjections = exports.GeoScope = exports.PositioningNumeric = exports.PositioningRef = exports.AnnotationRef = exports.AnnotationArrowRef = exports.LayoutNumericFractionInverse = exports.LayoutNumericFraction = exports.NumericFractionDomain = exports.NumericFraction = exports.AxesRange = exports.TraceOrientation = exports.ContourNumeric = exports.CanvasSize = exports.AxisSide = exports.AxisOverlayDropdown = exports.AxisAnchorDropdown = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fastIsnumeric = require('fast-isnumeric');

var _fastIsnumeric2 = _interopRequireDefault(_fastIsnumeric);

var _Dropdown = require('./Dropdown');

var _Flaglist = require('./Flaglist');

var _Numeric = require('./Numeric');

var _Radio = require('./Radio');

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AxisAnchorDropdown = exports.AxisAnchorDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = props.localize;

    var options = [];

    if (plotProps.fullContainer._subplot && plotProps.fullContainer._subplot.includes('xaxis')) {
      options = context.fullLayout._subplots.yaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    } else if (plotProps.fullContainer._subplot && plotProps.fullContainer._subplot.includes('yaxis')) {
      options = context.fullLayout._subplots.xaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    }
    options.push({ label: _('Free'), value: 'free' });
    plotProps.options = options;
    plotProps.clearable = false;
  }
});

var AxisOverlayDropdown = exports.AxisOverlayDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var options = [];
    if (plotProps.fullContainer._subplot && plotProps.fullContainer._subplot.includes('xaxis')) {
      options = context.fullLayout._subplots.xaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    } else if (plotProps.fullContainer._subplot && plotProps.fullContainer._subplot.includes('yaxis')) {
      options = context.fullLayout._subplots.yaxis.map(function (axis) {
        return {
          label: (0, _lib.getAxisTitle)(context.fullLayout[(0, _lib.axisIdToAxisName)(axis)]),
          value: axis
        };
      });
    }

    // filter out the current axisID, can't overlay over itself
    plotProps.options = options.filter(function (option) {
      return context.fullContainer._id !== option.value;
    });

    plotProps.clearable = true;
  }
});

var AxisSide = exports.AxisSide = (0, _lib.connectToContainer)(_Radio.UnconnectedRadio, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = props.localize;
    if (context.fullContainer._id && context.fullContainer._id.startsWith('y')) {
      plotProps.options = [{ label: _('Left'), value: 'left' }, { label: _('Right'), value: 'right' }];
      return;
    }

    if (context.fullContainer._id && context.fullContainer._id.startsWith('x')) {
      plotProps.options = [{ label: _('Bottom'), value: 'bottom' }, { label: _('Top'), value: 'top' }];
      return;
    }

    plotProps.options = [{ label: _('Left'), value: 'left' }, { label: _('Right'), value: 'right' }, { label: _('Bottom'), value: 'bottom' }, { label: _('Top'), value: 'top' }];
  }
});

var CanvasSize = exports.CanvasSize = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer,
        updateContainer = plotProps.updateContainer,
        container = plotProps.container;

    if (plotProps.isVisible && fullContainer && fullContainer.autosize) {
      plotProps.isVisible = false;
      if (container[props.attr]) {
        updateContainer(_defineProperty({}, props.attr, {}));
      }
    }
  }
});

var ContourNumeric = exports.ContourNumeric = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (plotProps.isVisible && fullContainer && fullContainer.autocontour) {
      plotProps.isVisible = false;
    }
  }
});

var TraceOrientation = exports.TraceOrientation = (0, _lib.connectToContainer)(_Radio.UnconnectedRadio, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (context.container.type === 'box' && plotProps.fullValue === 'h' && context.container.y && context.container.y.length !== 0) {
      context.updateContainer({
        y: null,
        ysrc: null,
        x: context.container.y,
        xsrc: context.container.ysrc
      });
    }

    if (context.container.type === 'box' && plotProps.fullValue === 'v' && context.container.x && context.container.x.length !== 0) {
      context.updateContainer({
        x: null,
        xsrc: null,
        y: context.container.x,
        ysrc: context.container.xsrc
      });
    }

    if (context.container.type === 'histogram' && plotProps.fullValue === 'v' && context.container.y && context.container.y.length !== 0) {
      context.updateContainer({
        y: null,
        ysrc: null,
        ybins: null,
        x: context.container.y,
        xsrc: context.container.ysrc,
        xbins: context.container.ybins
      });
    }

    if (context.container.type === 'histogram' && plotProps.fullValue === 'h' && context.container.x && context.container.x.length !== 0) {
      context.updateContainer({
        x: null,
        xsrc: null,
        xbins: null,
        y: context.container.x,
        ysrc: context.container.xsrc,
        ybins: context.container.xbins
      });
    }
  }
});

var AxesRange = exports.AxesRange = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer;

    if (plotProps.isVisible && fullContainer && fullContainer.autorange) {
      plotProps.isVisible = false;
    }
    return plotProps;
  }
});

var UnconnectedNumericFraction = function (_UnconnectedNumeric) {
  _inherits(UnconnectedNumericFraction, _UnconnectedNumeric);

  function UnconnectedNumericFraction() {
    _classCallCheck(this, UnconnectedNumericFraction);

    return _possibleConstructorReturn(this, (UnconnectedNumericFraction.__proto__ || Object.getPrototypeOf(UnconnectedNumericFraction)).apply(this, arguments));
  }

  return UnconnectedNumericFraction;
}(_Numeric.UnconnectedNumeric);

UnconnectedNumericFraction.propTypes = _Numeric.UnconnectedNumeric.propTypes;
UnconnectedNumericFraction.defaultProps = {
  units: '%',
  showSlider: true
};

var numericFractionModifyPlotProps = function numericFractionModifyPlotProps(props, context, plotProps) {
  var attrMeta = plotProps.attrMeta,
      fullValue = plotProps.fullValue,
      updatePlot = plotProps.updatePlot;

  var min = attrMeta.min || 0;
  var max = attrMeta.max || 1;
  if ((0, _fastIsnumeric2.default)(fullValue)) {
    plotProps.fullValue = Math.round(100 * (fullValue - min) / (max - min));
  }

  plotProps.updatePlot = function (v) {
    if ((0, _fastIsnumeric2.default)(v)) {
      updatePlot(v / 100 * (max - min) + min);
    } else {
      updatePlot(v);
    }
  };
  plotProps.max = 100;
  plotProps.min = 0;
};

var NumericFraction = exports.NumericFraction = (0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  modifyPlotProps: numericFractionModifyPlotProps
});

var NumericFractionDomain = exports.NumericFractionDomain = (0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    numericFractionModifyPlotProps(props, context, plotProps);
    if (context.container.overlaying) {
      plotProps.isVisible = null;
    }
  }
});

var LayoutNumericFraction = exports.LayoutNumericFraction = (0, _lib.connectLayoutToPlot)((0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  supplyPlotProps: _lib.supplyLayoutPlotProps,
  modifyPlotProps: numericFractionModifyPlotProps
}));

var LayoutNumericFractionInverse = exports.LayoutNumericFractionInverse = (0, _lib.connectLayoutToPlot)((0, _lib.connectToContainer)(UnconnectedNumericFraction, {
  supplyPlotProps: _lib.supplyLayoutPlotProps,
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var attrMeta = plotProps.attrMeta,
        fullValue = plotProps.fullValue,
        updatePlot = plotProps.updatePlot;

    if ((0, _fastIsnumeric2.default)(fullValue)) {
      plotProps.fullValue = Math.round((1 - fullValue) * 100);
    }

    plotProps.updatePlot = function (v) {
      if ((0, _fastIsnumeric2.default)(v)) {
        updatePlot(1 - v / 100);
      } else {
        updatePlot(v);
      }
    };

    // Also take the inverse of max and min.
    if (attrMeta) {
      if ((0, _fastIsnumeric2.default)(attrMeta.min)) {
        plotProps.max = (1 - attrMeta.min) * 100;
      }

      if ((0, _fastIsnumeric2.default)(attrMeta.max)) {
        plotProps.min = (1 - attrMeta.max) * 100;
      }
    }
  }
}));

var AnnotationArrowRef = exports.AnnotationArrowRef = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _context$fullContaine = context.fullContainer,
        xref = _context$fullContaine.xref,
        yref = _context$fullContaine.yref;


    var currentAxisRef = void 0;
    if (props.attr === 'axref') {
      currentAxisRef = xref;
    } else if (props.attr === 'ayref') {
      currentAxisRef = yref;
    } else {
      throw new Error('AnnotationArrowRef must be given either "axref" or "ayref" as attrs. ' + ('Instead was given "' + props.attr + '".'));
    }

    if (currentAxisRef === 'paper') {
      // If currentAxesRef is paper provide all axes options to user.

      plotProps.options = [{ label: 'in pixels', value: 'pixel' }].concat(_toConsumableArray(computeAxesRefOptions((0, _lib.getAllAxes)(context.fullLayout), props.attr)));
    } else {
      // If currentAxesRef is an actual axes then offer that value as the only
      // axes option.
      plotProps.options = [{ label: 'in pixels', value: 'pixel' }, { label: 'according to axis', value: currentAxisRef }];
    }

    plotProps.clearable = false;
  }
});

var AnnotationRef = exports.AnnotationRef = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _context$fullContaine2 = context.fullContainer,
        axref = _context$fullContaine2.axref,
        ayref = _context$fullContaine2.ayref;


    var currentOffsetRef = void 0;
    if (props.attr === 'xref') {
      currentOffsetRef = axref;
    } else if (props.attr === 'yref') {
      currentOffsetRef = ayref;
    } else {
      throw new Error('AnnotationRef must be given either "xref" or "yref" as attrs. ' + ('Instead was given "' + props.attr + '".'));
    }

    plotProps.options = [{ label: 'Canvas', value: 'paper' }].concat(_toConsumableArray(computeAxesRefOptions((0, _lib.getAllAxes)(context.fullLayout), props.attr)));

    if (currentOffsetRef !== 'pixel') {
      plotProps.updatePlot = function (v) {
        if (!plotProps.updateContainer) {
          return;
        }

        /*
         * If user is changing axis also change their a[x|y]ref arrow axis
         * reference to match if the value is an axis value.
         * Behaviour copied from plot.ly/create
         */
        var update = _defineProperty({}, props.attr, v);
        if (v !== 'paper') {
          update['a' + props.attr] = v;
        }

        plotProps.updateContainer(update);
      };
    }

    plotProps.clearable = false;
  }
});

var PositioningRef = exports.PositioningRef = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    plotProps.options = [{ label: 'Canvas', value: 'paper' }].concat(_toConsumableArray(computeAxesRefOptions((0, _lib.getAllAxes)(context.fullLayout), props.attr)));

    plotProps.clearable = false;
  }
});

var PositioningNumeric = exports.PositioningNumeric = (0, _lib.connectToContainer)(_Numeric.UnconnectedNumeric, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var fullContainer = plotProps.fullContainer,
        fullValue = plotProps.fullValue,
        updatePlot = plotProps.updatePlot;

    if (fullContainer && (fullContainer[props.attr[0] + 'ref'] === 'paper' || fullContainer[props.attr[props.attr.length - 1] + 'ref'] === 'paper')) {
      plotProps.units = '%';
      plotProps.showSlider = true;
      plotProps.max = 100;
      plotProps.min = 0;
      plotProps.step = 1;
      if ((0, _fastIsnumeric2.default)(fullValue)) {
        plotProps.fullValue = Math.round(100 * fullValue);
      }

      plotProps.updatePlot = function (v) {
        if ((0, _fastIsnumeric2.default)(v)) {
          updatePlot(v / 100);
        } else {
          updatePlot(v);
        }
      };
    }
  }
});

function computeAxesRefOptions(axes, propsAttr) {
  var options = [];
  for (var i = 0; i < axes.length; i++) {
    var ax = axes[i];
    if (ax._id.charAt(0) === propsAttr.charAt(0) || ax._id.charAt(0) === propsAttr.charAt(1)) {
      var label = (0, _lib.getAxisTitle)(ax);
      options.push({ label: label, value: ax._id });
    }
  }

  return options;
}

var GeoScope = exports.GeoScope = (0, _lib.connectLayoutToPlot)((0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  supplyPlotProps: function supplyPlotProps(props, context) {
    var _ = props.localize;

    var options = [{ label: _('World'), value: 'world' }, { label: _('USA'), value: 'usa' }, { label: _('Europe'), value: 'europe' }, { label: _('Asia'), value: 'asia' }, { label: _('Africa'), value: 'africa' }, { label: _('North America'), value: 'north america' }, { label: _('South America'), value: 'south america' }];
    return _extends({}, (0, _lib.supplyLayoutPlotProps)(props, context), { options: options });
  }
}));

var GeoProjections = exports.GeoProjections = (0, _lib.connectLayoutToPlot)((0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  supplyPlotProps: function supplyPlotProps(props, context) {
    var _ = props.localize;

    var options = [{ label: _('Equirectangular'), value: 'equirectangular' }, { label: _('Mercator'), value: 'mercator' }, { label: _('Orthographic'), value: 'orthographic' }, { label: _('Natural Earth'), value: 'naturalEarth' }, { label: _('Kavrayskiy7'), value: 'kavrayskiy7' }, { label: _('Miller'), value: 'miller' }, { label: _('Robinson'), value: 'robinson' }, { label: _('Eckert4'), value: 'eckert4' }, { label: _('Azimuthal Equal Area'), value: 'azimuthalEqualArea' }, { label: _('Azimuthal Equidistant'), value: 'azimuthalEquidistant' }, { label: _('Conic Equal Area'), value: 'conicEqualArea' }, { label: _('Conic Conformal'), value: 'conicConformal' }, { label: _('Conic Equidistant'), value: 'conicEquidistant' }, { label: _('Gnomonic'), value: 'gnomonic' }, { label: _('Stereographic'), value: 'stereographic' }, { label: _('Mollweide'), value: 'mollweide' }, { label: _('Hammer'), value: 'hammer' }, { label: _('Transverse Mercator'), value: 'transverseMercator' }, { label: _('Winkel Tripel'), value: 'winkel3' }, { label: _('Aitoff'), value: 'aitoff' }, { label: _('Sinusoidal'), value: 'sinusoidal' }];

    if (context.fullLayout && context.fullLayout.geo && context.fullLayout.geo.scope === 'usa') {
      options = [{ label: _('Albers USA'), value: 'albers usa' }];
    }

    return _extends({}, (0, _lib.supplyLayoutPlotProps)(props, context), { options: options });
  }
}));

var HoverInfo = exports.HoverInfo = (0, _lib.connectToContainer)(_Flaglist.UnconnectedFlaglist, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = props.localize;

    var options = [{ label: _('X'), value: 'x' }, { label: _('Y'), value: 'y' }, { label: _('Z'), value: 'z' }];

    if (context.container.type === 'choropleth') {
      options = [{ label: _('Location'), value: 'location' }, { label: _('Values'), value: 'z' }, { label: _('Text'), value: 'text' }, { label: _('Name'), value: 'name' }];
    }

    if (context.container.type === 'scattergeo') {
      options = [{ label: _('Longitude'), value: 'loc' }, { label: _('Latitude'), value: 'lat' }, { label: _('Location'), value: 'location' }, { label: _('Text'), value: 'text' }, { label: _('Name'), value: 'name' }];
    }

    if (context.container.type === 'scattermapbox') {
      options = [{ label: _('Longitude'), value: 'loc' }, { label: _('Latitude'), value: 'lat' }, { label: _('Text'), value: 'text' }, { label: _('Name'), value: 'name' }];
    }

    if (context.container.type === 'scatterternary') {
      options = [{ label: _('A'), value: 'a' }, { label: _('B'), value: 'b' }, { label: _('C'), value: 'c' }, { label: _('Text'), value: 'text' }, { label: _('Name'), value: 'name' }];
    }

    plotProps.options = options;
  }
});

var FillDropdown = exports.FillDropdown = (0, _lib.connectToContainer)(_Dropdown.UnconnectedDropdown, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = props.localize;


    var options = [{ label: _('None'), value: 'none' }, { label: _('Y = 0'), value: 'tozeroy' }, { label: _('X = 0'), value: 'tozerox' }, { label: _('Previous Y'), value: 'tonexty' }, { label: _('Previous X'), value: 'tonextx' }];

    if (context.container.type === 'scatterternary') {
      options = [{ label: _('None'), value: 'none' }, { label: _('To Self'), value: 'toself' }, { label: _('To Next'), value: 'tonext' }];
    }

    plotProps.options = options;
    plotProps.clearable = false;
  }
});
//# sourceMappingURL=derived.js.map