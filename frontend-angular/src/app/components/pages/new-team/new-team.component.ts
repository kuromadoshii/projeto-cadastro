import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TeamService } from 'src/app/services/team/team.service';

import { Router } from '@angular/router';

import { MessagesService } from 'src/app/services/messages/messages.service';
import { Team } from 'src/app/Team';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css'],
})
export class NewTeamComponent implements OnInit {
  btnText: string = 'Compartilhar!';
  image?: File;

  constructor(
    private teamService: TeamService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.image = file;
  }

  buildForm() {}

  async createHandler(team: Team) {
    const formData = new FormData();

    formData.append('title', team.title);
    formData.append('description', team.description);

    if (team.image) {
      formData.append('image', team.image);
    }

    await this.teamService.createTeam(formData).subscribe(() => {

    this.messagesService.add(`Time adicionado com sucesso!`);

    this.router.navigate(['/']);
    })
  }
}
