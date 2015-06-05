mozaiqApp.controller('FriendsCtrl', ['$scope', '$rootScope', 'UserService', '$http', function($scope, $rootScope, UserService, $http){

  console.log("FriendsCtrl loaded");

  UserService.friends(function(err,data){

    data = [
    {
      id: "10205730082203000",
      feed: { },
      name: "Katie Gilmur"
    },
    {
      id: "10205730082203000",
      feed: { },
      name: "Allie Moses"
    }
    ]

    console.log(data);



    var friendsArray = [];

    for (var key in data) {
      var friendArray = [];
      // var f = data[key].id;
      // var friendId = f.id;
      // friendArray.push(friendId);
      // var friendName = data[key].name;
      // friendArray.push(friendName);
      $http.get('/api/userinfo/' + data[key].id).success(function(data2){
        friendArray.push(data[key].id, data[key].name, data2.type);
        friendsArray.push(friendArray);
      }).error(function(err){
        console.log(err);
      })
    }
    $scope.friendsArray = friendsArray;
    console.log("friends: ", friendsArray);


  });

}]);