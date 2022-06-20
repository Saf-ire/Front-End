import { TestBed } from '@angular/core/testing';

import { LoadscriptService } from './loadscript.service';

describe('LoadscriptService', () => {
  let service: LoadscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
