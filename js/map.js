 /*
 
A demo of Leaflet-providers basemaps is listed here:
https://leaflet-extras.github.io/leaflet-providers/preview/


The following is map setup is different than the one shown on the Leaflet Quick Start Guide:
https://leafletjs.com/SlavaUkraini/examples/quick-start/

This one parses out the different options so that it's easier to make edits to a specific aspect of the map.

*/

 // create a Leaflet map in our division container with id of 'map'
 var map = L.map('map');

 // location shortcuts
 //  var denver = new L.LatLng(39.7256, -104.9252);
 var SAMS = new L.LatLng(39.3480884, -94.9163298) // School of Advanced Military Studies

 // set map view location and zoom level
 map.setView(SAMS, 15);

 // Leaflet providers base map URL
 var basemap_source = 'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}{r}.png?apikey=ef45178e209e461983726086cb45354d'

 // Leaflet providers attributes
 var basemap_options = {
     attribution: '<a href="https://leafletjs.com/">Leaflet</a> | Maps &copy; <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
     subdomains: 'abcd',
     maxZoom: 18,
 };

 // Removes the extra "Leaflet" attribution
 map.attributionControl.setPrefix('');

 // request some basemap tiles and add to the map
 var tiles = L.tileLayer(basemap_source, basemap_options).addTo(map);

 L.marker([39.3480884, -94.9163298]).addTo(map)
      .bindPopup(
        '<center><b>US Army Command and General Staff College<br>School of Advanced Military Studies</b><br>Fort Leavenworth, KS</center>')
      .openPopup();

    map.addLayer(layer);