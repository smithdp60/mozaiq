mozaiqApp.controller('DashboardCtrl', ['$scope', '$rootScope', 'UserService', function($scope, $rootScope, UserService){

  console.log("DashboardCtrl loaded");

  UserService.friends(function(err,data){

    var friendsArray = [];

    for (var key in data) {
      var friendArray = [];
      var f = data[key];
      var friendId = f.id;
      var friendName = f.name;
      friendArray.push(friendId, friendName);

      $http.get('/api/userinfo/' + friendId).success(function(data){
        if (data.type) {
          var friendType = data.type
          console.log(data.type);
          friendArray.push(friendType)
        }
      }).error(function(err){
        console.log(err);
      })

      friendsArray.push(friendArray);
    }
    console.log("friends: ", friendsArray)

  });


}]);