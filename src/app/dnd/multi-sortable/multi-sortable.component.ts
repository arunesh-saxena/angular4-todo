import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-sortable',
  templateUrl: './multi-sortable.component.html',
  styleUrls: ['./multi-sortable.component.css']
})
export class MultiSortableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
}
