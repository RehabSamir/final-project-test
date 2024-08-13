import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = `${environment.baseUrl}/Users`;

  httpHeader = {}; // Header data
  constructor(private httpclient: HttpClient) {
    this.httpHeader = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  signUp(newUser: Iuser): Observable<Iuser> {
    return this.httpclient.post<Iuser>(this.url, newUser, this.httpHeader)
  //   .pipe(
  //     retry(3),  // you can send request 3 timws only
  //     catchError((error: any) => {
  //       return throwError(() => {
  //         return new Error('Error signing up');
  //       });
  //     })
  //   );
   }
}
