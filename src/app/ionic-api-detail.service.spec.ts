import { TestBed } from '@angular/core/testing';

import { IonicApiDetailServiceService } from './ionic-api-detail.service';

describe('IonicApiDetailServiceService', () => {
  let service: IonicApiDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicApiDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
