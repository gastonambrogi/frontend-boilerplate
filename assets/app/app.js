'use strict';

angular.module('app-devsar', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/albums', {
  	template: '<album-list></album-list>'
  })

  $routeProvider.when('/albums/:albumId', {
  	template: '<album-detail></album-detail>'
  })

  $routeProvider.otherwise({redirectTo: '/albums'});
}]);
