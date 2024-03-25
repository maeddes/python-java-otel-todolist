import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./todo/todo.component').then((m) => m.TodoComponent),
  },
];
