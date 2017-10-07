import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-form-validation',
  templateUrl: 'app.formvalidation.html'
})
export class FormValidationComponent implements OnInit {
  complexForm: FormGroup;
  // public activityList = [
  // { 'name': 'hiking', 'v': true }, { 'name': 'swimming', 'v': false }, { 'name': 'running', 'v': false }];
  public activityList = ['hiking', 'swimming', 'running'];
  constructor(private _fb: FormBuilder) {
    this.complexForm = this._fb.group({
      // To add a validator, we must first convert the string value into an array.
      //  The first item in the array is the default value if any, then the next item in the array is the validator.
      //   Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName': [null, this.minValueValidator(3, 'kavi')],
      // We can use more than one validator per field. If we want to use more than one validator
      //  we have to wrap our array of validators with a Validators.compose function. Here we are using a required,
      //   minimum length and maximum length validator.
      // 'lastName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(5)])],
      'lastName': [null],
      'gender': [null],
      'activities': this._fb.group({
        'hiking': [null],
        'running': [null],
        'swimming': [null]
      }, {
          validator: (formGroup: FormGroup) => {
            return this.atLeaseOne(formGroup, 3);
          }
        })
    });
  };


  private atLeaseOne(formGroup: FormGroup, para) {
    console.log(para)
    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const control: FormControl = <FormControl>formGroup.controls[key];
        if (control.value) {
          return null;
        }
      }
    }

    return {
      validateDays: {
        valid: false
      }
    };
  }

  minValueValidator = (min: number, msg: string) => {
    return (control: FormControl) => {
      console.log(control);
      var num = +control.value;
      if (isNaN(num) || num < min) {
        return {
          minValue: { valid: false }
        };
      }
      return null;
    };
  };

  ngOnInit() {
    /* this.complexForm = this._fb.group({
       'firstName': ['arunesh'],
       'lastName': ['saxena'],
       'gender': [null, Validators.required],
       'activities': this._fb.group({
         'hiking': [null, Validators.required],
         'running': [null],
         'swimming': [null],
         'aa': this._fb.group({
           'bb': 'hello',
           'yy': 'no change'
         })
       })
     });*/
    //  this.complexForm.value.activities.hiking.setValue(false,{onlySelf:true});

    // (<FormControl>this.complexForm.controls['firstName'])
    //   .setValue('kavi', { onlySelf: true });

    // (<FormControl>this.complexForm.controls['activities'])
    //   .patchValue({ 'hiking': false, 'aa': {'bb': 'world' } });

    console.log(this.complexForm.value);
  }

  onChangeActivity(obj, event) {
    console.log(obj, event.target.checked)
  };
  submitForm(value: any) {
    console.log(value);
  }
}