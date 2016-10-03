menuApp = angular.module('myAdminApp.menu', ['ngMaterial', 'firebase']);

menuApp.controller('menuController', ['$scope','$mdSidenav', '$location', function ($scope, $mdSidenav, $location) {
	console.log("menu ctrl");
 	
   	// init vars

   	$scope.isUserAuth = false;

 	$scope.userData = $scope.userData || {};

	$scope.isOpen = false;
	$scope.fabOut = false;
	
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

    // firebase auth listenner
    firebase.auth().onAuthStateChanged(function(){

    	var user = firebase.auth().currentUser; 

	    if(firebase.auth().currentUser){
	      $scope.isUserAuth = true;
	      // $scope.userData = user;
	      // is just temp solution
	    
	      var index = user.email.indexOf("@");
	      $scope.userData.email = user.email.slice(0,index);
	      console.log($scope.userData);
	      $scope.$apply();
	    } else {

	    }
  });
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
menuApp.controller('sideNavRightController',['$scope','$mdSidenav', '$location', function ($scope, $mdSidenav,$location) {
 
	console.log("sidenav Right ctrl");

	$scope.toggleSignOut = function(){
		firebase.auth().signOut();
		$location.path('login');
	}

    $scope.close = function () {
          	console.log("close R ");

      	$mdSidenav('right').close()
        	.then(function () {
          	console.log("close R is done");
        });
	};
}]);