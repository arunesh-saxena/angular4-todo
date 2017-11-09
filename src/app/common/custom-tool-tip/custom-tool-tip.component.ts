import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-custom-tool-tip',
  templateUrl: './custom-tool-tip.component.html',
  styleUrls: ['./custom-tool-tip.component.css']
})
export class CustomToolTipComponent implements OnInit, AfterViewInit {
  // displayToolTip: Boolean = false;
  toolTipText: string = 'Tool tip text';
  @ViewChild('txt') textElm: ElementRef;
  @ViewChild('ellipCont') ellipCont: ElementRef;
  // @ViewChild('toolTip') toopTipElm: ElementRef;
  toolTipElm: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.toolTipText = this.textElm.nativeElement.innerHTML.trim();

  }
  onEnter($event) {
    // this.displayToolTip = false;
    this.setToolTip($event);


  }
  onOut($event) {
    // this.displayToolTip = false;
    this.removeTooTip();
  }
  removeTooTip = () => {
    this.toolTipElm && this.renderer.removeChild(this.ellipCont.nativeElement, this.toolTipElm);
  }
  setToolTip = ($event) => {
    if (!this.isEllipse()) {
      return;
    }
    let mouse = {
      pageX: $event.pageX,
      pageY: $event.pageY,
      clientX: $event.clientX,
      clientY: $event.clientY
    };
    let elmCordinate = {
      offsetLeft: $(this.ellipCont.nativeElement).offset().left,
      offsetTop: this.ellipCont.nativeElement.offsetTop
    };
    let toolTipStyle = {
      left: (mouse.pageX - elmCordinate.offsetLeft - 5),
      // top: -this.toopTipElm.nativeElement.offsetHeight
      top: -30
    };
    this.removeTooTip();
    this.toolTipElm = this.renderer.createElement('div');
    const text = this.renderer.createText(this.toolTipText);

    this.renderer.appendChild(this.toolTipElm, text);
    this.renderer.addClass(this.toolTipElm, 'tool-tip');

    this.renderer.appendChild(this.ellipCont.nativeElement, this.toolTipElm);


    this.renderer.setStyle(this.toolTipElm, 'left', `${toolTipStyle.left}px`);
    this.renderer.setStyle(this.toolTipElm, 'top', `${toolTipStyle.top}px`);
  }
  isEllipse = () => {
    let result: Boolean = false;
    const $element = $(this.textElm.nativeElement),
      $c = $element
        .clone()
        .css({ display: 'inline', width: 'auto', visibility: 'hidden' })
        .appendTo('body');

    result = ($c.width() > $element.width());

    $c.remove();
    return result;
  }

  onClick($event) {

    this.setToolTip($event);

  }

}
