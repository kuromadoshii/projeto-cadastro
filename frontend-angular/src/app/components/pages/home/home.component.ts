import { Component, Input, OnInit } from '@angular/core';

import { TeamService } from 'src/app/services/team/team.service';

import { Team } from 'src/app/Team';

import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allTeams: Team[] = [];
  teams: Team[] = [];
  baseApiUrl = environment.baseApiUrl;

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allTeams = items.data;
      this.teams = items.data;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.teams = this.allTeams.filter((team) =>
      team.title.toLowerCase().includes(value)
    );
  }
}
