import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

import { environment } from '../../environments/environment';

import { User } from '../_models/user';
import { Login } from '../_models/login';
import { USERS } from '../_mock/mock-users';

@Injectable()
export class RegistrationService {
  private apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, username: string, email: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/register`,
    {
      "firstName": name,
      "lastName": name,
      "username": username,
      "email": email,
      "password": password,
      "dateCreated": new Date()
    })
    .retry(1)
  }

}
