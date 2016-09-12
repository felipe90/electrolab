homeApp = angular.module('myAdminApp.home', []);

homeApp.controller('homeController', ['$scope', function($scope){
	console.log("home ctrl");	
}])