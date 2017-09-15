'use strict';
app.controller('homeCtrl',  function($scope, WSFactory, DataService, $cookies, $location) {
	
	var hCtrl = this;
	var commonParam=angular.fromJson($cookies.get('commonParam'));
	hCtrl.isShowImg = -1;
	
	hCtrl.init = function() {
		dashBoardCtrl.apply(hCtrl, arguments);
	}
	
	hCtrl.selectedData= undefined;

	hCtrl.gridOptions = {
        data: [],
        urlSync: false
    };
	
        commonParam["procedureName"] = "getDCList";
        
    	WSFactory.call('dc/getList',JSON.stringify(commonParam))
    	.then(function(res) {
    		hCtrl.gridOptions.data = res.data.result;
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
    	
    	hCtrl.callShowDC = function(item) {
    		
    	
    		DataService.setData(hCtrl.data);
			hCtrl.switchImg("", "imgp1");
    		
    		if(hCtrl.selectedData){

    		if(hCtrl.selectedData.dcID){
    			
    			commonParam["dcID"] = (hCtrl.selectedData.dcID) ? hCtrl.selectedData.dcID:"";
    			commonParam["procedureName"] = "getDCPERSGOALS1List";
    			
    			hCtrl.getDCPERSGOALS1List(commonParam);
    			
    			
    			
    		}else{
    			
    			commonParam["contactID"] = (hCtrl.selectedData.contactID) ? hCtrl.selectedData.contactID:"",
    			commonParam["mandantID"] = (hCtrl.selectedData.mandantID) ? hCtrl.selectedData.mandantID:"",
    			commonParam["dcDate"] = (hCtrl.selectedData.dcDate) ? hCtrl.selectedData.dcDate:"",
    			commonParam["expStatus"] = "";
    			commonParam["procedureName"] = "creDC";
    			
    			
    		 	WSFactory.call('dc/create',commonParam)
    	    	.then(function(res) {
    	    		
    	    		if(res.data.dcID){
    	    			
    	    			commonParam["dcID"] = (res.data.dcID) ? res.data.dcID:"",
    	    			commonParam["procedureName"] = "getDCPERSGOALS1List";

    	    			hCtrl.getDCPERSGOALS1List(commonParam);
    	    			
    	    			
    	    		}
    	    	}).catch(function(err) {
    	    		console.warn(err);
    	    	});
    			
    		}
    		
    		}else
    			alert('select record first');
	}
    	
    	hCtrl.setSelectedData = function(item) {

    		hCtrl.selectedData = item;
    	}
    	
    	hCtrl.getDCPERSGOALS1List = function(payload) {

			WSFactory.call('dc/getList',payload)
	    	.then(function(res) {
	    		
	    		
	    		if (res && res.data) {
	    			
	    			if (res.data.errorCode != '0') {
	    				console.log(res.data.errorCode);
	    				
	    				
	    			}else{
    					console.log(res.data);
    					DataService.setData(res.data);
    					hCtrl.switchImg("", "imgp1")
    				}
	    			
	    		}
	    		
	    	}).catch(function(err) {
	    		console.warn(err);
	    	});
    	}


    	hCtrl.switchImg = function(hideID,showID) {
    		if(showID === 'imgp1')
    			hCtrl.isShowImg = 1;
    		else if(showID === 'imgp2')
    			hCtrl.isShowImg = 2;
    		else if(showID === 'imgas1')
    			hCtrl.isShowImg = 3;
    		else if(showID === 'imgas2')
    			hCtrl.isShowImg = 4;
    		else
    			hCtrl.isShowImg = -1;
    		angular.element(document.getElementById(hideID)).css('width', '0%');
    		angular.element(document.getElementById(showID)).css('width', '100%');
    	}
    	
    	hCtrl.callTestCtrl = function() {
    		hCtrl.switchImg('imgas2','');
    		$scope.dbCtrl.toShow ='household';
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