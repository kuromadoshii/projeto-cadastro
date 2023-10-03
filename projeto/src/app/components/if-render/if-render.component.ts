import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent {
  canShow: boolean = false;
  //name = 'Vini';
  @Input () nome: String = "Vin";
  

}
