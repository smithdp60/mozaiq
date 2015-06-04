mozaiqApp.factory('UserService', ['$http', function($http) {

  return {
    check: function(callback) {
      var self = this;

      $http.get('/user_data')
      .success(function(data) {
        if (data) {
          self.currentUser = data;
        } else {
          self.currentUser = false;
        }
        callback(null, data);
      })
      .error(function(err) {
        callback(err);
      });
    }

  }
}]);