/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragulaTestComponent } from './dragula-test.component';

describe('DragulaTestComponent', () => {
  let component: DragulaTestComponent;
  let fixture: ComponentFixture<DragulaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
