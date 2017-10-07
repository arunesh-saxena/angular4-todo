import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-sortable',
  templateUrl: './simple-sortable.component.html',
  styleUrls: ['./simple-sortable.component.css']
})
export class SimpleSortableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  dragend(){
    console.log('dragend')
  }
}
