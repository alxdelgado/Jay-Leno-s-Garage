const express = require('express');

const router = express.Router();

const Garage = require('../models/garage');


//INDEX ROUTE
router.get('/', (req, res) => {
	Garage.find({}, (err, allGarages) => {
		if(err) {
			console.log(err, 'error with index route');
		} else {
			res.render('garages/index.ejs', {
				garages: allGarages
			})
		}
	})
})


//NEW ROUTE
router.get('/new', (req, res) => {
	res.render('garages/new.ejs');
})


//EDIT
router.get('/:id/edit', (req, res) => {
	Garage.findById(req.params.id, (err, foundGarage) => {
		if(err) {
			console.log(err, 'error with edit route');
		} else {
			res.render('/garages/edit.ejs', {
				garage: foundGarage
			})
		}
	})
})


//PUT
router.put('/:id', (req, res) => {
	Garage.findByIdAndUpdate(req.params.id, req.body, (err, updatedGarage) => {
		if(err) {
			console.log(err, 'error with put route');
		} else {
			res.redirect('/garages');
		}
	})
})

//DELETE
router.delete('/:id', (req, res) => {
	Garage.findByIdAndRemove(req.params.id, (err, deletedGarage) => {
		if(err) {
			console.log(err, 'error with delete route');
		} else {
			res.redirect('/garages');
		}
	})
})


//CREATE
router.post('/', (req, res) => {
	Garage.create(req.body, (err, newGarage) => {
		if(err) {
			console.log(err, 'error with create route');
		} else {
			res.redirect('/garages');
		}
	})
})



//SHOW
router.get('/:id', (req, res) => {
	Garage.findById(req.params.id, (err, foundGarage) => {
		if(err) {
			console.log(err, 'error with show route');
		} else {
			res.render('garages/show.ejs', {
				garage: foundGarage
			}) 
		}
	})
})





module.exports = router;

