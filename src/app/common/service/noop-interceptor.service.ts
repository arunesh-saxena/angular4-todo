import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { LoaderService } from '../loader/loader.service';
@Injectable()
export class NoopInterceptorService implements HttpInterceptor {
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      'Content-Type': 'application/json'
    };
    // const headers2 = req.headers.set('Content-Type', 'application/json');
    const options = req.clone({ setHeaders: headers, withCredentials: true });
    this.showLoader();
    return next.handle(options).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.loaderService.popUp(err);
      }
    }).finally(() => {
      this.hideLoader();
    });
  }


}