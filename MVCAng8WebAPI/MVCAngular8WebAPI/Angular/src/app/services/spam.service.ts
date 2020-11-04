import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Spam } from '../shared/spam';

@Injectable({
  providedIn: 'root'
})
export default class SpamService {
  public API = 'http://localhost:55319/api';
  public SPAM_ENDPOINT = `${this.API}/spams`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Spam>> {
    return this.http.get<Array<Spam>>(this.SPAM_ENDPOINT)
      .pipe(
        tap(_ => this.log('fetched spams')),
        catchError(this.handleError<Array<Spam>>('getAll', []))
      );
    ;
  }

  /** GET spam by id. Will 404 if id not found */
  getSpam(id: number): Observable<Spam> {
    const url = `${this.SPAM_ENDPOINT}/${id}`;
    return this.http.get<Spam>(url).pipe(
      tap(_ => this.log(`fetched spam id=${id}`)),
      catchError(this.handleError<Spam>(`getSpam id=${id}`))
    );
  }

  /** POST: add a new spam to the server */
  addSpam(spam: Spam): Observable<Spam> {
    return this.http.post<Spam>(this.SPAM_ENDPOINT, spam, this.httpOptions)
      .pipe(
        tap((newSpam: Spam) => this.log(`added spam w/ id=${newSpam.Id}`)),
        catchError(this.handleError<Spam>('addSpam'))
      );
  }

  /** PUT: update the spam on the server */
  updateSpam(spam: Spam): Observable<any> {
    const url = `${this.SPAM_ENDPOINT}/${spam.Id}`;
    return this.http.put(url, spam, this.httpOptions).pipe(
      tap(_ => this.log(`updated spam id=${spam.Id}`)),
      catchError(this.handleError<any>('updateSpam'))
    );
  }

  /** DELETE: delete the spam from the server */
  deleteSpam(id): Observable<Spam> {
    const url = `${this.SPAM_ENDPOINT}/${id}`;

    return this.http.delete<Spam>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted spam id=${id}`)),
      catchError(this.handleError<Spam>('deleteSpam'))
    );
  }

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

  private log(message: string) {
    //this.messageService.add(`SpamService: ${message}`);
    console.log(`SpamService: ${message}`);
  }
}
