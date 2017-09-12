'use strict';

var app = angular.module('StarterApp', [ 'ngMaterial', 'ngMdIcons', 'ngRoute','dataGrid', 'pagination']);
var isShowMenuIcon = false;
app.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);

app.config([ '$routeProvider',

	function($routeProvider) {

		// Define routes 
		$routeProvider.when('/login',
			{
				templateUrl : 'src/vvo/login/login.html',
				controller : 'loginCtrl'
			}).when('/dashboard',
			{
				templateUrl : 'src/vvo/dashboard/dashboard.html',
				controller : 'dashboardCtrl'
			}).when('/contacts',
			{
				templateUrl : 'partial/contacts.html'
			}).otherwise({
			redirectTo : 'login'
		});
	}]);