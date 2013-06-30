// Set map layer text
var intro = "insert map intro";

var development = "insert map development";

var extractives = "insert map extractives";

var conflict = "insert map conflict";


// Build map objects [not incorporated into code yet; not sure if/where it will/should]
var development = {
	latlon:	[[23,50],
			 [46,83]],
	zoom: 6,
	id: 'helsinki.afghanistan_dev',
	text: development
	}
	
var extractives = {
	latlon:	[[23,50],
			 [46,83]],
	zoom: 6,
	id: 'helsinki.afghanistan_aoi',
	text: development
	}
	
var conflict = {
	latlon:	[[23,50],
			 [46,83]],
	zoom: 6,
	id: 'helsinki.afghanistan_acled',
	text: development
	}


// Initialize Map
var map = L.map('map', {
	minZoom: 5,
	maxZoom: 10,
	maxBounds: [[23,50],	//[[min-y, min-x],
				[46,83]], 	//[max-y, max-x]]
	zoomControl: false,
	attributionControl: false
})
		.setView([34, 64], 6);
		
map.addLayer(L.mapbox.tileLayer('helsinki.afghanistan_primary_resources'));

//HOW TO GET THIS TO WORK?
//$(document).ready(function(){
//	document.getElementById('text').innerHTML = intro;
//	}
	

// Initialize a Layer Group
group = L.layerGroup().addTo(map);

// Layer Switcher
var layers = document.getElementById('map-ui').getElementsByTagName('a');

for (var i = 0; i < layers.length; i++) {
	layers[i].onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        //remove all active layers
        	//doesn't work b/c can't get the layer element to remove other element's associated tileLayer objects
		for (var i = 0; i < layers.length; i++){
			if(layers[i].className == 'active'){
				group.clearLayers();
				//look at: map.reset(); map.remove()
				//map.removeLayer(L.mapbox.tileLayer(layers[i].id));
				//map.removeLayer(L.mapbox.gridLayer(layers[i].id));
				//map.removeControl(L.mapbox.gridControl(L.mapbox.gridLayer(layers[i].id)));
				
				layers[i].className = '';
			}
		}
		
		//add new layer [is there a difference bt. these two?]
		//map.addLayer(L.mapbox.tileLayer(this.id));
		//L.mapbox.tileLayer(this.id).addTo(map)
		group.addLayer(L.mapbox.tileLayer(this.id));
		this.className = 'active';
		
		//add interaction
		//var gridLayer = L.mapbox.gridLayer(this.id);
		//map.addLayer(gridLayer);
		//map.addControl(L.mapbox.gridControl(gridLayer));
		
		//change content in #text element
		document.getElementById('text').innerHTML = this.innerHTML;
	}
}


// Refresh Map
var refresher = document.getElementById("refresh")

refresher.onclick = function() {

	//remove all layers
	for (var i = 0; i < layers.length; i++){
		if(layers[i].className == 'active'){
				//same issue as above; can't retrieve the tileLayer objects that were created elsewhere in order to remove them.
			//map.removeLayer(L.mapbox.tileLayer(layers[i].id));
			//map.removeLayer(L.mapbox.gridLayer(layers[i].id));
			//map.removeControl(L.mapbox.gridControl(L.mapbox.gridLayer(layers[i].id)));
			
			layers[i].className = '';
		}
	}
	
	//change text to intro text
	document.getElementById('text').innerHTML = intro;
	
	//reset view
	map.setView([34, 64], 6);
}
