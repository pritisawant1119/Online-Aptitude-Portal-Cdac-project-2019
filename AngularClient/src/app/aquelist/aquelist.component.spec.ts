import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquelistComponent } from './aquelist.component';

describe('AquelistComponent', () => {
  let component: AquelistComponent;
  let fixture: ComponentFixture<AquelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
