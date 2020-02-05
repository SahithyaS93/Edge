import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }
  public serviceget(city) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(environment.api_url, {
      params: {
        address: city
      }, responseType: 'text', headers
    })
      .pipe(
        map(data => {
          return data;
        }),
        catchError(error => {
          return throwError(error);
        })
      )
  };
}
