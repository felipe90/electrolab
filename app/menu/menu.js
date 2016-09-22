menuApp = angular.module('myAdminApp.menu', ['ngMaterial']);

menuApp.controller('menuController', ['$scope','$mdSidenav', function ($scope, $mdSidenav) {
	console.log("menu ctrl");

   	// init vars
	$scope.user = {
		name: 'Luis',
	}
	$scope.isOpen = false;

	$scope.toggleLeft = function () {
		buildToggler('left');
	}

	$scope.toggleRight = function () {
		buildToggler('right');
	}

    function buildToggler(navID) {
        $mdSidenav(navID)
          	.toggle()
          	.then(function () {
            	console.log("toggle " + navID + " is done");
        });
    }
}]);

/*
	Sidenav Controller
*/
menuApp.controller('sideNavLeftController',['$scope','$mdSidenav', function ($scope, $mdSidenav) {
 
    $scope.close = function () {
	   	console.log("close LEFT ");

      	$mdSidenav('left').close()
        	.then(function () {
          		console.log("close LEFT is done");
        });
	};
}]);

/*
	Sidenav Controller
*/
menuApp.controller('sideNavRightController',['$scope','$mdSidenav', function ($scope, $mdSidenav) {
 
	console.log("sidenav Right ctrl");


    $scope.close = function () {
          	console.log("close R ");

      	$mdSidenav('right').close()
        	.then(function () {
          	console.log("close R is done");
        });
	};
}]);