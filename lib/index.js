'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walkObject = exports.localizeString = exports.localize = exports.dereference = exports.connectTraceToPlot = exports.connectToContainer = exports.connectLayoutToPlot = exports.connectAxesToLayout = exports.connectImageToLayout = exports.connectShapeToLayout = exports.connectAnnotationToLayout = exports.TraceSelector = exports.TraceRequiredPanel = exports.TraceMarkerSection = exports.TraceAccordion = exports.TextEditor = exports.SymbolSelector = exports.StyleTracesPanel = exports.StyleImagesPanel = exports.StyleShapesPanel = exports.StyleNotesPanel = exports.StyleLegendPanel = exports.StyleLayoutPanel = exports.StyleColorbarsPanel = exports.StyleAxesPanel = exports.SingleSidebarItem = exports.Section = exports.Radio = exports.PanelMenuWrapper = exports.Panel = exports.Numeric = exports.MenuPanel = exports.LineShapeSelector = exports.LineDashSelector = exports.LayoutPanel = exports.NumericFractionInverse = exports.PositioningNumeric = exports.NumericFraction = exports.LayoutNumericFractionInverse = exports.LayoutNumericFraction = exports.Layout = exports.Info = exports.GraphCreatePanel = exports.FontSelector = exports.Fold = exports.Flaglist = exports.EDITOR_ACTIONS = exports.Dropdown = exports.DataSelector = exports.ErrorBars = exports.ContourNumeric = exports.ColorscalePicker = exports.ColorPicker = exports.CanvasSize = exports.Button = exports.AxesSelector = exports.AxesRange = exports.AxesFold = exports.ArrowSelector = exports.PositioningRef = exports.AnnotationRef = exports.AnnotationArrowRef = exports.ImageAccordion = exports.ShapeAccordion = exports.AnnotationAccordion = undefined;

var _PlotlyEditor = require('./PlotlyEditor');

var _PlotlyEditor2 = _interopRequireDefault(_PlotlyEditor);

var _lib = require('./lib');

var _constants = require('./lib/constants');

var _components = require('./components');

var _default_panels = require('./default_panels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AnnotationAccordion = _components.AnnotationAccordion;
exports.ShapeAccordion = _components.ShapeAccordion;
exports.ImageAccordion = _components.ImageAccordion;
exports.AnnotationArrowRef = _components.AnnotationArrowRef;
exports.AnnotationRef = _components.AnnotationRef;
exports.PositioningRef = _components.PositioningRef;
exports.ArrowSelector = _components.ArrowSelector;
exports.AxesFold = _components.AxesFold;
exports.AxesRange = _components.AxesRange;
exports.AxesSelector = _components.AxesSelector;
exports.Button = _components.Button;
exports.CanvasSize = _components.CanvasSize;
exports.ColorPicker = _components.ColorPicker;
exports.ColorscalePicker = _components.ColorscalePicker;
exports.ContourNumeric = _components.ContourNumeric;
exports.ErrorBars = _components.ErrorBars;
exports.DataSelector = _components.DataSelector;
exports.Dropdown = _components.Dropdown;
exports.EDITOR_ACTIONS = _constants.EDITOR_ACTIONS;
exports.Flaglist = _components.Flaglist;
exports.Fold = _components.Fold;
exports.FontSelector = _components.FontSelector;
exports.GraphCreatePanel = _default_panels.GraphCreatePanel;
exports.Info = _components.Info;
exports.Layout = _components.Layout;
exports.LayoutNumericFraction = _components.LayoutNumericFraction;
exports.LayoutNumericFractionInverse = _components.LayoutNumericFractionInverse;
exports.NumericFraction = _components.NumericFraction;
exports.PositioningNumeric = _components.PositioningNumeric;
exports.NumericFractionInverse = _components.NumericFractionInverse;
exports.LayoutPanel = _components.LayoutPanel;
exports.LineDashSelector = _components.LineDashSelector;
exports.LineShapeSelector = _components.LineShapeSelector;
exports.MenuPanel = _components.MenuPanel;
exports.Numeric = _components.Numeric;
exports.Panel = _components.Panel;
exports.PanelMenuWrapper = _components.PanelMenuWrapper;
exports.Radio = _components.Radio;
exports.Section = _components.Section;
exports.SingleSidebarItem = _components.SingleSidebarItem;
exports.StyleAxesPanel = _default_panels.StyleAxesPanel;
exports.StyleColorbarsPanel = _default_panels.StyleColorbarsPanel;
exports.StyleLayoutPanel = _default_panels.StyleLayoutPanel;
exports.StyleLegendPanel = _default_panels.StyleLegendPanel;
exports.StyleNotesPanel = _default_panels.StyleNotesPanel;
exports.StyleShapesPanel = _default_panels.StyleShapesPanel;
exports.StyleImagesPanel = _default_panels.StyleImagesPanel;
exports.StyleTracesPanel = _default_panels.StyleTracesPanel;
exports.SymbolSelector = _components.SymbolSelector;
exports.TextEditor = _components.TextEditor;
exports.TraceAccordion = _components.TraceAccordion;
exports.TraceMarkerSection = _components.TraceMarkerSection;
exports.TraceRequiredPanel = _components.TraceRequiredPanel;
exports.TraceSelector = _components.TraceSelector;
exports.connectAnnotationToLayout = _lib.connectAnnotationToLayout;
exports.connectShapeToLayout = _lib.connectShapeToLayout;
exports.connectImageToLayout = _lib.connectImageToLayout;
exports.connectAxesToLayout = _lib.connectAxesToLayout;
exports.connectLayoutToPlot = _lib.connectLayoutToPlot;
exports.connectToContainer = _lib.connectToContainer;
exports.connectTraceToPlot = _lib.connectTraceToPlot;
exports.dereference = _lib.dereference;
exports.localize = _lib.localize;
exports.localizeString = _lib.localizeString;
exports.walkObject = _lib.walkObject;
exports.default = _PlotlyEditor2.default;
//# sourceMappingURL=index.js.map