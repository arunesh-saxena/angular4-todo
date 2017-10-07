import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEllipseComponent } from './custom-ellipse.component';

describe('CustomEllipseComponent', () => {
  let component: CustomEllipseComponent;
  let fixture: ComponentFixture<CustomEllipseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEllipseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEllipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
