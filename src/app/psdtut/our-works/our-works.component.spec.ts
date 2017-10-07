import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorksComponent } from './our-works.component';

describe('OurWorksComponent', () => {
  let component: OurWorksComponent;
  let fixture: ComponentFixture<OurWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
