"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  label: {
    color: 'inherit',
    marginRight: "4px"
  },
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    maxWidth: "100%"
  }
};

var LinkEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(LinkEditor, _React$Component);

  var _super = _createSuper(LinkEditor);

  function LinkEditor(props) {
    var _this;

    _classCallCheck(this, LinkEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleAnchorChange", function (event) {
      var newContent = {
        anchor: event.currentTarget.value
      };

      _this.setState({
        content: _objectSpread({}, _this.state.content, {}, newContent)
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleLinkChange", function (event) {
      var newContent = {
        link: event.currentTarget.value
      };

      if (_this.props.handleEditorChange) {
        _this.props.handleEditorChange(newContent);
      }

      _this.setState({
        content: _objectSpread({}, _this.state.content, {}, newContent)
      }, function () {
        if (_this.props.handleEditorChange) {
          _this.props.handleEditorChange(_this.state.content);
        }
      });
    });

    _this.state = {
      content: _this.props.content
    };
    return _this;
  }

  _createClass(LinkEditor, [{
    key: "render",
    value: function render() {
      var _this$state$content = this.state.content,
          anchor = _this$state$content.anchor,
          link = _this$state$content.link;
      var _this$props = this.props,
          classes = _this$props.classes,
          EditorProps = _this$props.EditorProps,
          editAnchorText = _this$props.editAnchorText;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes
      }, editAnchorText && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "anchor",
        style: styles.label
      }, "Link text"), /*#__PURE__*/_react["default"].createElement("input", _extends({
        name: "anchor",
        value: anchor,
        onChange: this.handleAnchorChange,
        style: styles.input
      }, EditorProps.anchor))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "link",
        style: styles.label
      }, "Link path"), /*#__PURE__*/_react["default"].createElement("input", _extends({
        name: "link",
        value: link,
        onChange: this.handleLinkChange,
        style: styles.input
      }, EditorProps.link))));
    }
  }]);

  return LinkEditor;
}(_react["default"].Component);

_defineProperty(LinkEditor, "propTypes", {});

;
LinkEditor.propTypes = {
  content: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    link: _propTypes["default"].string
  }).isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    anchor: _propTypes["default"].object,
    link: _propTypes["default"].object
  }),
  editAnchorText: _propTypes["default"].bool
};
LinkEditor.defaultProps = {
  content: {
    anchor: '',
    link: ''
  },
  editAnchorText: true,
  classes: "",
  EditorProps: {
    anchor: {},
    link: {}
  }
};
var _default = LinkEditor;
exports["default"] = _default;