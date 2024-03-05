// app.module.ts

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [ TodoComponent],
  imports: [RouterModule, BrowserModule, FormsModule, HttpClientModule], // Add HttpClientModule to the imports array
  providers: [
    provideClientHydration()
  ],
})
export class AppModule {}
