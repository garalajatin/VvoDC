'use strict';
app.controller('houseHoldCtrl', function (WSFactory,  DataService, $rootScope,$cookies) {
	var hhCtrl = this;
	
	hhCtrl.commonParam = undefined;
	hhCtrl.bShowHideComment = false;
	hhCtrl.init = function(){
		$rootScope.isShowMenuIcon = true;
		hhCtrl.isShowForm = true;
		
		hhCtrl.commonParam=angular.fromJson($cookies.get('commonParam'));
		
		DataService.getData().then(function(successResponse){
			hhCtrl.formData = {};
			hhCtrl.returnData = successResponse.result[0];
			hhCtrl.formData = hhCtrl.returnData;
			hhCtrl.formData.waCB = (hhCtrl.returnData.waCB === 'Y' || hhCtrl.returnData.waCB === 'y');
			hhCtrl.bShowHideComment = (hhCtrl.formData.remark !== undefined && hhCtrl.formData.remark !== null && hhCtrl.formData.remark.trim() !== '');
		  });
		
		$rootScope.$on('hhSaveForm',function() {
			hhCtrl.onSaveClick();
		});
		
	}
	
	hhCtrl.onCloseClick = function() {
		hhCtrl.isShowForm = false;
	}
	
	hhCtrl.onSaveClick = function() {
		hhCtrl.payload = hhCtrl.jsonConcat(hhCtrl.formData,hhCtrl.commonParam)
		hhCtrl.payload["procedureName"] = "updDCPERSGOALS1";
//		console.log(hhCtrl.payload);
		if(hhCtrl.payload.waCB === true)
			hhCtrl.payload.waCB = 'Y';
		else
			hhCtrl.payload.waCB = 'N';
		WSFactory.call('dc/update',hhCtrl.payload)
		.then(function(res) {
					if(res.data.errorCode !== 0)
						lCtrl.errorMessage = res.data.errorText;
					else{
						alert('Data saved successfully !');
					}
		}).catch(function(err) {
			console.warn(err);
		});
	}
	
	hhCtrl.isShowComment = function(){
		hhCtrl.bShowHideComment = !hhCtrl.bShowHideComment;
		if(!hhCtrl.formData.bShowHideComment)
			hhCtrl.formData.remark = '';
	}
	
	hhCtrl.jsonConcat = function(o1, o2) {
		 for (var key in o2) {
		  o1[key] = o2[key];
		 }
		 return o1;
		}
	
});