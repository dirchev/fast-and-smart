app.factory('Question', function($http){
  return {
    add:function(exam_id, question){
      return $http.post('/api/exam/' + exam_id + '/question', {exam_id: exam_id, question: question});
    },
    delete: function(exam_id, question_id){
      return $http.post('/api/exam/' + exam_id + '/deletequestion/', {question_id: question_id});
    }
  };
});
