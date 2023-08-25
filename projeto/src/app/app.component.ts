import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Vini";

  userData =  {
    email: 'vini@gmail.com',
    role: 'fudido',
  };

  title = 'projeto';
}
