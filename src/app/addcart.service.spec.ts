import { TestBed, inject } from '@angular/core/testing';

import { AddcartService } from './addcart.service';

describe('AddcartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcartService]
    });
  });

  it('should be created', inject([AddcartService], (service: AddcartService) => {
    expect(service).toBeTruthy();
  }));
});
