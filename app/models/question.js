// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
// defina the schema for our user model
var questionSchema = mongoose.Schema({
  text: String,
  answer: String,
  options: [{
    text: String,
    points: Number,
    value: Number
  }],
  users: [{
    type: ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Question', questionSchema);
