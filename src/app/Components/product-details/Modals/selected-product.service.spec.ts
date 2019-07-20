import { TestBed } from '@angular/core/testing';

import { SelectedProductService } from '../../../Services/selected-product.service';

describe('SelectedProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedProductService = TestBed.get(SelectedProductService);
    expect(service).toBeTruthy();
  });
});
