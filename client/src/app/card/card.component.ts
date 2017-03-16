import { Component, Input } from '@angular/core';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent {
  @Input() data:any;
  constructor() { }

  onLike() {
    alert(this.data.id);
  }


}
