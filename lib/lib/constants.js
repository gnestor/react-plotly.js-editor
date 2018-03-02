'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseClass = exports.baseClass = 'plotly-editor';

/*
 * Control represents multiple settings (like for several axes)
 * and the values are different.
 *
 * Because this is sometimes used in contexts where users can enter freeform
 * strings, we include a non-printable character (ESC) so it's not something
 * people could type.
 */
var MULTI_VALUED = exports.MULTI_VALUED = '\x1bMIXED_VALUES';

// how mixed values are represented in text inputs
var MULTI_VALUED_PLACEHOLDER = exports.MULTI_VALUED_PLACEHOLDER = '---';

var getMultiValueText = exports.getMultiValueText = function getMultiValueText(key, _) {
  var multiValueText = {
    title: _('Multiple Values'),
    text: _('This input has multiple values associated with it. ' + 'Changing this setting will override these custom inputs.'),
    subText: _("Common Case: An 'All' tab might display this message " + 'because the X and Y tabs contain different settings.')
  };
  return multiValueText[key];
};

var EDITOR_ACTIONS = exports.EDITOR_ACTIONS = {
  UPDATE_TRACES: 'plotly-editor-update-traces',
  ADD_TRACE: 'plotly-editor-add-trace',
  DELETE_TRACE: 'plotly-editor-delete-trace',
  UPDATE_AXIS_REFERENCES: 'plotly-editor-update-axis-references',
  UPDATE_LAYOUT: 'plotly-editor-update-layout',
  DELETE_ANNOTATION: 'plotly-editor-delete-annotation',
  DELETE_SHAPE: 'plotly-editor-delete-shape',
  DELETE_IMAGE: 'plotly-editor-delete-image'
};

var DEFAULT_FONTS = exports.DEFAULT_FONTS = [{ label: 'Sans Serif', value: 'sans-serif' }, { label: 'Serif', value: 'serif' }, { label: 'Monospaced', value: 'monospace' }];

var RETURN_KEY = exports.RETURN_KEY = 'Enter';
var ESCAPE_KEY = exports.ESCAPE_KEY = 'Escape';
var COMMAND_KEY = exports.COMMAND_KEY = 'Meta';
var CONTROL_KEY = exports.CONTROL_KEY = 'Control';

var TRACE_TO_AXIS = exports.TRACE_TO_AXIS = {
  cartesian: ['scatter', 'box', 'bar', 'heatmap', 'contour', 'ohlc', 'candlestick'],
  ternary: ['scatterternary'],
  gl3d: ['scatter3d', 'surface', 'mesh3d'],
  geo: ['scattergeo', 'choropleth'],
  mapbox: ['scattermapbox']
};
//# sourceMappingURL=constants.js.map