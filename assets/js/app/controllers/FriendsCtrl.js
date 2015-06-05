mozaiqApp.controller('FriendsCtrl', ['$scope', '$rootScope', 'UserService', '$http', function($scope, $rootScope, UserService, $http){

  console.log("FriendsCtrl loaded");

  UserService.friends(function(err,data){

    // var allFriends = {};
    // for (var i = 0; i < data.length; i += 1) {
    //   var key = data[i];
    //   allFriends[key] = {
    //     sortable: true,
    //     resizeable: true
    //   };
    // }


    var friendsArray = [];

    for (var key in data) {
      var friendArray = [];
      var f = data[key];
      var friendId = f.id;
      // friendArray.push(friendId);
      // var friendName = f.name;
      // friendArray.push(friendName);
      // friendArray.push(friendId, friendName); //trying to push by index instead
      $http.get('/api/userinfo/' + friendId).success(function(data){
        if (data.type) {
          friendsArray.push(data);
        }
        $scope.friendsArray = friendsArray;
      }).error(function(err){
        console.log(err);
      })
    }
    console.log("friends: ", $scope.friendsArray);
  });

}]);