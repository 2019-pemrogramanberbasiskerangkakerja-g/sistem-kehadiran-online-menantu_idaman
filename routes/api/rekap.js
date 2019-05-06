const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../../config/passport')(passport);
const Product = require('../../models').Product;
const User = require('../../models').User;
const MataKuliah = require('../../models').MataKuliah;
const Absensi = require('../../models').Absensi;

router.get('/:id_matkul', function(req, res) {
    Absensi
      .findAll({
        where: {
          id_matkul: req.params.id_matkul
        }
      })
      .then((absensi) => res.status(201).send(absensi))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });
  
  router.get('/:id_matkul/:pertemuan', function(req, res) {
    Absensi
      .findAll({
        where: {
          id_matkul: req.params.id_matkul,
          pertemuan: req.params.pertemuan
        }
      })
      .then((absensi) => res.status(201).send(absensi))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  module.exports = router;