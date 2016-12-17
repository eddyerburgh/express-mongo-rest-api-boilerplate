const express = require('express');
const router = require('./router');
const errorHandler = require('../routes/handlers/errorHandler');
const notFoundHandler = require('../routes/handlers/notFoundHandler');

const app = express();

app.use('/', router);

app.get('*', notFoundHandler);

app.use(errorHandler);

module.exports = app;
