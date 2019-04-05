const express = require('express'),
  userRoutes = require('./userRoutes');

const router = express.Router();

router.get('/status', (req, res) => { res.send('status okay'); });

router.use('/user', userRoutes);

module.exports = router;