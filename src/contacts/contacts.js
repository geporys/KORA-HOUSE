ymaps.ready(initMap);

function initMap() { 
    var myMap = new ymaps.Map("map", {
        center: [57.775532, 40.994028],
        zoom: 11
    });

    var myGeoObjectCircle = new ymaps.GeoObject({
        geometry: {
            type: "Circle", 
            coordinates: [57.775532, 40.994028] ,
            radius: 50
        }
    });

    var myGeoObjectPoint = new ymaps.GeoObject({
        geometry: {
            type: "Point", 
            coordinates: [57.775532, 40.994028] ,
        }
    });
    
    myMap.geoObjects.add(myGeoObjectCircle);
    myMap.geoObjects.add(myGeoObjectPoint); 
}

