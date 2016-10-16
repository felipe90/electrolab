menuApp = angular.module('myAdminApp.createItem', ['ngMaterial']);

menuApp.controller('createItemController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
	console.log("create item ctrl");

	// init variables
	$scope.stokCategories = getStockCategories();
	$scope.stokOPt = getStockItems();
	$scope.newItem = {
		image :  null,
		name : null,
		description : null,
		category : null,
		stock : null,
	};

	function getStockItems () {
		var items= [];
		for(i=0; i<=100; i++) {
			items.push(i);
		}
		return items
	}

	function getStockCategories () {
		var items = ['Luz', 'Sonido', 'Repuesto']
		return items
	}

	$scope.createItem = function() {
		console.log($scope.newItem)

	}

	$scope.$watch('files.length',function(newVal,oldVal){
        try{
			$scope.newItem.image = $scope.files[0].lfDataUrl;
			console.log($scope.newItem.image)
        }
        catch(error){
    	
    	}
    })

}]);