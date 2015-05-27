angular.module('datespot.controllers', ['ionic', 'datespot.services'])

/*
Controller for the filter page
*/

.controller('FilterCtrl', function($scope, User) {

  
})

/******
ENTER FILTER FUNCTIONALITY HERE
******/


/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope, $timeout, User) {
  // our first three DateSpots
  $scope.spots = [
     {
        "title":"Stealing Cinderella",
        "artist":"Chuck Wicks",
        "image_small":"https://i.scdn.co/image/d1f58701179fe768cff26a77a46c56f291343d68",
        "image_large":"https://i.scdn.co/image/9ce5ea93acd3048312978d1eb5f6d297ff93375d"
     },
     {
        "title":"Venom - Original Mix",
        "artist":"Ziggy",
        "image_small":"https://i.scdn.co/image/1a4ba26961c4606c316e10d5d3d20b736e3e7d27",
        "image_large":"https://i.scdn.co/image/91a396948e8fc2cf170c781c93dd08b866812f3a"
     },
     {
        "title":"Do It",
        "artist":"Rootkit",
        "image_small":"https://i.scdn.co/image/398df9a33a6019c0e95e3be05fbaf19be0e91138",
        "image_large":"https://i.scdn.co/image/4e47ee3f6214fabbbed2092a21e62ee2a830058a"
      }
  ];

  // initialize the current date spot
  $scope.currentSpot = angular.copy($scope.spots[0]);

  // fired when we favorite / skip a date spot.
  $scope.sendFeedback = function (bool) {
    // first, add to favorites if they favorited
    if (bool) User.addSpotToFavorites($scope.currentSpot);
  	$scope.currentSpot.rated = bool;
  	$scope.currentSpot.hide = true;

  	
  	$timeout(function() {
	  	// set the current date spot to one of our three date spots
	    var randomSpot = Math.round(Math.random() * ($scope.spots.length - 1));

	    // update current date spot in scope
	    $scope.currentSpot = angular.copy($scope.spots[randomSpot]);
	  }, 250);
  }

  $scope.spotDestroyed = function(index) {
    $scope.spots.splice(index, 1);
  };

  $scope.spotSwiped = function(index) {
    var newSpot = // new spot data
    $scope.spot.push(newSpot);
  };
})


/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope, User) {
  // get the list of our favorites from the user service
  $scope.favorites = User.favorites;

  $scope.removeSpot = function(spot, index) {
    User.removeSpotFromFavorites(spot, index);
  }

})


/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope, User) {
  $scope.enteringFavorites = function() {
    User.newFavorites = 0;
  }

  $scope.favCount = User.favoriteCount;
});