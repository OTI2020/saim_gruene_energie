'use strict'
/**
 * Basemap for Leaflet Application
 * @type Leaflet Map
 */

 var map = L.map('map').setView([51.505, -0.09], 13);

 
    let mymap = L.map('mapID').setView([51.965, 7.63],13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    
console.log("in Leafletjs");
/**
 * Layer for later addition of markers
 * @type Leaflet Layer
 */
    let markerLayer = new L.layerGroup().addTo(mymap);

    // call getDatafromDB() to load existing pois at page load
    // getDatafromDB();
    // 
