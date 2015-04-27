app.controller('ExamCtrl', function(Exam, $stateParams, $scope, User, $timeout, $window, $rootScope){
  $scope.step = 'waiting';
  var exam_id = $stateParams.exam_id;

  var socket = $window.io();

  socket.emit('open:exam', exam_id);

  socket.on('question', function(question){
    console.log(question);
    $scope.$apply(function(){
      $scope.question = question;
      $scope.step = 'question';
    });
  });

  socket.on('answer', function(answer){
    $scope.$apply(function(){
      $scope.answer = answer;
      $scope.step = 'answer';
    });
  });

  Exam.getOne(exam_id).success(function(data){
    $scope.exam = data.exam;
  });

  $scope.answerQuestion = function(option_value){
    // prepare data to be send
    var data = {
      exam_id : exam_id,
      question_id : $scope.question._id,
      option_value : option_value,
      username : User.getName()
    };
    socket.emit('user:answer', data);
    $scope.step = 'afterquestion';
  };
});
