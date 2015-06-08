mozaiqApp.controller('FriendsCtrl', ['$scope', '$rootScope', 'UserService', '$http', function($scope, $rootScope, UserService, $http){

  console.log("FriendsCtrl loaded");

  UserService.friends(function(err,data){

    // data = [
    // {
    //   id: "10205730082203000",
    //   feed: { },
    //   name: "Katie Gilmur"
    // },
    // {
    //   id: "10205730082203000",
    //   feed: { },
    //   name: "Allie Moses"
    // }
    // ]

    // console.log(data);



    // var friendsArray = [];
    // var friendArray = [];

    // for (i = 0; i < data.length; i+=1) {
    //   // var f = data[key].id;
    //   // var friendId = f.id;
    //   // friendArray.push(friendId);
    //   var friendName = data[i].name;
    //   console.log(friendName)
    //   $http.get('/api/userinfo/' + data[i].id).success(function(data2){
    //     if (friendArray.length < 3) {
    //       friendArray.push(data2.id, friendName, data2.type);
    //     } else if (friendArray.length == 3) {
    //       friendsArray.push(friendArray);
    //       friendArray = [];
    //     }
    //     $scope.friendsArray = friendsArray;
    //     console.log("friends: ", friendsArray);
    //   })
    // }


    $scope.friendsArray = data;


});

}]);