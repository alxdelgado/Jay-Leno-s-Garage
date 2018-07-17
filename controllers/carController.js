// Setting up the controller 
const express = require('express');

const router = express.Router();
 

const Car = require('../models/car'); 


// INDEX ROUTE -- shows everthing in your model. 
router.get('/', (req, res) => {
  Car.find({}, (err, foundCar) => {
    res.render('cars/index.ejs', {
      cars: foundCar
    });
  });
});

// NEW ROUTE -- shows new create page. 
router.get('/new', (req, res) => {
  res.render('cars/new.ejs');
});

// EDIT ROUTE
router.get('/:id/edit',(req,res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    res.render('cars/edit.ejs', {
      car: foundCar
    });
  });
});

// PUT ROUTE -- find and update. 
router.put('/:id', (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body, (err, updateCar) => {
    res.redirect('/cars');
  });
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Car.findByIdAndRemove(req.params.id, (err, deleteCar) => {
    res.redirect('/cars'); 
  });
});

// CREATE ROUTE
router.post('/', (req, res) => {
  Car.create(req.body, (err, createdCar) => {
    res.redirect('/cars'); 
  });
});

// SHOW ROUTE
router.get('/:id', (req, res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    res.render('cars/show.ejs', {
      car: foundCar
    });
  });
}); 


module.exports = router; 