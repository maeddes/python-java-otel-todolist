// todo.component.ts

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs'; // Update the path as needed

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  imports: [FormsModule],
  providers: [TodoService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  private readonly todoService = inject(TodoService);
  readonly todos = signal<string[]>([]);
  readonly newTodo = signal('');

  async addTodo() {
    if (this.newTodo().trim()) {
      await firstValueFrom(this.todoService.addTodo(this.newTodo().trim()))
        .then(async () => {
          this.newTodo.set(''); // Clear the input field
          await this.getTodos(); // Refresh the list after adding
        })
        .catch(() => console.error('Error adding new todo'));
    }
  }

  async removeTodo(todo: string) {
    await firstValueFrom(this.todoService.removeTodo(todo))
      .then(() => {
        this.getTodos(); // Refresh the list after deleting
      })
      .catch(() => console.log('Error occurred while trying to delete todo'));
  }

  async getTodos() {
    await firstValueFrom(this.todoService.getTodos())
      .then((todos) => this.todos.set(todos))
      .catch(() => console.error('Error occurred while trying to get todos'));
  }
}
