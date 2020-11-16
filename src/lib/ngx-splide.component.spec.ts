import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSplideComponent } from './ngx-splide.component';

describe('NgxSplideComponent', () => {
  let component: NgxSplideComponent;
  let fixture: ComponentFixture<NgxSplideComponent>;

  beforeEach(async(() => {
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
