'use strict';
app.controller('loginCtrl', function($http, $location) {

	var lCtrl = this;
	lCtrl.formData = {
		'loginName' : '',
		'password' : ''
	};

	lCtrl.errorMessage = undefined;
	lCtrl.onClickLink = function(department) {};
	lCtrl.onLogin = function() {

		$http({
			method : "POST",
			url : " http://localhost:3606/vvo/webservice/auth/doLogin",
			data : payload,
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function mySuccess(response) {
			//			       console.log("-----------"+JSON.stringify(response));
			if (response && response.data) {
				if (response.data.errorCode) {
					//$location.path('/dashboard');
					if(response.data.errorCode.trim() !== '0')
						lCtrl.errorMessage = response.data.errorText;
					else
						$location.path('/dashboard');
				}
			}
		}, function myError(response) {
			console.log(JSON.stringify(response));
			console.warn(response);
		});
	}

});