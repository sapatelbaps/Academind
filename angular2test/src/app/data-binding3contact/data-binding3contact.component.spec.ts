import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataBinding3contactComponent } from './data-binding3contact.component';

describe('DataBinding3contactComponent', () => {
  let component: DataBinding3contactComponent;
  let fixture: ComponentFixture<DataBinding3contactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBinding3contactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBinding3contactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
