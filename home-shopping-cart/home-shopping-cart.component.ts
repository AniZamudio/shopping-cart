import {Component, OnInit} from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

@Component({
  selector: 'app-home-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './home-shopping-cart.component.html',
  styleUrl: './home-shopping-cart.component.css'
})
export class HomeShoppingCartComponent {

  constructor() { }

  ngOnInit(): void {
    /*this.homePage.getProductsSelected().subscribe(products =>{
      this.cartProducts = products.filter(product => product.quantity! > 0)
      console.log(this.cartProducts)
    })*/
    //TODO: Consumir Servicio para mostrar en el carrito de compras
  }
}
