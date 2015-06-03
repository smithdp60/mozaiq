mozaiqApp.factory('Type', ['$resource', function($resource) {

  return $resource('/userinfo/:id', null, {
    'update': {
      method: 'PUT'
    }
  });

}])