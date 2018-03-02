'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('../components');

var _lib = require('../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphCreatePanel = function GraphCreatePanel(_ref) {
  var _ = _ref.localize;

  return _react2.default.createElement(
    _components.TraceAccordion,
    { canAdd: true },
    _react2.default.createElement(_components.TextEditor, { label: _('Name'), attr: 'name', richTextOnly: true }),
    _react2.default.createElement(_components.TraceSelector, { label: _('Type'), attr: 'type', show: true }),
    _react2.default.createElement(
      _components.Section,
      { name: _('Data') },
      _react2.default.createElement(_components.DataSelector, { label: _('Labels'), attr: 'labels' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Values'), attr: 'values' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Locations'), attr: 'locations' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Latitude'), attr: 'lat' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Longitude'), attr: 'lon' }),
      _react2.default.createElement(_components.DataSelector, {
        label: {
          histogram2d: _('X Values'),
          histogram: _('X Values'),
          '*': _('X')
        },
        attr: 'x'
      }),
      _react2.default.createElement(_components.DataSelector, {
        label: {
          histogram2d: _('Y Values'),
          histogram: _('Y Values'),
          '*': _('Y')
        },
        attr: 'y'
      }),
      _react2.default.createElement(_components.DataSelector, {
        label: {
          choropleth: _('Values'),
          histogram2d: _('Z Values'),
          '*': _('Z')
        },
        attr: 'z'
      }),
      _react2.default.createElement(_components.DataSelector, { label: _('I (Optional)'), attr: 'i' }),
      _react2.default.createElement(_components.DataSelector, { label: _('J (Optional)'), attr: 'j' }),
      _react2.default.createElement(_components.DataSelector, { label: _('K (Optional)'), attr: 'k' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Open'), attr: 'open' }),
      _react2.default.createElement(_components.DataSelector, { label: _('High'), attr: 'high' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Low'), attr: 'low' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Close'), attr: 'close' }),
      _react2.default.createElement(_components.DataSelector, { label: _('A'), attr: 'a' }),
      _react2.default.createElement(_components.DataSelector, { label: _('B'), attr: 'b' }),
      _react2.default.createElement(_components.DataSelector, { label: _('C'), attr: 'c' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Axes to Use') },
      _react2.default.createElement(_components.AxisCreator, { attr: 'fakeattr' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Error Bars X') },
      _react2.default.createElement(_components.ErrorBars, { localize: _, attr: 'error_x' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Error Bars Y') },
      _react2.default.createElement(_components.ErrorBars, { localize: _, attr: 'error_y' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Error Bars Z') },
      _react2.default.createElement(_components.ErrorBars, { localize: _, attr: 'error_z' })
    ),
    _react2.default.createElement(
      _components.Section,
      { name: _('Options') },
      _react2.default.createElement(_components.DataSelector, { label: _('Intensity'), attr: 'intensity' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Facecolor'), attr: 'facecolor' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Vertexcolor'), attr: 'vertexcolor' }),
      _react2.default.createElement(_components.Dropdown, {
        label: _('Location Format'),
        attr: 'locationmode',
        clearable: false,
        options: [{ label: _('Country Names'), value: 'country names' }, { label: _('Country Abbreviations (ISO-3)'), value: 'ISO-3' }, {
          label: _('USA State Abbreviations (e.g. NY)'),
          value: 'USA-states'
        }]
      }),
      _react2.default.createElement(_components.GeoScope, {
        label: _('Map Region'),
        attr: 'geo.scope',
        clearable: false,
        localize: _
      }),
      _react2.default.createElement(_components.GeoProjections, {
        label: _('Projection'),
        attr: 'geo.projection.type',
        clearable: false,
        localize: _
      }),
      _react2.default.createElement(_components.Numeric, { label: _('Sum'), step: 10, attr: 'sum' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Text'), attr: 'text' }),
      _react2.default.createElement(_components.DataSelector, { label: _('Color'), attr: 'marker.color' }),
      _react2.default.createElement(_components.Radio, {
        label: _('Transpose'),
        attr: 'transpose',
        options: [{ label: _('No'), value: false }, { label: _('Yes'), value: true }]
      })
    )
  );
};

GraphCreatePanel.propTypes = {
  localize: _propTypes2.default.func
};

exports.default = (0, _lib.localize)(GraphCreatePanel);
//# sourceMappingURL=GraphCreatePanel.js.map