import { Component } from '@angular/core';

interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface WeekGrade {
  id: number;
  gradeItem: number;
}
interface Lesson {
  id: number;
  title: string;
  weekGrades: WeekGrade[];
}

@Component({
  selector: 'ins-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.scss'],
})
export class DirectiveNgforComponent {
  posts: Posts[] = [
    {
      id: 1,
      userId: 1,
      title: 'reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur',
    },
    {
      id: 2,
      userId: 2,
      title: 'suscipit',
      body: 'fugiat sit autem sed est nvoluptatem omnis',
    },
    {
      id: 3,
      userId: 3,
      title: 'omnis',
      body: 'nquos veniam quod sed accusamus veritatis error',
    },
  ];
  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'English',
      weekGrades: [
        {
          id: 0,
          gradeItem: 3,
        },
        {
          id: 1,
          gradeItem: 4,
        },
        {
          id: 2,
          gradeItem: 2,
        },
      ],
    },
  ];
}
