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
 map.setView(SAMS, 13);

 // Leaflet providers base map URL
 //  var basemap_source = 'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}{r}.png?apikey=ef45178e209e461983726086cb45354d'
 var basemap_source = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
 // Leaflet providers attributes
 //  var basemap_options = {
 //    attribution: '<a href="https://leafletjs.com/">Leaflet</a> | Maps &copy; <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
 //    subdomains: 'abcd',
 //    maxZoom: 18,
 //  };
 var basemap_options = {
   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>contributors',
   subdomains: 'abcd',
   maxZoom: 20,
 };


 // Removes the extra "Leaflet" attribution
 map.attributionControl.setPrefix('');

 // request some basemap tiles and add to the map
 var tiles = L.tileLayer(basemap_source, basemap_options).addTo(map);

 //  L.marker([39.3480884, -94.9163298]).addTo(map)
 //    .bindPopup(
 //      '<center><b>US Army Command and General Staff College<br>School of Advanced Military Studies</b><br>Fort Leavenworth, KS</center>')


 //  map.addLayer(layer);

 //  var school = L.icon({
 //    iconUrl: 'images/SAMS-crest.jpg',
 //    iconSize: [30, 60], // size of the icon
 //    iconAnchor: [10, 40], // point of the icon which will correspond to marker's location
 //    popupAnchor: [5, -50] // point from which the popup should open relative to the iconAnchor
 //  });

 const places = [{
     name: 'SAMS',
     properties: {
       description: 'School of Advanced Military Studies',
       coordinates: [39.348127, -94.91595],
       url: ['https://en.wikipedia.org/wiki/School_of_Advanced_Military_Studies', 'https://usacac.army.mil/organizations/cace/cgsc/sams'],
       icon: 'images/SAMS-crest.png'
     }
   },
   {
     name: "CGSC",
     properties: {
       description: "Command and General Staff College (CGSC)",
       coordinates: [39.34427, -94.91590],
       url: ['https://en.wikipedia.org/wiki/United_States_Army_Command_and_General_Staff_College', 'https://usacac.army.mil/organizations/cace/cgsc/cgss'],
       icon: 'images/Fort_Leavenworth_Crest.png'
     }
   },
   {
     name: "CARL",
     properties: {
       description: "Ike Skelton Combined Arms Research Library (CARL)",
       coordinates: [39.34638, -94.915992],
       url: ['https://en.wikipedia.org/wiki/Combined_Arms_Research_Library', 'https://usacac.army.mil/organizations/cace/carl'],
       icon: 'images/books.png'
     }
   }
 ];

 const bounds = L.latLngBounds();

 for (var i = 0; i < places.length; i++) {
   console.log(places[i].name)
   let props = places[i].properties;
   console.log(props); // Object { ... }
   console.log(props.description); // School of Adv ...
   console.log(props.url); // https://en.wikipedia.org/wiki/School_of_Advanced_Military_Studies
   // assign a string, wrapping the name of the place within two HTML bold tags
   const a = props.url
   let url
   const first = a.indexOf("//") + 2;
   if (a.indexOf(".com/") > 0 || a.indexOf(".org/") > 0) {
     const last = () => {
       return (a.indexOf(".com/") > 0 ? a.indexOf(".com/") : a.indexOf(".org/")) + 4;
     }
     url = a.slice(first, last())
   } else {
     url = a.slice(first, a.indexOf(".mil/") + 4)
   }
   var popup = //`<h3>${places[i].name}</h3>
             `<p><b>${props.description}</b></p>
             <p><b>website</b>: <a href='${props.url}'>${url}</a></p>`

   var icon = L.icon({
     iconUrl: props.icon,
     iconSize: [40],
     popupAnchor: [0, -22],
     className: "icon"
   })
   var marker = L.marker(places[i].properties.coordinates, {
       icon: icon
     })
     .addTo(map)
     .bindPopup(popup);
   marker.on("click", function () {
     this.openPopup();
   });
  //  marker.on("click", function () {
  //    this.closePopup();
  //  });

   //  Extend the bounds as features are added
   bounds.extend(places[i].properties.coordinates)
 }

 // Fit map to the extent of hotspots
 map.fitBounds(bounds);


 // Adding to range circle to the map on mouse click


 var radiusCentre = L.circle([0, 0], 1, {
   fillOpacity: .1,
   fillColor: 'red',
   color: 'red',
   opacity: .4,
   stroke: true,
   weight: 2,
   interactive: false // This allows users to click through the circle
 })
 var radiusCircle = L.circle([0, 0], 250, {
   fillColor: 'white',
   fillOpacity: 0.09,
   color: 'black',
   opacity: .1,
   stroke: false,
   weight: 5,
   interactive: false // This allows users to click through the circle
 })
 var radiusBigCircle = L.circle([0, 0], 500, {
   fillColor: 'white',
   fillOpacity: 0.07,
   color: 'white',
   opacity: .1,
   stroke: false,
   weight: 5,
   interactive: false // This allows users to click through the circle
 })
 map.on('click', function (e) {
   // center circle location on current click point
   radiusCentre.setLatLng(e.latlng)
     .addTo(map);
   radiusCircle.setLatLng(e.latlng)
     .addTo(map);
   radiusBigCircle.setLatLng(e.latlng)
     .addTo(map);
 });