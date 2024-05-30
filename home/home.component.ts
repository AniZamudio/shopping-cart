import {Component, NgModule} from '@angular/core';
import * as productsData from '../assest/productos.json';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  products: any = [];
  countProducts: number = 0;
  searchTerm: string = '';
  filteredProducts: Product[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.products = (productsData as any).default;
    this.filteredProducts = this.products;
    console.log(productsData)
  }

  addToCart(product: Product): void {
    this.filteredProducts.forEach((item: Product) => {
      if (item.id === product.id){
        item.quantity++;
        this.countProducts++;
      }
    })
    //TODO Realizar el FetchData para llevarlo al componente home-shopping

  }

  removeToCart(product: Product): void {
    this.filteredProducts.forEach((item: Product) => {
      if (item.id === product.id && item.quantity > 0){
        item.quantity--;
        this.countProducts--;
      }
    })
    //TODO Realizar el FetchData para llevarlo al componente home-shopping
  }

  getProductsSelected(){
    return this.filteredProducts;
  }

  goToCart(): void {
    this.router.navigate(['shopping-cart'])
  }

  onSearch(event: Event): void {
    event.preventDefault();
    const searchTermLowerCase = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTermLowerCase) ||
      product.price.toString().includes(searchTermLowerCase) ||
      product.img.toString().includes(searchTermLowerCase)
    );
  }

}
