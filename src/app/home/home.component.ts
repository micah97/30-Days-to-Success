import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.loadTasks();
  }

}
