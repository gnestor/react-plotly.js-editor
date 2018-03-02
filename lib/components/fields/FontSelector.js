'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../../lib/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable react/prop-types */
var styledRenderer = function styledRenderer(_ref) {
  var value = _ref.value,
      label = _ref.label;
  return _react2.default.createElement(
    'span',
    { style: { fontFamily: value } },
    label
  );
};
/* eslint-enable react/prop-types */

var FontSelector = function FontSelector(props) {
  var options = void 0;
  if (Array.isArray(props.options)) {
    options = props.options;
  } else {
    options = [].concat(_toConsumableArray(_constants.DEFAULT_FONTS));
  }
  return _react2.default.createElement(_Dropdown2.default, _extends({}, props, {
    options: options,
    valueRenderer: styledRenderer,
    optionRenderer: styledRenderer
  }));
};

FontSelector.propTypes = _extends({}, _Dropdown2.default.propTypes);

FontSelector.defaultProps = {
  clearable: false
};

exports.default = FontSelector;
//# sourceMappingURL=FontSelector.js.map