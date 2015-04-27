// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
// defina the schema for our user model
var userSchema = mongoose.Schema({
  name : String,
  points: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Userr', userSchema);
