'use strict';

// Declare app level module which depends on views, and components
angular.module('myAdminApp', [
  'ngRoute',
  'ui.router',
  'ngMaterial',
  'ngMessages',
  'firebase',
  'lfNgMdFileInput',
  'myAdminApp.menu',
  'myAdminApp.login',
  'myAdminApp.home',
  'myAdminApp.stock',
  'myAdminApp.bill',
  'myAdminApp.createItem',

])
.config([
  '$locationProvider', 
  '$stateProvider', 
  '$routeProvider', 
  '$urlRouterProvider', 
  '$mdThemingProvider', 
    
  function($locationProvider, $stateProvider, $routeProvider, $urlRouterProvider, $mdThemingProvider) {
    
    $stateProvider
      .state('login', {
            url: "/login",
            templateUrl: 'login/login.html',
            controller: 'loginController'
      })
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

}])

.run(['$location', function($location){

  var config = {
    apiKey: "AIzaSyCbexAOLmNWd1zmtIuC_qxKzmmZJ39kloA",
    authDomain: "admin-electrolab.firebaseapp.com",
    databaseURL: "https://admin-electrolab.firebaseio.com",
    storageBucket: "admin-electrolab.appspot.com",
    messagingSenderId: "222053965166"
  };

  firebase.initializeApp(config);
  var rootRef = firebase.database().ref();

  // Check if user is logged
  if(firebase.auth().currentUser){
      $location.path('home');
  } else {
      $location.path('login');
  }

}])
