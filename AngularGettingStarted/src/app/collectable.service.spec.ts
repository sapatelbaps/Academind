import { TestBed } from '@angular/core/testing';

import { CollectableService } from './collectable.service';

describe('CollectableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectableService = TestBed.get(CollectableService);
    expect(service).toBeTruthy();
  });
});
