import { CartService } from './../cart.service';
import { Product } from './../product';
import { Item } from './../item';
import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  cartItems = [];

  cartTotal = 0;

  constructor(
    private cartService: CartService,
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartTotal = 0;
    this.items.forEach(item => {
      this.cartTotal += (Number(item.qty * item.price));
      console.log(item.qty);
    });

  }

  /*  loadCartItems() {
     this.shopService.getCartItems().subscribe((items: Item[]) => {
       this.cartItems = items;
       this.calcCartTotal();
     })
   }
 
   calcCartTotal() {
     this.cartTotal = 0
     this.cartItems.forEach(item => {
       this.cartTotal += (item.qty * item.price)
     })
   } */
}
