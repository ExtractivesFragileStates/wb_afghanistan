var map = L.mapbox.map('map', 'helsinki.afghanistan_primary_resources', {
	minZoom: 5,
	maxZoom: 10,
	maxBounds: [[23,50],[46,83]], //[[min-y, min-x],[max-y, max-x]]
	zoomControl: false,
	attributionControl: false
})
	.setView([34, 64], 6);

map.legendControl.addLegend(document.getElementById('legend-content').innerHTML);

new L.Control.Zoom({ position: 'topright' }).addTo(map);
