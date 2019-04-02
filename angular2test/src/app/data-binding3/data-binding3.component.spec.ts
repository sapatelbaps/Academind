import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding3Component } from './data-binding3.component';

describe('DataBinding3Component', () => {
  let component: DataBinding3Component;
  let fixture: ComponentFixture<DataBinding3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBinding3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBinding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
