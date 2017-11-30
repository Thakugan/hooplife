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
      tap(res => console.log(`found all games`))
    );
  }

  /** GET: return array of all games user rsvp'd to */
  getRSVPGames (username: string): Observable<Game[]> {
    const url = `${this.apiUrl}/rsvp/user/${username}`;
    return this.http.get<Game[]>(url).pipe(
      tap(res => console.log(`found games rsvp'd to`))
    );
  }

  /** GET: return specific game */
  getGame (game_id: number): Observable<Game> {
    const url = `${this.apiUrl}/game/${game_id}`;
    return this.http.get<Game>(url).pipe(
      tap(res => console.log(`found game with id=${game_id}`))
    );
  }
}
