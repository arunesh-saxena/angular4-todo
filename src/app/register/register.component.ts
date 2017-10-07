import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
    '../containers/login-cont/login-cont.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() onregister;
  regForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regFormInit();
  }
  regFormInit = () => {
    this.regForm = this.fb.group({
      'userName': ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)])],
      'email': ['', Validators.compose([
        Validators.required,
        this.emailValidator()
      ])],
      repeatpassword: this.fb.group({
        'password': ['', Validators.compose([
          Validators.required,
        ])],
        'confirmPassword': ['', Validators.compose([
          Validators.required
        ])]
      }, {
          validator: (formGroup: FormGroup) => {
            return this.confirmPasswordValidator(formGroup);
          }
        })
    });
  }
  registerForm = (e) => {
    e.preventDefault();
    // console.log(this.regForm.controls.userName.errors);
    // console.log(this.regForm.valid);
    // console.log('checking form validation');
    if (this.regForm.valid) {
      let formData = {
        username: this.regForm.value.userName,
        email: this.regForm.value.email,
        password: this.regForm.value.repeatpassword.password
      };
      this.onregister(formData);
    }
  }
  confirmPasswordValidator(group: FormGroup) {
    let val, valid = true;

    for (let name in group.controls) {
      // console.log(val, name);
      if (val === undefined) {
        val = group.controls[name].value;
      } else {
        if (val !== group.controls[name].value) {
          valid = false;
          break;
        }
      }
    }

    if (valid) {
      return null;
    }

    return {
      confirmPassword: true
    };
  }
  equalPassword = (item) => {
    return (control: FormControl) => {
      if (this.regForm) {
        console.log(111)

        let password = control.value.password,
          confirmPassword = control.value.confirmPassword;
        console.log(password);
        console.log(confirmPassword);
        if (password !== confirmPassword) {
          return { 'confirmPassword': true };
        }
        //  return { "confirmPassword": true };
      }
      return null;
    };
  }
  emailValidator = () => {
    return (control: FormControl) => {
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      var emailVal = control.value;
      if (emailVal !== null && emailVal.length <= 5 || !EMAIL_REGEXP.test(emailVal)) {
        return { 'email': true };
      }
      return null;
    };
  }



}
