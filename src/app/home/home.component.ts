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
  step = 0;


  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.showTasks();
  }

  setStep(index: number) {
    this.step = index;
  }

  showTasks(): void {
    this.tasksService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }
}
