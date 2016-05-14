const express = require('express');
const contact = express.Router();

contact.route('/')
  .get((req, res) => res.render('pages/contact'))



module.exports = contact;
