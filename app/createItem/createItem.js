menuApp = angular.module('myAdminApp.createItem', ['ngMaterial' , 'firebase']);

menuApp.controller('createItemController', ['$scope', '$location', function ($scope, $location) {
	console.log("create item ctrl");

	// var config = {
	// 	apiKey: "AIzaSyCbexAOLmNWd1zmtIuC_qxKzmmZJ39kloA",
	// 	authDomain: "admin-electrolab.firebaseapp.com",
	// 	databaseURL: "https://admin-electrolab.firebaseio.com",
	// 	storageBucket: "admin-electrolab.appspot.com",
	// 	messagingSenderId: "222053965166"
	// };

	// firebase.initializeApp(config);
	// var rootRef = firebase.database().ref();

	// var userId = firebase.auth().currentUser.uid;

	// var ref = new Firebase("https://admin-electrolab.firebaseio.com/categories");
	// // download the data into a local object
	// var syncObject = $firebaseObject(ref);
	// // synchronize the object with a three-way data binding
	// // click on `index.html` above to see it used in the DOM!
	// syncObject.$bindTo($scope, "data");

	
	$scope.newItem = {
		image :  null,
		name : null,
		description : null,
		category : null,
		feature : null,
	};

	$scope.newItemStock = {
		name : null,
		stock : null,
	};


	$scope.getStockItems = function() {
		var items= [];
		for(i=0; i<=100; i++) {
			items.push(i);
		}
		$scope.stockAmounts = items;
	}

	$scope.getStockFeatures = function() {
		var ref = firebase.database().ref('features/');

		ref.on("value", function(snapshot) {
		  $scope.stockFeatures = snapshot.val();
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	}


	$scope.getStockCategories = function() {

		var ref = firebase.database().ref('categories/');

		ref.on("value", function(snapshot) {
			$scope.stockCategories = snapshot.val();
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	}

	$scope.createItem = function() {

		$scope.newItemStock.name = $scope.newItem.name;

		// add item 
		firebase.database().ref('products/').once('value')
			.then(function(snapshot) {
		 		var items = snapshot.val();
		 		console.log(items)
		 		firebase.database().ref('products/'+ items.length).set($scope.newItem)
		 			.then(function(){
		 				console.log();
		 			})
		 			.catch(function(error){
						console.log(error.code);
		 			});
			})
			.catch(function(error){
				console.log(error.code);
			});

		// // add item stock 
		firebase.database().ref('stock/').once('value')
			.then(function(snapshot) {
		 		var items = snapshot.val();
		 		console.log(items)
		 		firebase.database().ref('stock/'+ items.length).set($scope.newItemStock)
		 			.then(function(){
		 				console.log();
		 			})
		 			.catch(function(error){
						console.log(error.code);
		 			});
			})
			.catch(function(error){
				console.log(error.code);
			});

	}

	$scope.$watch('files.length',function(newVal,oldVal){
        try{
			$scope.newItem.image = $scope.files[0].lfDataUrl;
			console.log($scope.newItem.image)
        }
        catch(error){
    	
    	}
    })

    // init variables
	$scope.getStockCategories();
	$scope.getStockItems();
	$scope.getStockFeatures();

}]);