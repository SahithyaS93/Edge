import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  public serviceget(city) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});  
    return this.http.get('/api/geocode/json?sensor=false', {
      params: {
        address: city
      },responseType: 'text', headers})
      .pipe(
        // eg. "map" without a dot before
        map(data => {
          return data;
        }),
        // "catchError" instead "catch"
        catchError(error => {
          return Observable.throw('Something went wrong ;)');
        })
     )
  };

  private _errorhandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Error occured");
  }
}
