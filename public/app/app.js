var app = angular.module('wwapp', ['ionic', 'LocalStorageModule']);

// IONIC CONFIGURATION (IF NEEDED)
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// CONFIGURING LOCAL STORAGE
app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('DimitarMirchevWWAPP');
});

// ROUTES
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "/app/templates/home.html",
    controller: "HomeCtrl"
  })
  .state('exams', {
    url: "/exams",
    templateUrl: "/app/templates/exams.html",
    controller: "ExamsCtrl"
  })
  .state('exam', {
    url: "/exam/:exam_id",
    templateUrl: "/app/templates/exam.html",
    controller: "ExamCtrl"
  })
  ;
  // if 404 - redirect to home
  $urlRouterProvider.otherwise('/');
});
