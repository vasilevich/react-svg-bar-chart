"use strict"

exports.__esModule = true

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  display: block;\n  overflow: visible;\n"],
  ["\n  display: block;\n  overflow: visible;\n"]
)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _Grid = require("./components/Grid")

var _Grid2 = _interopRequireDefault(_Grid)

var _Bars = require("./components/Bars")

var _Bars2 = _interopRequireDefault(_Bars)

var _Points = require("./components/Points")

var _Points2 = _interopRequireDefault(_Points)

var _Axis = require("./components/Axis")

var _Axis2 = _interopRequireDefault(_Axis)

var _Labels = require("./components/Labels")

var _Labels2 = _interopRequireDefault(_Labels)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
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

var Svg = _styledComponents2.default.svg(_templateObject)

var UNIT_WIDTH = 1

function round(n) {
  return Math.round(n * 100) / 100
}

var LineChart = (function(_React$Component) {
  _inherits(LineChart, _React$Component)

  function LineChart() {
    _classCallCheck(this, LineChart)

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments)
    )
  }

  LineChart.prototype.getMinX = function getMinX() {
    var data = this.props.data

    return data.length > 0 ? data[0].x : 0
  }

  LineChart.prototype.getMaxX = function getMaxX() {
    var data = this.props.data

    return data.length > 0 ? data[data.length - 1].x : 0
  }

  LineChart.prototype.getMinY = function getMinY() {
    return 0
  }

  LineChart.prototype.getMaxY = function getMaxY() {
    var _props = this.props,
      data = _props.data,
      labelsCountY = _props.labelsCountY

    var yStep = labelsCountY > 0 ? labelsCountY : 1
    var maxY =
      data.length > 0
        ? data.reduce(function(max, point) {
            return point.y > max ? point.y : max
          }, data[0].y)
        : 0
    return maxY ? Math.ceil(maxY / yStep) * yStep : yStep
  }

  LineChart.prototype.getSvgX = function getSvgX(x) {
    var viewBoxWidth = this.props.viewBoxWidth

    var minX = this.getMinX()
    var maxX = this.getMaxX()
    var paddingLeft = this.getLabelsYWidth()
    return round(
      (x - minX) / (maxX + 1 - minX) * (Math.abs(viewBoxWidth) - paddingLeft)
    )
  }

  LineChart.prototype.getSvgY = function getSvgY(y) {
    var _props2 = this.props,
      labelsVisible = _props2.labelsVisible,
      viewBoxHeight = _props2.viewBoxHeight,
      labelsOffsetX = _props2.labelsOffsetX,
      labelsHeightX = _props2.labelsHeightX

    var paddingBottom = labelsVisible ? labelsHeightX + labelsOffsetX : 0
    var height = Math.abs(viewBoxHeight) - paddingBottom
    var maxY = this.getMaxY()
    return round(height - y / maxY * height)
  }

  LineChart.prototype.getLabelsYWidth = function getLabelsYWidth() {
    var _props3 = this.props,
      labelsVisible = _props3.labelsVisible,
      labelsOffsetY = _props3.labelsOffsetY,
      labelsCharacterWidth = _props3.labelsCharacterWidth

    var maxY = this.getMaxY()
    return labelsVisible
      ? maxY.toString().length * labelsCharacterWidth + labelsOffsetY
      : 0
  }

  LineChart.prototype.render = function render() {
    var _props4 = this.props,
      viewBoxHeight = _props4.viewBoxHeight,
      viewBoxWidth = _props4.viewBoxWidth,
      props = _objectWithoutProperties(_props4, [
        "viewBoxHeight",
        "viewBoxWidth",
      ])

    var minX = this.getMinX()
    var maxX = this.getMaxX()
    var maxY = this.getMaxY()
    var minY = this.getMinY()

    var commonProps = {
      getX: this.getSvgX.bind(this),
      getY: this.getSvgY.bind(this),
      maxX: maxX,
      maxY: maxY,
      minX: minX,
      minY: minY,
      round: round,
      labelsWidthY: this.getLabelsYWidth(),
      unitWidth: UNIT_WIDTH,
    }

    return _react2.default.createElement(
      Svg,
      {
        viewBox:
          "0 0 " + Math.abs(viewBoxWidth) + " " + Math.abs(viewBoxHeight),
      },
      _react2.default.createElement(
        "g",
        {transform: "translate(" + this.getLabelsYWidth() + ", 0)"},
        _react2.default.createElement(
          _Grid2.default,
          _extends({}, props, commonProps)
        ),
        _react2.default.createElement(
          _Axis2.default,
          _extends({}, props, commonProps)
        ),
        _react2.default.createElement(
          _Bars2.default,
          _extends({}, props, commonProps)
        ),
        _react2.default.createElement(
          _Labels2.default,
          _extends({}, props, commonProps)
        ),
        _react2.default.createElement(
          _Points2.default,
          _extends({}, props, commonProps)
        )
      )
    )
  }

  return LineChart
})(_react2.default.Component)

LineChart.propTypes =
  process.env.NODE_ENV !== "production"
    ? _extends(
        {
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
          viewBoxHeight: _propTypes2.default.number,
          viewBoxWidth: _propTypes2.default.number,
        },
        _Bars2.default.propTypes,
        _Grid2.default.propTypes,
        _Axis2.default.propTypes,
        _Points2.default.propTypes,
        _Labels2.default.propTypes
      )
    : {}

LineChart.defaultProps = _extends(
  {
    data: [],
    dataColors: [],
    viewBoxHeight: 300,
    viewBoxWidth: 800,
  },
  _Bars2.default.defaultProps,
  _Grid2.default.defaultProps,
  _Axis2.default.defaultProps,
  _Points2.default.defaultProps,
  _Labels2.default.defaultProps
)

exports.default = LineChart
module.exports = exports["default"]
