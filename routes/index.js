var express = require('express');
var router = express.Router();
var usersController = require('../controllers/user_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Interact' });
});
router.post('/details', usersController.getUser);

module.exports = router;
