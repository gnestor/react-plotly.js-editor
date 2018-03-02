'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connectAxesToLayout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nested_property = require('plotly.js/src/lib/nested_property');

var _nested_property2 = _interopRequireDefault(_nested_property);

var _multiValues = require('./multiValues');

var _lib = require('../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function computeAxesOptions(axes, _) {
  var options = [{ label: _('All'), value: 'allaxes' }];
  for (var i = 0; i < axes.length; i++) {
    var ax = axes[i];
    var label = (0, _lib.capitalize)(ax._name.split('axis')[0]);
    var value = (ax._subplot && !ax._subplot.includes('xaxis') && !ax._subplot.includes('yaxis') ? ax._subplot + '.' + ax._name : ax._subplot).trim();

    options[i + 1] = {
      label: label,
      value: value,
      axisGroup: ax._axisGroup,
      title: (0, _lib.getAxisTitle)(ax)
    };
  }

  return options;
}

function connectAxesToLayout(WrappedComponent) {
  var AxesConnectedComponent = function (_Component) {
    _inherits(AxesConnectedComponent, _Component);

    function AxesConnectedComponent(props, context) {
      _classCallCheck(this, AxesConnectedComponent);

      var _this = _possibleConstructorReturn(this, (AxesConnectedComponent.__proto__ || Object.getPrototypeOf(AxesConnectedComponent)).call(this, props, context));

      _this.state = { axesTarget: _this.props.defaultAxesTarget };
      _this.axesTargetHandler = _this.axesTargetHandler.bind(_this);
      _this.updateContainer = _this.updateContainer.bind(_this);

      _this.setLocals(props, _this.state, context);
      return _this;
    }

    _createClass(AxesConnectedComponent, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState, nextContext) {
        // This is not enough, what if plotly.js adds new axes...
        this.setLocals(nextProps, nextState, nextContext);
      }
    }, {
      key: 'setLocals',
      value: function setLocals(nextProps, nextState, nextContext) {
        var container = nextContext.container,
            fullContainer = nextContext.fullContainer;
        var axesTarget = nextState.axesTarget;


        this.axes = (0, _lib.getAllAxes)(fullContainer);
        this.axesOptions = computeAxesOptions(this.axes, nextProps.localize);

        if (axesTarget === 'allaxes') {
          var multiValuedContainer = (0, _multiValues.deepCopyPublic)(this.axes[0]);
          this.axes.slice(1).forEach(function (ax) {
            return Object.keys(ax).forEach(function (key) {
              return (0, _multiValues.setMultiValuedContainer)(multiValuedContainer, ax, key, {
                searchArrays: true
              });
            });
          });
          this.fullContainer = multiValuedContainer;
          this.defaultContainer = this.axes[0];
          this.container = {};
        } else {
          this.fullContainer = (0, _nested_property2.default)(fullContainer, axesTarget).get();
          this.container = this.container = (0, _nested_property2.default)(container, axesTarget).get() || {};
        }
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          axesOptions: this.axesOptions,
          axesTarget: this.state.axesTarget,
          axesTargetHandler: this.axesTargetHandler,
          container: this.container,
          defaultContainer: this.defaultContainer,
          fullContainer: this.fullContainer,
          updateContainer: this.updateContainer
        };
      }
    }, {
      key: 'axesTargetHandler',
      value: function axesTargetHandler(axesTarget) {
        this.setState({ axesTarget: axesTarget });
      }
    }, {
      key: 'updateContainer',
      value: function updateContainer(update) {
        var newUpdate = {};
        var axesTarget = this.state.axesTarget;


        var axes = this.axes;
        if (axesTarget !== 'allaxes') {
          // only the selected container
          axes = [this.fullContainer];
        }

        var keys = Object.keys(update);
        for (var i = 0; i < keys.length; i++) {
          for (var j = 0; j < axes.length; j++) {
            var subplot = axes[j]._subplot;
            var axesKey = axes[j]._name;

            if (subplot && !subplot.includes('xaxis') && !subplot.includes('yaxis')) {
              axesKey = subplot + '.' + axesKey;
            }

            var newkey = axesKey + '.' + keys[i];
            newUpdate[newkey] = update[keys[i]];
          }
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return AxesConnectedComponent;
  }(_react.Component);

  AxesConnectedComponent.displayName = 'AxesConnected' + (0, _lib.getDisplayName)(WrappedComponent);

  AxesConnectedComponent.propTypes = {
    defaultAxesTarget: _propTypes2.default.string,
    localize: _propTypes2.default.func
  };

  AxesConnectedComponent.defaultProps = {
    defaultAxesTarget: 'allaxes'
  };

  AxesConnectedComponent.contextTypes = {
    container: _propTypes2.default.object.isRequired,
    fullContainer: _propTypes2.default.object.isRequired,
    updateContainer: _propTypes2.default.func
  };

  AxesConnectedComponent.childContextTypes = {
    axesOptions: _propTypes2.default.array,
    axesTarget: _propTypes2.default.string,
    axesTargetHandler: _propTypes2.default.func,
    container: _propTypes2.default.object,
    defaultContainer: _propTypes2.default.object,
    fullContainer: _propTypes2.default.object,
    updateContainer: _propTypes2.default.func
  };

  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;

  AxesConnectedComponent.plotly_editor_traits = plotly_editor_traits;

  return (0, _lib.localize)(AxesConnectedComponent);
}
//# sourceMappingURL=connectAxesToLayout.js.map