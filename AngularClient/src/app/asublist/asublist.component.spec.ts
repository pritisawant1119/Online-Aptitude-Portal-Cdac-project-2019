import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsublistComponent } from './asublist.component';

describe('AsublistComponent', () => {
  let component: AsublistComponent;
  let fixture: ComponentFixture<AsublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
