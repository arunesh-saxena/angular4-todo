import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsdtutComponent } from './psdtut.component';

describe('PsdtutComponent', () => {
  let component: PsdtutComponent;
  let fixture: ComponentFixture<PsdtutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsdtutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsdtutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
