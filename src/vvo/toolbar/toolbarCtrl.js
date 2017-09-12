'use strict';
app.controller('toolbarCtrl', function ($mdSidenav) {
	var tbCtrl = this;
	
	tbCtrl.init = function() {
		tbCtrl.isShowMenuIcon = isShowMenuIcon;
	}

	tbCtrl.toggleLeft = function() {
		$mdSidenav("left").toggle();
    };
});