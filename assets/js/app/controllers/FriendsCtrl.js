mozaiqApp.controller('FriendsCtrl', ['$scope', '$rootScope', 'UserService', '$http', function($scope, $rootScope, UserService, $http) {

    console.log("FriendsCtrl loaded");

    UserService.friends(function(err,data){

        var friends_list = data;

        $http.get('/api/userinfo/').success(function(data){

            var userinfo = data;


            var friendsArray = [];

            for (i = 0; i < friends_list.length; i += 1) {
                for (j = 0; j < userinfo.length; j += 1) {
                    if (friends_list[i].id == userinfo[j].id) {
                        friendsArray.push(userinfo[j]);
                    }
                }
            }

            for (i = 0; i < friendsArray.length; i += 1) {
                friendsArray[i].name = friendsArray[i].first_name + " " + friendsArray[i].last_name;
                friendsArray[i].user_id = "";
                friendsArray[i].email = "";
                friendsArray[i].link = "";
                friendsArray[i].createdAt = "";
                friendsArray[i].updatedAt = "";
            }

            console.log(friendsArray);
            $scope.friendsArray = friendsArray;

        })

    });

}]);