"use strict";

const express = require("express");
const router = express.Router();
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const debug = require("debug")("cliches:backend");

// Middlewares
app.use(logger(config.logger.format));
app.use(cors(config.cors));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
router.use("/missions", require("./routes/missions"));
router.use("/explorations", require("./routes/explorations"));
router.all("*", (req, res) => {
  res.status(404).send("Not Found");
});
app.use("/", router);

// Mongo connection
mongoose.connect(config.db.url, { server: { auto_reconnect: true } });

process.on("SIGINT", () => {
  debug("SIGINT received, closing mongo connection and exiting process.");
  mongoose.connection.close(() => {
    process.exit(0);
  });
});

module.exports = app;
