const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../../config/passport')(passport);
const User = require('../../models').User;

router.get('/all', function(req, res) {
    User
      .findAll()
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });

  router.post('/tambahmahasiswa', function(req, res) {
    User
      .create({
        username: req.body.nrp,
        password: req.body.password,
        nama: req.body.nama
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      })
  });

  module.exports = router;