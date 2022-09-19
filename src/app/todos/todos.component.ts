import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ins-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  inputValue = '';
  error = '';

  subscriptions: Subscription = new Subscription();

  constructor(private todoService: TodosService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.subscriptions.add(
      this.todoService.getTodos().subscribe({
        next: (res: Todo[]) => {
          this.todos = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.error = err.name;
        },
      })
    );
  }

  addTodoHandler() {
    this.subscriptions.add(
      this.todoService.createTodo(this.inputValue).subscribe(res => {
        this.todos.unshift(res.data.item);
      })
    );
    this.inputValue = '';
  }

  deleteHandler(todoId: string) {
    this.subscriptions.add(
      this.todoService.deleteHandler(todoId).subscribe(res => {
        console.log(res);
        this.todos = this.todos.filter(el => el.id !== todoId);
      })
    );
  }
}
