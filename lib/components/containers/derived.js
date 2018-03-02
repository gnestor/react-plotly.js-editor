'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TraceTypeSection = exports.LayoutPanel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutPanel = (0, _lib.connectLayoutToPlot)(_Panel2.default);

var TraceTypeSection = function TraceTypeSection(props, context) {
  var fullContainer = context.fullContainer;

  if (fullContainer && (fullContainer._fullInput && props.traceTypes.includes(fullContainer._fullInput.type) || props.traceTypes.includes(fullContainer.type))) {
    return _react2.default.createElement(_Section2.default, props);
  }

  return null;
};

TraceTypeSection.contextTypes = _lib.containerConnectedContextTypes;
TraceTypeSection.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string,
  traceTypes: _propTypes2.default.array
};

TraceTypeSection.defaultProps = {
  traceTypes: []
};

exports.LayoutPanel = LayoutPanel;
exports.TraceTypeSection = TraceTypeSection;
//# sourceMappingURL=derived.js.map