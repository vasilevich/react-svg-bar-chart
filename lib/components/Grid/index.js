"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  opacity: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"],
  ["\n  opacity: ", ";\n  stroke-width: ", ";\n  stroke: ", ";\n"]
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

var Wrapper = _styledComponents2.default.g(
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
        _react2.default.createElement("line", {
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
        _react2.default.createElement("line", {
          key: _i,
          x1: getX(minX),
          y1: getY(_i),
          x2: getX(maxX + unitWidth),
          y2: getY(_i),
        })
      )
    }

    return _react2.default.createElement(
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
        getX: _propTypes2.default.func,
        getY: _propTypes2.default.func,
        gridColor: _propTypes2.default.string,
        gridOpacity: _propTypes2.default.number,
        gridVisible: _propTypes2.default.bool,
        gridWidth: _propTypes2.default.number,
        labelsCountY: _propTypes2.default.number,
        maxX: _propTypes2.default.number,
        maxY: _propTypes2.default.number,
        minX: _propTypes2.default.number,
        minY: _propTypes2.default.number,
        unitWidth: _propTypes2.default.number,
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

exports.default = Grid
module.exports = exports["default"]
