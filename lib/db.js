const mongoose = require('mongoose');
const logger = require('./logger');

const url = 'mongodb://localhost:27017';

mongoose.Promise = global.Promise;

mongoose.connect(url, () => logger.log('info', 'connected to mongo'));

module.exports = {
  connection: mongoose.connection,
};
