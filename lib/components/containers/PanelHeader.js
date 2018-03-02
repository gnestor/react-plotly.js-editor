'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require('../widgets/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _plotlyIcons = require('plotly-icons');

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelHeader = function (_Component) {
  _inherits(PanelHeader, _Component);

  function PanelHeader() {
    _classCallCheck(this, PanelHeader);

    return _possibleConstructorReturn(this, (PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).apply(this, arguments));
  }

  _createClass(PanelHeader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          addAction = _props.addAction,
          allowCollapse = _props.allowCollapse,
          toggleFolds = _props.toggleFolds,
          hasOpen = _props.hasOpen,
          _ = _props.localize;


      var icon = _react2.default.createElement(_plotlyIcons.PlusIcon, null);
      return !children && !addAction && !allowCollapse ? null : _react2.default.createElement(
        'div',
        { className: 'panel__header' },
        children && children.length ? _react2.default.createElement(
          'div',
          { className: 'panel__header__content' },
          children
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'panel__header__actions__container' },
          allowCollapse ? _react2.default.createElement(
            'div',
            { className: 'panel__header__collapse', onClick: toggleFolds },
            hasOpen ? _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_plotlyIcons.ResizeDownIcon, null),
              _('Collapse All')
            ) : _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_plotlyIcons.ResizeUpIcon, null),
              _('Expand All')
            )
          ) : null,
          addAction ? _react2.default.createElement(
            'div',
            { className: 'panel__header__action' },
            _react2.default.createElement(_Button2.default, {
              variant: 'primary',
              className: 'js-add-button',
              onClick: function onClick() {
                return addAction.handler(_this2.context);
              },
              icon: icon,
              label: addAction.label
            }),
            ' '
          ) : null
        )
      );
    }
  }]);

  return PanelHeader;
}(_react.Component);

PanelHeader.contextTypes = {
  layout: _propTypes2.default.object,
  onUpdate: _propTypes2.default.func,
  updateContainer: _propTypes2.default.func
};

PanelHeader.propTypes = {
  addAction: _propTypes2.default.object,
  allowCollapse: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  hasOpen: _propTypes2.default.bool,
  localize: _propTypes2.default.func,
  toggleFolds: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(PanelHeader);
//# sourceMappingURL=PanelHeader.js.map