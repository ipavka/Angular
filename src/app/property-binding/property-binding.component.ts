import { Component } from '@angular/core';

@Component({
  selector: 'ins-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent {
  isAppLoading = true;

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false;
    }, 2000);
  }
}
