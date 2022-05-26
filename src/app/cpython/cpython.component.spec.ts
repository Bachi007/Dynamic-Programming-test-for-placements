import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpythonComponent } from './cpython.component';

describe('CpythonComponent', () => {
  let component: CpythonComponent;
  let fixture: ComponentFixture<CpythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
