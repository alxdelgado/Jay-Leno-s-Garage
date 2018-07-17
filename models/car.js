const mongoose = require('mongoose'); 

const carSchema = new mongoose.Schema({
  make:{
    type: String, 
    required: true
  },
  model: String, 
  year: Number 
});

module.exports = mongoose.model('Car', carSchema);