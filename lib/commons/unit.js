'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var link = function link(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'a',
    other,
    children
  );
};

var icon = function icon(_ref2) {
  var children = _ref2.children,
      other = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'i',
    other,
    children
  );
};

var div = function div(_ref3) {
  var children = _ref3.children,
      other = _objectWithoutProperties(_ref3, ['children']);

  return _react2.default.createElement(
    'div',
    other,
    children
  );
};

var basicComponentMap = {
  link: link,
  icon: icon,
  div: div
};

var Unit = function (_React$Component) {
  _inherits(Unit, _React$Component);

  function Unit() {
    _classCallCheck(this, Unit);

    return _possibleConstructorReturn(this, (Unit.__proto__ || Object.getPrototypeOf(Unit)).apply(this, arguments));
  }

  _createClass(Unit, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$type = _props.type,
          type = _props$type === undefined ? 'div' : _props$type,
          other = _objectWithoutProperties(_props, ['children', 'type']);

      var Component = basicComponentMap[type];

      return _react2.default.createElement(
        Component,
        other,
        children
      );
    }
  }]);

  return Unit;
}(_react2.default.Component);

exports.default = Unit;