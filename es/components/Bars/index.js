var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  fill: ", ";\n  opacity: ", ";\n  stroke: none;\n"],
  ["\n  fill: ", ";\n  opacity: ", ";\n  stroke: none;\n"]
)

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

import Labels from "../Labels"

function round(n) {
  return Math.round(n * 100) / 100
}

var BARS_MARGIN_DEFAULT = 0.1

var Bar = styled.rect(
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
    return React.createElement(
      "g",
      null,
      data.map(function(point, i) {
        var selectedPoint = dataColors.find(function(_ref) {
          var startX = _ref.startX,
            endX = _ref.endX
          return point.x >= startX && point.x <= endX
        })
        return React.createElement(Bar, {
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
})(React.Component)

Bars.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        barsColor: PropTypes.string,
        barsMargin: PropTypes.number,
        barsOpacity: PropTypes.number,
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
        getX: PropTypes.func,
        getY: PropTypes.func,
        labelsHeightX: Labels.propTypes.labelsHeightX,
        labelsOffsetX: Labels.propTypes.labelsOffsetX,
        labelsOffsetY: Labels.propTypes.labelsOffsetY,
        labelsWidthY: PropTypes.number,
        minX: PropTypes.number.isRequired,
        minY: PropTypes.number.isRequired,
        onHover: PropTypes.func,
        unitWidth: PropTypes.number,
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
  labelsHeightX: Labels.defaultProps.labelsHeightX,
  labelsOffsetX: Labels.defaultProps.labelsOffsetX,
  labelsOffsetY: Labels.defaultProps.labelsOffsetY,
  unitWidth: 1,
}

export default Bars
