var map;
var latlng = new google.maps.LatLng(-9.189967, -75.015152); // Coordenadas del centro de Perú
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -25
    }]
}];

var mapOptions = {
    zoom: 6, // Se reduce el zoom para mostrar más área del país
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};

map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

var geocoder_map = new google.maps.Geocoder();
var address = 'Perú'; // Nueva dirección
geocoder_map.geocode({
    'address': address
}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            icon: 'img/core-img/map.png',
            position: map.getCenter()
        });
    } else {
        alert("No se pudo obtener la ubicación para el siguiente motivo: " + status);
    }
});

var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');
