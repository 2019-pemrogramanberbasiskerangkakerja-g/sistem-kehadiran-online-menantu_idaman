const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../../config/passport')(passport);
const MataKuliah = require('../../models').MataKuliah;

router.get('/:nrp', function(req, res) {
    MataKuliah
      .findAll({
        where: {
          peserta: {
            [Sequelize.Op.overlap]: [req.params.nrp]
          },
        },
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  module.exports = router;