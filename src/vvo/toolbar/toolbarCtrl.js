'use strict';
app.controller('toolbarCtrl', function ($mdSidenav, $rootScope) {
	var tbCtrl = this;
	$rootScope.isShowMenuIcon = false;
	tbCtrl.init = function() {
		$rootScope.isShowMenuIcon = false;
	}

	tbCtrl.toggleLeft = function() {
		$mdSidenav("left").toggle();
    };
});