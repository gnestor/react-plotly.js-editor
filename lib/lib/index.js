'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traceTypeToAxisType = exports.striptags = exports.supplyLayoutPlotProps = exports.walkObject = exports.unpackPlotProps = exports.renderTraceIcon = exports.plotlyTraceToCustomTrace = exports.localizeString = exports.localize = exports.isPlainObject = exports.getLayoutContext = exports.getDisplayName = exports.getAxisTitle = exports.getAllAxes = exports.findFullTraceIndex = exports.dereference = exports.traceTypeToPlotlyInitFigure = exports.containerConnectedContextTypes = exports.connectTraceToPlot = exports.connectToContainer = exports.connectLayoutToPlot = exports.connectAxesToLayout = exports.connectImageToLayout = exports.connectShapeToLayout = exports.connectAnnotationToLayout = exports.clamp = exports.capitalize = exports.bem = exports.axisIdToAxisName = undefined;
exports.tooLight = tooLight;

var _bem = require('./bem');

var _bem2 = _interopRequireDefault(_bem);

var _connectAnnotationToLayout = require('./connectAnnotationToLayout');

var _connectAnnotationToLayout2 = _interopRequireDefault(_connectAnnotationToLayout);

var _connectShapeToLayout = require('./connectShapeToLayout');

var _connectShapeToLayout2 = _interopRequireDefault(_connectShapeToLayout);

var _connectImageToLayout = require('./connectImageToLayout');

var _connectImageToLayout2 = _interopRequireDefault(_connectImageToLayout);

var _connectAxesToLayout = require('./connectAxesToLayout');

var _connectAxesToLayout2 = _interopRequireDefault(_connectAxesToLayout);

var _connectLayoutToPlot = require('./connectLayoutToPlot');

var _connectLayoutToPlot2 = _interopRequireDefault(_connectLayoutToPlot);

var _connectToContainer = require('./connectToContainer');

var _connectToContainer2 = _interopRequireDefault(_connectToContainer);

var _connectTraceToPlot = require('./connectTraceToPlot');

var _connectTraceToPlot2 = _interopRequireDefault(_connectTraceToPlot);

var _dereference = require('./dereference');

var _dereference2 = _interopRequireDefault(_dereference);

var _findFullTraceIndex = require('./findFullTraceIndex');

var _findFullTraceIndex2 = _interopRequireDefault(_findFullTraceIndex);

var _getAllAxes = require('./getAllAxes');

var _getAllAxes2 = _interopRequireDefault(_getAllAxes);

var _localize = require('./localize');

var _localize2 = _interopRequireDefault(_localize);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _unpackPlotProps = require('./unpackPlotProps');

var _unpackPlotProps2 = _interopRequireDefault(_unpackPlotProps);

var _walkObject = require('./walkObject');

var _walkObject2 = _interopRequireDefault(_walkObject);

var _customTraceType = require('./customTraceType');

var _plotlyIcons = require('plotly-icons');

var PlotlyIcons = _interopRequireWildcard(_plotlyIcons);

var _supplyLayoutPlotProps = require('./supplyLayoutPlotProps');

var _supplyLayoutPlotProps2 = _interopRequireDefault(_supplyLayoutPlotProps);

var _striptags = require('./striptags');

var _striptags2 = _interopRequireDefault(_striptags);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function capitalize(s) {
  return !s ? '' : s.charAt(0).toUpperCase() + s.substring(1);
}

var TOO_LIGHT_FACTOR = 0.8;
function tooLight(color) {
  var hslColor = (0, _tinycolor2.default)(color).toHsl();
  return hslColor.l > TOO_LIGHT_FACTOR;
}

function renderTraceIcon(trace) {
  var componentName = 'Plot' + capitalize(trace) + 'Icon';
  return PlotlyIcons[componentName] ? PlotlyIcons[componentName] : PlotlyIcons.PlotLineIcon;
}

exports.axisIdToAxisName = _getAllAxes.axisIdToAxisName;
exports.bem = _bem2.default;
exports.capitalize = capitalize;
exports.clamp = clamp;
exports.connectAnnotationToLayout = _connectAnnotationToLayout2.default;
exports.connectShapeToLayout = _connectShapeToLayout2.default;
exports.connectImageToLayout = _connectImageToLayout2.default;
exports.connectAxesToLayout = _connectAxesToLayout2.default;
exports.connectLayoutToPlot = _connectLayoutToPlot2.default;
exports.connectToContainer = _connectToContainer2.default;
exports.connectTraceToPlot = _connectTraceToPlot2.default;
exports.containerConnectedContextTypes = _connectToContainer.containerConnectedContextTypes;
exports.traceTypeToPlotlyInitFigure = _customTraceType.traceTypeToPlotlyInitFigure;
exports.dereference = _dereference2.default;
exports.findFullTraceIndex = _findFullTraceIndex2.default;
exports.getAllAxes = _getAllAxes2.default;
exports.getAxisTitle = _getAllAxes.getAxisTitle;
exports.getDisplayName = getDisplayName;
exports.getLayoutContext = _connectLayoutToPlot.getLayoutContext;
exports.isPlainObject = _walkObject.isPlainObject;
exports.localize = _localize2.default;
exports.localizeString = _localize.localizeString;
exports.plotlyTraceToCustomTrace = _customTraceType.plotlyTraceToCustomTrace;
exports.renderTraceIcon = renderTraceIcon;
exports.unpackPlotProps = _unpackPlotProps2.default;
exports.walkObject = _walkObject2.default;
exports.supplyLayoutPlotProps = _supplyLayoutPlotProps2.default;
exports.striptags = _striptags2.default;
exports.traceTypeToAxisType = _getAllAxes.traceTypeToAxisType;
//# sourceMappingURL=index.js.map