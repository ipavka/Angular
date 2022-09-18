import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Todo {
  id: string;
  addedDate: string;
  order: number;
  title: string;
}

export interface BaseResponse<T = {}> {
  data: T;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}

@Component({
  selector: 'ins-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  httpOptions = {
    headers: {
      'api-key': environment.apiKey,
    },
    withCredentials: true,
  };
  inputValue = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.http.get<Todo[]>(environment.url, this.httpOptions).subscribe(res => {
      this.todos = res;
    });
  }

  addTodoHandler() {
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        environment.url,
        { title: this.inputValue },
        this.httpOptions
      )
      .subscribe(res => {
        this.todos.unshift(res.data.item);
      });
    this.inputValue = '';
  }

  deleteHandler(todoId: string) {
    this.http
      .delete<BaseResponse>(environment.url + `/${todoId}`, this.httpOptions)
      .subscribe(res => {
        console.log(res);
        this.todos = this.todos.filter(el => el.id !== todoId);
      });
  }
}
