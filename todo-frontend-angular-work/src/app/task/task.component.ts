import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  constructor( private http: HttpClient, public dialog: MatDialog){}
  private URL = environment.apiUrl;
  @Output() updateTodosEvent = new EventEmitter<void>();
  
  @Input() todo: Todo = {
    todo_task: ''
  };

  onEdit():void {
    console.log("debug: "+this.todo+" task "+this.todo.todo_task);
  }
  onDelete():void {
    this.http.delete<Todo>(this.URL + 'todos/' + this.todo).subscribe({
      next: data => {
      },
      error: error => {
          console.error('There was an error!', error);
      }
  })
  this.updateTodosEvent.emit();
  }


}
