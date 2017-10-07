import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

import { CommonService } from '../common/service/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  name = 'home component';
  highlightColor = 'green';
  intCount = 0;
  textName = 'textName';
  constructor(private _homeService: HomeService,
   private commonService: CommonService) {
    console.log('homeComponent constructor');
  }

  ngOnInit() {
    console.log('homeComponent on init');
  }
  clickMe = (): void => {
    console.log('clickMe example to add _homeService');
    console.log(this._homeService.getList());
  }
  countChange(event) {
    console.log('home countChage emitter', this.intCount);
    console.log(event);
    this.intCount = event.counter;
    console.log('textName : ', this.textName)
  }

 
}
