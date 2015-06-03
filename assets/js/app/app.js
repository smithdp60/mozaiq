var mozaiqApp = angular.module("mozaiqApp", ['ngRoute', 'ngResource', 'ui.bootstrap']);


mozaiqApp.run(['$rootScope', 'UserService', function($rootScope, UserService){

  console.log("mozaiqApp is up and running!");

  UserService.check(function(err,data){

    $rootScope.currentUser = UserService.currentUser;
    $rootScope.currentUserPic = "https://graph.facebook.com/" + UserService.currentUser.id + "/picture";
    console.log($rootScope.currentUser);
  });

}])

mozaiqApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/assess', {
    templateUrl: '/views/assess/index.html',
    controller: 'AssessCtrl'
  })
  .when('/type', {
    templateUrl: '/views/type/index.html',
    controller: 'HomeCtrl'
  })
  // .otherwise({
  //   templateUrl: '/views/404.html'
  // })

}]);