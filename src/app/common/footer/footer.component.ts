import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  broadCastMsg: any = {};
  constructor(commonService: CommonService) {
    commonService.itemAdded$.subscribe(item => this.onItemAdded(item));
  }
  private onItemAdded(item: any): void {
    console.log(item);
    this.broadCastMsg = item;
  }
  ngOnInit() {
  }

}
