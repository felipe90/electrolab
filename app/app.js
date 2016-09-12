'use strict';

// Declare app level module which depends on views, and components
angular.module('myAdminApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  'myAdminApp.home',
  'myAdminApp.stock',
  'myAdminApp.bill'

]).
config(['$locationProvider', '$stateProvider', '$routeProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $routeProvider, $urlRouterProvider) {

    
    $stateProvider
      .state('/', {
            url: "/",
            templateUrl: 'home/home.html',
            controller: 'homeController'
      })
      .state('stock', {
            url: "/stock",
            templateUrl: 'stock/stock.html',
            controller: 'stockController'
      })
      .state('bill', {
            url: "/bill",
            templateUrl: 'bill/bill.html',
            controller: 'billController'
      });

    $urlRouterProvider.otherwise("/");
    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    // $routeProvider
    //   .when('/', {
    //       templateUrl : 'home/home.html',
    //       controller : 'homeController'
    //   })
    //   .when('/stock', {
    //       templateUrl : 'stock/stock.html',
    //       controller : 'stockController'
    //   })
    //   .when('/bill', {
    //       templateUrl : 'bill/bill.html',
    //       controller : 'billController'
    //   })

    //   .otherwise({
    //     redirectTo: '/'
    // });


}]);
