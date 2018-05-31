import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { book } from './details';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));


  it('should add books to cart', inject([CartService], (service: CartService) => {
    const tocart: book =                   
    { name: 'def', genre: 'thriller' }; 
      // console.log(service.add(this.tocart));
    expect(service.add(this.tocart)).toBeTruthy();
  }));

  it('should delete books from cart', inject([CartService], (service: CartService) => {
    const fromcart: book =                   
    { name: 'def', genre: 'thriller' }; 
    expect(service.delete(this.fromcart)).toBeTruthy();
  }));

});
