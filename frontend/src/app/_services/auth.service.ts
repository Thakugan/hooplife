/* The authentication service includes registration and login routes. This also
includes jwt operations for user authentication, working in conjunction with
the authentication guard. */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { KJUR } from 'jsrsasign';

import { environment } from '../../environments/environment';

import { User } from '../_models/user';
import { Login } from '../_models/login';

const headers =  new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class AuthService {

  private apiUrl = environment.url;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /** POST: add a new user to the server */
  addUser (user: User): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/registration`;
    console.log(url);
    return this.http.post<Response>(this.apiUrl,
      {
        username: user.username,
        first_name: user.firstName,
        last_lame: user.lastName,
        email: user.email,
        password: user.password
      },
      {observe: 'response'}).pipe(
      tap(res => console.log(`added user w/ username=${user.username}`))
    );
  }

  login(login: Login): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<Response>(url,
      {
        username: login.username,
        password: login.password
      },
      {observe: 'response'}).pipe(
      tap(login => console.log(`check login`))
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
}
