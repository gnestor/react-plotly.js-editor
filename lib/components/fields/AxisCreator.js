'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Info = require('./Info');

var _Info2 = _interopRequireDefault(_Info);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../../lib/constants');

var _Button = require('../widgets/Button');

var _Button2 = _interopRequireDefault(_Button);

var _plotlyIcons = require('plotly-icons');

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnconnectedNewAxisCreator = function (_Component) {
  _inherits(UnconnectedNewAxisCreator, _Component);

  function UnconnectedNewAxisCreator() {
    _classCallCheck(this, UnconnectedNewAxisCreator);

    return _possibleConstructorReturn(this, (UnconnectedNewAxisCreator.__proto__ || Object.getPrototypeOf(UnconnectedNewAxisCreator)).apply(this, arguments));
  }

  _createClass(UnconnectedNewAxisCreator, [{
    key: 'canAddAxis',
    value: function canAddAxis() {
      var _this2 = this;

      var currentAxisId = this.props.fullContainer[this.props.attr];
      var currentTraceIndex = this.props.fullContainer.index;
      return this.context.fullData.some(function (d) {
        return d.index !== currentTraceIndex && d[_this2.props.attr] === currentAxisId;
      });
    }
  }, {
    key: 'updateAxis',
    value: function updateAxis() {
      var _props = this.props,
          attr = _props.attr,
          updateContainer = _props.updateContainer;
      var _context = this.context,
          onUpdate = _context.onUpdate,
          fullLayout = _context.fullLayout;


      updateContainer(_defineProperty({}, attr, attr.charAt(0) + (fullLayout._subplots[attr].length + 1)));

      if (attr === 'yaxis') {
        var _update;

        onUpdate({
          type: _constants.EDITOR_ACTIONS.UPDATE_LAYOUT,
          payload: {
            update: (_update = {}, _defineProperty(_update, attr + (fullLayout._subplots[attr].length + 1) + '.side', 'right'), _defineProperty(_update, attr + (fullLayout._subplots[attr].length + 1) + '.overlaying', 'y'), _update)
          }
        });
      }

      if (attr === 'xaxis') {
        var _update2;

        onUpdate({
          type: _constants.EDITOR_ACTIONS.UPDATE_LAYOUT,
          payload: {
            update: (_update2 = {}, _defineProperty(_update2, attr + (fullLayout._subplots[attr].length + 1) + '.side', 'top'), _defineProperty(_update2, attr + (fullLayout._subplots[attr].length + 1) + '.overlaying', 'x'), _update2)
          }
        });
      }
    }
  }, {
    key: 'recalcAxes',
    value: function recalcAxes(update) {
      var _this3 = this;

      var currentAxisId = this.props.fullContainer[this.props.attr];

      // When we select another axis, make sure no unused axes are left:
      // does any other trace have this axisID? If so, nothing needs to change
      if (this.context.fullData.some(function (t) {
        return t[_this3.props.attr] === currentAxisId && t.index !== _this3.props.fullContainer.index;
      })) {
        this.props.updateContainer(_defineProperty({}, this.props.attr, update));
        return;
      }

      // if not, send action to readjust axis references in trace data and layout
      var tracesToAdjust = this.context.fullData.filter(function (trace) {
        return Number(trace[_this3.props.attr].slice(1)) > Number(currentAxisId.slice(1));
      });

      this.context.onUpdate({
        type: _constants.EDITOR_ACTIONS.UPDATE_AXIS_REFERENCES,
        payload: { tracesToAdjust: tracesToAdjust, attrToAdjust: this.props.attr }
      });

      this.props.updateContainer(_defineProperty({}, this.props.attr, update));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var icon = _react2.default.createElement(_plotlyIcons.PlusIcon, null);
      var extraComponent = this.canAddAxis() ? _react2.default.createElement(_Button2.default, { variant: 'no-text', icon: icon, onClick: function onClick() {
          return _this4.updateAxis();
        } }) : _react2.default.createElement(_Button2.default, { variant: 'no-text--disabled', icon: icon, onClick: function onClick() {} });

      return _react2.default.createElement(_Dropdown2.default, {
        label: this.props.label,
        attr: this.props.attr,
        clearable: false,
        options: this.props.options,
        updatePlot: function updatePlot(u) {
          return _this4.recalcAxes(u);
        },
        extraComponent: extraComponent
      });
    }
  }]);

  return UnconnectedNewAxisCreator;
}(_react.Component);

UnconnectedNewAxisCreator.propTypes = {
  attr: _propTypes2.default.string,
  label: _propTypes2.default.string,
  options: _propTypes2.default.array,
  canAddAxis: _propTypes2.default.bool,
  localize: _propTypes2.default.func,
  container: _propTypes2.default.object,
  fullContainer: _propTypes2.default.object,
  updateContainer: _propTypes2.default.func
};

UnconnectedNewAxisCreator.contextTypes = {
  fullLayout: _propTypes2.default.object,
  data: _propTypes2.default.array,
  fullData: _propTypes2.default.array,
  onUpdate: _propTypes2.default.func
};

var ConnectedNewAxisCreator = (0, _lib.connectToContainer)(UnconnectedNewAxisCreator);

var AxisCreator = function (_Component2) {
  _inherits(AxisCreator, _Component2);

  function AxisCreator() {
    _classCallCheck(this, AxisCreator);

    return _possibleConstructorReturn(this, (AxisCreator.__proto__ || Object.getPrototypeOf(AxisCreator)).apply(this, arguments));
  }

  _createClass(AxisCreator, [{
    key: 'render',
    value: function render() {
      var _this6 = this;

      var isFirstTraceOfType = this.context.data.filter(function (d) {
        return d.type === _this6.props.container.type;
      }).length === 1;

      if (isFirstTraceOfType) {
        return null;
      }

      var _ = this.props.localize;
      var fullLayout = this.context.fullLayout;

      var axisType = (0, _lib.traceTypeToAxisType)(this.props.container.type);
      var controls = [];

      function getOptions(axisType) {
        return fullLayout._subplots[axisType].map(function (axisId) {
          return {
            label: (0, _lib.getAxisTitle)(fullLayout[(0, _lib.axisIdToAxisName)(axisId)]),
            value: axisId
          };
        });
      }

      // for the moment only cartesian subplots are supported
      if (axisType === 'cartesian') {
        ['xaxis', 'yaxis'].forEach(function (type, index) {
          controls.push(_react2.default.createElement(ConnectedNewAxisCreator, {
            key: index,
            attr: type,
            label: type.charAt(0).toUpperCase() + ' Axis',
            options: getOptions(type),
            localize: _
          }));
        });
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        controls,
        _react2.default.createElement(
          _Info2.default,
          null,
          _('You can style and position your axes in the Style > Axes Panel')
        )
      );
    }
  }]);

  return AxisCreator;
}(_react.Component);

AxisCreator.propTypes = {
  localize: _propTypes2.default.func,
  container: _propTypes2.default.object,
  fullContainer: _propTypes2.default.object
};

AxisCreator.plotly_editor_traits = {
  is_axis_creator: true
};

AxisCreator.contextTypes = {
  data: _propTypes2.default.array,
  fullData: _propTypes2.default.array,
  fullLayout: _propTypes2.default.object
};

exports.default = (0, _lib.localize)((0, _lib.connectToContainer)(AxisCreator));
//# sourceMappingURL=AxisCreator.js.map