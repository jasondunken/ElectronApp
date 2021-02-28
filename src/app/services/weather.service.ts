import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = 'https://api.darksky.net/forecast/0ca4576ea07845b4156a8a7ec79dd1c6/';
  url: string;

  constructor(private http: HttpClient) { }

  getForecast(lat: number, lon: number): Observable<any> {
    this.url = this.apiUrl + lon + ',' + lat;
    return this.http.get<any>(this.url)
      .pipe(
        tap(forecast => {
          this.log('Forecast received');
        }),
        catchError(err => {
          console.log(err.message);
          return throwError(err);
        })
      )
  }

  private log(message: string): void {
    console.log(`WeatherSvc: ${message}`);
  }
}
