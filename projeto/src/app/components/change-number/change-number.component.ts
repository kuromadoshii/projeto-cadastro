import { Component, Output, EventEmitter } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick(){
    this.changeNumber.emit();
  }
}
