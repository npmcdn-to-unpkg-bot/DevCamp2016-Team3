var express = require("express");
var path = require("path");
var logger = require("morgan");
var app = express();

app.use(logger("dev"));
app.use(express.static(__dirname));
app.all("*", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
