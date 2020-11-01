"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
    ["\n  fill: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"],
    ["\n  fill: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ["\n  fill: transparent;\n"],
    ["\n  fill: transparent;\n"]
  )

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

var Point = _styledComponents2.default.circle(
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

var Zone = _styledComponents2.default.rect(_templateObject2)

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
    ? _react2.default.createElement(
        "g",
        null,
        data.map(function(point, i) {
          return _react2.default.createElement(Point, {
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
            return _react2.default.createElement(
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
              _react2.default.createElement(
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
        data: _propTypes2.default.arrayOf(
          _propTypes2.default.shape({
            x: _propTypes2.default.number,
            y: _propTypes2.default.number,
          })
        ).isRequired,
        getX: _propTypes2.default.func,
        getY: _propTypes2.default.func,
        maxX: _propTypes2.default.number,
        maxY: _propTypes2.default.number,
        minX: _propTypes2.default.number,
        minY: _propTypes2.default.number,
        pointsColor: _propTypes2.default.string,
        pointsIsHoverOnZone: _propTypes2.default.bool,
        onHover: _propTypes2.default.func,
        pointsRadius: _propTypes2.default.number,
        pointsStrokeColor: _propTypes2.default.string,
        pointsStrokeWidth: _propTypes2.default.number,
        pointsVisible: _propTypes2.default.bool,
        unitWidth: _propTypes2.default.number,
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

exports.default = Points
module.exports = exports["default"]
