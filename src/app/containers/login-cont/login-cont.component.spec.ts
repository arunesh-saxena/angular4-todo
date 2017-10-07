/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginContComponent } from './login-cont.component';

describe('LoginContComponent', () => {
  let component: LoginContComponent;
  let fixture: ComponentFixture<LoginContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
