const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../../config/passport')(passport);
const MataKuliah = require('../../models').MataKuliah;
const Absensi = require('../../models').Absensi;

router.get('/:nrp', function(req, res) {
    MataKuliah
      .findAll({
        where: {
          peserta: {
            [Sequelize.Op.overlap]: [req.params.nrp]
          },
        },
        include: [
            {
                model: Absensi
            }
        ]
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  module.exports = router;