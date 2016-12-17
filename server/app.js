const express = require('express');
const router = require('./router');
const errorHandler = require('../routes/handlers/errorHandler');
const notFoundHandler = require('../routes/handlers/notFoundHandler');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', router);

app.get('*', notFoundHandler);

app.use(errorHandler);

module.exports = app;
