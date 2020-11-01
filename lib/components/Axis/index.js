"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  stroke: ", ";\n  stroke-width: ", ";\n  opacity: ", ";\n"],
  ["\n  stroke: ", ";\n  stroke-width: ", ";\n  opacity: ", ";\n"]
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

var SvgGroup = _styledComponents2.default.g(
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
    ? _react2.default.createElement(
        SvgGroup,
        {color: axisColor, width: axisWidth, opacity: axisOpacity},
        _react2.default.createElement("line", {
          x1: getX(minX),
          y1: getY(minY),
          x2: getX(maxX + unitWidth),
          y2: getY(minY),
        }),
        _react2.default.createElement("line", {
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
        axisColor: _propTypes2.default.string,
        axisOpacity: _propTypes2.default.number,
        axisVisible: _propTypes2.default.bool,
        axisWidth: _propTypes2.default.number,
        getX: _propTypes2.default.func,
        getY: _propTypes2.default.func,
        maxX: _propTypes2.default.number,
        maxY: _propTypes2.default.number,
        minX: _propTypes2.default.number,
        minY: _propTypes2.default.number,
        unitWidth: _propTypes2.default.number,
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

exports.default = Axis
module.exports = exports["default"]
