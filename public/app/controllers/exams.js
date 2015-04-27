app.controller('ExamsCtrl', function(Exam, $scope){
  Exam.get().success(function(data){
    $scope.exams = data.exams;
  });


});
