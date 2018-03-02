'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = supplyLayoutPlotProps;

var _ = require('./');

// Workaround the issue with nested layouts inside trace component.
// See:
// https://github.com/plotly/react-plotly.js-editor/issues/58#issuecomment-345492794
function supplyLayoutPlotProps(props, context) {
  return (0, _.unpackPlotProps)(props, _extends({}, context, (0, _.getLayoutContext)(context)));
}
//# sourceMappingURL=supplyLayoutPlotProps.js.map