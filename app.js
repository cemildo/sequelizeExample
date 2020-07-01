const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const database = require('./database');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/orders', ordersRouter);


module.exports = app;
