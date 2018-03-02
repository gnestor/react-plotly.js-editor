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

var StyleNotesPanel = function StyleNotesPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.AnnotationAccordion,
    { canAdd: true },
    _react2.default.createElement(
      _components.Section,
      { name: _('Note Text'), attr: 'text' },
      _react2.default.createElement(_components.TextEditor, { attr: 'text' }),
      _react2.default.createElement(_components.FontSelector, { label: _('Typeface'), attr: 'font.family' }),
      _react2.default.createElement(_components.Numeric, { label: _('Font Size'), attr: 'font.size', units: 'px' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Font Color'), attr: 'font.color' }),
      _react2.default.createElement(_components.Numeric, { label: _('Angle'), attr: 'textangle', units: '\xB0' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Arrow') },
      _react2.default.createElement(_components.Radio, {
        attr: 'showarrow',
        options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
      }),
      _react2.default.createElement(_components.Numeric, { label: _('Line Width'), attr: 'arrowwidth', units: 'px' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'arrowcolor' }),
      _react2.default.createElement(_components.ArrowSelector, { label: _('Arrowhead'), attr: 'arrowhead' }),
      _react2.default.createElement(_components.Numeric, { label: _('Scale'), step: 0.1, attr: 'arrowsize', units: 'px' }),
      _react2.default.createElement(_components.AnnotationArrowRef, { label: 'X Offset', attr: 'axref' }),
      _react2.default.createElement(_components.AnnotationArrowRef, { label: 'Y Offset', attr: 'ayref' }),
      _react2.default.createElement(_components.Numeric, { label: _('X Vector'), attr: 'ax' }),
      _react2.default.createElement(_components.Numeric, { label: _('Y Vector'), attr: 'ay' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Horizontal Positioning') },
      _react2.default.createElement(
        _components.MenuPanel,
        null,
        _react2.default.createElement(
          _components.Section,
          { name: _('Anchor Point') },
          _react2.default.createElement(
            _components.Info,
            null,
            _('The anchor point determines which side of the ' + "annotation's positioning coordinates refer to.")
          ),
          _react2.default.createElement(_components.Radio, {
            attr: 'xanchor',
            options: [{ label: _('Auto'), value: 'auto' }, { label: _('Left'), value: 'left' }, { label: _('Center'), value: 'center' }, { label: _('Right'), value: 'right' }]
          })
        )
      ),
      _react2.default.createElement(_components.AnnotationRef, { label: _('Relative To'), attr: 'xref' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('Position'), attr: 'x' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Vertical Positioning') },
      _react2.default.createElement(
        _components.MenuPanel,
        null,
        _react2.default.createElement(
          _components.Section,
          { name: _('Anchor Point') },
          _react2.default.createElement(
            _components.Info,
            null,
            _('The anchor point determines which side of the ' + "annotation's positioning coordinates refer to.")
          ),
          _react2.default.createElement(_components.Radio, {
            attr: 'yanchor',
            options: [{ label: _('Auto'), value: 'auto' }, { label: _('Top'), value: 'top' }, { label: _('Middle'), value: 'middle' }, { label: _('Bottom'), value: 'bottom' }]
          })
        )
      ),
      _react2.default.createElement(_components.AnnotationRef, { label: _('Relative To'), attr: 'yref' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('Position'), attr: 'y' })
    )
  );
};

StyleNotesPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleNotesPanel);
//# sourceMappingURL=StyleNotesPanel.js.map