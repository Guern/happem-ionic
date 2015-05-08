angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  var eventIcon = L.icon({
      iconUrl: 'img/brontosaurus-icon.png',
      iconSize:     [38, 40], // size of the icon
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  // Some fake testing data
  var events = [{
    id: 0,
    name: 'Happy hours',
    lastText: 'You on your way?',
    where: 'San Salvario',
    place: 'http://media-cdn.tripadvisor.com/media/photo-s/02/6c/f4/ac/kings-club.jpg',
    coords: [
        45.0567,
        7.6800
    ]
  }, {
    id: 1,
    name: 'AperiGiraudo',
    lastText: 'Hey, it\'s me',
    where: 'Quadrilatero',
    place: 'http://cdn.utrechtyourway.nl/sites/default/files/imagecache/tut_location_type_header/ckfinder/images/Club%20Lux_0.jpg',
    coords: [
        45.0398,
        7.6601
    ]
  }, {
    id: 2,
    name: 'Speed date',
    lastText: 'Did you get the ice cream?',
    where: 'Piazza Vittorio',
    place: 'http://www.primacoustic.com/pics/broadway/night-club.jpg',
    coords: [
        45.0769,
        7.6602
    ]
  }, {
    id: 3,
    name: 'Concerto di Adam Bradleyson',
    lastText: 'I should buy a boat',
    where: 'Murazzi',
    place: 'http://thisisboise.com/wp-content/uploads/2013/08/Bar-and-Club_Guide.png',
    coords: [
        45.0557,
        7.6395
    ]
  }, {
    id: 4,
    name: 'Abbracci al Mazzaretto',
    lastText: 'Ma c-c-c-come fai a non abbracciarmi? Sinceramente.',
    where: 'k-house',
    place: 'http://www.haisentito.it/img/orsacchiotto.jpg',
    coords: [
        45.0599,
        7.6604
    ]
  }];

  return {
    getIcon: function() {
      return eventIcon;
    },
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
