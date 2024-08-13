import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/iproduct';
import { ProductsWithApiService } from '../../services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  IDs: number[] = [];
  currentIndex: number = 0;
  currentProductID: number = 0;
  searchArray: IProduct[] = [];

  product: IProduct | undefined = undefined;
  // ActivedRoute
  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router,
    private ProductsWithApiService: ProductsWithApiService
  ) {}
  ngOnInit(): void {
    

    this.activatedroute.paramMap.subscribe((observer) => {
      this.currentProductID = Number(observer.get('productID')) || 0;
      console.log(this.currentProductID)
      //data from productservice

        // let foundProduct = this.productservice.getPrdByID(this.currentProductID);
        // if (foundProduct) {
        //   this.product = foundProduct;
        // } else {
        //   alert('Product not found');
        // }

      //data from API

      this.ProductsWithApiService.getPrdByID(this.currentProductID.toString())
      .subscribe((prd) => {
        this.product = prd
        console.log(prd)
      });
    });

    this.IDs = this.productservice.getPrdIDs();
    console.log(this.IDs)
  }

  prevFunc() {
    this.currentIndex = this.IDs.indexOf(this.currentProductID);
    this.router.navigate(['/Prd', this.IDs[--this.currentIndex]]);
    console.log(this.currentIndex )
  }
  nextFunc() {
    this.currentIndex = this.IDs.indexOf(this.currentProductID);
    this.router.navigate(['/Prd', this.IDs[++this.currentIndex]]);
    console.log(this.currentIndex )
  }

  searchCategory(category: string) {
    this.ProductsWithApiService.searchWithProductCategory(category).subscribe({
      next: (data) => {
        this.searchArray = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
