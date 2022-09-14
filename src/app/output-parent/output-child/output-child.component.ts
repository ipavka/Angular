import { Component, EventEmitter, Output } from '@angular/core';

export interface Grade {
  english: number;
  math: number;
  physics: number;
}

@Component({
  selector: 'ins-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss'],
})
export class OutputChildComponent {
  @Output() sendGradeEvent = new EventEmitter<Grade>();
  @Output() sendInputGradeEvent = new EventEmitter<string>();

  grade: Grade = {
    english: 4,
    math: 5,
    physics: 3,
  };

  inputGrade = '';

  sendHandler() {
    this.sendGradeEvent.emit(this.grade);
  }

  sendInputGrade() {
    this.sendInputGradeEvent.emit(this.inputGrade);
  }
}
