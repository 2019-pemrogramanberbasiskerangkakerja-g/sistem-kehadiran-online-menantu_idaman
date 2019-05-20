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

// router.get('/dashboard_new/:nrp', forwardAuthenticated, (req, res) =>{
//   var nrp = req.params.nrp;
//   request.get('http://localhost:3000/api/kelas/' + nrp,
//   function(error, response, body){
//   // console.log(JSON.parse(body));
//   const arrayAllClass = JSON.parse(body);

//   res.render('dashboard_new', {arrayClass:arrayAllClass})
//   })
// }
// );

router.get('/dashboard_new', forwardAuthenticated, (req, res) =>

  request.get('http://localhost:3000/api/kelas/5115100111',
  function(error, response, body){
  // console.log(JSON.parse(body));
  const arrayAllClass = JSON.parse(body);
  // const arrayAbsensi = arrayAllClass[i].Absensis;
  var lastElementofArrayAbsensi = arrayAbsensi[arrayAbsensi.length - 1];

  arrayAllClass.forEach(function(element, i){
    // var currentIndex = 0;

    
    console.log('debug array absensi length ' + arrayAbsensi.length);
    var arrayRuang = [];
    var ruang = lastElementofArrayAbsensi.ruang;
    arrayRuang.push(ruang);

  })
  console.log(arrayRuang);
 
  res.render('dashboard_new', {arrayClass:arrayAllClass, ruang:ruang})
  })

);
// console.log(req.user);

router.get('/rekap', forwardAuthenticated, (req, res) =>
  res.render('rekap', {
    // userData: req.user
    title: 'Rekap'
    
  })

);

router.get('/rekap_semester', forwardAuthenticated, (req, res) =>
  request.get('http://localhost:3000/api/rekap/IF4605',
  function(error, response, body){
    // console.log(JSON.parse(body));
    const array1 = JSON.parse(body);

    res.render('rekap_semester', {test:array1})

  })

);

router.get('/rekap_semester/:id_matkul', forwardAuthenticated, (req, res) => {
  var id_matkul = req.params.id_matkul;
  request.get('http://localhost:3000/api/rekap/' + id_matkul,
  function(error, response, body){
    // console.log(JSON.parse(body));
  const arrayAllRekap = JSON.parse(body);
  
  res.render('data', {test:arrayAllRekap})
  // console.log(test);

  })
}
);

router.get('/tambah_mahasiswa', forwardAuthenticated, (req, res) =>
  res.render('tambah_mahasiswa', {
    // userData: req.user
    title: 'Tambah Mahasiswa'
    
  })

);

router.get('/tambah_matakuliah', forwardAuthenticated, (req, res) =>
  res.render('tambah_matakuliah', {
    // userData: req.user
    title: 'Tambah Mata Kuliah'
    
  })

);

router.get('/tambah_pertemuan', forwardAuthenticated, (req, res) =>
  res.render('tambah_pertemuan', {
    // userData: req.user
    title: 'Tambah Pertemuan'
    
  })

);

router.get('/tambah_user_matkul', forwardAuthenticated, (req, res) =>
  res.render('tambah_user_matkul', {
    // userData: req.user
    title: 'Tambah Peserta'
    
  })

);

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login_new');
});

router.get('/seed', seeder_controller.seed);   

module.exports = router;
