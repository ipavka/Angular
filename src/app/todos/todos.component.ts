import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';

@Component({
  selector: 'ins-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputValue = '';

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
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
