// todo.component.ts

import { Component } from '@angular/core';
import { TodoService } from '../todo.service'; // Update the path as needed

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todoService.addTodo(this.newTodo.trim()).subscribe(() => {
        this.getTodos(); // Refresh the list after adding
        this.newTodo = ''; // Clear the input field
      });
    }
  }

  removeTodo(todo: string) {
    this.todoService.removeTodo(todo).subscribe(() => {
      this.getTodos(); // Refresh the list after deleting
    });
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
