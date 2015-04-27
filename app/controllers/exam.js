var Exam = require('../models/exam');
var Question = require('../models/question');
var mongoose = require('mongoose');

module.exports = {
    add: function(req, res){
      var examData = req.body.exam;
      var exam = new Exam();
      exam.title = examData.title;
      exam.description = examData.description;
      exam.image = examData.image;
      exam.questions = [];
      exam.save(function(err){
        if(err){
          res.json({success:false, message: 'Грешка при записването на изпита.'});
        } else {
          res.json({success:true});
        }
      });
    },
    remove: function(req, res){
      Exam.remove({_id : req.params.exam_id}, function(err){
        if(err){
          res.json({success:false, message: 'Грешка при изтриването на изпита.'});
        } else {
          res.json({success:true});
        }
      });
    },
    get: function(req, res){
      Exam.find()
      .populate('questions options')
      .exec(function(err, exams){
        if(err){
          res.json({success:false, message:"Грешка при намиранието на изпитите"});
        } else {
          res.json({success:true, exams: exams});
        }
      });
    },
    getOne: function(req, res){
      var exam_id = req.params.exam_id;
      Exam.findById(exam_id)
      .populate('questions')
      .exec(function(err, exam){
        if(err){
          res.json({success:false, message: 'Грешка при намирането на изпита.'});
        } else {
          res.json({success:true, exam : exam});
        }
      });
    }
};
