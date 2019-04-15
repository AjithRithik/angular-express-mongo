import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScollRepeatComponent } from './scoll-repeat.component';

describe('ScollRepeatComponent', () => {
  let component: ScollRepeatComponent;
  let fixture: ComponentFixture<ScollRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScollRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScollRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
