var express = require('express');
var router = express.Router();
var usersController = require('../controllers/user_controller')

/* GET users listing. */
router.get('/', usersController.getUser);

module.exports = router;
