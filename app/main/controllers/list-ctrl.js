'use strict';
angular.module('main')
.controller('ListCtrl', function ($scope, Api) {

  console.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);

  var controller = this;

  console.log('listing things');
  Api.listThings(function (things) {
    console.log('things: ', things);
    controller.things = things.data;
  });

});
