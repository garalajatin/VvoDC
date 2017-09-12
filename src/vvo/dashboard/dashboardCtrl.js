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
});