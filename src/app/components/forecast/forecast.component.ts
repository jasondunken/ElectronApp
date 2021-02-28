import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from 'src/app/services/geo-location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  text: string;
  place_name: string;
  coords: { lat: number, lon: number };
  forecast;

  constructor(private geo: GeoLocationService, private weather: WeatherService) { }

  ngOnInit() {
    this.geo.geocode('Athens Ga').subscribe(res => {
      this.text = res.features[0].text;
      this.place_name = res.features[0].place_name;
      this.setCoords(res.features[0].center);
    })
  }

  setCoords(coords: { lat: number, lon: number }): void {
    this.coords = { ...coords };

    this.weather.getForecast(this.coords[0], this.coords[1]).subscribe(res => {
      this.setForecast(res);
    })
  }

  setForecast(response) {
    this.forecast = { ...response };
    this.forecast.hourly.data.forEach(hour => {
      const time = new Date(hour.time * 1000).getHours();
      hour.time = time;
    })
  }

}
