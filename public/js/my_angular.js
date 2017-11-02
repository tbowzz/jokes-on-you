
var myApp = angular.module('myApp', []);

myApp.factory('jokeFetcher', jokeFetcher);
myApp.controller('JokeMaker', JokeMaker);


  function jokeFetcher ($http) 
  {

    var API_ROOT = 'joke'
    return {
      get: function () {
        return $http
          .get(API_ROOT)
          .then(function (resp) {
            return resp.data
          })
      }
    }

  }

function JokeMaker ($scope, jokeFetcher, $http) 
{
  $scope.joke_text = 'Yo mamma so fat she has her own moons';
  $scope.answer = 'To get to the other side';

  var newJoke = "What's black and white?"
  var newAnswer = "A newspaper"



  $scope.updatePunchline = function() 
  {
    console.log("updatePunchline called");
    $scope.punchline = 'Ayoooooo!';
  };

  $scope.resetJoke = function() 
  {
    $scope.answer = '';
    console.log("resetJoke called");
    $scope.punchline = '';
    var url = "/joke";
   
    jokeFetcher.get()
    .then(function (data) {
      console.log(data);
      var json_format = JSON.parse(data);
      var real = JSON.parse(json_format);
      $scope.joke_text = real.joke;
    })
  };

};
