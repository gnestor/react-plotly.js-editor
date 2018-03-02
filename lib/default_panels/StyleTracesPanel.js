'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('../components');

var _lib = require('../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleTracesPanel = function StyleTracesPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.TraceAccordion,
    { canGroup: true },
    _react2.default.createElement(_components.TextEditor, { label: _('Name'), attr: 'name', richTextOnly: true }),
    _react2.default.createElement(_components.TraceOrientation, {
      label: _('Orientation'),
      attr: 'orientation',
      options: [{ label: _('Vertical'), value: 'v' }, { label: _('Horizontal'), value: 'h' }]
    }),
    _react2.default.createElement(_components.Numeric, { label: _('Opacity'), step: 0.1, attr: 'opacity' }),
    _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'color' }),
    _react2.default.createElement(
      _components.Section,
      { name: _('Text Attributes') },
      _react2.default.createElement(_components.Flaglist, {
        attr: 'textinfo',
        options: [{ label: _('Label'), value: 'label' }, { label: _('Text'), value: 'text' }, { label: _('Value'), value: 'value' }, { label: _('%'), value: 'percent' }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Display') },
      _react2.default.createElement(_components.Flaglist, {
        attr: 'mode',
        options: [{ label: _('Lines'), value: 'lines' }, { label: _('Points'), value: 'markers' }, { label: _('Text'), value: 'text' }]
      }),
      _react2.default.createElement(_components.Radio, {
        attr: 'flatshading',
        label: _('Flatshading'),
        options: [{ label: _('Enable'), value: true }, { label: _('Disable'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Filled Area') },
      _react2.default.createElement(_components.FillDropdown, { attr: 'fill', label: _('Fill to'), localize: _ }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'fillcolor' })
    ),
    _react2.default.createElement(
      _components.TraceMarkerSection,
      null,
      _react2.default.createElement(_components.Radio, {
        attr: 'boxpoints',
        options: [{ label: _('Show'), value: 'all' }, { label: _('Hide'), value: false }]
      }),
      _react2.default.createElement(_components.Numeric, { label: _('Jitter'), attr: 'jitter', min: 0, max: 1, step: 0.1 }),
      _react2.default.createElement(_components.Numeric, {
        label: _('Position'),
        attr: 'pointpos',
        min: -2,
        max: 2,
        step: 0.1
      }),
      _react2.default.createElement(_components.ColorscalePicker, { label: _('Colorscale'), attr: 'marker.colorscale' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'marker.color' }),
      _react2.default.createElement(_components.Numeric, { label: _('Opacity'), step: 0.1, attr: 'marker.opacity' }),
      _react2.default.createElement(_components.Numeric, { label: _('Size'), attr: 'marker.size' }),
      _react2.default.createElement(_components.SymbolSelector, { label: _('Symbol'), attr: 'marker.symbol' }),
      _react2.default.createElement(_components.Numeric, { label: _('Border Width'), attr: 'marker.line.width' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Border Color'), attr: 'marker.line.color' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Size and Spacing') },
      _react2.default.createElement(_components.LayoutNumericFractionInverse, { label: _('Bar Width'), attr: 'bargap' }),
      _react2.default.createElement(_components.LayoutNumericFractionInverse, { label: _('Box Width'), attr: 'boxgap' }),
      _react2.default.createElement(_components.LayoutNumericFraction, { label: _('Bar Padding'), attr: 'bargroupgap' }),
      _react2.default.createElement(_components.LayoutNumericFraction, { label: _('Box Padding'), attr: 'boxgroupgap' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Ticks') },
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'tickwidth' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Whiskers') },
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'whiskerwidth' })
    ),
    _react2.default.createElement(
      _components.TraceTypeSection,
      {
        name: _('Lines'),
        traceTypes: ['scatter', 'contour', 'scatterternary']
      },
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'line.width' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Line Color'), attr: 'line.color' }),
      _react2.default.createElement(_components.LineDashSelector, { label: _('Type'), attr: 'line.dash' }),
      _react2.default.createElement(_components.LineShapeSelector, { label: _('Shape'), attr: 'line.shape' }),
      _react2.default.createElement(_components.Radio, {
        label: _('Connect Gaps'),
        attr: 'connectgaps',
        options: [{ label: _('Connect'), value: true }, { label: _('Blank'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.TraceTypeSection,
      { name: _('Lines'), traceTypes: ['scatter3d'] },
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'line.width' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Line Color'), attr: 'line.color' }),
      _react2.default.createElement(_components.LineDashSelector, { label: _('Type'), attr: 'line.dash' }),
      _react2.default.createElement(_components.LineShapeSelector, { label: _('Shape'), attr: 'line.shape' })
    ),
    _react2.default.createElement(
      _components.TraceTypeSection,
      { name: _('Text'), traceTypes: ['scatter'] },
      _react2.default.createElement(_components.FontSelector, { label: _('Typeface'), attr: 'textfont.family' }),
      _react2.default.createElement(_components.Numeric, { label: _('Font Size'), attr: 'textfont.size', units: 'px' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Font Color'), attr: 'textfont.color' }),
      _react2.default.createElement(_components.Dropdown, {
        label: _('Text Position'),
        attr: 'textposition',
        clearable: false,
        options: [{ label: _('Top Left'), value: 'top left' }, { label: _('Top Center'), value: 'top center' }, { label: _('Top Right'), value: 'top right' }, { label: _('Middle Left'), value: 'middle left' }, { label: _('Middle Center'), value: 'middle center' }, { label: _('Middle Right'), value: 'middle right' }, { label: _('Bottom Left'), value: 'bottom left' }, { label: _('Bottom Center'), value: 'bottom center' }, { label: _('Bottom Right'), value: 'bottom right' }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Colorscale') },
      _react2.default.createElement(_components.ColorscalePicker, { label: _('Colorscale'), attr: 'colorscale' }),
      _react2.default.createElement(_components.Radio, {
        label: _('Orientation'),
        attr: 'reversescale',
        options: [{ label: _('Normal'), value: false }, { label: _('Reversed'), value: true }]
      }),
      _react2.default.createElement(_components.Radio, {
        label: _('Range'),
        attr: 'zauto',
        options: [{ label: _('Auto'), value: true }, { label: _('Custom'), value: false }]
      }),
      _react2.default.createElement(_components.Numeric, { label: _('Min'), attr: 'zmin' }),
      _react2.default.createElement(_components.Numeric, { label: _('Max'), attr: 'zmax' }),
      _react2.default.createElement(_components.Radio, {
        label: _('Color Bar'),
        attr: 'showscale',
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Heatmap') },
      _react2.default.createElement(_components.Numeric, { label: _('Horizontal Gaps'), attr: 'xgap' }),
      _react2.default.createElement(_components.Numeric, { label: _('Vertical Gaps'), attr: 'ygap' })
    ),
    _react2.default.createElement(
      _components.TraceTypeSection,
      {
        name: _('Gaps in Data'),
        traceTypes: ['heatmap', 'contour']
      },
      _react2.default.createElement(_components.Radio, {
        label: _('Interpolate Gaps'),
        attr: 'connectgaps',
        options: [{ label: _('On'), value: true }, { label: _('Off'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Contours') },
      _react2.default.createElement(_components.Radio, {
        label: _('Coloring'),
        attr: 'contours.coloring',
        options: [{ label: _('Fill'), value: 'fill' }, { label: _('Heatmap'), value: 'heatmap' }, { label: _('Lines'), value: 'lines' }]
      }),
      _react2.default.createElement(_components.Radio, {
        label: _('Contour Lines'),
        attr: 'contours.showlines',
        options: [{ label: _('On'), value: true }, { label: _('Off'), value: false }]
      }),
      _react2.default.createElement(_components.Radio, {
        label: _('Number of Contours'),
        attr: 'autocontour',
        options: [{ label: _('Auto'), value: true }, { label: _('Custom'), value: false }]
      }),
      _react2.default.createElement(_components.Numeric, { label: _('Max Contours'), attr: 'ncontours' }),
      _react2.default.createElement(_components.ContourNumeric, { label: _('Step Size'), attr: 'contours.size' }),
      _react2.default.createElement(_components.ContourNumeric, { label: _('Min Contour'), attr: 'contours.start' }),
      _react2.default.createElement(_components.ContourNumeric, { label: _('Max Contour'), attr: 'contours.end' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Lighting') },
      _react2.default.createElement(_components.NumericFraction, { label: _('Ambient'), attr: 'lighting.ambient' }),
      _react2.default.createElement(_components.NumericFraction, { label: _('Diffuse'), attr: 'lighting.diffuse' }),
      _react2.default.createElement(_components.NumericFraction, { label: _('Specular'), attr: 'lighting.specular' }),
      _react2.default.createElement(_components.NumericFraction, { label: _('Roughness'), attr: 'lighting.roughness' }),
      _react2.default.createElement(_components.NumericFraction, { label: _('Fresnel'), attr: 'lighting.fresnel' }),
      _react2.default.createElement(_components.NumericFraction, {
        label: _('Vertex Normal'),
        attr: 'lighting.vertexnormalsepsilon'
      }),
      _react2.default.createElement(_components.NumericFraction, {
        label: _('Face Normal'),
        attr: 'lighting.facenormalsepsilon'
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Light Position') },
      _react2.default.createElement(_components.NumericFraction, { label: _('X'), attr: 'lightposition.x' }),
      _react2.default.createElement(_components.NumericFraction, { label: _('Y'), attr: 'lightposition.y' }),
      _react2.default.createElement(_components.NumericFraction, { label: _('Z'), attr: 'lightposition.z' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Increasing Trace Styles') },
      _react2.default.createElement(_components.TextEditor, { label: _('Name'), attr: 'increasing.name', richTextOnly: true }),
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'increasing.line.width' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Line Color'), attr: 'increasing.line.color' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Fill Color'), attr: 'increasing.fillcolor' }),
      _react2.default.createElement(_components.LineDashSelector, { label: _('Type'), attr: 'increasing.line.dash' }),
      _react2.default.createElement(_components.Radio, {
        label: 'Show in Legend',
        attr: 'increasing.showlegend',
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Decreasing Trace Styles') },
      _react2.default.createElement(_components.TextEditor, { label: _('Name'), attr: 'decreasing.name', richTextOnly: true }),
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'decreasing.line.width' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Line Color'), attr: 'decreasing.line.color' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Fill Color'), attr: 'decreasing.fillcolor' }),
      _react2.default.createElement(_components.LineDashSelector, { label: _('Type'), attr: 'decreasing.line.dash' }),
      _react2.default.createElement(_components.Radio, {
        label: 'Show in Legend',
        attr: 'decreasing.showlegend',
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Highlight') },
      _react2.default.createElement(_components.Radio, {
        attr: 'boxmean',
        label: _('Mean'),
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      }),
      _react2.default.createElement(_components.Radio, {
        attr: 'boxmean',
        label: _('Standard Deviation'),
        options: [{ label: _('Show'), value: 'sd' }, { label: _('Hide'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('On Hover') },
      _react2.default.createElement(_components.HoverInfo, {
        attr: 'hoverinfo',
        label: _('Values Shown On Hover'),
        localize: _
      }),
      _react2.default.createElement(_components.Radio, {
        label: _('Show Contour'),
        attr: 'contour.show',
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Contour Color'), attr: 'contour.color' }),
      _react2.default.createElement(_components.Numeric, { label: _('Contour Width'), attr: 'contour.width' })
    ),
    _react2.default.createElement(
      _components.TraceTypeSection,
      { name: _('Hover Action'), traceTypes: ['box'] },
      _react2.default.createElement(_components.Flaglist, {
        attr: 'hoveron',
        label: _('Hover on'),
        options: [{ label: _('Boxes'), value: 'boxes' }, { label: _('Points'), value: 'points' }]
      })
    ),
    _react2.default.createElement(
      _components.TraceTypeSection,
      {
        name: _('Hover Action'),
        traceTypes: ['scatter', 'scatterternary']
      },
      _react2.default.createElement(_components.Flaglist, {
        attr: 'hoveron',
        label: _('Hover on'),
        options: [{ label: _('Fills'), value: 'fills' }, { label: _('Points'), value: 'points' }]
      })
    )
  );
};

StyleTracesPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleTracesPanel);
//# sourceMappingURL=StyleTracesPanel.js.map