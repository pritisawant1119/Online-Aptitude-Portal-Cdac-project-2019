import { TestBed, inject } from '@angular/core/testing';

import { SfeedbackService } from './sfeedback.service';

describe('SfeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SfeedbackService]
    });
  });

  it('should be created', inject([SfeedbackService], (service: SfeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
