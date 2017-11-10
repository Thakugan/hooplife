import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/retry';

import { environment } from '../../environments/environment';

import { User } from '../_models/user';
import { Login } from '../_models/login';

@Injectable()
export class AuthService {

  private apiUrl = environment.url;
  currentUser: User = new User();
  token: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login`,
    {
      "username": username,
      "password": password
    })
    .retry(1)
  }

  logout() {
    this.currentUser = new User();
    localStorage.removeItem('auth');
  }

  /** GET user by username. Will 404 if id not found */
  getUser(username: string): Observable<User> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<User>(url).pipe(
    );
  }

  getJwt() {
    if(localStorage.getItem('auth') == null) {
      return "";
    } else {
      var token: string = JSON.parse(localStorage.getItem('auth'));
      return token;
    }
  }

}
