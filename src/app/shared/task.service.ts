import { Task } from './task.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const TASK_URL = 'http://192.168.1.18:3000/tasks/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TasksService {
  constructor(private http: Http) {}

  loadTasks() {
    return this.http.get(TASK_URL)
      .map(res => res.json());
  }
}
