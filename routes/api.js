const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const Sequelize = require('sequelize');
require('../config/passport')(passport);
const Product = require('../models').Product;
const User = require('../models').User;
const MataKuliah = require('../models').MataKuliah;
const Absensi = require('../models').Absensi;











module.exports = router;