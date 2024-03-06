import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = environment.apiUrl;

  constructor (private http: HttpClient) {
  }

  addTodo (todo: string): Observable<string> {
    // Set headers to specify no request body
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<string>(`${this.apiUrl}/todos/${todo}`, null, {headers});
  }

  removeTodo (todo: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/todos/${todo}`);
  }

  getTodos (): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/todos/`);
  }
}
