import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-simple-form',
  templateUrl: 'app.simpleform.html'
})
export class SimpleFormComponent {
  // Here we are implementing the submitForm function. All we are doing for right now is spitting out the
  // details of the form to our console.
  // firstName: string = 'Arunesh';

  public activities = ['hiking', 'swimming', 'running'];
  user = {
    firstName: 'Arunesh',
    lastName: 'Saxena',
    gender: 'Male',
    activities : {
          hiking: true,
          swimming: false,
          running: false
    }
  };


  constructor() {

    // console.log(this.user);
  }

  submitForm(form: any): void {

    console.log('Form Data: ');
    console.log(form);
    console.log(this.user);
  };
}