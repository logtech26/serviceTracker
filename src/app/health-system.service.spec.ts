import { TestBed } from '@angular/core/testing';

import { HealthSystemService } from './health-system.service';

describe('HealthSystemService', () => {
  let service: HealthSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
