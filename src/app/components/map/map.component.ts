import { Component, OnInit } from '@angular/core';

import L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.css'
  ]
})

export class MapComponent implements OnInit {
  map: L.map;
  zoom = 8;

  currentLocation: Location;

  constructor() { }

  ngOnInit() {
    this.map = L.map('map').setView([33, -88], this.zoom);
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "",
      }
    ).addTo(this.map);
  }
}
