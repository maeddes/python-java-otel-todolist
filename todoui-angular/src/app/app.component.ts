import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    TodoComponent,
  ],
  standalone: true
})
export class AppComponent {
  title = 'todoui-angular';
}
