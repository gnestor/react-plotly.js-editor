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

var StyleLayoutPanel = function StyleLayoutPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.TraceRequiredPanel,
    null,
    _react2.default.createElement(
      _components.Fold,
      { name: _('Canvas') },
      _react2.default.createElement(_components.Radio, {
        attr: 'autosize',
        options: [{ label: _('Auto'), value: true }, { label: _('Custom'), value: false }]
      }),
      _react2.default.createElement(_components.CanvasSize, { label: _('Fixed Width'), attr: 'width', units: 'px' }),
      _react2.default.createElement(_components.CanvasSize, { label: _('Fixed Height'), attr: 'height', units: 'px' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Plot Background'), attr: 'plot_bgcolor' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Margin Color'), attr: 'paper_bgcolor' }),
      _react2.default.createElement(_components.Radio, {
        label: 'Hover Interaction',
        attr: 'hovermode',
        options: [{ label: _('Enable'), value: 'closest' }, { label: _('Disable'), value: false }]
      })
    ),
    _react2.default.createElement(
      _components.Fold,
      { name: _('Title and Fonts') },
      _react2.default.createElement(
        _components.Section,
        { name: _('Title'), attr: 'title' },
        _react2.default.createElement(_components.TextEditor, { attr: 'title' }),
        _react2.default.createElement(_components.FontSelector, {
          label: _('Typeface'),
          attr: 'titlefont.family',
          clearable: false
        }),
        _react2.default.createElement(_components.Numeric, { label: _('Font Size'), attr: 'titlefont.size', units: 'px' }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Font Color'), attr: 'titlefont.color' })
      ),
      _react2.default.createElement(
        _components.Section,
        { name: _('Global Font') },
        _react2.default.createElement(_components.FontSelector, {
          label: _('Typeface'),
          attr: 'font.family',
          clearable: false
        }),
        _react2.default.createElement(_components.Numeric, { label: _('Font Size'), attr: 'font.size', units: 'px' }),
        _react2.default.createElement(_components.ColorPicker, { label: _('Font Color'), attr: 'font.color' })
      )
    ),
    _react2.default.createElement(
      _components.Fold,
      { name: _('Margins and Padding') },
      _react2.default.createElement(_components.Numeric, { label: _('Top'), attr: 'margin.t', units: 'px' }),
      _react2.default.createElement(_components.Numeric, { label: _('Bottom'), attr: 'margin.b', units: 'px' }),
      _react2.default.createElement(_components.Numeric, { label: _('Left'), attr: 'margin.l', units: 'px' }),
      _react2.default.createElement(_components.Numeric, { label: _('Right'), attr: 'margin.r', units: 'px' }),
      _react2.default.createElement(_components.Numeric, { label: _('Padding'), attr: 'margin.pad', units: 'px' })
    )
  );
};

StyleLayoutPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleLayoutPanel);
//# sourceMappingURL=StyleLayoutPanel.js.map