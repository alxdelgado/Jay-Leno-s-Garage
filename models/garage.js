const mongoose = require('mongoose');



const garageSchema = new mongoose.Schema({
	type: String,
	numberOfCars: Number,
	cars: [{type: String}]
})


module.exports = mongoose.model('Garage', garageSchema);

