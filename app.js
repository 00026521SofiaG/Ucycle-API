var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("./config/mongoose");
const apiRouter = require("./routes/api/general.router");
const cors = require("cors");

var app = express();

mongoose.connect();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api", apiRouter);
app.use("/profile", require('./routes/api/usuario.router'));

module.exports = app;