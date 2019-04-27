var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', forwardAuthenticated, function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    userData: req.user
    
  })

);
console.log(req.user);

module.exports = router;
