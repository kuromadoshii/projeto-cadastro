import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from 'src/app/Team';
import { Response } from 'src/app/Response';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/teams`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Response<Team[]>> {
    return this.http.get<Response<Team[]>>(this.apiUrl);
  }

  getTeam(id: number): Observable<Response<Team>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Team>>(url);
  }

  createTeam(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeTeam(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateTeam(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
