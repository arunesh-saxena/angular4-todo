import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from './loader';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  private modalSubject = new Subject<LoaderState>();

  modalState = this.modalSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<any>{ show: false });
  }

  popUp = (data) => {
    let msg = Object.assign({}, data);
    delete msg['error'];
    delete msg['headers'];
    if (data.status === 0) {
      Object.assign(msg, {
        msg: 'Some NetWork Error'
      });
    }
    this.modalSubject.next(<any>msg);
  }

}
