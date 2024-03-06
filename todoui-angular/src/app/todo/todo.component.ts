import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {TodoService} from '../todo.service';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {take, tap} from "rxjs"; // Update the path as needed

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class TodoComponent implements OnInit {
  todos: WritableSignal<string[]> = signal([]);
  newTodo: WritableSignal<string> = signal('');

  constructor (private todoService: TodoService) {
  }

  ngOnInit (): void {
    this.todoService.getTodos()
      .pipe(
        take(1),
        tap(value => {
          this.todos.set(value)
        })
      ).subscribe()
  }

  addTodo () {
    if (this.newTodo().trim() !== '') {
      this.todoService.addTodo(this.newTodo().trim()).pipe(
        tap({
          next: () => {
            this.todos.update((values) => {
              return [...values, this.newTodo()]
            })
            this.newTodo.set(''); // Clear the input field
          }
        }),
      ).subscribe();
    }
  }

  removeTodo (todo: string) {
    this.todoService.removeTodo(todo)
      .pipe(
        take(1),
        tap(
          {
            next: () => {
              this.todos.update((value) => {
                return value.filter((it) => it !== todo)
              })
            }
          }))
      .subscribe();
  }

}
