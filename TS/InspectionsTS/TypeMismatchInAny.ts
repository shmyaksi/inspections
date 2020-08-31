//inspection 'Type mismatch in 'any' type context' is ON
//TS 3.9.5

var markers: [];
this.Getlapoints(this.map.getCenter(), 500000).then(data => {
    for (var key in data) {
        Leaflet.marker(data[key].location, //{ icon: greenIcon            }
        ).addTo(this.map).bindPopup(data[key].caption);
        // markers.push(data[key].location.lat,data[key].location.lng);
        // markers.push(data[key].location);

        var lat = data[key].location.lat;
        var lng = data[key].location.lng;
        markers.push([lat, lng]);
    }
    console.log(markers);
});


