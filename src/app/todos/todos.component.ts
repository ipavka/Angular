import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ins-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  inputValue = '';
  error = '';

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos();
  }

  addTodoHandler() {
    this.todoService.createTodo(this.inputValue);
  }

  deleteHandler(todoId: string) {
    this.todoService.deleteTodo(todoId);
  }
}
