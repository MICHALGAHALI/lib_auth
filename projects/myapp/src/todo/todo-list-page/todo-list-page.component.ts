import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  task$=this._taskService.entities$;
  constructor(private _taskService:TaskService) {
   }

  ngOnInit(): void {
    this._taskService.getAll();
  }

}
