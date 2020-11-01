"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  fill: ", ";\n"],
  ["\n  fill: ", ";\n"]
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

var Label = _styledComponents2.default.g(_templateObject, function(props) {
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
      return _react2.default.createElement(
        Label,
        {key: x, color: labelsColor},
        _react2.default.createElement("circle", {
          r: "2",
          cx: getX(x + unitWidth / 2),
          cy: getY(0),
        }),
        _react2.default.createElement(
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
      return _react2.default.createElement(
        Label,
        {key: y, color: labelsColor},
        _react2.default.createElement("circle", {
          r: "2",
          cx: getX(minX),
          cy: getY(y),
        }),
        _react2.default.createElement(
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

    return _react2.default.createElement(
      "g",
      null,
      xLabels && _react2.default.createElement("g", null, xLabels),
      yLabels && _react2.default.createElement("g", null, yLabels)
    )
  } else {
    return null
  }
}

Labels.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        getX: _propTypes2.default.func,
        getY: _propTypes2.default.func,
        labelsColor: _propTypes2.default.string,
        labelsCountY: _propTypes2.default.number,
        labelsFormatX: _propTypes2.default.func,
        labelsFormatY: _propTypes2.default.func,
        labelsHeightX: _propTypes2.default.number,
        labelsOffsetX: _propTypes2.default.number,
        labelsOffsetY: _propTypes2.default.number,
        labelsStepX: _propTypes2.default.number,
        labelsVisible: _propTypes2.default.bool,
        maxX: _propTypes2.default.number,
        maxY: _propTypes2.default.number,
        minX: _propTypes2.default.number,
        minY: _propTypes2.default.number,
        unitWidth: _propTypes2.default.number,
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

exports.default = Labels
module.exports = exports["default"]
