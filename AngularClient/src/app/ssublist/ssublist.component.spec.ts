import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsublistComponent } from './ssublist.component';

describe('SsublistComponent', () => {
  let component: SsublistComponent;
  let fixture: ComponentFixture<SsublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
