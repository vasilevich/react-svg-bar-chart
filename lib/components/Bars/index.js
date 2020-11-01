"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  fill: ", ";\n  opacity: ", ";\n  stroke: none;\n"],
  ["\n  fill: ", ";\n  opacity: ", ";\n  stroke: none;\n"]
)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _Labels = require("../Labels")

var _Labels2 = _interopRequireDefault(_Labels)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

function round(n) {
  return Math.round(n * 100) / 100
}

var BARS_MARGIN_DEFAULT = 0.1

var Bar = _styledComponents2.default.rect(
  _templateObject,
  function(props) {
    return props.color
  },
  function(props) {
    return props.opacity
  }
)

Bar.displayName = "Bar"

var Bars = (function(_React$Component) {
  _inherits(Bars, _React$Component)

  function Bars() {
    _classCallCheck(this, Bars)

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments)
    )
  }

  Bars.prototype.render = function render() {
    var _props = this.props,
      barsOpacity = _props.barsOpacity,
      barsMargin = _props.barsMargin,
      barsColor = _props.barsColor,
      data = _props.data,
      dataColors = _props.dataColors,
      onHover = _props.onHover,
      getX = _props.getX,
      getY = _props.getY,
      minX = _props.minX,
      minY = _props.minY,
      unitWidth = _props.unitWidth

    var margin =
      barsMargin >= 0 && barsMargin < unitWidth / 2
        ? barsMargin
        : BARS_MARGIN_DEFAULT
    var barsWidth = unitWidth - margin * 2
    return _react2.default.createElement(
      "g",
      null,
      data.map(function(point, i) {
        var selectedPoint = dataColors.find(function(_ref) {
          var startX = _ref.startX,
            endX = _ref.endX
          return point.x >= startX && point.x <= endX
        })
        return _react2.default.createElement(Bar, {
          key: i,
          color: selectedPoint ? selectedPoint.color : barsColor,
          opacity: barsOpacity,
          x: getX(point.x + margin),
          y: getY(point.y),
          width: getX(barsWidth + minX),
          height: round(getY(minY) - getY(point.y), 2),
          onMouseEnter: function onMouseEnter(e) {
            return onHover(point, e)
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(null, null)
          },
        })
      })
    )
  }

  return Bars
})(_react2.default.Component)

Bars.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        barsColor: _propTypes2.default.string,
        barsMargin: _propTypes2.default.number,
        barsOpacity: _propTypes2.default.number,
        data: _propTypes2.default.arrayOf(
          _propTypes2.default.shape({
            x: _propTypes2.default.number,
            y: _propTypes2.default.number,
          })
        ).isRequired,
        dataColors: _propTypes2.default.arrayOf(
          _propTypes2.default.shape({
            startX: _propTypes2.default.number,
            endX: _propTypes2.default.number,
            color: _propTypes2.default.string,
          })
        ),
        getX: _propTypes2.default.func,
        getY: _propTypes2.default.func,
        labelsHeightX: _Labels2.default.propTypes.labelsHeightX,
        labelsOffsetX: _Labels2.default.propTypes.labelsOffsetX,
        labelsOffsetY: _Labels2.default.propTypes.labelsOffsetY,
        labelsWidthY: _propTypes2.default.number,
        minX: _propTypes2.default.number.isRequired,
        minY: _propTypes2.default.number.isRequired,
        onHover: _propTypes2.default.func,
        unitWidth: _propTypes2.default.number,
      }
    : {}

Bars.defaultProps = {
  barsColor: "#34495e",
  barsMargin: BARS_MARGIN_DEFAULT,
  barsOpacity: 1,
  getX: function getX(x) {
    return x
  },
  getY: function getY(y) {
    return y
  },
  labelsHeightX: _Labels2.default.defaultProps.labelsHeightX,
  labelsOffsetX: _Labels2.default.defaultProps.labelsOffsetX,
  labelsOffsetY: _Labels2.default.defaultProps.labelsOffsetY,
  unitWidth: 1,
}

exports.default = Bars
module.exports = exports["default"]
