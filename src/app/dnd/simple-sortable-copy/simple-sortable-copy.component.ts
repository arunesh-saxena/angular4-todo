import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedded-sortable',
  templateUrl: './simple-sortable-copy.component.html',
  styleUrls: ['./simple-sortable-copy.component.css']
})
export class SimpleSortableCopy implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   sourceList: Widget[] = [
        new Widget('1'), new Widget('2'),
        new Widget('3'), new Widget('4'),
        new Widget('5'), new Widget('6')
    ];

    targetList: Widget[] = [];
    addTo($event: any) {
      console.log(111111)
        this.targetList.push($event.dragData);
    }
}

class Widget {
  constructor(public name: string) {}
}