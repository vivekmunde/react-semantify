'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

var _unit = require('../commons/unit');

var _unit2 = _interopRequireDefault(_unit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateArray = ['disabled', 'active', 'loading'];
var defaultClassName = 'ui button';
var componentName = 'Button';

var Button = new _filter2.default(_unit2.default).typeFilter().colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);

exports.default = Button;