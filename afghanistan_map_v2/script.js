var TileJSONs = [
	'http://a.tiles.mapbox.com/v3/helsinki.afghanistan_primary_resources.jsonp',
	'http://a.tiles.mapbox.com/v3/helsinki.afghanistan_dev.jsonp',
	'http://a.tiles.mapbox.com/v3/helsinki.afghanistan_aoi.jsonp',
	'http://a.tiles.mapbox.com/v3/helsinki.afghanistan_acled.jsonp',
];

$('#map').mapbox(TileJSONs, function(map, tiledata) {

    // Assign readable names to all layers
    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('development');
    map.getLayerAt(2).named('extractives');
    map.getLayerAt(3).named('fragility');

    // Don't composite base layer with other layers
    map.getLayer('base').composite(false);

    // Disable all overlay layers by default
    map.disableLayer('development');
    map.disableLayer('extractives');
    map.disableLayer('fragility');

    // Set initial latitude, longitude and zoom level
    map.setCenterZoom({
        lat: 34,
        lon: 64
    }, 6);
    // Set minimum and maximum zoom levels
    map.setZoomRange(4, 10);

    // Enable share control
    mapbox.share().map(map).add();

});
