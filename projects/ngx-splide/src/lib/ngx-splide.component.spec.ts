import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxSplideComponent } from './ngx-splide.component';

describe('NgxSplideComponent', () => {
  let component: NgxSplideComponent;
  let fixture: ComponentFixture<NgxSplideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSplideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSplideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
