import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommonService {

  commonName: string = 'from commonService';
  commonCounter: number = 0;
  public itemAdded$:  EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  commonCounterInc = () => {
    this.commonCounter++;
    const item: any = { 'msg': 'msg for common service emit', 'counter': this.commonCounter };
    this.itemAdded$.emit(item);
  }
  resetCommonCounter = () => {
    this.commonCounter = 0;
  }

}
