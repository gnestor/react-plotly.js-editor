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

var StyleAxesPanel = function StyleAxesPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.TraceRequiredPanel,
    null,
    _react2.default.createElement(
      _components.AxisRequiredPanel,
      {
        emptyPanelHeader: _('Your plot does not have any axes to style.')
      },
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Titles') },
        _react2.default.createElement(_components.TextEditor, { attr: 'title' }),
        _react2.default.createElement(_components.FontSelector, { label: _('Typeface'), attr: 'titlefont.family' }),
        _react2.default.createElement(_components.Numeric, { label: _('Font Size'), attr: 'titlefont.size', units: 'px' }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Font Color'), attr: 'titlefont.color' })
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Layout') },
        _react2.default.createElement(
          _components.Section,
          { name: _('Boundaries'), attr: 'domain[0]' },
          _react2.default.createElement(_components.AxisOverlayDropdown, {
            label: _('Overlay'),
            attr: 'overlaying',
            localize: _
          }),
          _react2.default.createElement(_components.NumericFractionDomain, { label: _('Start Position'), attr: 'domain[0]' }),
          _react2.default.createElement(_components.NumericFractionDomain, { label: _('End Position'), attr: 'domain[1]' })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Anchor') },
          _react2.default.createElement(_components.AxisAnchorDropdown, {
            label: _('Anchor To'),
            attr: 'anchor',
            localize: _
          }),
          _react2.default.createElement(_components.AxisSide, { label: _('Side'), attr: 'side', localize: _ })
        )
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Range') },
        _react2.default.createElement(
          _components.Section,
          { name: _('Selection'), attr: 'autorange' },
          _react2.default.createElement(_components.Radio, {
            attr: 'autorange',
            options: [{ label: _('Auto'), value: true }, { label: _('Custom'), value: false }]
          }),
          _react2.default.createElement(_components.AxesRange, { label: _('Min'), attr: 'range[0]' }),
          _react2.default.createElement(_components.AxesRange, { label: _('Max'), attr: 'range[1]' }),
          _react2.default.createElement(_components.Radio, {
            attr: 'type',
            options: [{ label: _('Linear'), value: 'linear' }, { label: _('log'), value: 'log' }]
          })
        ),
        _react2.default.createElement(
          _components.TraceTypeSection,
          {
            name: _('Selection'),
            traceTypes: ['choropleth', 'scattergeo'],
            attr: 'range'
          },
          _react2.default.createElement(_components.AxesRange, { label: _('Min'), attr: 'range[0]' }),
          _react2.default.createElement(_components.AxesRange, { label: _('Max'), attr: 'range[1]' })
        )
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Lines') },
        _react2.default.createElement(
          _components.Section,
          { name: _('Axis Line'), attr: 'showline' },
          _react2.default.createElement(_components.Radio, {
            attr: 'showline',
            options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
          }),
          _react2.default.createElement(_components.Numeric, { label: _('Thickness'), attr: 'linewidth', units: 'px' }),
          _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'linecolor' }),
          _react2.default.createElement(_components.Radio, {
            label: _('Position'),
            attr: 'side',
            options: [{ label: _('Bottom'), value: 'bottom' }, { label: _('Top'), value: 'top' }, { label: _('Left'), value: 'left' }, { label: _('Right'), value: 'right' }]
          }),
          _react2.default.createElement(_components.Radio, {
            label: _('Mirror Axis'),
            attr: 'mirror',
            options: [{ label: _('On'), value: true }, { label: _('Off'), value: false }]
          })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Grid Lines'), attr: 'showgrid' },
          _react2.default.createElement(_components.Radio, {
            attr: 'showgrid',
            options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
          }),
          _react2.default.createElement(_components.Numeric, { label: _('Thickness'), attr: 'gridwidth', units: 'px' }),
          _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'gridcolor' })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Zero Line'), attr: 'zeroline' },
          _react2.default.createElement(_components.Radio, {
            attr: 'zeroline',
            options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
          }),
          _react2.default.createElement(_components.Numeric, { label: _('Thickness'), attr: 'zerolinewidth', units: 'px' }),
          _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'zerolinecolor' })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Axis Background'), attr: 'showbackground' },
          _react2.default.createElement(_components.Radio, {
            attr: 'showbackground',
            options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
          }),
          _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'backgroundcolor' })
        )
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Tick Labels') },
        _react2.default.createElement(
          _components.Section,
          { name: _('Tick Labels'), attr: 'showticklabels' },
          _react2.default.createElement(_components.Radio, {
            attr: 'showticklabels',
            options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
          }),
          _react2.default.createElement(_components.FontSelector, { label: _('Typeface'), attr: 'tickfont.family' }),
          _react2.default.createElement(_components.Numeric, { label: _('Font Size'), attr: 'tickfont.size', units: 'px' }),
          _react2.default.createElement(_components.ColorPicker, { label: _('Font Color'), attr: 'tickfont.color' }),
          _react2.default.createElement(_components.Dropdown, {
            label: _('Angle'),
            attr: 'tickangle',
            clearable: false,
            options: [{ label: _('Auto'), value: 'auto' }, { label: _('45'), value: 45 }, { label: _('90'), value: 90 }, { label: _('135'), value: 135 }, { label: _('180'), value: 180 }]
          }),
          _react2.default.createElement(_components.Dropdown, {
            label: _('Exponents'),
            attr: 'exponentformat',
            clearable: false,
            options: [{ label: _('None'), value: '000' }, { label: _('e+6'), value: 'e' }, { label: _('E+6'), value: 'E' }, { label: _('x10^6'), value: 'power' }, { label: _('k/M/G'), value: 'SI' }, { label: _('k/M/B'), value: 'B' }]
          })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Label Formatting') },
          _react2.default.createElement(
            _components.MenuPanel,
            null,
            _react2.default.createElement(
              _components.Section,
              { name: _('Prefix') },
              _react2.default.createElement(_components.Radio, {
                attr: 'showtickprefix',
                options: [{ label: _('Every'), value: 'all' }, { label: _('First'), value: 'first' }, { label: _('Last'), value: 'last' }, { label: _('None'), value: 'none' }]
              })
            ),
            _react2.default.createElement(
              _components.Section,
              { name: _('Suffix') },
              _react2.default.createElement(_components.Radio, {
                attr: 'showticksuffix',
                options: [{ label: _('Every'), value: 'all' }, { label: _('First'), value: 'first' }, { label: _('Last'), value: 'last' }, { label: _('None'), value: 'none' }]
              })
            )
          ),
          _react2.default.createElement(_components.Dropdown, {
            label: _('Prefix'),
            attr: 'tickprefix',
            options: [{ label: _('x'), value: 'x' }, { label: _('$'), value: '$' }, { label: _('#'), value: '#' }, { label: _('@'), value: '@' }, { label: _('custom'), value: 'custom' }]
          }),
          _react2.default.createElement(_components.Dropdown, {
            label: _('Suffix'),
            attr: 'ticksuffix',
            options: [{ label: _('C'), value: 'C' }, { label: _('%'), value: '%' }, { label: _('^'), value: '^' }, { label: _('custom'), value: 'custom' }]
          })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Number of Labels'), attr: 'dtick' },
          _react2.default.createElement(_components.Radio, {
            attr: 'tickmode',
            options: [{ label: _('Linear'), value: 'linear' }, { label: _('Custom'), value: 'auto' }]
          }),
          _react2.default.createElement(_components.Numeric, { label: _('Step Offset'), attr: 'tick0' }),
          _react2.default.createElement(_components.Numeric, { label: _('Step Size'), attr: 'dtick' }),
          _react2.default.createElement(_components.Numeric, { label: _('Max Number of Labels'), attr: 'nticks' })
        )
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Tick Markers') },
        _react2.default.createElement(
          _components.Section,
          { name: _('Tick Markers'), attr: 'ticks' },
          _react2.default.createElement(_components.Radio, {
            attr: 'ticks',
            options: [{ label: _('Inside'), value: 'inside' }, { label: _('Outside'), value: 'outside' }, { label: _('Hide'), value: '' }]
          }),
          _react2.default.createElement(_components.Numeric, { label: _('Length'), attr: 'ticklen', units: 'px' }),
          _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'tickwidth', units: 'px' }),
          _react2.default.createElement(_components.ColorPicker, { label: _('Tick Color'), attr: 'tickcolor' })
        ),
        _react2.default.createElement(
          _components.Section,
          { name: _('Number of Markers') },
          _react2.default.createElement(_components.Radio, {
            attr: 'tickmode',
            options: [{ label: _('Linear'), value: 'linear' }, { label: _('Custom'), value: 'auto' }]
          }),
          _react2.default.createElement(_components.Numeric, { label: _('Step Offset'), attr: 'tick0' }),
          _react2.default.createElement(_components.Numeric, { label: _('Step Size'), attr: 'dtick' }),
          _react2.default.createElement(_components.Numeric, { label: _('Max Number of Markers'), attr: 'nticks' })
        )
      ),
      _react2.default.createElement(
        _components.Fold,
        { name: _('Range Slider') },
        _react2.default.createElement(_components.Radio, {
          attr: 'rangeslider.visible',
          options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
        }),
        _react2.default.createElement(_components.Numeric, {
          label: _('Height'),
          attr: 'rangeslider.thickness',
          units: '%',
          step: 0.1
        }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Background Color'), attr: 'rangeslider.bgcolor' }),
        _react2.default.createElement(_components.Numeric, {
          label: _('Border Width'),
          attr: 'rangeslider.borderwidth',
          units: 'px'
        }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Border Color'), attr: 'rangeslider.bordercolor' })
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Zoom Interactivity') },
        _react2.default.createElement(_components.Radio, {
          attr: 'fixedrange',
          options: [{ label: _('Enable'), value: false }, { label: _('Disable'), value: true }]
        })
      ),
      _react2.default.createElement(
        _components.AxesFold,
        { name: _('Hover Projections') },
        _react2.default.createElement(_components.Radio, {
          attr: 'showspikes',
          options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
        }),
        _react2.default.createElement(_components.Radio, {
          attr: 'spikesides',
          label: _('Show Sides'),
          options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
        }),
        _react2.default.createElement(_components.Numeric, { label: _('Thickness'), attr: 'spikethickness', units: 'px' }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'spikecolor' })
      )
    )
  );
};

StyleAxesPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleAxesPanel);
//# sourceMappingURL=StyleAxesPanel.js.map