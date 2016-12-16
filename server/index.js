const app = require('./app');

const PORT = 8000;

app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}!`);
  console.info('Press CTRL-C to stop\n');
});
