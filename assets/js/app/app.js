var mozaiqApp = angular.module("mozaiqApp", ['ngRoute', 'ngResource', 'ui.bootstrap']);


mozaiqApp.run(['$rootScope', function($rootScope){
  console.log("mozaiqApp is up and running!");

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