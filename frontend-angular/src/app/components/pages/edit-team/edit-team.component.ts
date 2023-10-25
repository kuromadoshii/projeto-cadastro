import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Team } from 'src/app/Team';

import { TeamService } from 'src/app/services/team/team.service';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent implements OnInit {
  team!: Team;
  btnText: string = 'Editar';

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.teamService.getTeam(id).subscribe((item) => {
      this.team = item.data;
    });
  }

  async editHandler(teamData: Team) {
    const id = this.team.id;
    const name = this.team.title;
    const formData = new FormData();

    formData.append('title',teamData.title);
    formData.append('description',teamData.description);

    if (teamData.image) {
      formData.append('image', teamData.image);
    }

    await this.teamService.updateTeam(id!, formData).subscribe(()=> {

    this.messagesService.add(`Time ${name} atualizado com sucesso!`);

    this.router.navigate(['/']);
    })
  }
}
