var express = require('express');
var app = express();
// var config = require('./config');
var logger = require('./util/logger');
var api = require('./entity/api');

// if (config.seed) {
//   require('./util/seed');
// }

require('./middleware/appMiddleware')(app);
app.use('/api', api);

app.use(function(err, __, res) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send(`Oops server error`);
});

module.exports = app;
