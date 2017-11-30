import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { KJUR } from 'jsrsasign';

import { environment } from '../../environments/environment';

import { Game } from '../_models/game';
import { User } from '../_models/user';
import { Comment } from '../_models/comment';

const headers =  new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class GameService {

  private apiUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  /** POST: create a new game */
  makeGame (username: string, date_of_game: string, description: string, minimum_rank: number, location_id: number, pic?: string): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/new-location`;
    const body = pic ? {
      picture_url: pic,
      description: description,
      creator_username: username,
      date_of_game: date_of_game,
      minimum_rank: minimum_rank,
      locationID: location_id
    } :
    {
      description: description,
      creator_username: username,
      date_of_game: date_of_game,
      minimum_rank: minimum_rank,
      locationID: location_id
    };
    return this.http.post<Response>(url,
      body,
      {observe: 'response'}).pipe(
      tap(res => console.log(`added game w/ description=${description}`))
    );
  }

  /** POST: rsvp to the game */
  rsvp (username: string, game_id: number): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/new-location`;
    return this.http.post<Response>(url,
      {
        GameID : game_id,
        username : username
      },
      {observe: 'response'}).pipe(
      tap(res => console.log(`added rsvp to game w/ if=${game_id}`))
    );
  }

  /** DELETE: delete rsvp to the game */
  deleteRSVP (username: string, game_id: number): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/new-location`;
    return this.http.delete<any>(url).pipe(
      tap(res => console.log(`deleted rsvp to game w/ if=${game_id}`))
    );
  }

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

  /** GET: return array of all rsvps a game has */
  getGameRSVPs (gameid: number): Observable<User[]> {
    const url = `${this.apiUrl}/rsvp/game/${gameid}`;
    return this.http.get<User[]>(url).pipe(
      tap(res => console.log(`found user rsvp'd to this game`))
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
