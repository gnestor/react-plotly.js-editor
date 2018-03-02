'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dereference;

var _walkObject = require('./walkObject');

var _walkObject2 = _interopRequireDefault(_walkObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SRC_ATTR_PATTERN = /src$/;

function dereference(container, dataSources) {
  var replacer = function replacer(key, parent) {
    if (!SRC_ATTR_PATTERN.test(key)) {
      return;
    }

    var srcRef = parent[key];
    var data = dataSources[srcRef];

    if (!Array.isArray(data)) {
      return;
    }

    var dataKey = key.replace(SRC_ATTR_PATTERN, '');
    parent[dataKey] = data;
  };

  (0, _walkObject2.default)(container, replacer, {
    walkArraysMatchingKeys: ['data', 'transforms']
  });
}
//# sourceMappingURL=dereference.js.map