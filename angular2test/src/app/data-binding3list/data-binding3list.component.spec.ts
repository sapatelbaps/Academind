import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding3listComponent } from './data-binding3list.component';

describe('DataBinding3listComponent', () => {
  let component: DataBinding3listComponent;
  let fixture: ComponentFixture<DataBinding3listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBinding3listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBinding3listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
