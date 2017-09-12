'use strict';
app.controller('homeCtrl', ['$scope', 'WSFactory', function ($scope, WSFactory) {

    $scope.gridOptions = {
        data: [],
        urlSync: false
    };
        var payload = JSON.stringify({"loginLanguageID":"","loginUserID":"","userSessionID":"", "procedureName":"getDCList"});
    	WSFactory.call('dc/getList',payload)
    	.then(function(res) {
    		$scope.gridOptions.data = res.data.result;
    		/*if (res && res.data) {
    			
    			
    			if (res.data.errorCode) {
    				if(res.data.errorCode.trim() !== '0')
    					hCtrl.errorMessage = res.data.errorText;
    				else{
    					console.log(res.data);
    					hCtrl.gridOptions.data = res.data;
    				}
    			}
    			
    			
    		}*/
    	}).catch(function(err) {
    		console.warn(err);
    	});

}]);

/*hCtrl.init = function() {
	var payload = JSON.stringify({"loginLanguageID":"","loginUserID":"","userSessionID":"", "procedureName":"getDCList"});
	WSFactory.call('dc/getList',payload)
	.then(function(res) {
		
//		hCtrl.gridOptions.data = res.data;
		console.log(res.data);
		if (res && res.data) {
			
			
			if (res.data.errorCode) {
				if(res.data.errorCode.trim() !== '0')
					hCtrl.errorMessage = res.data.errorText;
				else{
					console.log(res.data);
					hCtrl.gridOptions.data = res.data;
				}
			}
			
			
		}
	}).catch(function(err) {
		console.warn(err);
	});
};*/