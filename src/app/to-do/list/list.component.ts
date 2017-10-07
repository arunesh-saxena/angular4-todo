import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../toDoItem';

import { Router } from '@angular/router';

import { TodoDataService } from '../todo-data.service';
import { ToDoConst } from '../ToDoConst';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() toDoList;
  @Input() toggleToDoComplete;
  @Input() removeTodo;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('list component');
  }
  onSelect = (id) => {
    console.log(id);
    this.router.navigate(['/toDo/edit', id]);
  }


}
