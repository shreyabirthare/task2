import { Component, OnInit } from '@angular/core';
import { book } from './details';
import { book1 } from './bookdetails';
import { CartService  } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BOOK MANAGEMENT';
  book2: Array<book>;
  book3: Array<book>;


constructor ( private cartvar: CartService) {}
ngOnInit () {
  this.book2 = this.cartvar.getBook2();
  this.book3 = this.cartvar.getBook3();
 
  this.cartvar.booksview().subscribe(function(newval){this.book2= newval } );
  this.cartvar.cartview().subscribe(function(newval){ this.book3= newval} );
}

}

