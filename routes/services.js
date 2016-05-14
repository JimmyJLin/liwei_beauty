const express = require('express');
const services = express.Router();

services.route('/')
  .get((req, res) => res.render('pages/services'))



module.exports = services;
