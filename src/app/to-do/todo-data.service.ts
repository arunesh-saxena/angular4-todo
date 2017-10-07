import { Injectable } from '@angular/core';
import { ToDoItem } from './toDoItem';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import * as $ from 'jquery';

import { Subject } from 'rxjs/Subject';

import { CONSTANTS } from '../constants';
// import { HttpInterceptor } from '../httpInterceptor';

@Injectable()
export class TodoDataService {

  // toDoList: ToDoItem[] = [];
  private todoListChange = new Subject<any>();
  listState = this.todoListChange.asObservable();

  toDoList = {
    'list': [],
    editedItem: {}
  };
  errorMessage = '';
  // mockUrl = 'http://swapi.co/api/people/1';
  mockUrl = 'app/to-do/mock/itemList.json';
  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  emitTodoListChange = (list) => {
    this.todoListChange.next(<any>{ list: list });
  }

  getList(): Observable<any> {
    const url = CONSTANTS.api.todoList;
    // const url = this.mockUrl; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.http.get<any>(url)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.todos || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  defaultToDoList = () => {
    this.getList()
      .subscribe(
      toDo => {
        this.toDoList.list = toDo;
        this.todoListChange.next(<any>{ list: this.toDoList.list });
      },
      error => this.errorMessage = <any>error);

  }

  addTodo = (todo: ToDoItem) => {
    // this.toDoList.list.push(todo);


    let bodyString = JSON.stringify(todo); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    this.http.post<any>(CONSTANTS.api.addTodoList, bodyString)
      .subscribe(
      (res) => {
        console.log(res)
        if (res.success) {
          this.toDoList.list.push(res.data);

          console.log(res.data);
          this.todoListChange.next(<any>{ list: this.toDoList.list });
        }

      },
      error => { console.log(error) });

  }

  getAllTodos(): ToDoItem[] {
    return this.toDoList.list;
  }
  getActiveToDos = () => {
    return this.toDoList.list
      .filter(todo => todo.isCompleted === false && todo.isDeleted === false);
  }
  getCompletedToDos = () => {
    return this.toDoList.list
      .filter(todo => todo.isCompleted === true);
  }
  getToDoById(id: number) {
    return this.toDoList.list
      .filter(todo => todo.id === id)
      .pop();
  }
  getToDoById2(id: number) {
    const itemList = this.toDoList.list;

    return itemList.filter(todo => todo.id === id)
      .pop();
    // return Observable.create(observer => {
    //     observer.next(itemList.find((contact) => contact.id == id))
    //     observer.complete();
    // });
  }
  updateToDoById(id: number, values: Object = {}) {
    let toDo = this.getToDoById(id);
    if (!toDo) {
      return null;
    }
    Object.assign(toDo, values);
  }
  toggleTodoComplete(id: number, value: boolean) {
    // let updatedToDo = this.updateToDoById(id, {
    //   isCompleted: !values
    // });

    let bodyString = JSON.stringify({ id: id, isCompleted: value });
    let headers = new Headers({ 'Content-Type': 'application/json' });

    this.http.put<any>(CONSTANTS.api.updateTodo, bodyString)
      .subscribe(
      (res) => {
        console.log(res);
        if (res.success) {
          this.toDoList.list = res.data;
          this.todoListChange.next(<any>{ list: this.toDoList.list });
        } else {
          console.log(res)
        }

      },
      error => { console.log(error) });
  }
  deleteTodoById(id: number) {
    this.http.delete<any>(`${CONSTANTS.api.deleteTodo}${id}`)
      .subscribe(
      (res) => {
        console.log(res);
        if (res.success) {
          this.toDoList.list = res.data;
          this.todoListChange.next(<any>{ list: this.toDoList.list });
        } else {
          console.log(res)
        }
      },
      error => { console.log(error) });

  }
  editTodo = (item) => {
    let bodyString = JSON.stringify({ name: item.name, id: item.id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.put<any>(`${CONSTANTS.api.updateTodo}`, bodyString)
      .subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.toDoList.list = res.data;
          this.todoListChange.next(<any>{ list: this.toDoList.list });
        }

      },
      error => { console.log(error) });
  }
}
