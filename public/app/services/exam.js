app.factory('Exam', function($http, $rootScope){
  return {
    get: function(){
      return $http.get('/api/exam');
    },
    getOne: function(id){
      return $http.get('/api/exam/' + id);
    }
  };
});
