/* The authentication service includes registration and login routes. This also
includes jwt operations for user authentication, working in conjunction with
the authentication guard. */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { KJUR } from 'jsrsasign';

import { environment } from '../../environments/environment';

import { User } from '../_models/user';

const headers =  new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class ProfileService {

  private apiUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  /** GET: find a user */
  getUser (username: string): Observable<User> {
    const url = `${this.apiUrl}/profile/${username}`;
    console.log(url);
    return this.http.get<User>(url).pipe(
      tap(res => console.log(`found user w/ username=${username}`))
    );
  }

  /** TODO GET: find all comments on a user's profile */
  getUserComments (username: string): Observable<User> {
    const url = `${this.apiUrl}/profile/${username}`;
    console.log(url);
    return this.http.get<User>(url).pipe(
      tap(res => console.log(`found user w/ username=${username}`))
    );
  }

  /** TODO PUT: change  */
  updateUser (username: string): Observable<User> {
    const url = `${this.apiUrl}/profile/${username}`;
    console.log(url);
    return this.http.get<User>(url).pipe(
      tap(res => console.log(`found user w/ username=${username}`))
    );
  }

  getCurrentUser(): string {
    var currentUser = KJUR.jws.JWS.parse(localStorage.getItem('auth')).payloadObj.user;
    return currentUser;
  }
}
