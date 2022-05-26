import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtmlComponent } from './thtml.component';

describe('ThtmlComponent', () => {
  let component: ThtmlComponent;
  let fixture: ComponentFixture<ThtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
