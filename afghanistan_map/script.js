// Map layer text [find better way to point to html markup]
var intro = "<p>Afghanistan is rich in natural resources boasting over 400 different possibilities for extraction (both explored and unexplored). Yet, since the 1950’s only 20% of these minerals have been systematically explored. Three that have been and have the highest economic potential are copper, oil, and gas. Afghanistan has the second largest copper reserves in the world at 45 million tons valued at $43 billion (US) - this being it’s first major mining investment. </p>    <p>Mineral extraction plays a strong role in Afghanistan’s National Development Strategy and its goals to improve security, reduce poverty, and strengthen governance. Mining is set to be an alternative source of employment in some poppy regions. As of 2012, Afghanistan produces 64% of the world’s opium on roughly 154,000 hectares of land, with 95% of the cultivation in the most insecure provinces. Seventy-eight percent of Afghanistan’s labor force comes from agriculture, including opium cultivation, while only 5.7 % comes from industry. </p>    <p>In Afghanistan’s largely employed agricultural sector, 79% of opium cultivating villages receive agricultural assistance as opposed to only 69% of non-opium cultivating villages. Discrepancies also exist in income from agriculture. Farmer household net annual income per hectare from non-opium cultivation is roughly $3,300 (US) while net annual income per hectare from opium cultivation is roughly $5,200 (US).</p>";

var conflict = "<p>The 2008-2013 Afghanistan National Development Strategy states security as the first development priority of 50% of provinces in the country. Security represents the largest collective concern, particularly in the southern and western regions containing high opium cultivation such as Farah, Uruzgan, Kandahar, and Hilmand.</p>    <p>As of 2012, Afghanistan produces 64% of the world’s opium on roughly 154,000 hectares of land, with 95% of the cultivation in the most insecure provinces. Seventy-eight percent of Afghanistan’s labor force comes from agriculture, including opium cultivation, while only 5.7 % comes from industry. The map in this section explores recent areas of conflict from 2009/2010 that threaten security and major development priorities, which are given by province. This link to the <a href='http://infographiclist.files.wordpress.com/2012/10/afghanistan-moving-forward-to-the-future_506e891412771.jpg' target='_blank'>infographic from the Asian Development Bank</a> shows what activities security strains can potentially impact.</p>";

var extractives = "<p>Though over 400 occurrences of extractable minerals exist in Afghanistan, from 2008 to 2013 copper, oil, and gas have received major mostly foreign investments. Afghanistan’s copper reserves are valued at $3 billion (US) and there exists over 120 Billion cubic meters of exploitable oil and gas. Along with improved security, growth in the private extractive sector is a key avenue toward improvements in employment and poverty reduction. Investments in infrastructure are planned from Aynak copper extraction in Logar province by the Chinese Metallurgical Group.</p>    <p>Video: <a href='http://www.worldbank.org/en/news/video/2012/07/02/afghanistan-resource-corridor-video' target='_blank'>Afghanistan Resource Corridor</a></p>    <p>News: <a href='http://www.nytimes.com/2009/12/30/world/asia/30mine.html?pagewanted=all;' target='_blank'>China Mining Investments</a></p>";

var development = "<p>In Afghanistan, between 2008 and 2013, Afghanistan’s national emphasis is placed on improving vocational education through private sector investment. As copper extraction is the first major investment in the country, revenues from these resources will be the first toward private sector-educational development.</p>    <p>In 2008, although over 6 million school aged children attended school nearly half of young people did not out of Afghanistan’s 12 million under the age of 15. A number of reasons exist for school age children not to attend school including inadequate sanitation, security, and economic concerns.</p>    <p>This map explores a few of the current challenges the private sector and national government may face while implementing educational improvements. It looks at the causes preventing youth from attending school and its alignment with development priorities to help identify potential opportunities for investment in education.</p>    <p>News: <a href='http://www.guardian.co.uk/global-development-professionals-network/2013/jun/21/funding-education-in-afghanistan' target='_blank'>Funding Education in Afghanistan</a></p>";


// Build map objects, accessed via the layer event's .innerHTML
// change so a propper key is set w/ html5 data attribute?
baseLayer = {
	latlon:	[34, 64],
	zoom: 5,
	id: 'helsinki.afghanistan_primary_resources',
	text: intro
}

mapLayers = {
	Development:{
		latlon:	[34, 64],
		zoom: 7,
		id: 'helsinki.afghanistan_dev',
		text: development
	},
	Extractives:{
		latlon:	[33, 65],
		zoom: 8,
		id: 'helsinki.afghanistan_aoi',
		text: extractives
	},
	Fragility:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.afghanistan_acled',
		text: conflict
	}
}


// Initialize Map
var map = L.map('map', {
	minZoom: 5,
	maxZoom: 10,
	maxBounds: [[22,49.5],	//[[min-y, min-x],
				[46.5,83.5]], 	//[max-y, max-x]]
				//Note: w/ such restrictive bounds (coupled w/ large monitors), map may not be able to be viewed at min/default zoom.  This would only be an issue if some layers have unique views at high level zooms that are now unreachable.  
	zoomControl: false,
	attributionControl: false
})
		.setView(baseLayer["latlon"], baseLayer["zoom"]);
		
map.addLayer(L.mapbox.tileLayer('helsinki.afghanistan_primary_resources'));


// Add Intro Text
intro = baseLayer["text"];
document.getElementById('text').innerHTML = intro;


// Add Legend
map.addControl(L.mapbox.legendControl())


// Initialize an empty Layer Group
group = L.layerGroup().addTo(map);


// Layer Switcher
var layers = document.getElementById('map-ui').getElementsByTagName('a');

for (var i = 0; i < layers.length; i++) {
	layers[i].onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        //remove all layers in group
        group.clearLayers();
        activeLayers = document.getElementsByClassName('active')
        for (var i = 0; i < activeLayers.length; i++){
        	activeLayers[i].className = "";
        }
		
		//add new layer to group
		group.addLayer(L.mapbox.tileLayer(this.id));
		var gridLayer = L.mapbox.gridLayer(this.id);
		group.addLayer(gridLayer);
		map.addControl(L.mapbox.gridControl(gridLayer));
		this.className = 'active';

		//change content in #text element
		layerText = mapLayers[this.innerHTML]["text"];
		document.getElementById('text').innerHTML = layerText;
		
		//set view
		layerLatLon = mapLayers[this.innerHTML]["latlon"];
		layerZoom = mapLayers[this.innerHTML]["zoom"];
		map.setView(layerLatLon, layerZoom);
	}
}


// Refresh Map
var refresher = document.getElementById("refresher")

refresher.onclick = function() {

	//remove all layers
	group.clearLayers();
	activeLayers = document.getElementsByClassName('active')
	for (var i = 0; i < activeLayers.length; i++){
		activeLayers[i].className = "";
	}
		
	//change text to intro text
	document.getElementById('text').innerHTML = intro;
	
	//reset view
	map.setView(baseLayer["latlon"], baseLayer["zoom"]);
}


