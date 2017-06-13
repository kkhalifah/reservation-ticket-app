var app = angular.module("rsvpApp", ["ui.bootstrap"]);

app.controller("reserveController", function($scope){
//console.log("controller is working");


$scope.numGuests = 0;
  $scope.listOfGuests = [];
  $scope.guestList = function (name, numGuests) {
      if (numGuests === 0) {
          $scope.listOfGuests.unshift(name + " has reserved 1 "+ "ticket")
      } else {
          $scope.listOfGuests.unshift(name + " has reserved " + (numGuests +1 )+ " guests")
      }
      $scope.numGuests = 0;
      $scope.name = ""

  };



});
//
// $scope.consumers = [];
// $scope.newsFeed = function (name, numTix){
//   if (numTix ===1){
//     $scope.consumers.unshift(name + " has bought " + numTix + " ticket")
//   } else {
//       $scope.consumers.unshift(name + " has bought " + numTix + " tickets")
//   }
