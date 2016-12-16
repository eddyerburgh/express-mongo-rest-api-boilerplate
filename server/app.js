const express = require('express');
const router = require('./router');
const errorHandler = require('../routes/handlers/errorHandler');

const app = express();

app.use('/', router);

app.use(errorHandler);

module.exports = app;
