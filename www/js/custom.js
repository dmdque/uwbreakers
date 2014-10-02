 google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
               
                var mapOptions = {
                  
                    zoom: 15,

                    center: new google.maps.LatLng(51.10927,17.032144), // WRO

                    styles: [
  {
    "stylers": [
      { "invert_lightness": true },
    ]
  },{
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" },
      { "color": "#a9aeb8" }
    ]
  },{
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" },
      { "lightness": -100 }
    ]
  },{
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "color": "#000000" },
      { "visibility": "simplified" },
      { "lightness": 15 }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "simplified" },
      { "lightness": -30 },
      { "saturation": -100 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      { "lightness": -25 },
      { "saturation": -95 },
      { "visibility": "on" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color" : "#000000" },
      { "weight" : 4 },
      { "saturation" : -100 }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color" : "#343434"},
      { "weight": 1 },
      { "visibility": "on" }
    ]
  }
]
                };

                var mapElement = document.getElementById('map');

                var map = new google.maps.Map(mapElement, mapOptions);
            }


