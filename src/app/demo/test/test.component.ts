import {
  Component, OnInit, OnChanges,
  ViewChild,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @ViewChild('par') p;
  hero = 'hello hero';
  constructor() { }
  onclick() {
    this.hero = ' change';
  }
  ngOnInit() {
  }
  // ngOnChanges() { console.log('ngOnChanges'); }
  ngDoCheck() { console.log('ngDoCheck test'); }
  ngOnDestroy() {
    console.log('ngOnDestroy test');
  }
  ngAfterViewInit = () => {
    console.log('ngAfterViewInit test');
  }

  ngAfterContentInit = () => {
    console.log('ngAfterContentInit test');
  }
  ngAfterViewChecked = () => {
    console.log('ngAfterViewChecked test')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked test');
  }

}
