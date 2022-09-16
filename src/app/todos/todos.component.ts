import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Todo {
  id: string;
  addedDate: string;
  order: number;
  title: string;
}

@Component({
  selector: 'ins-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputValue = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.http
      .get<Todo[]>(environment.url, {
        headers: {
          'api-key': environment.apiKey,
        },
        withCredentials: true,
      })
      .subscribe(res => {
        this.todos = res;
      });
  }

  deleteHandler(todoId: string) {
    console.log(todoId);
  }

  addTodoHandler() {
    console.log(this.inputValue);
    this.inputValue = '';
  }
}
