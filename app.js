const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const database = require('./database');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

module.exports = app;
