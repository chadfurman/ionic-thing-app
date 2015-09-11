'use strict';
var ref;
angular.module('main')
.controller('LoginCtrl', function ($window, $state, $scope, $ionicPopup, Auth) {
  console.log('Login Controller');
  var controller = this;

  this.authUrl = 'http://localhostpc.com:1337/auth';

  this.showPopup = function () {
    $scope.data = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.token">',
      title: 'Enter Access Token',
      subTitle: 'hard-coded to user id = 1',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function (e) {
            if (!$scope.data.token) {
              //don't allow the user to close unless he enters wifi password
              console.log('token not provided');
              e.preventDefault();
            } else {
              Auth.persistToken($scope.data.token);
              console.log('transitioning to list state');
              $state.transitionTo('list');
            }
          }
        }
      ]
    });
    myPopup.then(function (res) {
      console.log('Tapped!', res);
    });
    $timeout(function () {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

  this.login = function () {
    var url = controller.authUrl + '/google';
    console.log('oauth target: ' + url);

    if ($window.hasOwnProperty('cordova')) {
      console.log('Cordova Auth');
      ref = $window.cordova.InAppBrowser.open(url, '_blank', 'location=no');
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
    } else {
      console.log('Browser Auth');
      this.showPopup();
    }
  };
});
