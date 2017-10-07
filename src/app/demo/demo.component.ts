import {
  Component, OnInit, ViewChild, ElementRef,
  OnChanges,

  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ApiService } from '../common/service/api.service';
import { ListComponent } from '../common/list/list.component';

import { SimpledndComponent } from '../dnd/simplednd/simplednd.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('500ms ease-in')),
    ]),
  ]
})
export class DemoComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  hero = 'arunesh is hero';
  preChat = [{ text: 'hi' }, { text: 'hhello' }, { text: 'hhello' }];
  splitter = {
    contentLeftWidth: 250,
    splitterWidth: 10
  };
  spliterList = [{ item: 'left item0', content: 'this is content for zero' },
  { item: 'left item1', content: 'this is content for one' },
  { item: 'left item2', content: 'this is content for second' }];
  chatBoxtext: String = 'hello how r u';
  activeSpliterItem = 0;
  list = [];
  constructor(private api: ApiService,
    private renderer: Renderer2) { }
  @ViewChild('wrapper') wrapper: ElementRef;
  ngOnInit() {
    this.getList();
    console.log(this.spliterList)
  }
  ngOnChanges() { }
  ngDoCheck() { }
  ngOnDestroy() {
    // console.log("ngOnDestroy");
  }
  ngAfterViewInit = () => {
    this.wrapper.nativeElement.style.backgroundColor = 'yellow';
  }

  ngAfterContentInit = () => {
    this.wrapper.nativeElement.style.backgroundColor = 'yellow';
  }
  ngAfterViewChecked = () => {
    this.wrapper.nativeElement.style.backgroundColor = 'yellow';
  }
  ngAfterContentChecked() {
    this.wrapper.nativeElement.style.backgroundColor = 'yellow';
  }
  splitterItemClick(activeSpliterItem) {
    this.activeSpliterItem = activeSpliterItem
  }
  onChatBox(chatBox) {
    this.preChat.push({
      text: chatBox
    });

  }

  modalClick(data) {
  }
  getList() {
    this.api.getApiResult().subscribe(
      list => {
        this.list = list;
      },
      err => {
        console.log(err);
      });
  }
  loadMoreList(data) {
    console.log('get more list');
    let newList = this.api.getMoreItem(this.api.currentPage);
    newList.map(item => {
      this.list.push(item);
    });
  }
  drag(ev) {
    console.log(ev.html);
    ev.dataTransfer.setData('text', ev.target.id);
    // ev.dataTransfer.setData("text", ev.target.id);
  }
  drop(ev) {
    console.log(ev.html)
    // ev.dataTransfer.setData("text", ev.target.id);
  }

  /* drag and drop */

  simpleDrop(e) {
    console.log(e);
  }
  state: string = 'small';
  @ViewChild('box') box: ElementRef;
  @ViewChild('goal') goal: ElementRef;
  @ViewChild('boxContainer') boxCont: ElementRef;
  onBoxClick() {
    console.log('onBoxClick for animation');
    const boxElm = this.box.nativeElement,
      anim = {
        translateX: '80px',
        rotate: '45deg'
      };
    this.renderer.setStyle(boxElm, 'transform', `translate(${anim.translateX}) rotate(${anim.rotate})`);
    // $(boxElm).animate({ left: '30px' });
    // this.state = (this.state === 'small' ? 'large' : 'small');
  }
  onGoalClick() {
    console.log('onGoalClick for animation');
    const goalElm = this.goal.nativeElement,
      boxElm = this.box.nativeElement,
      boxContElm = this.boxCont.nativeElement,
      goalPostion = {
        left: $(goalElm).offset().left - $(boxContElm).offset().left
      };
    console.log($(goalElm).offset().left, $(boxContElm).offset().left, goalPostion);
    this.renderer.setStyle(boxElm, 'transform', `translateX(${goalPostion.left}px)`);
    // this.renderer.setStyle(boxElm, 'left', `${goalPostion.left}px`);

  }
  onReset() {
    const boxElm = this.box.nativeElement;
    this.renderer.setStyle(boxElm, 'transform', `translateX(0px)`);
  }
  getTranslateX(elm) {
    let style = window.getComputedStyle(elm),
      matrix = new WebKitCSSMatrix(style.webkitTransform);
    console.log('translateX: ', matrix);
    return matrix.m41;
  }
}
