import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/app.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: Todo) {}
  
  private URL = 'http://localhost:3000/';

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  todoForm = new FormGroup({
    todo_task: new FormControl(this.data.todo_task, Validators.required),
  });

  onSubmit(){
    if(this.todoForm.valid){
      const headers = { 'content-type': 'application/json'};
      this.http.put<Todo>(this.URL + 'todos/' + this.data.todo_id, JSON.stringify(this.todoForm.value), {'headers': headers}).subscribe({
        next: data => {
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })
    this.formGroupDirective.resetForm();
    this.todoForm.reset();
  }
 }
}
