'use strict';
app.controller('dashboardCtrl', dashBoardCtrl);
function dashBoardCtrl($mdSidenav,$rootScope) {
	var dbCtrl = this;
//	dbCtrl.toShow = "home";

	dbCtrl.init = function() {
		$rootScope.isShowMenuIcon = false;
		dbCtrl.toShow = "home";
	}
	
	dbCtrl.testPrint = function() {
		console.log('test');
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
}