/* The authentication service includes registration and login routes. This also
includes jwt operations for user authentication, working in conjunction with
the authentication guard. */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { KJUR } from 'jsrsasign';

import { environment } from '../../environments/environment';

import { User } from '../_models/user';
import { Login } from '../_models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  private apiUrl = environment.url;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /** POST: add a new user to the server */
  addUser (user: User): Observable<Response> {
    const url = `${this.apiUrl}/register`;
    console.log(url);
    return this.http.post<User>(this.apiUrl,
      {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      },
      httpOptions).pipe(
      tap((user: User) => console.log(`added user w/ username=${user.username}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  login(login: Login): Observable<Response> {
    const url = `${this.apiUrl}/login`;
    return this.http.get<Login>(url, login).pipe(
      tap(login => console.log(`check login`)),
      catchError(this.handleError<string>('login'))
    );
  }

  getJWT(payload) {
    var header = {alg: "HS256", typ: "JWT"};
    return KJUR.jws.JWS.sign("HS256", header, payload, {utf8: "secret"})
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
