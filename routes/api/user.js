const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../config/passport')(passport);
const User = require('../models').User;

router.get('/user/all', function(req, res) {
    User
      .findAll()
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });