angular.module('starter.controllers', [])

.controller('MapCtrl', [ "$scope", function($scope) {
    angular.extend($scope, {
        turin: {
            lat: 45.0667,
            lng: 7.7000,
            zoom: 11
        },
        center: {
            autoDiscover: true
        }
    });
}])

.controller('DashCtrl', function($scope) {})

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