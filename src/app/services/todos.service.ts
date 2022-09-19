import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

export interface Todo {
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

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  httpOptions = {
    headers: {
      'api-key': environment.apiKey,
    },
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  getTodos() {
    this.http.get<Todo[]>(`${environment.url}/todo-lists`, this.httpOptions).subscribe(todos => {
      this.todos$.next(todos);
    });
  }

  createTodo(value: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        `${environment.url}/todo-lists`,
        { title: value },
        this.httpOptions
      )
      .pipe(
        map(res => {
          const newTodo = res.data.item;
          const currentTodo = this.todos$.getValue();
          return [newTodo, ...currentTodo];
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos);
      });
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.url}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(el => el.id !== todoId);
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos);
      });
  }
}
