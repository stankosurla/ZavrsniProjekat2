import { Item } from './item';
import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {



  constructor(private http: HttpClient) {
  }
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  proizvodi: Product[];

  getAll() {
    return this.http.get('api/proizvodi', {
      headers: this.headers
    });
  }

  filtriranje(kateg): Observable<Product[]> {
    return this.http.get<Product[]>('api/proizvodi')
      .pipe(map(res => {
        let nizSvih = new Array<Product>();
        res.forEach(element => {
          nizSvih.push(new Product(element));
        });
        let nizKategorija = new Array<Product>();
        nizSvih.forEach(proizvod => {
          if (proizvod.category === kateg) {
            nizKategorija.push(proizvod);
          }
        })
        return nizKategorija;
      }))
  }

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>('api/proizvodi/cart').pipe(
      map((result: any[]) => {
        let cartItems: Item[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new Item(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post('api/proizvodi', { product });
  }

}
