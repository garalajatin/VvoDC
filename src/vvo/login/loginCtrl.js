'use strict';
app.controller('loginCtrl', function($http, $location, WSFactory) {

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
		WSFactory.call('auth/doLogin',payload)
		.then(function(res) {
			if (res && res.data) {
				if (res.data.errorCode) {
					if(res.data.errorCode.trim() !== '0')
						lCtrl.errorMessage = res.data.errorText;
					else
						$location.path('/dashboard');
				}
			}
		}).catch(function(err) {
			console.warn(err);
		});
	}

});