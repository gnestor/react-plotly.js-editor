'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _2 = require('..');

var _lib = require('../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleColorBarsPanel = function StyleColorBarsPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _2.TraceAccordion,
    { messageIfEmptyFold: 'Need a color scale for a colorbar!' },
    _react2.default.createElement(_2.Radio, {
      attr: 'showscale',
      options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
    }),
    _react2.default.createElement(
      _2.Panel,
      { showExpandCollapse: false },
      _react2.default.createElement(
        _2.Fold,
        { name: _('Title') },
        _react2.default.createElement(_2.TextEditor, { attr: 'colorbar.title' }),
        _react2.default.createElement(_2.Dropdown, {
          label: _('Location'),
          attr: 'colorbar.titleside',
          options: [{ label: _('Top'), value: 'top' }, { label: _('Right'), value: 'right' }, { label: _('Bottom'), value: 'bottom' }]
        }),
        _react2.default.createElement(_2.FontSelector, { label: _('Typeface'), attr: 'colorbar.titlefont.family' }),
        _react2.default.createElement(_2.Numeric, {
          label: _('Font Size'),
          attr: 'colorbar.titlefont.size',
          units: 'px'
        }),
        _react2.default.createElement(_2.ColorPicker, { label: _('Font Color'), attr: 'colorbar.titlefont.color' })
      ),
      _react2.default.createElement(
        _2.Fold,
        { name: _('Size and Positioning') },
        _react2.default.createElement(
          _2.Section,
          { name: _('Size'), attr: 'colorbar.len' },
          _react2.default.createElement(_2.Numeric, { label: _('Height'), attr: 'colorbar.len' }),
          _react2.default.createElement(_2.Radio, {
            attr: 'colorbar.lenmode',
            options: [{ label: _('Fraction of Plot'), value: 'fraction' }, { label: _('Pixels'), value: 'pixels' }]
          }),
          _react2.default.createElement(_2.Numeric, { label: _('Width'), attr: 'colorbar.thickness' }),
          _react2.default.createElement(_2.Radio, {
            attr: 'colorbar.thicknessmode',
            options: [{ label: _('Fraction of Plot'), value: 'fraction' }, { label: _('Pixels'), value: 'pixels' }]
          })
        ),
        _react2.default.createElement(
          _2.Section,
          { name: _('Horizontal Positioning'), attr: 'colorbar.x' },
          _react2.default.createElement(_2.Numeric, { label: _('Horizontal Position'), attr: 'colorbar.x' }),
          _react2.default.createElement(_2.Dropdown, {
            label: _('Positioning Anchor'),
            attr: 'colorbar.xanchor',
            options: [{ label: _('Left'), value: 'left' }, { label: _('Center'), value: 'center' }, { label: _('Right'), value: 'right' }]
          })
        ),
        _react2.default.createElement(
          _2.Section,
          { name: _('Vertical Positioning'), attr: 'colorbar.y' },
          _react2.default.createElement(_2.Numeric, { label: _('Vertical Position'), attr: 'colorbar.y' }),
          _react2.default.createElement(_2.Dropdown, {
            label: _('Positioning Anchor'),
            attr: 'colorbar.yanchor',
            options: [{ label: _('Top'), value: 'top' }, { label: _('Middle'), value: 'middle' }, { label: _('Bottom'), value: 'bottom' }]
          })
        ),
        _react2.default.createElement(
          _2.Section,
          { name: _('Padding'), attr: 'colorbar.xpad' },
          _react2.default.createElement(_2.Numeric, {
            label: _('Vertical Padding'),
            attr: 'colorbar.ypad',
            units: 'px'
          }),
          _react2.default.createElement(_2.Numeric, {
            label: _('Horizontal Padding'),
            attr: 'colorbar.xpad',
            units: 'px'
          })
        )
      ),
      _react2.default.createElement(
        _2.Fold,
        { name: _('Labels') },
        _react2.default.createElement(_2.Radio, {
          attr: 'colorbar.showticklabels',
          options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
        }),
        _react2.default.createElement(_2.FontSelector, { label: _('Typeface'), attr: 'colorbar.tickfont.family' }),
        _react2.default.createElement(_2.Numeric, {
          label: _('Font Size'),
          attr: 'colorbar.tickfont.size',
          units: 'px'
        }),
        _react2.default.createElement(_2.ColorPicker, { label: _('Font Color'), attr: 'colorbar.tickfont.color' }),
        _react2.default.createElement(_2.Dropdown, {
          label: _('Angle'),
          attr: 'colorbar.tickangle',
          clearable: false,
          options: [{ label: _('Auto'), value: 'auto' }, { label: _('45'), value: 45 }, { label: _('90'), value: 90 }, { label: _('135'), value: 135 }, { label: _('180'), value: 180 }]
        }),
        _react2.default.createElement(_2.Dropdown, {
          label: _('Exponents'),
          attr: 'colorbar.exponentformat',
          clearable: false,
          options: [{ label: _('None'), value: '000' }, { label: _('e+6'), value: 'e' }, { label: _('E+6'), value: 'E' }, { label: _('x10^6'), value: 'power' }, { label: _('k/M/G'), value: 'SI' }, { label: _('k/M/B'), value: 'B' }]
        }),
        _react2.default.createElement(
          _2.Section,
          { name: _('Label Formatting') },
          _react2.default.createElement(
            _2.MenuPanel,
            null,
            _react2.default.createElement(
              _2.Section,
              { name: _('Prefix') },
              _react2.default.createElement(_2.Radio, {
                attr: 'colorbar.showtickprefix',
                options: [{ label: _('Every'), value: 'all' }, { label: _('First'), value: 'first' }, { label: _('Last'), value: 'last' }, { label: _('None'), value: 'none' }]
              })
            ),
            _react2.default.createElement(
              _2.Section,
              { name: _('Suffix') },
              _react2.default.createElement(_2.Radio, {
                attr: 'colorbar.showticksuffix',
                options: [{ label: _('Every'), value: 'all' }, { label: _('First'), value: 'first' }, { label: _('Last'), value: 'last' }, { label: _('None'), value: 'none' }]
              })
            )
          ),
          _react2.default.createElement(_2.Dropdown, {
            label: _('Prefix'),
            attr: 'colorbar.tickprefix',
            options: [{ label: _('x'), value: 'x' }, { label: _('$'), value: '$' }, { label: _('#'), value: '#' }, { label: _('@'), value: '@' }, { label: _('custom'), value: 'custom' }]
          }),
          _react2.default.createElement(_2.Dropdown, {
            label: _('Suffix'),
            attr: 'colorbar.ticksuffix',
            options: [{ label: _('C'), value: 'C' }, { label: _('%'), value: '%' }, { label: _('^'), value: '^' }, { label: _('custom'), value: 'custom' }]
          })
        ),
        _react2.default.createElement(
          _2.Section,
          { name: _('Number of Labels') },
          _react2.default.createElement(_2.Radio, {
            attr: 'colorbar.tickmode',
            options: [{ label: _('Linear'), value: 'linear' }, { label: _('Custom'), value: 'auto' }]
          }),
          _react2.default.createElement(_2.Numeric, { label: _('Step Offset'), attr: 'colorbar.tick0' }),
          _react2.default.createElement(_2.Numeric, { label: _('Step Size'), attr: 'colorbar.dtick' }),
          _react2.default.createElement(_2.Numeric, { label: _('Max Number of Labels'), attr: 'colorbar.nticks' })
        )
      ),
      _react2.default.createElement(
        _2.Fold,
        { name: _('Ticks') },
        _react2.default.createElement(_2.Radio, {
          attr: 'colorbar.ticks',
          options: [{ label: _('Inside'), value: 'inside' }, { label: _('Outside'), value: 'outside' }, { label: _('Hide'), value: '' }]
        }),
        _react2.default.createElement(_2.Numeric, { label: _('Length'), attr: 'colorbar.ticklen', units: 'px' }),
        _react2.default.createElement(_2.Numeric, { label: _('Width'), attr: 'colorbar.tickwidth', units: 'px' }),
        _react2.default.createElement(_2.ColorPicker, { label: _('Tick Color'), attr: 'colorbar.tickcolor' }),
        _react2.default.createElement(
          _2.Section,
          { name: _('Number of Markers') },
          _react2.default.createElement(_2.Radio, {
            attr: 'colorbar.tickmode',
            options: [{ label: _('Linear'), value: 'linear' }, { label: _('Custom'), value: 'auto' }]
          }),
          _react2.default.createElement(_2.Numeric, { label: _('Step Offset'), attr: 'colorbar.tick0' }),
          _react2.default.createElement(_2.Numeric, { label: _('Step Size'), attr: 'colorbar.dtick' }),
          _react2.default.createElement(_2.Numeric, { label: _('Max Number of Markers'), attr: 'colorbar.nticks' })
        )
      ),
      _react2.default.createElement(
        _2.Fold,
        { name: _('Borders and Background') },
        _react2.default.createElement(
          _2.Section,
          { name: _('Color Bar'), attr: 'colorbar.outlinewidth' },
          _react2.default.createElement(_2.Numeric, { label: _('Border Width'), attr: 'colorbar.outlinewidth' }),
          _react2.default.createElement(_2.ColorPicker, { label: _('Border Color'), attr: 'colorbar.outlinecolor' })
        ),
        _react2.default.createElement(
          _2.Section,
          { name: _('Container'), attr: 'colorbar.bgcolor' },
          _react2.default.createElement(_2.ColorPicker, { label: _('Background Color'), attr: 'colorbar.bgcolor' }),
          _react2.default.createElement(_2.Numeric, { label: _('Border Width'), attr: 'colorbar.borderwidth' }),
          _react2.default.createElement(_2.ColorPicker, { label: _('Border Color'), attr: 'colorbar.bordercolor' })
        )
      )
    )
  );
};

StyleColorBarsPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleColorBarsPanel);
//# sourceMappingURL=StyleColorbarsPanel.js.map