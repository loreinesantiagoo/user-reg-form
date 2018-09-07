import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  svcResponse: any;


  getUser(user): Observable<any> {
    console.log('sevrice received');
    return this.http
    .post(`${environment.api_url}regUser`, user)
    .pipe(
      map(response => {
        this.svcResponse = response;
        return response;
      }),
      catchError(this.handleError('getUser', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };

}}
