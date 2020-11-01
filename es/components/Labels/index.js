var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  fill: ", ";\n"],
  ["\n  fill: ", ";\n"]
)

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

var Label = styled.g(_templateObject, function(props) {
  return props.color
})

var Labels = function Labels(_ref) {
  var getX = _ref.getX,
    getY = _ref.getY,
    labelsColor = _ref.labelsColor,
    labelsCountY = _ref.labelsCountY,
    labelsFormatX = _ref.labelsFormatX,
    labelsFormatY = _ref.labelsFormatY,
    labelsHeightX = _ref.labelsHeightX,
    labelsOffsetX = _ref.labelsOffsetX,
    labelsOffsetY = _ref.labelsOffsetY,
    labelsStepX = _ref.labelsStepX,
    labelsVisible = _ref.labelsVisible,
    maxX = _ref.maxX,
    maxY = _ref.maxY,
    minX = _ref.minX,
    unitWidth = _ref.unitWidth

  if (labelsVisible) {
    var xLabels = void 0
    var yLabels = void 0

    var xLabelsRange = []
    var xStep = labelsStepX > 0 ? labelsStepX : 1

    for (var i = Math.floor(minX); i <= Math.ceil(maxX); i += xStep) {
      xLabelsRange.push(i)
    }

    xLabels = xLabelsRange.map(function(x) {
      return React.createElement(
        Label,
        {key: x, color: labelsColor},
        React.createElement("circle", {
          r: "2",
          cx: getX(x + unitWidth / 2),
          cy: getY(0),
        }),
        React.createElement(
          "text",
          {
            x: getX(x + unitWidth / 2),
            y: getY(0) + labelsHeightX,
            transform: "translate(0, " + labelsOffsetX + ")",
            textAnchor: "middle",
          },
          labelsFormatX(x)
        )
      )
    })

    var yLabelsRange = []
    var yStep = labelsCountY > 0 ? labelsCountY : 1

    for (var _i = 0; _i <= maxY; _i += Math.floor(maxY / yStep)) {
      yLabelsRange.push(_i)
    }

    yLabels = yLabelsRange.map(function(y) {
      return React.createElement(
        Label,
        {key: y, color: labelsColor},
        React.createElement("circle", {r: "2", cx: getX(minX), cy: getY(y)}),
        React.createElement(
          "text",
          {
            x: getX(minX),
            y: getY(y) + labelsHeightX / 2,
            transform: "translate(-" + labelsOffsetY + ", 0)",
            textAnchor: "end",
          },
          labelsFormatY(y)
        )
      )
    })

    return React.createElement(
      "g",
      null,
      xLabels && React.createElement("g", null, xLabels),
      yLabels && React.createElement("g", null, yLabels)
    )
  } else {
    return null
  }
}

Labels.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        getX: PropTypes.func,
        getY: PropTypes.func,
        labelsColor: PropTypes.string,
        labelsCountY: PropTypes.number,
        labelsFormatX: PropTypes.func,
        labelsFormatY: PropTypes.func,
        labelsHeightX: PropTypes.number,
        labelsOffsetX: PropTypes.number,
        labelsOffsetY: PropTypes.number,
        labelsStepX: PropTypes.number,
        labelsVisible: PropTypes.bool,
        maxX: PropTypes.number,
        maxY: PropTypes.number,
        minX: PropTypes.number,
        minY: PropTypes.number,
        unitWidth: PropTypes.number,
      }
    : {}

Labels.defaultProps = {
  getX: function getX(x) {
    return x
  },
  getY: function getY(y) {
    return y
  },
  labelsCharacterWidth: 10,
  labelsColor: "#bdc3c7",
  labelsCountY: 5,
  labelsFormatX: function labelsFormatX(x) {
    return x
  },
  labelsFormatY: function labelsFormatY(y) {
    return y
  },
  labelsHeightX: 12,
  labelsOffsetX: 15,
  labelsOffsetY: 15,
  labelsStepX: 2,
  labelsVisible: true,
  unitWidth: 1,
}

export default Labels
