import { Injectable } from '@angular/core';
import { book } from './details';
import{ book1 } from './bookdetails';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private book2 = book1;
  private book3: book[]=[];
  add(tocart: book){
    console.log(tocart);
    this.book3.push(tocart);
    var i = this.book2.indexOf(tocart);
    
    if(i != -1) {
      this.book2.splice(i, 1);
      console.log(typeof i);
      console.log("helloo")
    } else {
      return false;
    }

    return true;
}
  delete( fromcart: book)
  {
    console.log(fromcart);
    this.book2.push(fromcart);
    var i = this.book3.indexOf(fromcart);

    if(i != -1) {
    this.book3.splice(i, 1); 
    console.log("helloo")
  } else{
    return false;
  }
  return true;
}
  booksview(): Observable<Array<book>>
  {
    return of(this.book2);
  }
  cartview(): Observable<Array<book>>
  {
    return of(this.book3);
  }

  getBook3 () {
    return this.book3;
  }

  getBook2 () {
    return this.book2;
  }

  constructor() { }
}

