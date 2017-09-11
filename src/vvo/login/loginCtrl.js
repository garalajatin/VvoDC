'use strict';
app.controller('loginCtrl', function($http, $location) {

	var lCtrl = this;
	lCtrl.formData = {
		'loginName' : '',
		'password' : ''
	};
	
	var errorMsg = '';

	lCtrl.errorMessage = undefined;
	lCtrl.onClickLink = function(department) {};
	lCtrl.onLogin = function() {
		var payload = JSON.stringify({"loginName":lCtrl.formData.loginName,"password":lCtrl.formData.password,"clientKey":"VVO"});
		$http({
			method : "POST",
			url : " http://localhost:3606/vvo/webservice/auth/doLogin",
			data : payload,
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function mySuccess(response) {
			if (response && response.data) {
				if (response.data.errorCode) {
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