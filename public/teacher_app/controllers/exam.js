app.controller('ExamCtrl', function(Exam, Question, $scope, $stateParams, $window){
  var exam_id = $stateParams.exam_id;
  var question_index = 0;
  $scope.step = 'question';

  Exam.getOne(exam_id).success(function(data){
    $scope.exam = data.exam;
    $scope.question = $scope.exam.questions[question_index];
  });

  socket = $window.io();
  socket.emit('open:exam', exam_id);
  $scope.startQuestion = function(){
    socket.emit('exam:question', {exam_id: exam_id, question:$scope.question});
    $scope.step = 'answer';
  };
  $scope.showAnswer = function(){
    socket.emit('exam:answer', {exam_id:exam_id, answer:$scope.question.answer});
    if($scope.exam.questions[question_index+1]){
      question_index += 1;
      $scope.question = $scope.exam.questions[question_index];
      $scope.step="question";
    } else {
      alert('end');
    }
  };
});
