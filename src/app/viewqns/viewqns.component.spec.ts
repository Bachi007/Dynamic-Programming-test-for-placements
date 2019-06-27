import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqnsComponent } from './viewqns.component';

describe('ViewqnsComponent', () => {
  let component: ViewqnsComponent;
  let fixture: ComponentFixture<ViewqnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
