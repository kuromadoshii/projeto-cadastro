import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

import { TeamService } from 'src/app/services/team/team.service';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { PlayerService } from 'src/app/services/player/player.service';

import { ActivatedRoute } from '@angular/router';

import { Team } from 'src/app/Team';
import { Player } from 'src/app/Player';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  team?: Team;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  playerForm!: FormGroup;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.teamService.getTeam(id).subscribe((item) => {
      this.team = item.data;
    });

    this.playerForm = new FormGroup({
      player: new FormControl('', [Validators.required]),
    });
  }

  get player() {
    return this.playerForm.get('player')!;
  }

  async removeHandler(id: number) {
    if (id) {
      await this.teamService.removeTeam(id).subscribe(()=> {

      this.messagesService.add(`Time excluído com sucesso!`);

      this.router.navigate(['/']);
      })
    }
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.playerForm.invalid) {
      return;
    }

    const data: Player = this.playerForm.value;

    data.teamId = Number(this.team!.id);

    await this.playerService
      .createPlayer(data)
      .subscribe((player) => this.team!.players!.push(player.data));

    this.messagesService.add(`Jogador adicionado!`);

    this.playerForm.reset();

    formDirective.resetForm();
  }
}
