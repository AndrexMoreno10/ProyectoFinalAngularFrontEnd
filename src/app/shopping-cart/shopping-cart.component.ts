import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartItems: any[];

  constructor(private cartService: ShoppingCartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  removeFromCart(itemId: number) {
    
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems();
  }

  incrementQuantity(item: any): number {
    // item.quantity = 1;
    return item.quantity++;
    console.log(item.quantity + "mas")
     // Incrementar la cantidad del producto
  }

  decrementQuantity(item: any): number  {
    if (item.quantity > 1) {
      item.quantity--;
      // Decrementar la cantidad del producto (si es mayor que 1)
    }
    return item.quantity
  }

}
