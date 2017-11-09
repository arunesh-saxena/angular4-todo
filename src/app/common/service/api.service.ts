import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ListResult } from './types.interface';

// interface ListResult {
//   completed: boolean;
//   id: Number;
//   title: string;
//   userId: number;
// }

@Injectable()
export class ApiService {
  constructor(private http: Http) { }
  private commentsUrl = 'https://jsonplaceholder.typicode.com/todos';
  itemsList: ListResult[] = [];
  totalPage = 0;
  currentPage = 0;
  pageSize = 20;
  getApiResult = (): Observable<ListResult[]> => {
    return this.http.get(this.commentsUrl)
      .map((res: Response) => {
        this.itemsList = res.json();
        this.totalPage = Math.ceil((this.itemsList.length) / this.pageSize);
        if (this.totalPage) {
          this.currentPage = 1;
        }
        return this.itemsList.slice(0, this.pageSize);
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getMoreItem = (pageNo) => {
    if (pageNo < this.totalPage) {
      let start = (pageNo) * this.pageSize,
        end = start + this.pageSize;
      this.currentPage++;
      return this.itemsList.slice(start, end);
    }
    console.log('getMoreItem', pageNo);
    return [];
  }
}