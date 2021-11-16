'use strict'
/**
 * Basemap for Leaflet Application
 * @type Leaflet Map
 */
console.log("geladen");
 var map = L.map('mapID').setView([51.9574469,7.5719975], 13);//7.5719975,51.9574469  51.957, -0.09

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
    

/**
 * Layer for later addition of markers
 * @type Leaflet Layer
 */
    let markerLayer = new L.layerGroup().addTo(mymap);

    // call getDatafromDB() to load existing pois at page load
    // getDatafromDB();
    // 
