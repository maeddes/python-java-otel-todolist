import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Todo } from '../app.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor( private http: HttpClient){}
  private URL = 'http://localhost:3000/';
  @Output() updateTodosEvent = new EventEmitter<void>();

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  todoForm = new FormGroup({
    todo_task: new FormControl('', Validators.required),
  });

  onSubmit(){
    if(this.todoForm.valid){
      const headers = { 'content-type': 'application/json'};
      this.http.post<Todo>(this.URL + 'todos', JSON.stringify(this.todoForm.value), {'headers': headers}).subscribe({
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
