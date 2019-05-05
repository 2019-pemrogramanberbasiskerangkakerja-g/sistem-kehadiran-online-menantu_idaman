var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const seeder_controller = require('../seeders/seeders');

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

router.get('/login', forwardAuthenticated, function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    userData: req.user
    
  })

);
// console.log(req.user);

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

router.get('/seed', seeder_controller.seed);   

module.exports = router;
