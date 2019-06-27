import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpythonComponent } from './tpython.component';

describe('TpythonComponent', () => {
  let component: TpythonComponent;
  let fixture: ComponentFixture<TpythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
