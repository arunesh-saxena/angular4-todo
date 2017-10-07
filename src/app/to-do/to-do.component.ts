import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ToDoItem } from './toDoItem';

import { TodoDataService } from './todo-data.service';
import { ToDoConst } from './ToDoConst';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CONSTANTS } from '../constants';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  // providers: [TodoDataService]
})
export class ToDoComponent implements OnInit, OnDestroy, AfterViewInit {
  breadcrumbIndex: any = {
    viewAllList: 1,
    activeList: 2,
    completedList: 3
  };
  title: String = '';
  activeBreadcrumb = 1;
  errorMessage = '';
  toDoList: ToDoItem[];
  todoListChangeSub;
  routerSub;
  constructor(private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cdr: ChangeDetectorRef) {
    /* use to resolve */
    console.log();
    // route.data
    //   .do(console.log)
    //   .subscribe((data) => {
    //     this.todoDataService.toDoList.list = data.list.todos;
    //     this.toDoList = this.todoDataService.toDoList.list;
    //     console.log('done putting');
    //   });
  }
  ngOnInit() {
    console.log('to-do ngOnInit');
    this.todoListChangeSub = this.todoDataService.listState
      .subscribe(data => {
        console.log('emitter todoListChange', data);
        this.toDoList = data.list;
        this.cdr.detectChanges(); // detect changes
      });

    this.routerSub = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .subscribe((event) => {
        if (this.location.isCurrentPathEqualTo('/toDo')) {
          this.toDoList = this.route.snapshot.data['list'];
        }
      });
    this.toDoList = this.todoDataService.toDoList.list;
  }
  ngAfterViewInit() {
    console.log('to-do AfterViewInit');
  }

  addTodo(item) {
    if (item.length === 0) {
      return;
    }
    console.log(this.todoDataService.toDoList.list, this.toDoList.length)
    this.todoDataService.addTodo({
      id: this.toDoList.length,
      name: item,
      isCompleted: false,
      isDeleted: false
    })
    this.title = '';
  }

  toggleToDoComplete = (toDoId: number, value: boolean) => {
    this.todoDataService.toggleTodoComplete(toDoId, !value);
  }
  removeTodo = (id: number) => {
    this.todoDataService.deleteTodoById(id);

  }
  editToDo = (id: number) => {
    console.log('work in progress')
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
  viewALLList() {
    this.activeBreadcrumb = this.breadcrumbIndex.viewAllList;
    this.toDoList = this.todoDataService.getAllTodos();
  }
  activeList = () => {
    this.activeBreadcrumb = this.breadcrumbIndex.activeList;
    this.toDoList = this.todoDataService.getActiveToDos();
  }
  completedList = () => {
    this.activeBreadcrumb = this.breadcrumbIndex.completedList;
    this.toDoList = this.todoDataService.getCompletedToDos();
  }
  ngOnDestroy() {
    console.log('edit component destroy');
    this.todoListChangeSub.unsubscribe();
    this.routerSub.unsubscribe();
  }
}
