import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export default class BookService {
  public API = 'http://localhost:55319/api';
  public BOOK_ENDPOINT = `${this.API}/books`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.BOOK_ENDPOINT)
      .pipe(
        tap(_ => this.log('fetched books')),
        catchError(this.handleError<Array<Book>>('getAll', []))
      );
      ;
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<Book> {
    const url = `${this.BOOK_ENDPOINT}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  /** POST: add a new book to the server */
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.BOOK_ENDPOINT, book, this.httpOptions)
      .pipe(
      tap((newBook: Book) => this.log(`added book w/ id=${newBook.Id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  } 

  /** PUT: update the book on the server */
  updateBook(book: Book): Observable<any> {
    const url = `${this.BOOK_ENDPOINT}/${book.Id}`;
    return this.http.put(url, book, this.httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.Id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  /** DELETE: delete the book from the server */
  deleteBook(id): Observable<Book> { 
    const url = `${this.BOOK_ENDPOINT}/${id}`;

    return this.http.delete<Book>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted book id=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
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
    //this.messageService.add(`BookService: ${message}`);
    console.log(`BookService: ${message}`); 
  }
}
