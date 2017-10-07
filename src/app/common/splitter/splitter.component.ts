import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss']
})
export class SplitterComponent implements OnInit, AfterViewInit {
  @ViewChild('splitterSection') splitterSection: ElementRef;
  @ViewChild('contentLeft') contentLeft: ElementRef;
  @ViewChild('contentRight') contentRight: ElementRef;
  @ViewChild('splitter') splitter: ElementRef;
  @Input('contentOption') option;
  splitterSectionW;
  contentLw = 150;
  contentRw = 100;
  spliterw = 10;
  isMouseDown: Boolean = false;
  lastX;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.init();
  }
  init() {
    this.contentLw = parseInt(this.option.contentLeftWidth) || 150;
    this.spliterw = parseInt(this.option.splitterWidth) || 10;
  }
  ngAfterViewInit() {
    this.splitterSectionW = $(this.splitterSection.nativeElement).width();
    this.resetWidth(this.contentLw);
  }
  onMouseOut() {
    this.isMouseDown = false;
  }
  onMouseDown() {
    this.isMouseDown = true;
  }
  onMouseUp() {
    this.isMouseDown = false;
  }
  onMouseMove(e) {
    let lastX, deltaWidth, mouseX = e.pageX, newLW;
    if (this.isMouseDown) {
      lastX = $(this.contentLeft.nativeElement).offset().left + $(this.contentLeft.nativeElement).outerWidth();
      deltaWidth = mouseX - lastX - (this.spliterw / 2);
      newLW = $(this.contentLeft.nativeElement).outerWidth() + deltaWidth;
      // this.contentLw = newLW;
      // console.log('mousemove', mouseX, lastX, deltaWidth, newLW);
      this.resetWidth(newLW);
    };
  }
  /* @param conteLw width of left content */
  resetWidth(contentLW) {
    if (contentLW > (50) && contentLW < (this.splitterSectionW - 50)) {

      this.contentLw = contentLW;
      this.contentRw = this.splitterSectionW - (this.contentLw + this.spliterw);
      this.cdr.detectChanges(); // detect changes
    }
  }

}
