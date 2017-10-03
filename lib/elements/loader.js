'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

var _div = require('../commons/div');

var _div2 = _interopRequireDefault(_div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateArray = ['disabled', 'active'];
var defaultClassName = 'ui loader';
var componentName = 'Loader';

var Loader = new _filter2.default(_div2.default).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);

exports.default = Loader;