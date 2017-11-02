var myApp = angular.module('myApp', []);

myApp.controller('JokeMaker', function($scope) {
  $scope.answer = 'To get to the other side';
  
  $scope.updatePunchline = function() {
    console.log("updatePunchline called");
    $scope.punchline = $scope.answer.toUpperCase() + '!';
  };

  $scope.resetJoke = function() {
    console.log("resetJoke called");
    $scope.punchline = '';
  };

});