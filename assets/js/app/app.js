var mozaiqApp = angular.module("mozaiqApp", ['ngRoute', 'ngResource', 'ui.bootstrap']);

mozaiqApp.run(['$rootScope', 'UserService', '$http', function($rootScope, UserService, $http){

  console.log("mozaiqApp is up and running!");

  UserService.check(function(err,data){

    //retrieves current user's info and picture
    $rootScope.currentUser = UserService.currentUser;
    $rootScope.currentUserPic = "https://graph.facebook.com/" + UserService.currentUser.id + "/picture";
    console.log("$rootScope.currentUser: ", $rootScope.currentUser);

    //retrieves current user's type
    $http.get('/api/userinfo/' + UserService.currentUser.id).success(function(data){
      var type = data.type
      $rootScope.currentUserType = type;
      console.log(data.type);
    }).error(function(err){
      console.log(err);
    })

  });


  // UserService.friends(function(err,data) {
  //   // console.log("friends: ", data);
  // })

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
  .when('/type/:type', {
    templateUrl: '/views/type/index.html',
    controller: 'TypeCtrl'
  })
  .when('/dichotomies', {
    templateUrl: '/views/dichotomies/index.html',
    controller: 'HomeCtrl'
  })
  .when('/friends', {
    templateUrl: '/views/friends/index.html',
    controller: 'FriendsCtrl'
  })
  // .otherwise({
  //   templateUrl: '/views/404.html'
  // })

}]);