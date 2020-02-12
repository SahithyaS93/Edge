import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from "rxjs";
import { catchError, publishReplay, refCount, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }
  cache_city = {};
  public serviceget(city: string): Observable<any> {
    if (this.cache_city[city]) {
      return this.cache_city[city];
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.cache_city[city] = this.http.get(environment.api_url, {
      params: {
        address: city
      }, responseType: 'text', headers
    })
      .pipe(
        publishReplay(),
        refCount(),
        take(1),
        catchError(err => {
          delete this.cache_city[city];
          return throwError(err);
        })
      )
    return this.cache_city[city];
  };
}
