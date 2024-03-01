import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  constructor( private http: HttpClient, public dialog: MatDialog){}
  private URL = 'http://localhost:3000/';
  @Output() updateTodosEvent = new EventEmitter<void>();
  
  @Input() todo: Todo = {
    todo_id: 0,
    todo_task: ''
  };
  onEdit():void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this.todo,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.updateTodosEvent.emit();
    });
  }
  onDelete():void {
    this.http.delete<Todo>(this.URL + 'todos/' + this.todo.todo_id).subscribe({
      next: data => {
      },
      error: error => {
          console.error('There was an error!', error);
      }
  })
  this.updateTodosEvent.emit();
  }


}
