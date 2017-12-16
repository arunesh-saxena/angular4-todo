import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../containers/login-cont/login-cont.component.css']
})
export class LoginComponent implements OnInit {

  @Input() onlogin: Function;
  @Output('onLoginCall') goLogin: EventEmitter<any> = new EventEmitter<any>();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  @ViewChild('username') formUserName;
  ngOnInit() {
    this.loginFormInit();
  }
  loginFormInit = () => {
    this.loginForm = this.fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  loginUser(e) {
    e.preventDefault();
    // this.loginForm.get('userName').value;
    // this.loginForm.setValue({'userName':'hello','password':'dsds'});
    // this.loginForm.patchValue({'userName':'hellodd'});/* dose not check missing values */

    if (this.loginForm.valid) {
      const loginData = {
        'username': this.loginForm.get('userName').value,
        'password': this.loginForm.get('password').value
      }
      // this.onlogin(loginData);
      this.goLogin.emit(loginData);
    }
  }

}
