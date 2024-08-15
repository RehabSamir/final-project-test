import { TestBed } from '@angular/core/testing';

import { ProducttsService } from './productts.service';

describe('ProducttsService', () => {
  let service: ProducttsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducttsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
