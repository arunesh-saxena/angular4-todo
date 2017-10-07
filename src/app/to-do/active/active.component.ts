import { Component, OnInit } from '@angular/core';

import { TodoDataService } from '../todo-data.service';
import { ToDoItem } from '../toDoItem';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  toDoList: ToDoItem[];
  constructor(private todoDataService: TodoDataService) { }
  ngOnInit() {
    console.log('active component')
    this.todoDataService.emitTodoListChange(this.todoDataService.getActiveToDos());
  }

}
