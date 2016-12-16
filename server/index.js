const app = require('./app');
const logger = require('../lib/logger');

const PORT = 8080;

app.listen(PORT, () => {
  logger.log('info', `Server listening on port ${PORT}!`);
  logger.log('info', 'Press CTRL-C to stop\n');
});
