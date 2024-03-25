import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo.trim());
      this.newTodo = ''; // Clear the input field
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
