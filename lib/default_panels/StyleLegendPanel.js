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

var StyleLegendPanel = function StyleLegendPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.TraceRequiredPanel,
    null,
    _react2.default.createElement(
      _components.Fold,
      { name: _('Legend') },
      _react2.default.createElement(_components.Radio, {
        attr: 'showlegend',
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      }),
      _react2.default.createElement(
        _components.Section,
        { name: _('Text') },
        _react2.default.createElement(_components.FontSelector, { label: _('Typeface'), attr: 'legend.font.family' }),
        _react2.default.createElement(_components.Numeric, { label: _('Size'), attr: 'legend.font.size', units: 'px' }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'legend.font.color' })
      ),
      _react2.default.createElement(
        _components.Section,
        { name: _('Legend Box') },
        _react2.default.createElement(_components.Numeric, {
          label: _('Border Width'),
          attr: 'legend.borderwidth',
          units: 'px'
        }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Border Color'), attr: 'legend.bordercolor' }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Background Color'), attr: 'legend.bgcolor' })
      ),
      _react2.default.createElement(
        _components.Section,
        { name: _('Positioning') },
        _react2.default.createElement(
          _components.MenuPanel,
          null,
          _react2.default.createElement(
            _components.Section,
            { name: _('Anchor Point') },
            _react2.default.createElement(
              _components.Info,
              null,
              _('The positioning inputs are relative to the ' + 'anchor points on the text box.')
            ),
            _react2.default.createElement(_components.Radio, {
              attr: 'legend.xanchor',
              options: [{ label: _('Auto'), value: 'auto' }, { label: _('Left'), value: 'left' }, { label: _('Center'), value: 'center' }, { label: _('Right'), value: 'right' }]
            }),
            _react2.default.createElement(_components.Radio, {
              attr: 'legend.yanchor',
              options: [{ label: _('Auto'), value: 'auto' }, { label: _('Top'), value: 'top' }, { label: _('Middle'), value: 'middle' }, { label: _('Bottom'), value: 'bottom' }]
            })
          )
        ),
        _react2.default.createElement(_components.Numeric, {
          label: _('X Position'),
          step: 0.01,
          attr: 'legend.x',
          units: 'px'
        }),
        _react2.default.createElement(_components.Numeric, {
          label: _('Y Position'),
          step: 0.01,
          attr: 'legend.y',
          units: 'px'
        })
      ),
      _react2.default.createElement(
        _components.Section,
        { name: _('Orientation') },
        _react2.default.createElement(_components.Radio, {
          attr: 'legend.orientation',
          options: [{ label: _('Vertical'), value: 'v' }, { label: _('Horizontal'), value: 'h' }]
        })
      ),
      _react2.default.createElement(
        _components.Section,
        { name: _('Trace Order') },
        _react2.default.createElement(_components.Radio, {
          attr: 'legend.traceorder',
          options: [{ label: _('Normal'), value: 'normal' }, { label: _('Reversed'), value: 'reversed' }]
        })
      )
    )
  );
};

StyleLegendPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleLegendPanel);
//# sourceMappingURL=StyleLegendPanel.js.map