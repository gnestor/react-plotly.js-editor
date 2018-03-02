'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fold = require('./Fold');

var _Fold2 = _interopRequireDefault(_Fold);

var _TraceRequiredPanel = require('./TraceRequiredPanel');

var _TraceRequiredPanel2 = _interopRequireDefault(_TraceRequiredPanel);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../../lib/constants');

var _lib = require('../../lib');

var _reactTabs = require('react-tabs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TraceFold = (0, _lib.connectTraceToPlot)(_Fold2.default);

var TraceAccordion = function (_Component) {
  _inherits(TraceAccordion, _Component);

  function TraceAccordion() {
    _classCallCheck(this, TraceAccordion);

    return _possibleConstructorReturn(this, (TraceAccordion.__proto__ || Object.getPrototypeOf(TraceAccordion)).apply(this, arguments));
  }

  _createClass(TraceAccordion, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _context$data = this.context.data,
          data = _context$data === undefined ? [] : _context$data;
      var _props = this.props,
          canAdd = _props.canAdd,
          canGroup = _props.canGroup,
          children = _props.children,
          messageIfEmptyFold = _props.messageIfEmptyFold,
          _ = _props.localize;


      var individualTraces = data.length && data.map(function (d, i) {
        return _react2.default.createElement(
          TraceFold,
          {
            key: i,
            traceIndexes: [i],
            canDelete: canAdd,
            messageIfEmpty: messageIfEmptyFold
          },
          children
        );
      });

      if (canAdd) {
        var addAction = {
          label: _('Trace'),
          handler: function handler(_ref) {
            var onUpdate = _ref.onUpdate;

            if (onUpdate) {
              onUpdate({
                type: _constants.EDITOR_ACTIONS.ADD_TRACE
              });
            }
          }
        };
        return _react2.default.createElement(
          _Panel2.default,
          { addAction: addAction },
          individualTraces ? individualTraces : null
        );
      }
      var tracesByGroup = data.reduce(function (allTraces, nextTrace, index) {
        var traceType = (0, _lib.plotlyTraceToCustomTrace)(nextTrace);
        if (!allTraces[traceType]) {
          allTraces[traceType] = [];
        }
        allTraces[traceType].push(index);
        return allTraces;
      }, {});

      var groupedTraces = Object.keys(tracesByGroup).filter(function (traceType) {
        return !['ohlc', 'candlestick'].includes(traceType);
      }).map(function (traceType, index) {
        return _react2.default.createElement(
          TraceFold,
          {
            key: index,
            traceIndexes: tracesByGroup[traceType],
            name: traceType
          },
          _this2.props.children
        );
      });

      if (canGroup && data.length > 1 && groupedTraces.length > 0) {
        return _react2.default.createElement(
          _TraceRequiredPanel2.default,
          { noPadding: true },
          _react2.default.createElement(
            _reactTabs.Tabs,
            null,
            _react2.default.createElement(
              _reactTabs.TabList,
              null,
              _react2.default.createElement(
                _reactTabs.Tab,
                null,
                _('All Traces')
              ),
              _react2.default.createElement(
                _reactTabs.Tab,
                null,
                _('Individual')
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              null,
              _react2.default.createElement(
                _Panel2.default,
                null,
                groupedTraces ? groupedTraces : null
              )
            ),
            _react2.default.createElement(
              _reactTabs.TabPanel,
              null,
              _react2.default.createElement(
                _Panel2.default,
                null,
                individualTraces ? individualTraces : null
              )
            )
          )
        );
      }
      return _react2.default.createElement(
        _TraceRequiredPanel2.default,
        null,
        individualTraces ? individualTraces : null
      );
    }
  }]);

  return TraceAccordion;
}(_react.Component);

TraceAccordion.contextTypes = {
  fullData: _propTypes2.default.array,
  data: _propTypes2.default.array
};

TraceAccordion.propTypes = {
  localize: _propTypes2.default.func,
  children: _propTypes2.default.node,
  canAdd: _propTypes2.default.bool,
  canGroup: _propTypes2.default.bool,
  messageIfEmptyFold: _propTypes2.default.string
};

exports.default = (0, _lib.localize)(TraceAccordion);
//# sourceMappingURL=TraceAccordion.js.map