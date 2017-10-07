import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// import * as $ from 'jquery';
import * as $ from 'jqlite';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  name: string;
  psdTemp = false;
  routerSub = null;
  constructor(private route: ActivatedRoute, private router: Router,
    private location: Location) { }
  ngOnInit() {
    // console.log('aap started', this.route.params, this.route.snapshot.params, this.router.url);
    console.log(this.location.path());
    this.name = 'Angular2';
    this.routerSub = this.router.events.filter((event) => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .subscribe((val) => {
        // if (val instanceof NavigationEnd) {
        this.psdTemp = this.location.isCurrentPathEqualTo('/psdtut');
        // }

      });
  }
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
