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

  markAsCompleted (task: Tasks): Observable<Tasks> {
    const updatedTask = { ...task, completed: true, completedAt: new Date ()};
    return this.http.put<Tasks>(`${this.apiUrl}/${task.id}`, updatedTask);
  }

  markAsPending(task: Tasks): Observable<Tasks> {
    const updatedTask = { ...task, completed: false, completedAt: null};
    return this.http.put<Tasks>(`${this.apiUrl}/${task.id}`, updatedTask);
  }

  getCompletedTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.apiUrl}?completed=true`);
  }

  getPendingTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.apiUrl}?completed=false`);
  }
}
