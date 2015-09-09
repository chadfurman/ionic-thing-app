'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {
  console.log('Allo! Allo from your module: ' + 'main');

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.html',
      controller: 'LoginCtrl as ctrl',
      data: {
        requireAuth: false
      }
    })
    .state('list', {
      url: '/list',
      templateUrl: 'main/templates/list.html',
      controller: 'ListCtrl as ctrl',
      data: {
        requireAuth: true
      }
    })
    ;
})
.run(function ($rootScope, $state, Auth) {
  if (Auth) {
    console.log('Auth Service Loaded');
  }

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
    console.log('Transitioning into ' + toState + ' from ' + fromState);
    if (toState.data.requireAuth) {
      if (!Auth.isAuthenticated()) {
        console.log('Unauthorized');
        $state.transitionTo('login');
        event.preventDefault();
      } else {
        console.log('Authorized');
      }
    }
  });
});
