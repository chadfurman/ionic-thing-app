'use strict';
angular.module('main')
.service('Api', function (Auth, $http) {
  var baseUrl = 'http://localhostpc.com:1337';

  this.listThings = function (cb) {
    console.log('calling listThings API endpoint');

    $http.get(baseUrl + '/user/1/things', {headers: {'X-Bearer-Token': Auth.retrieveToken()}}).then(
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
