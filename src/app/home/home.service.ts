import { Injectable } from '@angular/core';
/*export interface Iinter {
  Iintertype: number;
}*/
export class ClassType {
  classType: number;
  classType1: string;
}
export const constVar = 'this is const example';
@Injectable()
export class HomeService {

  private empList = ['kavi', 'arunesh'];
  private privateVar: number;

  /*interfaceCheck: Iinter = {
    Iintertype: 1223;
  };*/

  classCheck: ClassType = {
    classType: 1223,
    classType1: 'she'
  };

  constructor() {

  }

  getList = () => {
    let localVar: String = 'hello';
    localVar = 'kavi';
    this.privateVar = 123;
    // console.log('localVar : ' + localVar);
    // console.log('privateVar : ' + this.privateVar);
    // console.log('constVar : ' + constVar);
    // // console.log('interfaceCheck : ', this.interfaceCheck);
    // console.log('classCheck : ' ,  this.classCheck);


    return this.classCheck;
  }

}
