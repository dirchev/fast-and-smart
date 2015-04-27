app.factory('Exam', function($http){
  return {
    get: function(){
      return $http.get('/api/exam');
    },
    getOne: function(id){
      return $http.get('/api/exam/' + id);
    },
    delete: function(id){
      return $http.post('/api/exam/' + id + '/delete');
    },
    add: function(exam){
      return $http.post('/api/exam', {exam: exam});
    }
  };
});
