var app = angular.module('myApp', []);
app.controller('ShowHide', function($scope) {
  $scope.show = function() {
    $scope.hide1 = false;
    $scope.hide2 = true;
  }
  $scope.hide = function() {
    $scope.hide2 = false;
    $scope.hide1 = true;
  }

});
