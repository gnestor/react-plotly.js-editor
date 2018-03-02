'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('./components');

var _lib = require('./lib');

var _default_panels = require('./default_panels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultEditor = function DefaultEditor(_ref) {
  var _ = _ref.localize;
  return _react2.default.createElement(
    _components.PanelMenuWrapper,
    null,
    _react2.default.createElement(_default_panels.GraphCreatePanel, { group: _('Graph'), name: _('Create') }),
    _react2.default.createElement(_default_panels.StyleTracesPanel, { group: _('Style'), name: _('Traces') }),
    _react2.default.createElement(_default_panels.StyleLayoutPanel, { group: _('Style'), name: _('Layout') }),
    _react2.default.createElement(_default_panels.StyleNotesPanel, { group: _('Style'), name: _('Notes') }),
    _react2.default.createElement(_default_panels.StyleAxesPanel, { group: _('Style'), name: _('Axes') }),
    _react2.default.createElement(_default_panels.StyleLegendPanel, { group: _('Style'), name: _('Legend') }),
    _react2.default.createElement(_default_panels.StyleColorbarsPanel, { group: _('Style'), name: _('Color Bars') }),
    _react2.default.createElement(_default_panels.StyleShapesPanel, { group: _('Style'), name: _('Shapes') }),
    _react2.default.createElement(_default_panels.StyleImagesPanel, { group: _('Style'), name: _('Images') })
  );
};

DefaultEditor.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(DefaultEditor);
//# sourceMappingURL=DefaultEditor.js.map