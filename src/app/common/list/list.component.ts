import {
  Component, Input, Output, EventEmitter, ViewChild, ElementRef,

  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

// import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list;
  @Output('loadMoreList') loadMore: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('listUl') listElm: ElementRef;
  // @Input('loadMoreList') loadMore: Function;
  constructor() {
    console.log(this.list);
  }
  ngOnInit() {
    // console.log('ngOnInit')
  }
  /* ngOnChanges() {
    // console.log(`ngOnChanges`);
  }
  ngDoCheck() {
    // console.log('ngDoCheck');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit list');
    // console.log('ngAfterViewInit - wrapper', this.listElm.nativeElement);
  }

  ngAfterContentInit = () => {
    console.log('ngAfterContentInit list')
  }
  ngAfterViewChecked = () => {
    // console.log($('.closeBtn').length);
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked4');
  }
  ngOnDestroy() {
    // console.log("ngOnDestroy");
  } */
  onScrolling = (e) => {
    $(e.target);
    if ((this.listElm.nativeElement.scrollTop + this.listElm.nativeElement.clientHeight) >= this.listElm.nativeElement.scrollHeight) {
      console.log('call next');
      // this.loadMoreList();
      this.loadMore.emit();
    }
  }

}
