import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductsSubject = new  BehaviorSubject<Product[]>([]);
  cartProducts$ = this.cartProductsSubject.asObservable()

  private cartProducts: Product[] = [];
/*
  addToCart(product: Product): void {
    const foundIndex = this.cartProducts.findIndex()
  }*/
}
