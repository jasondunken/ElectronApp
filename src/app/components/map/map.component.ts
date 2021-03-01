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
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "",
      }
    ).addTo(this.map);
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
