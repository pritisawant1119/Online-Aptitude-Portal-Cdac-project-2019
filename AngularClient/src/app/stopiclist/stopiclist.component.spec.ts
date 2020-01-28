import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopiclistComponent } from './stopiclist.component';

describe('StopiclistComponent', () => {
  let component: StopiclistComponent;
  let fixture: ComponentFixture<StopiclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopiclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
