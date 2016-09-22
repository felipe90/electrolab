'use strict';

// Declare app level module which depends on views, and components
angular.module('myAdminApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  'myAdminApp.menu',
  'myAdminApp.home',
  'myAdminApp.stock',
  'myAdminApp.bill',
  'myAdminApp.createItem',

]).
config(['$locationProvider', '$stateProvider', '$routeProvider', '$urlRouterProvider', '$mdThemingProvider', 
    function($locationProvider, $stateProvider, $routeProvider, $urlRouterProvider, $mdThemingProvider) {
    

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
      })
      .state('createItem', {
            url: "/createItem",
            templateUrl: 'createItem/createItem.html',
            controller: 'createItemController'
      });
      

    $urlRouterProvider.otherwise("/");
    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      // .accentPalette('orange');
    
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
