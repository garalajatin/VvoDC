'use strict';
app.controller('dashboardCtrl', function($mdSidenav) {
	var dbCtrl = this;
	dbCtrl.toShow = "home";

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

	dbCtrl.todos = [
		{
			who : 'Min Li Chan',
		},
		{
			who : 'Min Li Chan',
		},
		{
			who : 'Min Li Chan',
		},
		{
			who : 'Min Li Chan',
		},
		{
			who : 'Min Li Chan',
		},
	];


	dbCtrl.doPrimaryAction = function(event) {
    }
});