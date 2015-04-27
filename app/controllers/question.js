var Exam = require('../models/exam');
var Question = require('../models/question');
var mongoose = require('mongoose');

module.exports = {
    add: function(req, res){
      var exam_id = req.params.exam_id;
      var questionData = req.body.question;
      var question = new Question();
      question.text = questionData.text;
      question.options = questionData.options;
      question.answer = questionData.answer;
      question.save(function(err, newQuestion){
        if(err){
          res.json({success:false, message: 'Грешка при записването на въпроса.'});
        } else {
          Exam.findById(exam_id).exec(function(err, exam){
            if(typeof exam.questions === "undefined" ){
              exam.questions = [];
            }
            exam.questions.push(newQuestion._id);
            exam.save(function(err){
              if(err){
                res.json({success:false, message: 'Грешка при запазването на въпроса'});
              } else {
                res.json({success:true});
              }
            });
          });
        }
      });
    },
    remove: function(req, res){
      var exam_id = req.params.exam_id;
      var question_id = req.body.question_id;
      Question.remove({_id : question_id}, function(err){
        if(err){
          res.json({success:false, message: 'Грешка при изтриването на изпита.'});
        } else {
          Exam.findById(exam_id).exec(function(err, exam){
            for(var i in exam.questions){
              if(exam.questions[i]._id === question_id){
                exam.questions.splice(i ,1);
                break;
              }
            }
            exam.save(function(){
              if(err){
                res.json({success:false, message: 'Грешка при изтриването на въпроса'});
              } else {
                res.json({success:true});
              }
            });
          });
        }
      });
    }
};
