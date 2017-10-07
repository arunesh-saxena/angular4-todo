import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPageNaviationComponent } from './in-page-naviation.component';

describe('InPageNaviationComponent', () => {
  let component: InPageNaviationComponent;
  let fixture: ComponentFixture<InPageNaviationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPageNaviationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPageNaviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
