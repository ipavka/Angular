import { Component } from '@angular/core';

@Component({
  selector: 'ins-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent {
  title = 'pipe coMponent Scss';
  url = 'https://angular.io/api';
  date = new Date();
}
