const express = require('express');
const router = require('./router');
const errorHandler = require('../routes/handlers/errorHandler');

const app = express();

app.use('/', router);

app.get('*', (req, res, next) => {
  const err = new Error('resource not found');
  err.httpStatusCode = 404;
  err.userSafeMessage = 'resource not found';
  next(err);
});

app.use(errorHandler);

module.exports = app;
