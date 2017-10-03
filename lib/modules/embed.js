'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultClassName = 'ui embed';
var componentName = 'Embed';

var Basic = function (_React$Component) {
  _inherits(Basic, _React$Component);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          placeholder = _props.placeholder,
          source = _props.source,
          sourceId = _props.sourceId,
          url = _props.url,
          icon = _props.icon,
          init = _props.init,
          other = _objectWithoutProperties(_props, ['children', 'placeholder', 'source', 'sourceId', 'url', 'icon', 'init']);

      return _react2.default.createElement(
        'div',
        _extends({}, other, {
          'data-source': source,
          'data-id': sourceId,
          'data-placeholder': placeholder,
          'data-url': url,
          'data-icon': icon,
          ref: 'embed' }),
        children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$init = this.props.init,
          init = _props$init === undefined ? false : _props$init;


      if (init === false) {
        return;
      }

      if (init === true) {
        $(this.refs.embed).embed();
      } else {
        $(this.refs.embed).embed(init);
      }
    }
  }]);

  return Basic;
}(_react2.default.Component);

var Embed = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);

exports.default = Embed;