import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CONSTANTS } from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private userLoggedIn;
  private userData = {};
  constructor(private http: HttpClient) {
    this.userLoggedIn = false;
  }

  setUserLoggedIn = (data) => {
    this.userLoggedIn = true;
    this.setUserData(data);
  }
  setUserLoggedOut = () => {
    return this.http.get<any>(CONSTANTS.api.logout);


  }
  setUserData = (user) => {
    if (Object.keys(user).length) {
      this.userData = {
        username: user.username,
        email: user.email,
        id: user.id
      };
      localStorage.setItem('userData', JSON.stringify(this.userData));
    } else {
      this.userLoggedIn = false;
      this.userData = {};
      localStorage.removeItem('userData');
    }
  }

  isUserLoggedIn = () => {
    return localStorage.hasOwnProperty('userData');
  }
}
