'use strict';
app.controller('homeCtrl',  function(WSFactory) {
	
	var hCtrl = this;
	
	hCtrl.selectedData= undefined;

	hCtrl.gridOptions = {
        data: [],
        urlSync: false
    };
        var payload = JSON.stringify({"loginLanguageID":"","loginUserID":"","userSessionID":"", "procedureName":"getDCList"});
    	WSFactory.call('dc/getList',payload)
    	.then(function(res) {
    		hCtrl.gridOptions.data = res.data.result;
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
    	
    	
    	
    	hCtrl.callShowDC = function(item) {

    		if(hCtrl.selectedData.dcID){
    			
    			var payload = JSON.stringify(
    					{"loginLanguageID":"",
    					 "loginUserID":"",
    					 "userSessionID":"",
    					 "dcID":(hCtrl.selectedData.dcID) ? hCtrl.selectedData.dcID:"",
    					 "procedureName":"getDCPERSGOALS1List"
    					});
    			
    
    			hCtrl.getDCPERSGOALS1List(payload);
    			
    			
    			
    		}else{
    			var payload = JSON.stringify(
    					{"loginLanguageID":"",
    					 "loginUserID":"",
    					 "userSessionID":"",
    					 "contactID":(hCtrl.selectedData.contactID) ? hCtrl.selectedData.contactID:"",
    					 "mandantID":(hCtrl.selectedData.mandantID) ? hCtrl.selectedData.mandantID:"",
    					 "dcDate":(hCtrl.selectedData.dcDate) ? hCtrl.selectedData.dcDate:"",
    					 "expStatus":"",
    					 "procedureName":"creDC"
    					});
    			
    			
    		 	WSFactory.call('dc/create',payload)
    	    	.then(function(res) {
    	    		
    	    		if(res.data.dcID){
    	    			
    	    			var payload = JSON.stringify(
    	    					{"loginLanguageID":"",
    	    					 "loginUserID":"",
    	    					 "userSessionID":"",
    	    					 "dcID":(res.data.dcID) ? res.data.dcID:"",
    	    					 "procedureName":"getDCPERSGOALS1List"
    	    					});
    	    			
    	    
    	    			hCtrl.getDCPERSGOALS1List(payload);
    	    			
    	    			
    	    		}
    	    	}).catch(function(err) {
    	    		console.warn(err);
    	    	});
    			
    		}
    		
	}
    	hCtrl.setSelectedData = function(item) {

    		hCtrl.selectedData = item;
    	}
    	
    	hCtrl.getDCPERSGOALS1List = function(payload) {

			WSFactory.call('dc/getList',payload)
	    	.then(function(res) {
	    		console.log(res.data);
	    		
	    		if (res && res.data) {
	    			
	    			
	    			if (res.data.errorCode) {
	    				if(res.data.errorCode.trim() !== '0')
	    					alert(res.data.errorText);
	    				else{
	    					console.log(res.data);
	    				}
	    			}
	    		}
	    		
	    	}).catch(function(err) {
	    		console.warn(err);
	    	});
    	}


    	

});

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