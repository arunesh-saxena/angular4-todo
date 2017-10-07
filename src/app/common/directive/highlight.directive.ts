import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { CommonService } from '../service/common.service';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() highlightColor: string;
  @Input() counter: number;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  public defaultColor = 'yellow';
  private $elm = $(this.elm.nativeElement);
  public clickMeCheck() {
    // console.log('clickMeCheck');
    // this.commonService.commonCounterInc();
  }
  constructor(
    private elm: ElementRef,
    public commonService: CommonService) {
    // console.log('HighlightDirective');

  }
  ngOnInit() {
    // console.log('homeComponent on init', this.commonService.commonName);
    this.$elm.find('.incrementBtn').on('click', function (event) {
      // event.stopPropagation();
      console.log('clickMeCheck');

      // this.clickMeCheck();
      // this.commonService.commonCounterInc();
    });
  }

  @HostListener('click', ['$event'])
  onClickHighligtDir(event: MouseEvent) {
    // console.log('clickMeCheck from highlight directive', this.commonService.commonCounter);
    console.log($(event.target).hasClass('incrementBtn'))
    this.commonService.commonCounterInc();

    this.counter++;
    this.change.emit({ 'msg': 2, 'counter': this.counter });
    // this.change.emit([this.counter, 3, 4]);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
    this.$elm.addClass('hello');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight = (color = this.highlightColor) => {
    this.elm.nativeElement.style.backgroundColor = color;
  }
}
