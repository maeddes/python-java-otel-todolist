import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Todo{
  //todo_id: number;
  todo_task: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private http: HttpClient){}
  
  title = 'todo-frontend-X';
  todos : Todo[] = [];
  private URL = environment.apiUrl;

  ngOnInit(): void {
    this.getTodos().subscribe(data =>{this.todos = data;});
    console.log(environment.apiUrl);
    console.log("init list: "+this.todos);
  }

  getTodos(): Observable<Todo[]>{
    console.log("List: "+this.http.get<Todo[]>(this.URL + 'todos/'));
    return this.http.get<Todo[]>(this.URL + 'todos/');
  }
  updateTodos(){
    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }
}
