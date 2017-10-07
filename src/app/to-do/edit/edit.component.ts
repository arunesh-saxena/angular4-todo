import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TodoDataService } from '../todo-data.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy, AfterViewInit {

  toDoInfo = {};
  sub;
  constructor(
    private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router) {
  }
  ngOnInit() {
    console.log('editcomponent init');
    this.toDoInfo = this.route.snapshot.data['toDoItem'];
    // console.log(this.toDoInfo);

    this.sub = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .subscribe((event) => {
        // example: NavigationStart, RoutesRecognized, NavigationEnd
        console.log('edit router change event');
        this.toDoInfo = this.route.snapshot.data['toDoItem'];
      });
  }
  ngAfterViewInit() {
    console.log(' edit ngAfterViewInit()')
  }

  edit(itemText) {
    console.log(itemText.value);
    // this.todoDataService.editTodo(this.todoDataService.toDoList.editedItem );
    this.todoDataService.editTodo(this.toDoInfo);
  }

  ngOnDestroy() {
    console.log('edit component destroy');
    this.sub.unsubscribe();
  }

}
