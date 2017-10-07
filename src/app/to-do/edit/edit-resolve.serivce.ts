import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { TodoDataService } from '../todo-data.service';
import { ToDoItem } from '../toDoItem';

// import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditResolve implements Resolve<any>{
  constructor(private service: TodoDataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('edit resolver');
    const todoId = parseInt(route.params['id']);
    return this.service.getToDoById2( todoId);
  }

}
