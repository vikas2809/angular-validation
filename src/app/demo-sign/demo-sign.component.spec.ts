import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSignComponent } from './demo-sign.component';

describe('DemoSignComponent', () => {
  let component: DemoSignComponent;
  let fixture: ComponentFixture<DemoSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
