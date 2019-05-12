const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../../config/passport')(passport);
const Absensi = require('../../models').Absensi;
const MataKuliah = require('../../models').MataKuliah;

router.post('/:ruang/:nrp', function(req, res) {
    date = new Date();
    ms_now = date.setHours( date.getHours() + 7 );
    now = new Date(ms_now);
    var data_peserta_masuk = 
        {
            'nrp': req.params.nrp,
            'waktu_masuk': now
        };
    Absensi
      .findOne({
        where: {
            ruang: req.params.ruang
        }
      })
      .then(data => {
        data.peserta_masuk.push(data_peserta_masuk);
        data.update({
            peserta_masuk: data.peserta_masuk
        });
        res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  router.post('/tambahjadwal', function(req, res) {
    MataKuliah
      .findOne({
        where: {
          id_matkul: req.body.id_matkul,
          kelas: req.body.kelas
        }
      })
      .then((data) => {
        Absensi
          .create({
            id_matkul: data.id,
            pertemuan: req.body.pertemuan,
            peserta_masuk: [],
            ruang: req.body.ruang,
            waktu_mulai: new Date(), //fixin inputannya dulu
            waktu_selesai: new Date() //fixin inputannya dulu
          })
          .then((data) => res.status(200).send(data))
          .catch((error) => {
            console.log(error);
            res.status(400).send(error);
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error)
      });
  });

  module.exports = router;