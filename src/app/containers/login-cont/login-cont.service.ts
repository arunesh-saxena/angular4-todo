import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';

import { CONSTANTS } from '../../constants';

@Injectable()
export class LoginContService {
    errorMsg = '';
    constructor(private http: Http, private http2: HttpClient,
        private route: ActivatedRoute) { }


    registerUser = (data) => {
        let bodyString = JSON.stringify(data);
        return this.http2.post<any>(CONSTANTS.api.registerUser, bodyString);
    }

    loginUser = (data) => {
        let bodyString = JSON.stringify(data);
        /* let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(CONSTANTS.api.login, bodyString, options).map((res: Response) => res.json()); */
        return this.http2.post<any>(CONSTANTS.api.login, bodyString);
    }

}
