import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { Ecommerce } from '../../models/ecommerce';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  shoping: Store = new Store(
    'Labtops store',
    'https://picsum.photos/300/200',
    ["Dell" , "Lenovo"]
  );


  product: IProduct = {
    id: 3,
    name: "product 1",
    quantity: 3,
    price: 1000,
    ProductImgURL: 'https://picsum.photos/300/200',
    categoryId: 1,
    Material: ''
  };

  category : ICategory ={
    Id : 1 ,
    name : "category 1"
  }

  ecom = Ecommerce;

}
