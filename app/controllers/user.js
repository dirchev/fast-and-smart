var Question = require('../models/question');
var User = require('../models/user');
module.exports = {
  add: function(username){
    console.log(username);
    var user = new User();
    user.name = username;
    user.points = 0;
    user.save(function(err){
      if(err){
        console.log(err);
        console.log("Error while saving user: " + username);
      }
    });
  },
  answer: function(exam_id, username, question_id, answer_value){
    User.findOne({name: username}).exec(function(err, user){
      if(err){
        console.log(err);
      } else {
        Question.findById(question_id).exec(function(err, question){
          for(var i in question.options){
            if(question.options[i].value === answer_value && question.options[i].points !== 0){
              console.log('adding points');
              if(question.users.length === 0 ){
                user.points += 10;
              } else {
                user.points += 5;
              }
              // question.users.push(user.name);
            break;
            }
          }
          question.save(function(err){
            if(err)
              console.log(err);
              user.save(function(err){
                if(err)
                  console.log(err);
              });
          });
        });
      }
    });
  }
};
