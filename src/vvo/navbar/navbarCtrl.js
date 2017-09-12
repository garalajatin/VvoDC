'use strict';
app.controller('navbarCtrl', function ($mdSidenav) {
	var nbCtrl = this;
	
    nbCtrl.close = function () {
      $mdSidenav('left').close();
    };

    nbCtrl.show = function (toShow) {
    	nbCtrl.toShow = toShow;
    };
});