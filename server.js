const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const serviceRoutes = require(path.join(__dirname, 'routes/services'))
const contactRoutes = require(path.join(__dirname, 'routes/contact'))


/* app setting */
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);
const request = require('request');


// parse incoming forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static route to public
app.use(express.static(path.join(__dirname, './public/')));

// log
app.use(logger('dev'));

/*Views*/
app.set('views', './views');
app.set('view engine', 'ejs');

/* Routes */
// Landing Page
app.get('/', function(req, res){
  res.render('pages/index')
})

app.use('/services', serviceRoutes)

app.use('/contact', contactRoutes)
