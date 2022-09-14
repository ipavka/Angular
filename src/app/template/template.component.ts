import { Component } from '@angular/core';

@Component({
  selector: 'ins-template',
  template: `
    <div class="tempCompBlock">
      <h1>Template</h1>
    </div>
  `,
  styles: [
    `
      .tempCompBlock {
        &:hover {
          color: rebeccapurple;
        }

        & h1 {
          text-decoration: underline;
          color: #1976d2;
        }
      }
    `,
  ],
})
export class TemplateComponent {}
