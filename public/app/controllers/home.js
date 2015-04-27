app.controller('HomeCtrl', function($scope, User, $state, $window){
  if(User.getName()){
    $state.go('exams');
  }
  socket = $window.io();
  $scope.enter = function(name){
    socket.emit('registerUser', name);
    User.setName(name);
    $state.go('exams');
  };
});
