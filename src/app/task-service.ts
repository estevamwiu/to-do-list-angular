import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from './export-forms/tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    apiUrl = 'http://localhost:3000/tasks';

    constructor (private http: HttpClient) {}

    getAllTasks (): Observable<Tasks[]> {
      return this.http.get<Tasks[]>(this.apiUrl);
    }
    
    save(task:Tasks): Observable<Tasks>{
    return this.http.post<Tasks>(this.apiUrl, task);
  }
  
    delete(task: Tasks): Observable<Tasks> {
    return this.http.delete<Tasks>(`${this.apiUrl}/${task.id}`);
  }

  update(task: Tasks): Observable<Tasks>{
    return this.http.put<Tasks>(`${this.apiUrl}/${task.id}`, task);
}
}
