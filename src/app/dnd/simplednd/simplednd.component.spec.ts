/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpledndComponent } from './simplednd.component';

describe('SimpledndComponent', () => {
  let component: SimpledndComponent;
  let fixture: ComponentFixture<SimpledndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpledndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpledndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
