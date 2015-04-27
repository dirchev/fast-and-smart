var ExamCtrl = require('../controllers/exam');
var QuestionCtrl = require('../controllers/question');
var expressRouter = require('express').Router();

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('/teacher', function(req, res){
    res.render('teacher.ejs');
  });
  app.get('/app', function(req, res){
    res.render('app.ejs');
  });

  // EXAM API
  app.get('/api/exam', ExamCtrl.get);
  app.post('/api/exam', ExamCtrl.add);
  app.get('/api/exam/:exam_id', ExamCtrl.getOne);
  app.post('/api/exam/:exam_id/delete', ExamCtrl.remove);

  // QUESTION API

  app.post('/api/exam/:exam_id/question', QuestionCtrl.add);

  app.post('/api/exam/:exam_id/deletequestion/', QuestionCtrl.remove);
};
