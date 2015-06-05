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
      friendArray[0].push(friendId);
      var friendName = f.name;
      friendArray[1].push(friendName);
      // friendArray.push(friendId, friendName); //trying to push by index instead
      $http.get('/api/userinfo/' + friendId).success(function(data){
        if (data.type) {
          var friendType = data.type
          friendArray[2].push(friendType);
        }
      }).error(function(err){
        console.log(err);
      })
      friendsArray.push(friendArray);
    }
    console.log("friends: ", friendsArray)
    $scope.friendsArray = friendsArray
  });

}]);