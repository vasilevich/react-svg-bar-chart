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

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

var Svg = styled.svg(_templateObject)

import Grid from "./components/Grid"
import Bars from "./components/Bars"
import Points from "./components/Points"
import Axis from "./components/Axis"
import Labels from "./components/Labels"

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

    return React.createElement(
      Svg,
      {
        viewBox:
          "0 0 " + Math.abs(viewBoxWidth) + " " + Math.abs(viewBoxHeight),
      },
      React.createElement(
        "g",
        {transform: "translate(" + this.getLabelsYWidth() + ", 0)"},
        React.createElement(Grid, _extends({}, props, commonProps)),
        React.createElement(Axis, _extends({}, props, commonProps)),
        React.createElement(Bars, _extends({}, props, commonProps)),
        React.createElement(Labels, _extends({}, props, commonProps)),
        React.createElement(Points, _extends({}, props, commonProps))
      )
    )
  }

  return LineChart
})(React.Component)

LineChart.propTypes =
  process.env.NODE_ENV !== "production"
    ? _extends(
        {
          data: PropTypes.arrayOf(
            PropTypes.shape({
              x: PropTypes.number,
              y: PropTypes.number,
            })
          ).isRequired,
          dataColors: PropTypes.arrayOf(
            PropTypes.shape({
              startX: PropTypes.number,
              endX: PropTypes.number,
              color: PropTypes.string,
            })
          ),
          viewBoxHeight: PropTypes.number,
          viewBoxWidth: PropTypes.number,
        },
        Bars.propTypes,
        Grid.propTypes,
        Axis.propTypes,
        Points.propTypes,
        Labels.propTypes
      )
    : {}

LineChart.defaultProps = _extends(
  {
    data: [],
    dataColors: [],
    viewBoxHeight: 300,
    viewBoxWidth: 800,
  },
  Bars.defaultProps,
  Grid.defaultProps,
  Axis.defaultProps,
  Points.defaultProps,
  Labels.defaultProps
)

export default LineChart
