"use strict";

var express = require('express');

var path = require('path');

var moment = require('moment');

var mysql = require('mysql2');

var app = express();
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000');
});
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;
app.use('/', express["static"](path.join(__dirname, 'public')));
app.get('/city', function (req, res) {
  var pug = {
    file: 'city'
  };
  res.render;
});
app.get('/city/create', function (req, res) {
  res.send('/city/create');
});
app.use(function (req, res) {
  res.send('/404');
});