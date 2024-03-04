import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Todo } from '../app.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(private http: HttpClient) { }
  private URL = 'http://localhost:8080/';
  @Output() updateTodosEvent = new EventEmitter<void>();

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  todoForm = new FormGroup({
    todo_task: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.todoForm.valid) {

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      
      var task = this.todoForm.controls.todo_task.value;
      console.log("task: " + task);
      this.http.post<string>(this.URL + 'todos/' + task, null, { headers })
        .subscribe({
          next: data => {
          },
          error: error => {
            console.error('There was an error!', error);
          }
        })
      this.formGroupDirective.resetForm();
      this.todoForm.reset();
      this.updateTodosEvent.emit();
    }
  }
}
