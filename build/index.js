"use strict";

var _express = _interopRequireDefault(require("express"));

var _firebaseEcample = _interopRequireDefault(require("./routes/firebaseEcample.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use('/firebase', _firebaseEcample.default);
app.listen(3000);
console.log('server listen on port 3000 XD');