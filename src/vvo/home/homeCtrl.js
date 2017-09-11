'use strict';
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