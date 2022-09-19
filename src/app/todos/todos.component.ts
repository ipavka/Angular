import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ins-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputValue = '';
  error = '';

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (res: Todo[]) => {
        this.todos = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.error = err.name;
      },
    });
  }

  addTodoHandler() {
    this.todoService.createTodo(this.inputValue).subscribe(res => {
      this.todos.unshift(res.data.item);
    });
    this.inputValue = '';
  }

  deleteHandler(todoId: string) {
    this.todoService.deleteHandler(todoId).subscribe(res => {
      console.log(res);
      this.todos = this.todos.filter(el => el.id !== todoId);
    });
  }
}
