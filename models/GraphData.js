var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  
  countriesID: String,
  countries: String,
  numberOfCompanies: String
  
}, 
{
  collection: 'graphcollection'
});

mongoose.model('GraphData', GraphDataSchema);
