'use strict';
app.controller('houseHoldCtrl', function (WSFactory,  DataService, $rootScope) {
	var hhCtrl = this;
	
	var returnData = undefined;
	
	hhCtrl.init = function(){
		$rootScope.isShowMenuIcon = true;
		
		DataService.getData().then(function(successResponse){
			hhCtrl.returnData = successResponse;
		    console.log(hhCtrl.returnData);
		  });
		
	}
	
});