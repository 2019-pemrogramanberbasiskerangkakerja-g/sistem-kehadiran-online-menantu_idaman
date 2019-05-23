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

router.get(newFunction(), forwardAuthenticated, (req, res) =>
  res.render('rekap', {
    // userData: req.user
    title: 'Rekap'
    
  })

);

router.get('/rekap_semester', forwardAuthenticated, (req, res) =>
  res.render('rekap_semester', {
    // userData: req.user
    title: 'Rekap Semester'
    
  })

);

router.get('/rekap_semester/:id_matkul/semester/:semester', forwardAuthenticated, (req, res) =>{
  var id_matkul = req.params.id_matkul;
  var semester = req.params.semester;
  request.get('http://pugna.serveo.net/api/rekap/' + id_matkul + '/semester/' + semester,
  function(error, response, body){
    console.log(JSON.parse(body));
    const array1 = JSON.parse(body);

    res.render('rekap_semester', {test:array1})

  })
}
);

router.get('/rekap_pertemuan', forwardAuthenticated, (req, res) =>
  res.render('rekap_pertemuan', {
    // userData: req.user
    title: 'Rekap Pertemuan'
    
  })

);

router.get('/rekap_pertemuan/:id_matkul/pertemuan/:pertemuan', forwardAuthenticated, (req, res) =>{
  var id_matkul = req.params.id_matkul;
  var pertemuan = req.params.pertemuan;
  request.get('http://pugna.serveo.net/api/rekap/' + id_matkul + '/pertemuan/' + pertemuan,
  function(error, response, body){
    console.log(JSON.parse(body));
    const array1 = JSON.parse(body);

    res.render('rekap_pertemuan', {test:array1})

  })
}
);

router.get('/rekap_mhs_semester', forwardAuthenticated, (req, res) =>
  res.render('rekap_mhs_semester', {
    // userData: req.user
    title: 'Rekap Mahasiswa Semester'
    
  })

);

router.get('/rekap_mhs_semester/:nrp/semester/:semester', forwardAuthenticated, (req, res) =>{
  var nrp = req.params.nrp;
  var semester = req.params.semester;
  request.get('http://pugna.serveo.net/api/rekapmahasiswa/' + nrp + '/semester/' + semester,
  function(error, response, body){
    console.log(JSON.parse(body));
    const array1 = JSON.parse(body);

    res.render('rekap_mhs_semester', {test:array1})

  })
}
);

router.get('/rekap_mhs_matkul', forwardAuthenticated, (req, res) =>
  res.render('rekap_mhs_matkul', {
    // userData: req.user
    title: 'Rekap Mahasiswa Matkul'
    
  })

);

router.get('/rekap_mhs_matkul/:nrp/matkul/:id_matkul', forwardAuthenticated, (req, res) =>{
  var nrp = req.params.nrp;
  var id_matkul = req.params.id_matkul;
  request.get('http://pugna.serveo.net/api/rekapmahasiswa/' + nrp + '/matkul/' + id_matkul,
  function(error, response, body){
    console.log(JSON.parse(body));
    const array1 = JSON.parse(body);

    res.render('rekap_mhs_matkul', {test:array1})

  })
}
);

// router.get('/rekap_semester', forwardAuthenticated, (req, res) =>
//   res.render('rekap_semester', {
//     // userData: req.user
//     title: 'Rekap Semester'
    
//   })

// );

// router.get('/rekap_semester/:id_matkul', forwardAuthenticated, (req, res) => {
//   var id_matkul = req.params.id_matkul;
//   request.get('http://localhost:3000/api/rekap/' + id_matkul,
//   function(error, response, body){
//     // console.log(JSON.parse(body));
//   const arrayAllRekap = JSON.parse(body);
  
//   res.render('data', {test:arrayAllRekap})
//   // console.log(test);

//   })
// }
// );

router.get('/tambah_mahasiswa', forwardAuthenticated, (req, res) =>
  res.render('tambah_mahasiswa', {
    // userData: req.user
    title: 'Tambah Mahasiswa'
    
  })

);


router.post('/tambah_mahasiswa', forwardAuthenticated, (req, res) => {
  var nameB = req.body.name;
  var nrpB = req.body.nrp;
  var passwordB = req.body.password;
  var flagValue = 0;
  // console.log('VALUE:'+ flagValue);
  res.render('tambah_mahasiswa', {flag:flagValue})

  var jsondataObj = {'name' : nameB, 'nrp' : nrpB, 'password': passwordB};
  console.log(jsondataObj);
  request.post({
    headers: {'content-type' : 'application/json'},
    url : 'http://pugna.serveo.net/api/tambahmahasiswa',
    body : JSON.stringify({jsondataObj}),
  },
  
  function(error, response, body){
    if(response.statusCode == 200){
      flagValue = 1;
    }
    else{
      flagValue = 2;
    }
    
  //login flag tolong
  res.render('tambah_mahasiswa', {flag:flagValue})

  })

});

router.get('/tambah_matakuliah', forwardAuthenticated, (req, res) =>
  res.render('tambah_matakuliah', {
    // userData: req.user
    title: 'Tambah Mata Kuliah'
    
  })

);

router.post('/tambah_matakuliah', forwardAuthenticated, (req, res) =>{
  var nameB = req.body.name;
  var kelasB = req.body.kelas;
  var id_matkulB = req.body.id_matkul;
  var flagValue = 0;

  var jsondataObj = {'name' : nameB, 'kelas' : kelasB, 'id_matkul' : id_matkulB}
  console.log(jsondataObj);
  request.post({
    headers: {'content-type' : 'application/json'},
    url : 'http://pugna.serveo.net/api/tambahmatkul',
    body : JSON.stringify({jsondataObj}),
  },

  function(error, response, body){
    // console.log(statusCode);
    if(response.statusCode == 200){
      flagValue = 1;
    }
    else{
      flagValue = 2;
    }
    
  //login flag tolong
  res.render('tambah_matakuliah', {flag:flagValue})
  
  })
});

router.get('/tambah_pertemuan', forwardAuthenticated, (req, res) =>

  res.render('tambah_pertemuan', {
    // userData: req.user
    title: 'Tambah Pertemuan'
  })
);

router.post('/tambah_pertemuan', forwardAuthenticated, (req, res) => {
  var mulai = req.body.mulai;
  var selesai = req.body.selesai;
  var pertemuanB = req.body.pertemuan;
  var ruangB = req.body.ruang;
  var semesterB = req.body.semester;
  var tahunB = req.body.tahun;
  var flagValue = 0;

  tahunMulai = mulai.substring(0,4);
  bulanMulai = mulai.substring(5,7);
  tanggalMulai = mulai.substring(8,10)
  jamMulai = mulai.substring(11,13);
  menitMulai = mulai.substring(14,16);

  tahunSelesai = selesai.substring(0,4);
  bulanSelesai = selesai.substring(5,7);
  tanggalSelesai = selesai.substring(8,10)
  jamSelesai = selesai.substring(11,13);
  menitSelesai = selesai.substring(14,16);

  formattedMulai = tahunMulai + '-' + bulanMulai + '-' + tanggalMulai + jamMulai + ':' + menitMulai + ':' + '00';
  formattedSelesai = tahunSelesai + '-' + bulanSelesai + '-' + tanggalSelesai + jamSelesai + ':' + menitSelesai + ':' + '00';
  // console.log(formattedMulai);
  // console.log(formattedSelesai);
  var jsondataObj = {'pertemuan' : pertemuanB, 'ruang' : ruangB, 'mulai' : formattedMulai, 'selesai' : formattedSelesai, 'semester' : semesterB, 'tahun' : tahunB }
  request.post({
    headers: {'content-type' : 'application/json'},
    url : 'http://pugna.serveo.net/api/tambahjadwal',
    body : JSON.stringify({jsondataObjY})
  },
  function(error, response, body){
    if(response.statusCode == 200){
      flagValue = 1;
    }
    else{
      flagValue = 2;
    }
    
  //login flag tolong
  res.render('tambah_pertemuan', {flag:flagValue})

  })
  
  
});

router.post('/tambah_user_matkul', forwardAuthenticated, (req, res) =>{
  var ruangB = req.body.ruang;
  var nrpB = req.body.nrp;
  var flagValue = 0;

  var jsondataObj = {'ruang': ruangB, 'nrp' : nrpB}
  request.post({
    headers: {'content-type' : 'application/json'},
    url: 'http://pugna.serveo.net/api/absen/' + ruangB + '/' + nrpB,
    body : JSON.stringify({jsondataObj}),
  },

  function(error, response, body){
    console.log('INI: ' + response.statusCode);
    if(response.statusCode == 201){
      flagValue = 1;
    }
    else{
      flagValue = 2;
    }
    
  //login flag tolong
  res.render('tambah_user_matkul', {flag:flagValue})
  })
}
);

router.get('/tambah_user_matkul', forwardAuthenticated, (req, res) =>
  res.render('tambah_user_matkul', {
    // userData: req.user
    title: 'Tambah User Matkul'
    
  })

);

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login_new');
});

router.get('/seed', seeder_controller.seed);   

module.exports = router;
function newFunction() {
  return '/rekap';
}

