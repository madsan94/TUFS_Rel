import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Mobile } from './interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class GadgetsService {

  constructor(private http: HttpClient) { }

  getmobiles(): Observable<Mobile[]> {

    return this.http.get<any>('assets/mobile.json')
      .pipe(
        map(response => {  // NOTE: response is of type SomeType

          if (response.success) {
            return response;
          }
          else {
          }
        }),
        tap(_ => this.log('fetched mobiles')),
        catchError(this.handleError('getmobiles', []))
      );
  }

  getlaptops(): Observable<Mobile[]> {

    return this.http.get<any>('assets/laptop.json')
      .pipe(
        map(response => {  // NOTE: response is of type SomeType

          if (response.success) {
            return response;
          }
          else {
          }
        }),
        tap(_ => this.log('fetched laptops')),
        catchError(this.handleError('getlaptops', []))
      );
  }



  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //  this.messageService.add(`DoDService: ${message}`);
    console.log(`DoDService: ${message}`);
  }


}