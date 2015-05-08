angular.module('starter.controllers', [])

.controller('MapCtrl', ['$scope', 'Events', 'leafletData', function($scope, Events, leafletData) {
    angular.extend($scope, {
        turin: {
            lat: 45.0567,
            lng: 7.6600,
            zoom: 12
        },
        center: {
            autoDiscover: true
        }
    });

    var events = Events.all();

    leafletData.getMap().then(function(map) {

      // Add events
      for (var i in events) {
        callback(events[i]);
      }

       function callback(e) {
          L.marker(e.coords, {icon: Events.getIcon()})
          .on('click', function () {
            location.replace("#/tab/events/" + e.id);
          })
          .addTo(map);
        }
    });
}])

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  }
})
.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
