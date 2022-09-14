import { Component, Input } from '@angular/core';
import { Address } from '../input-comp.component';

@Component({
  selector: 'ins-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss'],
})
export class InputChildComponent {
  name = 'Bob';
  @Input() sureName?: string;
  @Input() address?: Address;
}
