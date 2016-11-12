

(function(){
'use strict';
	var AppController = function ($http,$scope){
	var self=this;
		$http.get("/Controls/demo/components.json").then(function(response){
			$scope.data = response.data;
		});
	}

	angular
		.module('app', [
		
					
		'header'
		  ,
		
		
					
		'footerel'
		  ,
		
		
					
		'vx.grid.modules'
		 		
		
		
		])
		.controller('AppController',['$http','$scope',AppController])

})();