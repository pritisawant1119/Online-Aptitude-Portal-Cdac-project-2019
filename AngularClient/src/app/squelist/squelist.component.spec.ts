import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquelistComponent } from './squelist.component';

describe('SquelistComponent', () => {
  let component: SquelistComponent;
  let fixture: ComponentFixture<SquelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
