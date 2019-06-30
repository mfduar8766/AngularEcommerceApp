import { TestBed } from '@angular/core/testing';

import { RecomendedProductsService } from './recomended-products.service';

describe('RecomendedProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecomendedProductsService = TestBed.get(RecomendedProductsService);
    expect(service).toBeTruthy();
  });
});
