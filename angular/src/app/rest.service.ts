import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  /**
   * @description - This function is to get the data
   * @param url - url to GET the data
   */
  get(url) {
    return this.http
    .get(url)
    .pipe(
      catchError(this.handleError)
    );
  }

  /**
   * @description - This function is to post the data
   * @param url - url to POST the data
   * @param data - data
   */
  save(url, data) {
    return this.http
      .post(url, data)
      .pipe(catchError(this.handleError));
  }

  /**
   * @description - This function is to put the data
   * @param url - url to PUT the data
   * @param data - data
   */
  update(url, data) {
    return this.http
      .put(url, data)
      .pipe(catchError(this.handleError));
  }

  /**
   * @description - This function is to delete the data
   * @param url - url to DELETE the data
   * @param data - data
   */
  delete(url, data) {
    return this.http
      .delete(url, data)
      .pipe(catchError(this.handleError));
  }

  /**
   * @description - This function is used for catch and throw the error
   */
  private handleError (error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
