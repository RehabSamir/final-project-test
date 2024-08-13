import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [ProductListComponent , FormsModule],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss'
})
export class ProductsParentComponent {

  filterByPrice : number =0

  cart:IProduct[]=[]

  cartFunc(newPro: IProduct) {
    
    const cartItem = this.cart.find(item=> item.id === newPro.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      newPro.quantity = 1;
      this.cart.push(newPro);
    }
  }

  incrementQuantity(product: IProduct) {
    product.quantity++;
    product.price+=product.price
  }

  decrementQuantity(product: IProduct) {
      product.quantity--;

  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

}
