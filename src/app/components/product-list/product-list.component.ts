import { Component, EventEmitter
  , Input, OnInit, Output } from '@angular/core';

import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CreditCardFormatPipe } from '../../pipes/credit-card-format.pipe';
import { ProductsService } from '../../services/products.service';
import { Router, RouterModule } from '@angular/router';
import { ProductsWithApiService } from '../../services/products-with-api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule , CommonModule, ProductCardDirective,
    CreditCardFormatPipe,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  
  
  productsAfterFilter:IProduct[]=[];
  categories = ['devices', 'fashion', 'products'];

  discount: string = '20%';

  clientName: string ='Rehab Samir';
date: string | number | Date | undefined;
  products: any;
  
 // productList : IProduct[];
 // date: Date;
  constructor(private Productservice: ProductsService,
    private router:Router,
    private ProductsWithApiService: ProductsWithApiService){
  
 }


//   filterByCategory(category: string) {
//      this.productsAfterFilter = this.productList.filter(product => product.category === category);
//  }

 decrement(product: IProduct) {  
   if (product.quantity > 0) {
     product.quantity--;
   }
 }

 purchaseProduct(product: IProduct) {
   product.isPurchased = true;
 }
 buyProduct(product: IProduct) {
 if (product.quantity > 0) {
   product.showImg = false;
   product.isPurchased = true;
 }
}

stockStatus(product: IProduct): string {
 if (product.quantity === 0) {
   return 'Out of stock';
 } else if (product.quantity === 1) {
   return 'Last one item';
 } else if (product.quantity === 2) {
   return 'Last two items';
 } else {
   return 'In stock';
 }
}


@Input() set filterByPriceInchiled(value:number) {
  //handel filter on static dataist
  //this.productsAfterFilter= this.Productservice.performFilter(value)

  //handel filter on Api data
  this.ProductsWithApiService.getAllproducts().subscribe({
    next: (prds) => {
      this.productsAfterFilter = prds.filter(product =>product.price<=value);
    },
    error: (err) => {
      console.log(err);
    },
  });
   
// performFilter(filterValue: number): IProduct[] {
//   return this.productList.filter((prd: IProduct) =>
//   prd.price <= filterValue
//   );
// }
}
 ngOnInit(): void {

  // //this.productsAfterFilter=this.Productservice.getAllProducts();

this.ProductsWithApiService.getAllproducts().subscribe({
  next: (prds) => {
    this.productsAfterFilter = prds;
  },
  error: (err) => {
    console.log(err);
  },
});

}
//create event
@Output() neewAddEventCart= new EventEmitter<IProduct>();

//when fire 
addToCart(pro:IProduct)
{
  //console.log(pro)
  this.neewAddEventCart.emit(pro);
}

gotodetails(prdid:number) {

  this.router.navigate(['/Prd',prdid]);
}

// onDeleteProduct(id: string) {
//   const confirmDelete = confirm('Are you sure you want to delete this product?');
//   if (confirmDelete) {
//     this.productswitApi.DeleteProduct(+id).subscribe({
//       next: () => {
//         // Filter out the deleted product from the local products array
//         this.products = this.products.filter((product: { id: number; }) => +product.id !== +id);
//         console.log('Product deleted from list');
//       },
//       error: (err: any) => {
//         console.log('Error deleting product from list:', err);
//       }
//     });
showImg: boolean = true;
toggleImage() {
  this.showImg = !this.showImg;

}
}


