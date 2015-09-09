'use strict';
angular.module('main')
.service('Api', function (Auth, $http) {
  var baseUrl = 'http://localhostpc.com:1337';

  this.listThings = function (cb) {
    console.log('calling listThings API endpoint');

    console.log(baseUrl + '/thing');
    $http.get(baseUrl + '/thing', {headers: {'X-Bearer-Token': Auth.retrieveToken()}}).then(
      function (successResponse) {
        console.log('success: ' + angular.toJson(successResponse, true));
        cb(successResponse);
      },
      function (failureResponse) {
        console.log('failure: ' + angular.toJson(failureResponse, true));
        cb(false);
      });
  };
});
