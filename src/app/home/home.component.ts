import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TasksService]
})
export class HomeComponent implements OnInit {
  tasks: Task[];


  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.showTasks();
  }

  showTasks(): void {
    this.tasksService.loadTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

}
