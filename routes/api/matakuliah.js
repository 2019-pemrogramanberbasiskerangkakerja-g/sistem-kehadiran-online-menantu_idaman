const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../../config/passport')(passport);
const MataKuliah = require('../../models').MataKuliah;

router.get('/all', function(req, res) {
    MataKuliah
      .findAll()
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });
  
  router.get('/:id_matkul', function(req, res) {
    MataKuliah
      .findAll({
        where: {
          id_matkul: req.params.id_matkul
        }
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  router.post('/tambahpeserta/:id_matkul/:kelas/:nrp', function(req, res) {
    MataKuliah
      .findOne({
        where: {
          id_matkul: req.params.id_matkul,
          kelas: req.params.kelas
        }
      })
      .then(data => {
        data.peserta.push(req.params.nrp);
        data.update({
            peserta: data.peserta
        });
        res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  router.post('/tambahmatkul', function(req, res) {
    MataKuliah
    .create({
      nama: req.body.nama,
      kelas: req.body.kelas,
      id_matkul: req.body.id_matkul,
      peserta: []
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error)
    });
  });

module.exports = router;