const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 
const port = 3443; 

// Require the db. 
require('./db/db');

// require middleware. 
app.use(bodyParser.urlencoded({extended: false})); 
app.use(methodOverride('_method')); 

app.listen(port, () => {
  console.log('Server is running on port 3443')
}); 

// main index page 
app.get('/', (req, res) => {
  res.render('index.ejs'); 
}); 


// Car Controller
const carController = require('./controllers/carController');
app.use('/cars', carController); 

// Garage Controller
const garageController = require('./controllers/garageController');
app.use('/garages', garageController); 