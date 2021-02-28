import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeoLocationService } from 'src/app/services/geo-location.service';

import { Location } from '../../models/location.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() updateMap = new EventEmitter<any>();

  constructor(private geo: GeoLocationService) { }

  currentLocation: Location;

  ngOnInit() {
    this.currentLocation = this.geo.getHomeLocation();
  }

  getWeather(input) {
    const place = (input as HTMLInputElement).value;
    this.geo.setLocation(place, () => {
      this.currentLocation = this.geo.getCurrentLocation();
      this.updateMap.emit(null);
    });
  }
}
