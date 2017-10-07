import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { TodoDataService } from '../todo-data.service';
import { ToDoItem } from '../toDoItem';


import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';

@Injectable()
export class ListResolve implements Resolve<any> {

    constructor(private service: TodoDataService) { }

    resolve(route: ActivatedRouteSnapshot) {
        console.log('ListResolve');
        // return this.service.getList().first();
        return this.service.getList().toPromise().then(
            (toDo) => {
                if (toDo.success) {
                    this.service.toDoList.list = toDo.todos;
                    console.log('resolve data get', toDo);
                    return toDo.todos;
                } else {
                    console.log(toDo);
                    return false;
                }
            },
            error => {
                console.log(error);
                return false;
            });
        /* return this.service.getList().take(1).subscribe(
            (toDo) => {
                if (toDo.success) {
                    this.service.toDoList.list = toDo.todos;
                    console.log('resolve data get', toDo);
                    return toDo.todos;
                } else {
                    console.log(toDo);
                    return false;
                }
            },
            error => {
                console.log(error);
                return false;
            }); */
    }

}
