var express = require('express');
var router = express.Router();
var request = require('request');
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

router.get('/dashboard_new/:nrp', forwardAuthenticated, (req, res) =>{
  var nrp = req.params.nrp;
  request.get('http://localhost:3000/api/kelas/' + nrp,
  function(error, response, body){
  // console.log(JSON.parse(body));
  const arrayAllClass = JSON.parse(body);

  res.render('dashboard_new', {arrayClass:arrayAllClass})
  })
}
);

router.get('/dashboard_new', forwardAuthenticated, (req, res) =>

  request.get('http://localhost:3000/api/kelas/5115100111',
  function(error, response, body){
  // console.log(JSON.parse(body));
  const arrayAllClass = JSON.parse(body);

  res.render('dashboard_new', {arrayClass:arrayAllClass})
  })

);
// console.log(req.user);

router.get('/rekap', forwardAuthenticated, (req, res) =>
  res.render('rekap', {
    // userData: req.user
    title: 'Rekap'
    
  })

);

router.get('/data', forwardAuthenticated, (req, res) =>
  request.get('http://localhost:3000/api/matakuliah/all',
  function(error, response, body){
    // console.log(JSON.parse(body));
    const array1 = JSON.parse(body);

    res.render('data', {test:array1})

  })

);

router.get('/tambah', forwardAuthenticated, (req, res) =>
  res.render('tambah', {
    // userData: req.user
    title: 'tambah'
    
  })

);

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login_new');
});

router.get('/seed', seeder_controller.seed);   

module.exports = router;
