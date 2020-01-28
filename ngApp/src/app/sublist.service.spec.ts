import { TestBed, inject } from '@angular/core/testing';

import { SublistService } from './sublist.service';

describe('SublistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SublistService]
    });
  });

  it('should be created', inject([SublistService], (service: SublistService) => {
    expect(service).toBeTruthy();
  }));
});
