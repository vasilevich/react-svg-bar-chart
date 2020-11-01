var _templateObject = _taggedTemplateLiteralLoose(
    ["\n  fill: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"],
    ["\n  fill: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ["\n  fill: transparent;\n"],
    ["\n  fill: transparent;\n"]
  )

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

var Point = styled.circle(
  _templateObject,
  function(props) {
    return props.color
  },
  function(props) {
    return props.strokeWidth
  },
  function(props) {
    return props.stroke
  }
)

Point.displayName = "Point"

var Zone = styled.rect(_templateObject2)

Zone.displayName = "Zone"

var Points = function Points(_ref) {
  var data = _ref.data,
    getX = _ref.getX,
    getY = _ref.getY,
    maxY = _ref.maxY,
    minX = _ref.minX,
    minY = _ref.minY,
    pointsColor = _ref.pointsColor,
    pointsIsHoverOnZone = _ref.pointsIsHoverOnZone,
    onHover = _ref.onHover,
    pointsRadius = _ref.pointsRadius,
    pointsStrokeColor = _ref.pointsStrokeColor,
    pointsStrokeWidth = _ref.pointsStrokeWidth,
    pointsVisible = _ref.pointsVisible,
    unitWidth = _ref.unitWidth

  return pointsVisible
    ? React.createElement(
        "g",
        null,
        data.map(function(point, i) {
          return React.createElement(Point, {
            key: i,
            r: point.active ? pointsRadius * 1.2 : pointsRadius,
            cx: getX(point.x + unitWidth / 2),
            cy: getY(point.y),
            onMouseEnter: function onMouseEnter(e) {
              return onHover(point, e)
            },
            onMouseLeave: function onMouseLeave() {
              return onHover(null, null)
            },
            color: pointsColor,
            stroke: pointsStrokeColor,
            strokeWidth: pointsStrokeWidth,
          })
        }),
        pointsIsHoverOnZone &&
          data.map(function(point, i) {
            return React.createElement(
              Zone,
              {
                key: i,
                x: getX(
                  point.x > minX ? (data[i].x + data[i - 1].x) / 2 : minX
                ),
                y: getY(maxY),
                width: getX(1),
                height: getY(minY),
                onMouseEnter: function onMouseEnter(e) {
                  return onHover(point, e)
                },
                onMouseLeave: function onMouseLeave() {
                  return onHover(null, null)
                },
              },
              React.createElement(
                "title",
                null,
                "x: ",
                point.x,
                " y: ",
                point.y
              )
            )
          })
      )
    : null
}

Points.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        data: PropTypes.arrayOf(
          PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number,
          })
        ).isRequired,
        getX: PropTypes.func,
        getY: PropTypes.func,
        maxX: PropTypes.number,
        maxY: PropTypes.number,
        minX: PropTypes.number,
        minY: PropTypes.number,
        pointsColor: PropTypes.string,
        pointsIsHoverOnZone: PropTypes.bool,
        onHover: PropTypes.func,
        pointsRadius: PropTypes.number,
        pointsStrokeColor: PropTypes.string,
        pointsStrokeWidth: PropTypes.number,
        pointsVisible: PropTypes.bool,
        unitWidth: PropTypes.number,
      }
    : {}

Points.defaultProps = {
  getX: function getX(x) {
    return x
  },
  getY: function getY(y) {
    return y
  },
  pointsColor: "#fff",
  pointsIsHoverOnZone: false,
  onHover: function onHover() {},
  pointsRadius: 4,
  pointsStrokeColor: "#34495e",
  pointsStrokeWidth: 2,
  pointsVisible: false,
  unitWidth: 1,
}

export default Points
