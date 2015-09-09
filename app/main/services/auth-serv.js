'use strict';
angular.module('main')
.service('Auth', function () {

  this.token = '';

  this.persistToken = function (token) {
    console.log('persisting token: ' + token);
    this.token = token;
  };

  this.retrieveToken = function () {
    console.log('retrieving token: ' + this.token);
    return this.token;
  };

  this.isAuthenticated = function () {
    console.log('checking for authentication');
    var authenticated = this.retrieveToken() ? true : false;
    console.log('authentication check: ' + authenticated);
    return authenticated;
  };
});
