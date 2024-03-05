import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {environment} from "../environments/environment";
import process from "node:process";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'todoui-angular';
  protected readonly environment = environment;
  protected readonly process = process;
}
