import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtopiclistComponent } from './atopiclist.component';

describe('AtopiclistComponent', () => {
  let component: AtopiclistComponent;
  let fixture: ComponentFixture<AtopiclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtopiclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtopiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
