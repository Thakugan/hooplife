import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { KJUR } from 'jsrsasign';

import { environment } from '../../environments/environment';

import { Game } from '../_models/game';

const headers =  new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class GameService {

  private apiUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  /** GET: return array of all games */
  getAllGames (): Observable<Game[]> {
    const url = `${this.apiUrl}/games`;
    return this.http.get<Game[]>(url).pipe(
      tap(res => console.log(`found games`))
    );
  }
}
