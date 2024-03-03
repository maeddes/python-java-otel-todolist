import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo{
  todo_id: number;
  todo_task: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private http: HttpClient){}
  
  title = 'todo-frontend';
  todos : Todo[] = [];
  private URL = 'https://8080-maeddes-pythonjavaotelt-loel527niaq.ws-eu108.gitpod.io/';

  ngOnInit(): void {
    this.getTodos().subscribe(data =>{this.todos = data;});
    console.log(this.todos);
    console.log("Matthias");
  }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.URL + 'todos/');
  }
  updateTodos(){
    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }
}
