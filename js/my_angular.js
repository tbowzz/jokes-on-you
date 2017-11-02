var myApp = angular.module('myApp', []);

myApp.controller('JokeMaker', function($scope) {
  $scope.joke_text = 'Why did the chicken cross the road?';
  $scope.answer = 'To get to the other side';

  var newJoke = "What's black and white?"
  var newAnswer = "A newspaper"


  $scope.updatePunchline = function() {
    console.log("updatePunchline called");
    $scope.punchline = $scope.answer.toUpperCase() + '!';
  };

  $scope.resetJoke = function() {
    console.log("resetJoke called");
    $scope.punchline = '';
    $scope.joke_text = newJoke;
  };

});