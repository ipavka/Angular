import { Component } from '@angular/core';

@Component({
  selector: 'ins-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent {
  currentCustomer = 'Maria';
  users = {
    age: 20,
    name: 'Max',
  };
  avaUrl = './assets/img/avatar.png';
}
