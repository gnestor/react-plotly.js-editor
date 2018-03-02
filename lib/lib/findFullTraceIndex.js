"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findFullTraceIndex;
function findFullTraceIndex() {
  var fullData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var traceIndex = arguments[1];

  for (var i = 0; i < fullData.length; i++) {
    if (traceIndex === fullData[i].index) {
      return i;
    }
  }

  return -1;
}
//# sourceMappingURL=findFullTraceIndex.js.map