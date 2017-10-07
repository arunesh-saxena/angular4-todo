import { Component, OnInit } from '@angular/core';
// import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { UserService } from '../common/service/user.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  animations:[
      
  ]
})
export class DashBoardComponent implements OnInit {

 name = 'dashboard';
  constructor(private user: UserService) { }

  ngOnInit() {
  }
}
