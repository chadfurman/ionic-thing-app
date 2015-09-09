'use strict';
angular.module('main')
.controller('ListCtrl', function ($scope, Api) {

  console.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);
  // TODO: do your controller thing

  Api.listThings(function (things) {
    $scope.things = things;
  });

});
