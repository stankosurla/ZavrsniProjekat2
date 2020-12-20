import { CartService } from './../../cart.service';
import { ShopService } from './../../shop.service';
import { Product } from './../../product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {

  @Input() productItem: Product;

  jedanProizvod: Product;
  sviProizvodi: Product[];
  id: number;
  kolicina = { value: 1 }

  constructor(private shopService: ShopService,
    private cartService: CartService,
    private route: ActivatedRoute) { }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  getSve() {
    this.shopService.getAll().subscribe(
      (data: Product[]) => this.sviProizvodi = data,
      (err) => console.log(err)
    );
  }
  getId() {
    this.route.paramMap.subscribe(
      (params) => this.id = Number(params.get('id'))
    );
    return this.id;
  }
  pronadjiJedan() {
    for (let i in this.sviProizvodi) {
      if (this.sviProizvodi[i].id === this.id) {
        this.jedanProizvod = this.sviProizvodi[i];
      }
    }
  }
  vratiJedan() {
    this.getSve();
    this.getId();
    setTimeout(() => {
      this.pronadjiJedan();
    }, 500);

  }

  ngOnInit(): void {
    this.vratiJedan();
  }


}
