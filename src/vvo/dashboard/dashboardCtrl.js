'use strict';
app.controller('dashboardCtrl', function($scope, $mdSidenav) {
	var dbCtrl = this;
	dbCtrl.toShow = "dashboard";

	dbCtrl.init = function() {
		isShowMenuIcon = true;
	}
	
	dbCtrl.close = function() {
		$mdSidenav('left').close();
	};

	dbCtrl.show = function(toShow) {
		dbCtrl.toShow = toShow;
	};
	
	/* var imagePath = 'img/list/60.jpeg';*/
	   /* $scope.indexToShow = -1;*/
	    
	    $scope.todos = [
	      {
	         who: 'Min Li Chan',
	       },
	       {
		         who: 'Min Li Chan',
		       },
		       {
			         who: 'Min Li Chan',
			       },
			       {
				         who: 'Min Li Chan',
				       },
				       {
					         who: 'Min Li Chan',
					       },
	    ];
	  
	    
	    $scope.doPrimaryAction = function(event) {
	    	
	    	 alert($scope.todos[0].who); }
});