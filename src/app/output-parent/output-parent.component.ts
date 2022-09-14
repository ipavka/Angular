import { Component } from '@angular/core';
import { Grade } from './output-child/output-child.component';

@Component({
  selector: 'ins-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss'],
})
export class OutputParentComponent {
  english?: number;
  math?: number;
  physics?: number;

  gradesArr: string[] = ['math: 5'];

  getGrade(value: Grade) {
    this.english = value.english;
    this.math = value.math;
    this.physics = value.physics;
  }

  getArrGrade(grade: string) {
    this.gradesArr.push(grade);
  }
}
