import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { UserService } from '../common/service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this.router.navigate(['login']);
    console.log(this.user.isUserLoggedIn());
    if (this.user.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
