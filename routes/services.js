const express = require('express');
const services = express.Router();

// Facial Routes
services.route('/facials')
.get((req, res) => res.render('pages/facials'))

// Laser Hair Removal Routes
services.route('/laser')
.get((req, res) => res.render('pages/laser'))

// Massage Routes
services.route('/massages')
.get((req, res) => res.render('pages/massages'))

// Skin_care Routes
services.route('/skincare')
.get((req, res) => res.render('pages/skincare'))

// Tattoo Routes
services.route('/tattoo')
.get((req, res) => res.render('pages/tattoo'))

// Treatment Routes
services.route('/treatment')
.get((req, res) => res.render('pages/treatment'))

// Services Landing Route
services.route('/')
  .get((req, res) => res.render('pages/services'))



module.exports = services;
