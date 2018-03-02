'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fold = require('./Fold');

var _Fold2 = _interopRequireDefault(_Fold);

var _TraceRequiredPanel = require('./TraceRequiredPanel');

var _TraceRequiredPanel2 = _interopRequireDefault(_TraceRequiredPanel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageFold = (0, _lib.connectImageToLayout)(_Fold2.default);

var ImageAccordion = function (_Component) {
  _inherits(ImageAccordion, _Component);

  function ImageAccordion() {
    _classCallCheck(this, ImageAccordion);

    return _possibleConstructorReturn(this, (ImageAccordion.__proto__ || Object.getPrototypeOf(ImageAccordion)).apply(this, arguments));
  }

  _createClass(ImageAccordion, [{
    key: 'render',
    value: function render() {
      var _context$layout$image = this.context.layout.images,
          images = _context$layout$image === undefined ? [] : _context$layout$image;
      var _props = this.props,
          canAdd = _props.canAdd,
          children = _props.children,
          _ = _props.localize;


      var content = images.length && images.map(function (img, i) {
        return _react2.default.createElement(
          ImageFold,
          { key: i, imageIndex: i, name: img.text, canDelete: canAdd },
          children
        );
      });

      var addAction = {
        label: _('Image'),
        handler: function handler(_ref) {
          var layout = _ref.layout,
              updateContainer = _ref.updateContainer;

          var imageIndex = void 0;
          if (Array.isArray(layout.images)) {
            imageIndex = layout.images.length;
          } else {
            imageIndex = 0;
          }

          var key = 'images[' + imageIndex + ']';
          var value = {
            text: _('Image') + ' ' + imageIndex,
            sizex: 0.1,
            sizey: 0.1,
            x: 0.5,
            y: 0.5
          };

          if (updateContainer) {
            updateContainer(_defineProperty({}, key, value));
          }
        }
      };

      return _react2.default.createElement(
        _TraceRequiredPanel2.default,
        { addAction: canAdd ? addAction : null },
        content ? content : null
      );
    }
  }]);

  return ImageAccordion;
}(_react.Component);

ImageAccordion.contextTypes = {
  layout: _propTypes2.default.object
};

ImageAccordion.propTypes = {
  children: _propTypes2.default.node,
  canAdd: _propTypes2.default.bool,
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(ImageAccordion);
//# sourceMappingURL=ImageAccordion.js.map