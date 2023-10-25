import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/Team';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css'],
})
export class TeamFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Team>();
  @Input() teamData: Team | null = null;
  @Input() btnText!: string;

  image?: File;

  teamForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.teamData) {
      console.log(this.teamData);
      this.teamForm = new FormGroup({
        id: new FormControl(this.teamData.id),
        title: new FormControl(this.teamData.title, [Validators.required]),
        description: new FormControl(this.teamData.description, [
          Validators.required,
        ]),
        image: new FormControl(''),
      });
    } else {
      this.teamForm = new FormGroup({
        id: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      });
    }
  }

  get title() {
    return this.teamForm.get('title')!;
  }

  get description() {
    return this.teamForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.teamForm.patchValue({ image: event.target.files[0] });
  }

  submit() {
    if (this.teamForm.invalid) {
      return;
    }

    console.log(this.teamForm.value);

    this.onSubmit.emit(this.teamForm.value);
  }
}
