// Afghanistan v1.0


// Map layer text -- how to access local html docs via ajax?
var intro = "<p>Afghanistan is rich in natural resources boasting over 400 different possibilities for extraction (both explored and unexplored). Yet, since the 1950’s only 20% of these minerals have been systematically explored. Three that have been and have the highest economic potential are copper, oil, and gas. <a class='navigate' data-location='33.5,64.5,7'>Afghanistan</a> has the second largest copper reserves in the world at 45 million tons valued at $43 billion (US) - this being it’s first major mining investment. </p>";

var conflict = "<p>The map in this section explores recent areas of conflict from 2009/2010 that threaten security and major development priorities, which are given by province. <a class='navigate' data-location='33.5,64.5,7'>Afghanistan</a> This link to the <a href='http://infographiclist.files.wordpress.com/2012/10/afghanistan-moving-forward-to-the-future_506e891412771.jpg' target='_blank'>infographic from the Asian Development Bank</a> shows what activities security strains can potentially impact.</p> <p>As of 2012, Afghanistan produces 64% of the world’s opium on roughly 154,000 hectares of land, with 95% of the cultivation in the most insecure provinces. Seventy-eight percent of Afghanistan’s labor force comes from agriculture, including opium cultivation, while only 5.7 % comes from industry. </p>";

var extractives = "<p>Though over 400 occurrences of extractable minerals exist in Afghanistan, from 2008 to 2013 copper, oil, and gas have received major mostly foreign investments. Afghanistan copper reserves are valued at $1 to $3 billion (US) and there exists over 120 Billion cubic meters of exploitable oil and gas.</p>    <p>Video: <a href='http://www.worldbank.org/en/news/video/2012/07/02/afghanistan-resource-corridor-video' target='_blank'>Afghanistan Resource Corridor</a></p>    <p>News: <a href='http://www.nytimes.com/2009/12/30/world/asia/30mine.html?pagewanted=all;' target='_blank'>China Mining Investments</a></p>";

var development = "<p>In 2008, although over 6 million school aged children attended school nearly half of young people did not out of Afghanistan’s 12 million under the age of 15. Reasons include inadequate sanitation, security, and economic concerns.</p>    <p>This map explores some challenges faced by the private sector and national government may face while implementing educational improvements. It looks at the causes preventing youth from attending school and its alignment with development priorities to help identify potential opportunities for investment in education.</p>    <p>News: <a href='http://www.guardian.co.uk/global-development-professionals-network/2013/jun/21/funding-education-in-afghanistan' target='_blank'>Funding Education in Afghanistan</a></p>";





// Build base layer, where id:[['map_id',z-index],...]
// Set background layers w/ low z-index and label layers w/ high z-index
baseLayer = {
	latlon:	[34, 64],
	zoom: 6,
	id: [
		['helsinki.afghanistan_primary_resources',-1000],
		['helsinki.afghanistan_labels',1000]
		],
	text: intro
}





//Grid Layer for tooltips
var priorityGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_development_priorities')
var ruralpopulationGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_popandruralpop')
var educationGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_development')
var femalelitGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_dev_popandlit')
var povertyGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_dev_popandpoverty')
var underemploymentGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_dev_popandunderempl')
var hymapGridLayer = L.mapbox.gridLayer ('helsinki.afghanistan_hyperspectal_a')
var copperGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_copper')
var ongGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_significant_minerals')
var ndiGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan_fragility_1_incidents')
var opiumGridLayer = L.mapbox.gridLayer ('helsinki.Afghanistan')

// Build map objects, accessed via each button's html id attribute.  
mapLayers = {
	priorities:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_development_priorities',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_development_priorities'),
		gridLayer: priorityGridLayer,
		gridControl: L.mapbox.gridControl(priorityGridLayer), 
		text: development,
		legend: document.getElementById('devPrioritiesLegend').innerHTML
	},
	
	ruralpopulation:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_popandruralpop',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_popandruralpop'),
		gridLayer: ruralpopulationGridLayer,
		gridControl: L.mapbox.gridControl(ruralpopulationGridLayer), 
		text: development,
		legend: document.getElementById('devPrioritiesLegend').innerHTML
	},
	
	education:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_development',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_development'),
		gridLayer: educationGridLayer,
		gridControl: L.mapbox.gridControl(educationGridLayer), 
		text: development,
		legend: document.getElementById('educationLegend').innerHTML
	},
	
	femalelit:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_dev_popandlit',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_dev_popandlit'),
		gridLayer: femalelitGridLayer,
		gridControl: L.mapbox.gridControl(femalelitGridLayer), 
		text: development,
		legend: document.getElementById('educationLegend').innerHTML
	},
	
	poverty:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_dev_popandpoverty',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_dev_popandpoverty'),
		gridLayer: povertyGridLayer,
		gridControl: L.mapbox.gridControl(povertyGridLayer), 
		text: development,
		legend: document.getElementById('povertyLegend').innerHTML
	},
	
	underemployment:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_dev_popandunderempl',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_dev_popandunderempl'),
		gridLayer: underemploymentGridLayer,
		gridControl: L.mapbox.gridControl(underemploymentGridLayer),
		text: development,
		legend: document.getElementById('povertyLegend').innerHTML
	},
	hymap:{
		latlon:	[34, 64],
		zoom: 7,
		id: 'helsinki.afghanistan_hyperspectal_a',
		tileLayer: L.mapbox.tileLayer ('helsinki.afghanistan_hyperspectal_a'),
		gridLayer: hymapGridLayer,
		gridControl: L.mapbox.gridControl(hymapGridLayer),
		text: extractives,
		legend: document.getElementById('hyMapLegend').innerHTML
	},
	copper:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_copper',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_copper'),
		gridLayer: copperGridLayer,
		gridControl: L.mapbox.gridControl(copperGridLayer),
		text: extractives,
		legend: document.getElementById('ongLegend').innerHTML
	},
	ong:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_significant_minerals',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_significant_minerals'),
		gridLayer: ongGridLayer,
		gridControl: L.mapbox.gridControl(ongGridLayer),
		text: extractives,
		legend: document.getElementById('ongLegend').innerHTML
	},
	ndi:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan_fragility_1_incidents',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan_fragility_1_incidents'),
		gridLayer: ndiGridLayer,
		gridControl: L.mapbox.gridControl(ndiGridLayer),
		text: conflict,
		legend: document.getElementById('opiumLegend').innerHTML
	},
	opium:{
		latlon:	[34, 64],
		zoom: 6,
		id: 'helsinki.Afghanistan',
		tileLayer: L.mapbox.tileLayer ('helsinki.Afghanistan'),
		gridLayer: opiumGridLayer,
		gridControl: L.mapbox.gridControl(opiumGridLayer),
		text: conflict,
		legend: document.getElementById('opiumLegend').innerHTML
	}
}





// Initialize Map
var map = L.map('map', {
	minZoom: 6,
	maxZoom: 10,
	//maxBounds: [[22,49.5],	//[[min-y, min-x],
	//			[46.5,83.5]], 	//[max-y, max-x]]
	zoomControl: false,
	attributionControl: false
})
	.setView(baseLayer["latlon"], baseLayer["zoom"]);


// Build Base Layer
for(i = 0; i < baseLayer["id"].length; i++){
	map.addLayer(L.mapbox.tileLayer(baseLayer["id"][i][0], {zIndex: baseLayer["id"][i][1]} ));
}


// Add Intro Text, Zoom Control, Initialize an empty Layer Group, and hide all dropdowns 
$('#text').html(baseLayer["text"]);

new L.Control.Zoom({ position: 'topleft' }).addTo(map);

group = L.layerGroup().addTo(map);

$('.dropdown-menu').hide()





// Layer Switcher
$('.switcher').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    // hide all existing radiomenus
    $('.radiomenu').hide();

    //remove all non-base layers and legends
    group.clearLayers();
    $('.active2').removeClass('active2');
    $('.map-legends').remove();

    //add new layer to group
    group.addLayer(mapLayers[this.id]["tileLayer"]);
    group.addLayer(mapLayers[this.id]["gridLayer"]);
    map.addControl(mapLayers[this.id]["gridControl"]);
    $(this).addClass('active2');
    
    // add legend
    var legendHtml = mapLayers[this.id]["legend"];
    var mapLegend = L.mapbox.legendControl({
//    var mapLegend = L.control({
        position:'bottomright'
    })
        .addLegend(legendHtml)
    map.addControl(mapLegend);

    //change content in #text 
    $('#text').html(mapLayers[this.id]["text"])

    //set view
    var layerLatLon = mapLayers[this.id]["latlon"];
    var layerZoom = mapLayers[this.id]["zoom"];
    map.setView(layerLatLon, layerZoom);
});





// Dropdown
// The .dropdown class applies to all buttons that cause a dropdown menu to appear.  Those menus are referred to as, and styled by, .dropdown-menu
// function will have the first layer appear by default
$('.dropdown').click(function() {

    // hide all existing dropdowns
    $('.dropdown-menu').hide();
    $('.radiomenu').hide();
    
    //remove all non-base layers and legends
    group.clearLayers();
    $('.active1').removeClass('active1');
    $('.active2').removeClass('active2');
    $('.map-legends').remove();
    
    // show hidden dropdown menu
    $('#' + this.id + '-dropdown').show();
    $(this).addClass('active1');
    
    // display first layer of dropdown menu, change content in #text, and add legend
    var firstChild = $('#' + this.id + '-dropdown').children(':first');
    var firstChildId = firstChild.attr('id');
    firstChild.addClass('active2');

    group.addLayer(mapLayers[firstChildId]["tileLayer"]);
    group.addLayer(mapLayers[firstChildId]["gridLayer"]);
    map.addControl(mapLayers[firstChildId]["gridControl"]);

    var legendHtml = mapLayers[firstChildId]["legend"];
    var mapLegend = L.mapbox.legendControl({
        position:'bottomright'
    })
        .addLegend(legendHtml)
    map.addControl(mapLegend);
    
    // set map view
    var layerLatLon = mapLayers[firstChildId]["latlon"];
    var layerZoom = mapLayers[firstChildId]["zoom"];
    map.setView(layerLatLon, layerZoom);
    
    // change #text content and move down
    $('#text').css('top','140px');
    $('#text').html(mapLayers[firstChild.attr('id')]['text']);
});





// Layer Switcher First Row[not in dropdown]
// Layer Switchers that are not in a dropdown [i.e. are in the first row] also need to be able to hide dropdowns that are shown.  Should be possible to combine this with the regular layer switcher somehow, yes?
$('.switcherFirstRow').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    // remove existing radiomenus
    $('.radiomenu').hide();

    //remove all non-base layers and legends
    group.clearLayers();
    $('.active1').removeClass('active1');
    $('.active2').removeClass('active2');
    $('.map-legends').remove();
    
    // remove legends
    $('.map-legends').remove();

    //add new layer to group
    group.addLayer(mapLayers[this.id]["tileLayer"]);
    group.addLayer(mapLayers[this.id]["gridLayer"]);
    map.addControl(mapLayers[this.id]["gridControl"]);
    $(this).addClass('active1');
    
    // add legend
    var legendHtml = mapLayers[this.id]["legend"];
    var mapLegend = L.mapbox.legendControl({
        position:'bottomright'
    })
        .addLegend(legendHtml)
    map.addControl(mapLegend);

    //change content in #text 
    $('#text').html(mapLayers[this.id]["text"])

    //set view
    var layerLatLon = mapLayers[this.id]["latlon"];
    var layerZoom = mapLayers[this.id]["zoom"];
    map.setView(layerLatLon, layerZoom);
    
    // hide all existing dropdowns
    $('.dropdown-menu').hide();
    
    $('#text').css('top','100px');

});





// Refresh Map
$('.refresher').click(function(e) {

    // remove radiomenus
    $('.radiomenu').hide();

    //remove all non-base layers and legends
    group.clearLayers();
    $('.active1').removeClass('active1');
    $('.active2').removeClass('active2');
    $('.map-legends').remove();
    
    //remove all dropdowns and move #text up
    $('.dropdown-menu').hide();
    $('#text').css('top','100px');
    
    //change text to intro text
    $('#text').html(baseLayer['text']);

    //reset view
    map.setView(baseLayer["latlon"], baseLayer["zoom"]);
    });





//  Navigation Buttons - note use of event delegation; as .navigate buttons are added/removed w/ changes to #text
$('#text').on('click', '.navigate', function(e) {
	var location = this.getAttribute('data-location').split(',');
	//why doesn't this work?
	//var location = this.data('location').split(',');
	var latLon = [location[0],location[1]];
	var zoom = location[2];
	if (latLon && zoom){
		//console.log(latLon);
		map.setView(latLon, zoom);
	}
});




	
// Radio Switcher Button in Button Layer
$('.radioswitcher').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    // remove existing radiomenus
    $('.radiomenu').hide();

    //remove all non-base layers and legends
    group.clearLayers();
    $('.active2').removeClass('active2');
    $('.map-legends').remove();

    // show hidden radio-button menu
    $('#' + this.id + '-radiomenu').show();
    $(this).addClass('active2');
    $('.radioactive').removeClass('radioactive');

    // display first layer of dropdown menu, change content in #text, and add legend
    var firstChild = $('#' + this.id + '-radios').children(':first');
    var firstChildId = firstChild.attr('id');
    firstChild.addClass('radioactive');

    group.addLayer(mapLayers[firstChildId]["tileLayer"]);
    group.addLayer(mapLayers[firstChildId]["gridLayer"]);
    map.addControl(mapLayers[firstChildId]["gridControl"]);

    var legendHtml = mapLayers[firstChildId]["legend"];
    var mapLegend = L.mapbox.legendControl({
        position:'bottomright'
    })
        .addLegend(legendHtml)
    map.addControl(mapLegend);
    
    // set map view
    var layerLatLon = mapLayers[firstChildId]["latlon"];
    var layerZoom = mapLayers[firstChildId]["zoom"];
    map.setView(layerLatLon, layerZoom);
});



// Dropdown AND RADIO
// The .dropdown class applies to all buttons that cause a dropdown menu to appear.  Those menus are referred to as, and styled by, .dropdown-menu
// function will have the first layer appear by default
$('.dropdownAndRadio').click(function() {

    // hide all existing dropdowns
    $('.dropdown-menu').hide();
    $('.radiomenu').hide();
    
    //remove all non-base layers and legends
    group.clearLayers();
    $('.active1').removeClass('active1');
    $('.active2').removeClass('active2');
    $('.map-legends').remove();
    
    // show hidden dropdown menu
    $('#' + this.id + '-dropdown').show();
    $(this).addClass('active1');
    
    // display first layer of dropdown menu, change content in #text, and add legend
    var firstChild = $('#' + this.id + '-dropdown').children(':first');
    var firstChildId = firstChild.attr('id');
    firstChild.addClass('active2');


    // show hidden radio-button menu
    $('#' + firstChildId + '-radiomenu').show();
//    $(this).addClass('active2');
    $('.radioactive').removeClass('radioactive');


    // display first layer of dropdown menu, change content in #text, and add legend
    var firstChild2 = $('#' + firstChildId + '-radios').children(':first');
    var firstChildId2 = firstChild2.attr('id');
    firstChild2.addClass('radioactive');



    group.addLayer(mapLayers[firstChildId2]["tileLayer"]);
    group.addLayer(mapLayers[firstChildId2]["gridLayer"]);
    map.addControl(mapLayers[firstChildId2]["gridControl"]);

    var legendHtml = mapLayers[firstChildId2]["legend"];
    var mapLegend = L.mapbox.legendControl({
        position:'bottomright'
    })
        .addLegend(legendHtml)
    map.addControl(mapLegend);
    
    // set map view
    var layerLatLon = mapLayers[firstChildId2]["latlon"];
    var layerZoom = mapLayers[firstChildId2]["zoom"];
    map.setView(layerLatLon, layerZoom);
    
    // change #text content and move down
    $('#text').css('top','140px');
    $('#text').html(mapLayers[firstChild2.attr('id')]['text']);
});





// radioswitcher button
$('.radioBut').click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    //remove all non-base layers and legends
    group.clearLayers();
    $('.radioactive').removeClass('radioactive');
    $('.map-legends').remove();

    //add new layer to group
    group.addLayer(mapLayers[this.id]["tileLayer"]);
    group.addLayer(mapLayers[this.id]["gridLayer"]);
    map.addControl(mapLayers[this.id]["gridControl"]);
    $(this).addClass('radioactive');
    
    // add legend
    var legendHtml = mapLayers[this.id]["legend"];
    var mapLegend = L.mapbox.legendControl({
        position:'bottomright'
    })
        .addLegend(legendHtml)
    map.addControl(mapLegend);

    //change content in #text 
//    $('#text').html(mapLayers[this.id]["text"])

    //set view
    var layerLatLon = mapLayers[this.id]["latlon"];
    var layerZoom = mapLayers[this.id]["zoom"];
    map.setView(layerLatLon, layerZoom);
});	


// ajax test
// Error: Origin null is not allowed by Access-Control-Allow-Origin.
// How to allow an ajax get request w/ local files?
// $('.refresher').on('click', function(event) {
// 	event.preventDefault();
// 	$.ajax('ajax.html', {
// 		success: function(result) {
// 			$('#text').html(result);
// 		}
// 	});
// });


	
// Bug: tooltips are not always cleared from map when layer is switched.  Force .map-tooltip to hide on layer switcher click?


// Formatting Functions [can these work w/ tooltips?]
function IntegerFormatted(amount)
{
	amount += '';
	x = amount.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + 0.005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}



