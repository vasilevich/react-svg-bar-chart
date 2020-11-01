var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  stroke: ", ";\n  stroke-width: ", ";\n  opacity: ", ";\n"],
  ["\n  stroke: ", ";\n  stroke-width: ", ";\n  opacity: ", ";\n"]
)

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

var SvgGroup = styled.g(
  _templateObject,
  function(props) {
    return props.color
  },
  function(props) {
    return props.width
  },
  function(props) {
    return props.opacity
  }
)

var Axis = function Axis(_ref) {
  var axisColor = _ref.axisColor,
    axisOpacity = _ref.axisOpacity,
    axisVisible = _ref.axisVisible,
    axisWidth = _ref.axisWidth,
    getX = _ref.getX,
    getY = _ref.getY,
    maxX = _ref.maxX,
    maxY = _ref.maxY,
    minX = _ref.minX,
    minY = _ref.minY,
    unitWidth = _ref.unitWidth

  return axisVisible
    ? React.createElement(
        SvgGroup,
        {color: axisColor, width: axisWidth, opacity: axisOpacity},
        React.createElement("line", {
          x1: getX(minX),
          y1: getY(minY),
          x2: getX(maxX + unitWidth),
          y2: getY(minY),
        }),
        React.createElement("line", {
          x1: getX(minX),
          y1: getY(minY),
          x2: getX(minX),
          y2: getY(maxY),
        })
      )
    : null
}

Axis.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        axisColor: PropTypes.string,
        axisOpacity: PropTypes.number,
        axisVisible: PropTypes.bool,
        axisWidth: PropTypes.number,
        getX: PropTypes.func,
        getY: PropTypes.func,
        maxX: PropTypes.number,
        maxY: PropTypes.number,
        minX: PropTypes.number,
        minY: PropTypes.number,
        unitWidth: PropTypes.number,
      }
    : {}

Axis.defaultProps = {
  axisColor: "#34495e",
  axisOpacity: 0.3,
  axisVisible: true,
  axisWidth: 1,
  getX: function getX(x) {
    return x
  },
  getY: function getY(y) {
    return y
  },
  unitWidth: 1,
}

export default Axis
