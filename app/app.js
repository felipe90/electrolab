'use strict';

// Declare app level module which depends on views, and components
angular.module('myAdminApp', [
  'ngRoute',
  'ngMaterial',
  'myAdminApp.stock'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  	$routeProvider.when('/stock', {
		templateUrl : 'stock/stock.html',
		controller : 'stockController'
	});

  $routeProvider.otherwise({redirectTo: '/'});
}]);
