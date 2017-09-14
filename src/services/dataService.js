'use strict';
function dataService($http, $q) {
	var items={};
	  var service={};
	return {
		getData : function() {
			var deferred = $q.defer();
		
			deferred.resolve(items);
			return deferred.promise;
		},
		  
		  setData : function(data) {
				var itemsDefer = $q.defer();
				items=data;
	             itemsDefer.resolve(data)
				return itemsDefer.promise;
			}
	}
}