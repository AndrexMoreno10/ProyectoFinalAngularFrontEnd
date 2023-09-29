import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: any[] = [];

  constructor() { }

  addToCart(product: any) {

    let newProduct = {
      ...product,
      quantity:0
    }
    this.cartItems.push(newProduct);

  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

   removeFromCart(productId: number) {
    const index = this.cartItems.findIndex(item => item.id === productId);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }



}
