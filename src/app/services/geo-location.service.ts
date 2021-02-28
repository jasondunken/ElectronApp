import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  apiToken = '?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  homeLocation: Location = {
    lat: 33.950000,
    lon: -83.383333,
    text: 'Eastern/Chicago',
    placeName: 'Athens Ga'
  };

  currentLocation: Location;

  constructor(private http: HttpClient) {
    this.currentLocation = this.homeLocation;
  }

  getHomeLocation(): Location {
    return { ...this.homeLocation };
  }

  getCurrentLocation(): Location {
    return { ...this.currentLocation };
  }

  setLocation(place: string, callback: any): void {
    this.geocode(place).subscribe(location => {
      console.log('location: ', location);
      // checks for error in response here
      if (location) {
        this.currentLocation.lat = location.features[0].center[1];
        this.currentLocation.lon = location.features[0].center[1];
        this.currentLocation.text = location.features[0].text;
        this.currentLocation.placeName = location.features[0].place_name;
        callback();
      }
    })

  }

  geocode(place: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${place}.json${this.apiToken}`)
      .pipe(
        catchError(err => {
          // non response errors here
          console.log(err.message);
          return throwError(err);
        })
      )
  }

  private log(message: string): void {
    console.log(`GeoLocationSvc: ${message}`);
  }
}
