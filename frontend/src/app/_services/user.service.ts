import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

import { environment } from '../../environments/environment';

import { User } from '../_models/user';
import { Login } from '../_models/login';
import { USERS } from '../_mock/mock-users';

@Injectable()
export class UserService {

  private apiUrl = environment.url;
  currentUser: User = new User();

  constructor(private http: HttpClient) {
    this.authenticateHttp();
  }

  login(username: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/login`,
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

  // Authenticate an existing JWT
  authenticate(): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/authenticate`,
    { },
    {
      headers: new HttpHeaders().set('Authorization', this.getJwt()),
    })
    .retry(1)
  }

  getJwt() {
    if(localStorage.getItem('auth') == null) {
      return "";
    } else {
      var storedAuth: Login = JSON.parse(localStorage.getItem('auth'));
      return storedAuth.token;
    }
  }

  getUser() {
    if(localStorage.getItem('auth') == null) {
      return new User();
    } else {
      var storedAuth: Login = JSON.parse(localStorage.getItem('auth'));
      return storedAuth.user;
    }
  }

  authenticateHttp() {
    this.authenticate().subscribe(
      (responseBody) => {
        // If user is authenticated then populate user data
        if(responseBody['authenticated'] === true) {
          this.currentUser = this.getUser();
        } else {
          this.logout();
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to authenticate failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    )
  }
  
}
