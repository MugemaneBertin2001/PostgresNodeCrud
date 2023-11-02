"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _app = _interopRequireDefault(require("./app.js"));
var _sequelize = require("sequelize");
var db = new _sequelize.Sequelize(process.env.DbConnection);
var connectToDatabase = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var test;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return db.authenticate();
        case 3:
          test = _context.sent;
          console.log("Connection has been established successfully.");
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Unable to connect to the database:", _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function connectToDatabase() {
    return _ref.apply(this, arguments);
  };
}();
connectToDatabase();
var PORT = process.env.PORT || 2800;
_app["default"].listen(PORT, function () {
  console.log("Server running on port: http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map