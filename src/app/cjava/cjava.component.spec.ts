import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CjavaComponent } from './cjava.component';

describe('CjavaComponent', () => {
  let component: CjavaComponent;
  let fixture: ComponentFixture<CjavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CjavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
