import { TestBed } from '@angular/core/testing';

import { RecepieDetailServiceService } from './ionic-api-detail.service';

describe('RecepieDetailServiceService', () => {
  let service: RecepieDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepieDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
