const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const address = new Schema({
    name:  String,
    phone:  String,
    postcode: String,
    email:   String,
    city: String,
  });

  module.exports = mongoose.model('contract',address);