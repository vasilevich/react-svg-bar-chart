var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  opacity: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"],
  ["\n  opacity: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"]
)

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

var Wrapper = styled.g(
  _templateObject,
  function(props) {
    return props.opacity
  },
  function(props) {
    return props.width
  },
  function(props) {
    return props.color
  }
)

var Grid = function Grid(_ref) {
  var getX = _ref.getX,
    getY = _ref.getY,
    gridColor = _ref.gridColor,
    gridOpacity = _ref.gridOpacity,
    gridVisible = _ref.gridVisible,
    gridWidth = _ref.gridWidth,
    labelsCountY = _ref.labelsCountY,
    maxX = _ref.maxX,
    maxY = _ref.maxY,
    minX = _ref.minX,
    minY = _ref.minY,
    unitWidth = _ref.unitWidth

  if (gridVisible) {
    var gridX = []
    var gridY = []

    for (var i = minX; i <= maxX + unitWidth; i++) {
      gridX.push(
        React.createElement("line", {
          key: i,
          x1: getX(i),
          y1: getY(minY),
          x2: getX(i),
          y2: getY(maxY),
        })
      )
    }

    var yStep = labelsCountY > 0 ? labelsCountY : unitWidth
    for (var _i = minY; _i <= maxY; _i += Math.floor(maxY / yStep)) {
      gridY.push(
        React.createElement("line", {
          key: _i,
          x1: getX(minX),
          y1: getY(_i),
          x2: getX(maxX + unitWidth),
          y2: getY(_i),
        })
      )
    }

    return React.createElement(
      Wrapper,
      {color: gridColor, width: gridWidth, opacity: gridOpacity},
      gridX,
      gridY
    )
  } else {
    return null
  }
}

Grid.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        getX: PropTypes.func,
        getY: PropTypes.func,
        gridColor: PropTypes.string,
        gridOpacity: PropTypes.number,
        gridVisible: PropTypes.bool,
        gridWidth: PropTypes.number,
        labelsCountY: PropTypes.number,
        maxX: PropTypes.number,
        maxY: PropTypes.number,
        minX: PropTypes.number,
        minY: PropTypes.number,
        unitWidth: PropTypes.number,
      }
    : {}

Grid.defaultProps = {
  getX: function getX(x) {
    return x
  },
  getY: function getY(y) {
    return y
  },
  gridColor: "#34495e",
  gridOpacity: 0.2,
  gridVisible: true,
  gridWidth: 1,
  labelsCountY: 5,
  unitWidth: 1,
}

export default Grid
