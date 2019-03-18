import { TestBed } from '@angular/core/testing';

import { DesignyourqueryService } from './designyourquery.service';

describe('DesignyourqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignyourqueryService = TestBed.get(DesignyourqueryService);
    expect(service).toBeTruthy();
  });
});
