import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Player } from 'src/app/Player';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/teams`;

  constructor(private http: HttpClient) {}

  createPlayer(data: Player): Observable<Response<Player>> {
    const url = `${this.apiUrl}/${data.teamId}/players`;
    return this.http.post<Response<Player>>(url, data);
  }
}
