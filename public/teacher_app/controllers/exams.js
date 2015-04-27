app.controller('ExamsCtrl', function(Exam, Question, $scope){
  $scope.selectedExam = '';
  var getExams = function(){
    Exam.get().success(function(data){
      $scope.exams = data.exams;
    });
  };

  $scope.openQuestionModal = function(exam_id){
    $scope.selectedExam = exam_id;
    $('#newQuestionModal').modal('show');
  };

  $scope.addExam = function(exam){
    Exam.add(exam).success(function(data){
      if(data.success){
        getExams();
        $('newExamModal').modal('hide');
      } else {
        alert(data.message);
      }
    });
  };

  $scope.deleteExam = function(id){
    Exam.delete(id).success(function(data){
      if(data.success){
        getExams();
      } else {
        alert(data.message);
      }
    });
  };

  $scope.addQuestion = function(question, options){
    question.options = [];
    for(var i in options){
      question.options.push(options[i]);
    }
    for(i in options){
      question.options[i].value = i;
    }
    var exam_id = $scope.selectedExam;
    console.log($scope.selectedExam);
    Question.add(exam_id, question).success(function(data){
      if(data.success){
        getExams();
      } else {
        alert(data.message);
      }
    });
  };

  $scope.deleteQuestion = function(exam_id, question_id){
    Question.delete(exam_id, question_id).success(function(data){
      if(data.success){
        getExams();
      } else {
        alert(data.message);
      }
    });
  };

  getExams();
});
