/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSortableCopy } from './simple-sortable-copy.component';

describe('SimpleSortableCopy', () => {
  let component: SimpleSortableCopy;
  let fixture: ComponentFixture<SimpleSortableCopy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSortableCopy ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSortableCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
