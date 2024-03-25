// todo.service.ts

import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppEnvProvider } from '../../app-env.provider';

@Injectable()
export class TodoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(AppEnvProvider).API_URL;

  addTodo(todo: string): Observable<string> {
    // Set headers to specify no request body
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<string>(`${this.apiUrl}/todos/${todo}`, null, {
      headers,
    });
  }

  removeTodo(todo: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/todos/${todo}`);
  }

  getTodos(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/todos`);
  }
}
