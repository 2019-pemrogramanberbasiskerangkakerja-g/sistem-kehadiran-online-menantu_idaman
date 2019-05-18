var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const seeder_controller = require('../seeders/seeders');

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', forwardAuthenticated, (req, res) => res.render('login_new'));

router.get('/login', forwardAuthenticated, function(req, res, next) {
  res.render('login_new', { title: 'Login' });
});

router.get('/dashboard', forwardAuthenticated, (req, res) =>
  res.render('dashboard', {
    // userData: req.user
    title: 'Dashboard'
    
  })

);

router.get('/dashboard_new', forwardAuthenticated, (req, res) =>
  res.render('dashboard_new', {
    // userData: req.user
    title: 'Dashboard'
    
  })

);
// console.log(req.user);

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login_new');
});

router.get('/seed', seeder_controller.seed);   

module.exports = router;
