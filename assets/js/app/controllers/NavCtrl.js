mozaiqApp.controller('NavCtrl', ['$scope', '$window', function($scope, $window){

  $scope.fbLogin = function() {
    $window.location.href = '/auth/facebook';
  }

  $scope.logout = function() {
    $window.location.href = '/logout';
  }


  $scope.status = {
    isopen: false
  };

  $scope.status2 = {
    isopen: false
  };

}]);