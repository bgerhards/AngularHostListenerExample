import { TestBed } from '@angular/core/testing';

import { GlobalDataManagerService } from './global-data-manager.service';

describe('GlobalDataManagerService', () => {
  let service: GlobalDataManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDataManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
