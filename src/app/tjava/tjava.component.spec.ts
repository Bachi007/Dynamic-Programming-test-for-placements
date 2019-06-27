import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjavaComponent } from './tjava.component';

describe('TjavaComponent', () => {
  let component: TjavaComponent;
  let fixture: ComponentFixture<TjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
