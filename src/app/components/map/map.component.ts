import { Component, OnInit } from '@angular/core';

import L from 'leaflet';  // leaflet handle

import { GeoLocationService } from 'src/app/services/geo-location.service';

import { Location } from '../../models/location.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.css'
  ]
})
export class MapComponent implements OnInit {
  map: L.map;
  zoom = 13;

  currentLocation: Location;

  constructor(private geo: GeoLocationService) { }

  ngOnInit() {
    this.setLocation(this.geo.getHomeLocation());
    this.map = L.map('map').setView([33, -88], this.zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(this.map);
  }

  setLocation(location: Location): void {
    this.currentLocation = location;
  }

  updateMap(event): void {
    console.log('Updating map!');
    this.setLocation(this.geo.getCurrentLocation());
    this.map.flyto([this.currentLocation.lat, this.currentLocation.lon]);
  }
}
