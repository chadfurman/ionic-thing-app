'use strict';
angular.module('main')
.controller('LoginCtrl', function ($window, $state, Auth) {
  console.log('Login Controller');
  /*
  var controller = this;

  this.authUrl = 'http://localhostpc.com:1337/auth';
  */

  this.login = function () {
    console.log('login skipped');
    Auth.persistToken('4/oTYs_kpGl5Xwk0aNhYy9tyfDYpVMSuxzBF5Z9t3WWoI');
    $state.transitionTo('list');
    /*
    var url = controller.authUrl + '/google';
    console.log('oauth target: ' + url);
    var ref = $window.cordova.InAppBrowser.open(url, '_blank', 'location=no');

    console.log('Window Reference: ' + typeof ref);

    console.log('Login!');

    console.log('cordova?', $window.hasOwnProperty('cordova'));
    console.log('cordova.InAppBrowser?', $window.cordova.hasOwnProperty('InAppBrowser'));
    console.log('cordova.InAppBrowser.open?', $window.cordova.InAppBrowser.hasOwnProperty('open'));
    console.log('cordova.InAppBrowser.open', $window.cordova.InAppBrowser.open);

    ref.addEventListener('loadstop', function (event) {
      console.log('event url: ' + event.url);
      var callbackString = controller.authUrl + '/google/callback';
      console.log('callback string: ' + callbackString);
      console.log('event url indexof callback string: ' + event.url.indexOf(callbackString));
      if (event.url.indexOf(callbackString) === 0) {
        var codeIndex = (event.url).indexOf('?code=');
        if (codeIndex >= 0) {
          var code = event.url.substring(codeIndex + 6);
          if (code.slice(-1) === '#') {
            code = code.substring(0, code.length - 1); // remove hashtag if present
          }
          Auth.persistToken(code);
          console.log('transitioning to list state');
          $state.transitionTo('list');
        } else {
          console.log('code not provided');
        }
        ref.close();
      }
    });
    */

  };

});
