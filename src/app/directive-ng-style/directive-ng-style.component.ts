import { Component } from '@angular/core';

@Component({
  selector: 'ins-directive-ng-style',
  templateUrl: './directive-ng-style.component.html',
  styleUrls: ['./directive-ng-style.component.scss'],
})
export class DirectiveNgStyleComponent {
  fontSIze = '34px';
  fontColor = '#863bf6';
  fontColor1 = '#1e24b7';
  fontOpacity = '0.3';
  fontStyle = 'underline';

  mainStyle = {
    color: 'chocolate',
    margin: '10px',
    'text-decoration': 'line-through',
  };
}
