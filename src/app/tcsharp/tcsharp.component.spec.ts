import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsharpComponent } from './tcsharp.component';

describe('TcsharpComponent', () => {
  let component: TcsharpComponent;
  let fixture: ComponentFixture<TcsharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcsharpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
