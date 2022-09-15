import { Component } from '@angular/core';

@Component({
  selector: 'ins-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.scss'],
})
export class DirectiveNgClassComponent {
  isSuccess = false;

  constructor() {
    setTimeout(() => {
      this.isSuccess = true;
    }, 3000);
  }
}
