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
          include: [
              {
                  model: MataKuliah, where: {
                      ruang: req.params.ruang
                  }
              }
          ]
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

  module.exports = router;