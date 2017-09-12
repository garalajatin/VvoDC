'use strict';
function callService($http, $q, WSURLS) {
	return {
		call : function(serviceMethod, payload) {
			var deferred = $q.defer();
			$http({
				method : "POST",
				url : WSURLS.serviceURL + serviceMethod,
				data : payload,
				headers : {
					'Content-Type' : 'application/json'
				}
			}).then(function mySuccess(response) {
				deferred.resolve(response);
			}, function myError(response) {
				deferred.reject("unknown error unable to reach server");
			});

			return deferred.promise;
		}
	}
}