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

var StyleImagesPanel = function StyleImagesPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.ImageAccordion,
    { canAdd: true },
    _react2.default.createElement(_components.Radio, {
      attr: 'visible',
      options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
    }),
    _react2.default.createElement(_components.TextEditor, { attr: 'source', label: _('Source'), show: true }),
    _react2.default.createElement(_components.Dropdown, {
      label: _('Aspect Ratio'),
      attr: 'sizing',
      options: [{ label: _('Contain'), value: 'contain' }, { label: _('Fill'), value: 'fill' }, { label: _('Stretch'), value: 'stretch' }]
    }),
    _react2.default.createElement(_components.PositioningNumeric, { attr: 'sizex', label: _('Width') }),
    _react2.default.createElement(_components.PositioningNumeric, { attr: 'sizey', label: _('Height') }),
    _react2.default.createElement(
      _components.Section,
      { name: _('Horizontal Positioning') },
      _react2.default.createElement(
        _components.MenuPanel,
        null,
        _react2.default.createElement(
          _components.Section,
          { name: _('Anchor Point') },
          _react2.default.createElement(_components.Radio, {
            attr: 'xanchor',
            options: [{ label: _('Left'), value: 'left' }, { label: _('Center'), value: 'center' }, { label: _('Right'), value: 'right' }]
          })
        )
      ),
      _react2.default.createElement(_components.PositioningRef, { label: _('Relative To'), attr: 'xref' }),
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
          _react2.default.createElement(_components.Radio, {
            attr: 'yanchor',
            options: [{ label: _('Top'), value: 'top' }, { label: _('Middle'), value: 'middle' }, { label: _('Bottom'), value: 'bottom' }]
          })
        )
      ),
      _react2.default.createElement(_components.PositioningRef, { label: _('Relative To'), attr: 'yref' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('Position'), attr: 'y' })
    )
  );
};

StyleImagesPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleImagesPanel);
//# sourceMappingURL=StyleImagesPanel.js.map