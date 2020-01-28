import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueComponent } from './addque.component';

describe('AddqueComponent', () => {
  let component: AddqueComponent;
  let fixture: ComponentFixture<AddqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
