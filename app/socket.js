var UserCtrl = require('./controllers/user');
module.exports = function(io){
  io.on('connection', function(socket){
    console.log('A user connected to socket.');

    socket.on('registerUser', function(username){
      UserCtrl.add(username);
    });

    socket.on('open:exam', function(exam_id){
      console.log('A user connected to exam.');
      socket.join('exam' + exam_id);
    });

    socket.on('exam:question', function(data){
      console.log('question started');
      var exam_id = data.exam_id;
      var question = data.question;
      socket.to('exam' + exam_id).emit('question', question);
    });

    socket.on('exam:answer', function(data){
      console.log('answer showed');
      var exam_id = data.exam_id;
      var answer = data.answer;
      socket.to('exam' + exam_id).emit('answer', answer);
    });

    socket.on('user:answer', function(data){
      var exam_id = data.exam_id;
      var username = data.username;
      var question_id = data.question_id;
      var answer_value = answer_value;
      UserCtrl.answer(exam_id, username, question_id, answer_value);
    });


  });
};
