import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetopicComponent } from './updatetopic.component';

describe('UpdatetopicComponent', () => {
  let component: UpdatetopicComponent;
  let fixture: ComponentFixture<UpdatetopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
