import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExceedComponent } from './file-exceed.component';

describe('FileExceedComponent', () => {
  let component: FileExceedComponent;
  let fixture: ComponentFixture<FileExceedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileExceedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
