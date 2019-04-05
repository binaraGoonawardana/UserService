const express = require('express'),
  router = express.Router();

const userCtrl = require('../../controllers/userCtrl');

router.route('/login').post(userCtrl.login);

module.exports = router;