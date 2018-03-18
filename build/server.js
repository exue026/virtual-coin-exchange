'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8000;

/* Only server static assets in production */
if (process.env.NODE_ENV === 'production') {
  app.use(_express2.default.static(_path2.default.join(__dirname, './client/build')));
}

/* debug messages in the console */
app.use((0, _morgan2.default)('dev'));

/* parse http request body */
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

/* main route */
app.use('/api', _api2.default);

/* catch 404 */
app.use(function (req, res, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

/* error handler */
app.use(function (error, req, res, next) {
  console.log('*** ' + error + ' ***');
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  res.status(error.status || 500);
  res.send('<html><h1>' + error.message + '</h1></html>');
});

app.listen(port, function () {
  return console.log('Server listening on port ' + port);
});
//# sourceMappingURL=server.js.map