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

var StyleShapesPanel = function StyleShapesPanel(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.ShapeAccordion,
    { canAdd: true },
    _react2.default.createElement(_components.Radio, {
      attr: 'visible',
      options: [{ label: _('Show'), value: true }, { label: _('Hide'), value: false }]
    }),
    _react2.default.createElement(_components.Radio, {
      attr: 'type',
      options: [{ label: _('Line'), value: 'line' }, { label: _('Rectangle'), value: 'rect' }, { label: _('Ellipse'), value: 'circle' }]
    }),
    _react2.default.createElement(
      _components.Section,
      { name: _('Horizontal Boundaries') },
      _react2.default.createElement(_components.PositioningRef, { label: _('Relative to'), attr: 'xref' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('Start Point'), attr: 'x0' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('End Point'), attr: 'x1' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Vertical Boundaries') },
      _react2.default.createElement(_components.PositioningRef, { label: _('Relative to'), attr: 'yref' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('Start Point'), attr: 'y0' }),
      _react2.default.createElement(_components.PositioningNumeric, { label: _('End Point'), attr: 'y1' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Lines') },
      _react2.default.createElement(_components.Numeric, { label: _('Width'), attr: 'line.width' }),
      _react2.default.createElement(_components.ColorPicker, { label: _('Line Color'), attr: 'line.color' }),
      _react2.default.createElement(_components.LineDashSelector, { label: _('Type'), attr: 'line.dash' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Fill') },
      _react2.default.createElement(_components.ColorPicker, { label: _('Color'), attr: 'fillcolor' }),
      _react2.default.createElement(_components.Numeric, { label: _('Opacity'), step: 0.1, attr: 'opacity' })
    )
  );
};

StyleShapesPanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(StyleShapesPanel);
//# sourceMappingURL=StyleShapesPanel.js.map