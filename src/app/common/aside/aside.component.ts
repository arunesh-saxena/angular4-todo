import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {


  @Input() name: String = 'aside';
  intCount = 0;

  public asideList = [];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.initAsideList(5);
  }
  countChange(event) {
    console.log('aside countChage emitter');
    this.intCount = event.counter;
  }
  resetClickMe = () => {
    this.commonService.resetCommonCounter();
  }
  initAsideList = (limt: number) => {
    for (let i = 0; i < limt; i++) {
      this.asideList.push('Asise : ' + i);
    }
  }


}
