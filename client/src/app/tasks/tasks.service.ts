import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  

  constructor(private http:HttpClient) {

  }

  getTasks(): Observable<Task[]> {
    var tasks : Task[] = [];
    return this.http.get<Task[]>("api/tasks")
            .pipe(catchError(val => {
              console.log("error happened",val);
              return of(tasks);
            }));
  }

  addTask(task:Task): Observable<Task> {
    var task : Task;
    return this.http
      .post<Task>("api/tasks",task)
        .pipe(catchError(val => {
          console.log("error happened",val);
          return of(task);
        }));
  }

  deleteTask(id:Number): Observable<{}> {
    const url = `api/tasks/${id}`;
    return this.http
      .delete(url)
        .pipe(catchError(val => {
          console.log("error happened",val);
          return of({});
        }));
  }

  updateTask(task:Task): Observable<Task> {
    var task : Task;
    return this.http
      .put<Task>(`api/tasks/${task._id}`,task)
        .pipe(catchError(val => {
          console.log("error happened",val);
          return of(task);
        }));
  }
}
