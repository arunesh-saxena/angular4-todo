import { Component, OnInit } from '@angular/core';

import { TodoDataService } from '../todo-data.service';
import { ToDoItem } from '../toDoItem';
@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {

    this.todoDataService.emitTodoListChange(this.todoDataService.getCompletedToDos());
  }

}
