import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplednd',
  templateUrl: './simplednd.component.html',
  styleUrls: ['./simplednd.component.css']
})
export class SimpledndComponent implements OnInit {
  dragAbleList = []
  dragAbleList2 = []
  constructor() { }

  ngOnInit() {
    this.initDragableList();
  }
  initDragableList = () => {
    for (let i = 0; i < 5; i++) {
      this.dragAbleList.push(`Item - ${i}`);
      this.dragAbleList2.push(`Item - ${i}`);
    }

  }


  targetList = [];
  onDragStart(e) {
    console.log('onDragStart', e);

  }
  onDragEnd(e) {
    console.log('onDragEnd', e);

  }
  onDragOver(e) {
    console.log('onDragOver',e)
  }
  onDragLeave(e) {
    console.log('onDragLeave',e)
  }
  onDragEnter(e) {
    console.log('onDragEnter',e) 
  }
  onDropSuccess(e, type) {
    console.log('onDropSuccess', e,type);
    // let item = { ...e.dragData }
    // console.log(item)
    // Object.assign(toDo, e);
    if (type !== 'sort') {
      this.targetList.push(e.dragData);
      // this.dragAbleList.push(e.dragData).
    }

  }
  onDragSuccess(e) {
    console.log('onDragSuccess', e)
  }

}

