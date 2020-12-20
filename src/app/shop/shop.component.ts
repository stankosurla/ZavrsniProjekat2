import { ShopService } from './../shop.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  proizvodi: Product[];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.filterLiving();
  }

  filter(kat) {
    this.shopService.filtriranje(kat).subscribe(data => {
      this.proizvodi = data;
    });
  }

  filterLiving() {
    this.filter('living-room');
  }

  filterKitchen() {
    this.filter('kitchen');
  }

  filterBedroom() {
    this.filter('bedroom');
  }

  filterBathroom() {
    this.filter('bathroom');
  }
}
