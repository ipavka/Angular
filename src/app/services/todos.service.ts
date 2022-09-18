import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  httpOptions = {
    headers: {
      'api-key': environment.apiKey,
    },
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.url}/todo-lists`, this.httpOptions);
  }

  createTodo(value: string): Observable<BaseResponse<{ item: Todo }>> {
    return this.http.post<BaseResponse<{ item: Todo }>>(
      `${environment.url}/todo-lists`,
      { title: value },
      this.httpOptions
    );
  }

  deleteHandler(todoId: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(
      `${environment.url}/todo-lists/${todoId}`,
      this.httpOptions
    );
  }
}
