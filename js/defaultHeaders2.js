var app = angular.module('chatroom');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'lMxCJjsMNXpYEeSvOUK0pqseXO6giIwEeHt9BI8F', 'X-Parse-REST-API-Key': 'R2LdrzR89kMrtpPbZeug6XtnVo0eZEXlOI4DkDJP'}
      return config;
    }
  };
});