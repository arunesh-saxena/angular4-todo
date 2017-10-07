import { Component, HostListener, Inject, ViewChild, ViewChildren, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-in-page-naviation',
  templateUrl: './in-page-naviation.component.html',
  styleUrls: ['./in-page-naviation.component.scss']
})
export class InPageNaviationComponent implements OnInit, AfterViewInit {
  activeNav: Number = 1;
  navIsFixed: Boolean = false;
  @ViewChild('inPageNav') inPageNav: ElementRef;
  @ViewChildren('article') article: ElementRef;
  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // console.log(this.article['_results']);
  }
  navClick(activeNav: number) {
    console.log('navClick');
    this.activeNav = activeNav;
    $(window).scrollTop(this.article['_results'][activeNav].nativeElement.offsetTop - this.inPageNav.nativeElement.offsetHeight);
  }
  isInViewport($elm) {
    const elementTop = $elm.offset().top,
      elementBottom = elementTop + $elm.outerHeight(),
      viewportTop = $(window).scrollTop() + 86,
      viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (!this.navIsFixed && number > this.inPageNav.nativeElement.offsetTop) {
      this.navIsFixed = true;
    } else if ($('app-our-works').offset().top > (number + this.inPageNav.nativeElement.offsetHeight)) {
      this.navIsFixed = false;

    }
    const activeNav = this.article['_results'].filter((val, ind) => {
      return this.isInViewport($(val.nativeElement));
    });

    this.activeNav = parseInt(activeNav[0].nativeElement.getAttribute('data-nav'));
  }
}
