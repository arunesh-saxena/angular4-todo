import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { LoginContService } from './login-cont.service';

import { UserService } from '../../common/service/user.service';

@Component({
  selector: 'app-login-cont',
  templateUrl: './login-cont.component.html',
  styleUrls: ['./login-cont.component.scss'],
})
export class LoginContComponent implements OnInit {
  displayPage = 'login';
  serverInfo = {
    msg: '',
    success: ''
  };
  constructor(private router: Router,
    private userService: UserService,
    private securityService: LoginContService) {
  }

  ngOnInit() {
    if (this.userService.isUserLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
  goToRegister(e, term) {
    e.preventDefault();
    this.displayPage = term;

  }
  loginCall(data) {
    this.securityService.loginUser(data).subscribe(res => {
      if (res.success) {
        this.userService.setUserLoggedIn({
          username: res.data.username,
          email: res.data.email,
          id: res.data._id
        });
        this.router.navigate(['/dashboard']);
      }else {
        this.serverInfo.msg = res.message;
      }
    }, error => { console.log(error); });
  }
  loginUser(data) {
    console.log('loginUser', data);
    /* this.securityService.loginUser(data).subscribe(res => {
      if (res.success) {
        this.userService.setUserLoggedIn({
          username: res.data.username,
          email: res.data.email,
          id: res.data._id
        });
        this.router.navigate(['/dashboard']);
      }
    }, error => { console.log(error); }); */
  }
  logout = () => {
    this.userService.setUserLoggedOut();
  }
  registerForm(data) {
    this.securityService.registerUser(data).subscribe((res) => {
      this.serverInfo.success = res.success;
      if (res.success) {
        this.serverInfo.msg = `${res.data.username} created successfully`;
      } else {
        this.serverInfo.msg = res.message;
      }

    },
      error => { console.log(error); });

  }

}
