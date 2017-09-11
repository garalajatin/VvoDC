'use strict';

var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ngRoute']);


app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', 

  function( $routeProvider) {

  // Define routes 
  $routeProvider.
    when('/login', 
        { templateUrl: 'partial/login.html',
        	controller: 'loginCtrl'	
        }).

    when('/dashboard', 
        { templateUrl: 'partial/dashboard.html',
    	controller: 'dashboardCtrl'	
        }).

    
     when('/contacts',
        { templateUrl: 'partial/contacts.html'}).

    otherwise({redirectTo: 'login'});


  }]);



app.controller('loginCtrl',  function($http, $location){
	
	  var lCtrl = this;
	  lCtrl.formData = {
		  'loginName' : '',
		  'password': ''
	  };
	  
	  lCtrl.errorMessage = undefined;
	  lCtrl.onClickLink = function(department) {
			
		};
	  lCtrl.onLogin = function() {
		  
		  $location.path('/dashboard');
	  }
	  
	});

app.controller('dashboardCtrl', function ($scope, $mdSidenav) {
    $scope.toShow = "home";
  
    $scope.toggleLeft = function() {
        $mdSidenav("left")
          .toggle();
    };
    
    $scope.close = function () {
      $mdSidenav('left').close();
    };

    $scope.show = function (toShow) {
      $scope.toShow = toShow;
    };
});

