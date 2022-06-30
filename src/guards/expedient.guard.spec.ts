import { TestBed } from '@angular/core/testing';

import { ExpedientGuard } from './expedient.guard';

describe('ExpedientGuard', () => {
  let guard: ExpedientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExpedientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
