// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
// defina the schema for our user model
var examSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  questions: [{
    type: ObjectId,
    ref: 'Question'
  }]
});

module.exports = mongoose.model('Exam', examSchema);
