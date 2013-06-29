  var map = mapbox.map('map');
  var layers = document.getElementById('map-ui').getElementsByTagName('a');

  // add static baselayer
  map.addLayer(mapbox.layer().id('helsinki.afghanistan_primary_resources', function() {
    map.interaction.auto(); 
  }));
  //map.interaction.auto();

  for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      map.addLayer(mapbox.layer().id(layer.id, function() {
          map.interaction.auto(); 
      }));
      if (layer.className != 'active') {
          map.getLayer(layer.id).disable();
      }
      layer.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          // If the layer that has been clicked on is not already enabled,
          // enable it and also disable any other active layers in the layerswitcher
          if (!(map.getLayer(this.id).enabled)) {
              for (var i = 0; i < layers.length; i++) {
                  if (map.getLayer(layers[i].id).enabled) {
                      map.getLayer(layers[i].id).disable();
                      layers[i].className = '';
                  }
              }
              map.getLayer(this.id).enable();
              this.className = 'active';
              map.interaction.refresh();
          }
      };
  }
  
  map.zoom(6);

  // Attribute map
  map.ui.attribution.add()
      .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');