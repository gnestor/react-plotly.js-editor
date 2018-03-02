'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeClearAxisTypes = undefined;

var _axis_ids = require('plotly.js/src/plots/cartesian/axis_ids');

var _nested_property = require('plotly.js/src/lib/nested_property');

var _nested_property2 = _interopRequireDefault(_nested_property);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Temporary fix for:
// https://github.com/plotly/react-plotly.js-editor/issues/103
// We should be able to remove this once the plotly.react method has
// been integrated into react-plotly.js and released:
// https://github.com/plotly/react-plotly.js/issues/2
/*
 * DELETE THIS FILE. EVERYTHING NEEDS TO FIND A HOME.
 */
var maybeClearAxisTypes = exports.maybeClearAxisTypes = function maybeClearAxisTypes(graphDiv, traceIndexes, update) {
  if (!Array.isArray(graphDiv._fullData)) {
    return;
  }
  var hasSrc = false;
  for (var key in update) {
    if (key.substr(key.length - 3) === 'src') {
      hasSrc = true;
    }
  }
  if (hasSrc) {
    clearAxisTypes(graphDiv, traceIndexes);
  }
};

var axLetters = ['x', 'y', 'z'];
function clearAxisTypes(gd, traces) {
  for (var i = 0; i < traces.length; i++) {
    var trace = gd._fullData[i];
    for (var j = 0; j < 3; j++) {
      var type = axLetters[j];
      var ax = (0, _axis_ids.getFromId)(gd, trace[type + 'axis'] || type);

      // Do not clear log type.
      // Log type is never an auto result so must have been intentional.
      // We are also skipping clearing 3D which could cause bugs with 3D.
      if (ax && ax.type !== 'log') {
        var axAttr = ax._name;
        var typeAttr = axAttr + '.type';
        (0, _nested_property2.default)(gd.layout, typeAttr).set(null);
      }
    }
  }
}
//# sourceMappingURL=shame.js.map