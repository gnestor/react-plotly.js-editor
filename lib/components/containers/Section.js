'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section(props, context) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props, context));

    _this.children = null;
    _this.menuPanel = null;
    _this.sectionVisible = false;

    _this.processAndSetChildren(props, context);
    return _this;
  }

  _createClass(Section, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.processAndSetChildren(nextProps, nextContext);
    }
  }, {
    key: 'processAndSetChildren',
    value: function processAndSetChildren(nextProps, nextContext) {
      var _this2 = this;

      var _unpackPlotProps = (0, _lib.unpackPlotProps)(nextProps, nextContext),
          isVisible = _unpackPlotProps.isVisible;

      this.sectionVisible = isVisible === true;

      this.children = _react2.default.Children.map(nextProps.children, function (child) {
        if ((child.type.plotly_editor_traits || {}).is_menu_panel) {
          // Process the first menuPanel. Ignore the rest. MenuPanel does
          // not affect visibility.
          if (!_this2.menuPanel) {
            _this2.menuPanel = child;
          }
          return null;
        }

        if ((child.type.plotly_editor_traits || {}).is_axis_creator) {
          var _context = _this2.context,
              data = _context.data,
              fullContainer = _context.fullContainer;

          // for now, only allowing for cartesian chart types

          if (data.length > 1 && (0, _lib.traceTypeToAxisType)(data[fullContainer.index].type) === 'cartesian') {
            _this2.sectionVisible = true;
            return (0, _react.cloneElement)(child, {
              isVisible: true,
              container: _this2.context.container,
              fullContainer: _this2.context.fullContainer
            });
          }
          _this2.sectionVisible = false;
        } else if (child.props.attr) {
          var plotProps = void 0;
          if (child.type.supplyPlotProps) {
            plotProps = child.type.supplyPlotProps(child.props, nextContext);
            if (child.type.modifyPlotProps) {
              child.type.modifyPlotProps(child.props, nextContext, plotProps);
            }
          } else {
            plotProps = (0, _lib.unpackPlotProps)(child.props, nextContext);
          }

          // assign plotProps as a prop of children. If they are connectedToContainer
          // it will see plotProps and skip recomputing them.
          _this2.sectionVisible = _this2.sectionVisible || plotProps.isVisible;
          return (0, _react.cloneElement)(child, { plotProps: plotProps });
        } else if (!(child.type.plotly_editor_traits || {}).no_visibility_forcing) {
          // custom UI other than Info forces section visibility.
          _this2.sectionVisible = true;
        }
        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.sectionVisible) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'section' },
        _react2.default.createElement(
          'div',
          { className: 'section__heading' },
          _react2.default.createElement(
            'div',
            { className: 'section__heading__text' },
            this.props.name
          ),
          this.menuPanel
        ),
        this.children
      );
    }
  }]);

  return Section;
}(_react.Component);

Section.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string,
  attr: _propTypes2.default.string
};

Section.contextTypes = _lib.containerConnectedContextTypes;
exports.default = (0, _lib.localize)(Section);
//# sourceMappingURL=Section.js.map