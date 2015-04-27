var app = angular.module('WWAPP', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('exams', {
    url: "/exams",
    templateUrl: "/teacher_app/templates/exams.html",
    controller: "ExamsCtrl"
  })
  .state('exam', {
    url: "/exam/:exam_id",
    templateUrl: "/teacher_app/templates/exam.html",
    controller: "ExamCtrl"
  })
  ;
  // if 404 - redirect to home
  $urlRouterProvider.otherwise('/exams');
});
