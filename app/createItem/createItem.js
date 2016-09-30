menuApp = angular.module('myAdminApp.createItem', ['ngMaterial']);

menuApp.controller('createItemController', ['$scope', function ($scope) {
	console.log("create item ctrl");

	// init variables
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

	$scope.stokCategories = getStockCategories();
	$scope.stokOPt = getStockItems();
	$scope.newItem = {};


	$scope.$watch('files.length',function(newVal,oldVal){
        try{
			$scope.newItem.image = $scope.files[0].lfDataUrl;
			console.log($scope.newItem.image)
        }
        catch(error){
    	
    	}
    })

}]);