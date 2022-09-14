import { Component } from '@angular/core';

export interface Address {
  city: string;
  street: string;
  house: number;
}

@Component({
  selector: 'ins-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.scss'],
})
export class InputCompComponent {
  name = 'Max';
  sureName = 'Ivanov';
  address: Address = {
    city: 'Kiev',
    street: 'Street',
    house: 22,
  };
}
