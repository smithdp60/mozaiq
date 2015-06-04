mozaiqApp.factory('Type', ['$resource', function($resource) {

  return $resource('/api/userinfo/:id', null, {
    'update': {
      method: 'PUT'
    }
  });

}])