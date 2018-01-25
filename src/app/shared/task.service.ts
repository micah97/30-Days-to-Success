import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) { }

  private tasksUrl = 'assets/db.json';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .map((res: any) => res.tasks);
  }
}
