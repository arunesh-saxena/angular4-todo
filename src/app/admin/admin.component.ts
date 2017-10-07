import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public name = 'Admin';
  public highlightColor = 'orange';
  constructor() {
    console.log('admin component');
  }

  ngOnInit() {

  }

}
