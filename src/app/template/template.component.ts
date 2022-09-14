import { Component } from '@angular/core'

@Component({
  selector: 'ins-template',
  template: `
    <h1>Template</h1>
    <p class="compNew3Title">comp-new3 works!</p>
    <hr />
  `,
  styles: [
    `
      .compNew3Title {
        color: gold;
        font-size: 30px;
        &:hover {
          color: rebeccapurple;
        }
      }
    `,
  ],
})
export class TemplateComponent {
  isLoading = 'false'
}
