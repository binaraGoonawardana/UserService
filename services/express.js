const express = require('express'),
  v1Routes = require('../routes/v1');

const app = express();

app.use('/v1', v1Routes);

module.exports = app;