import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsWithApiService } from '../../services/products-with-api.service';
import { IProduct } from '../../models/iproduct';
import { switchMap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule , CommonModule,],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  product: IProduct = {
    name: '', price: 0, quantity: 0,
    id: 0,
    categoryId: 0,
    ProductImgURL: ''
  };
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsWithApiService
  ) {}

  ngOnInit(): void {
    // Handle edit mode based on URL parameter
    this.route.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id');
        if (productId) {
          this.isEditMode = true;
          return this.productsService.getPrdByID(productId);
        }
        return [null]; // Return null if no ID is found
      })
    ).subscribe((product: IProduct | null) => {
      if (product) {
        this.product = product;
      }
    });
  }

  saveProduct(): void {
    if (this.isEditMode) {
        this.addProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct(): void {
    this.productsService.AddProduct(this.product).subscribe({
      next: (newProduct) => {
        console.log('Product added:', newProduct);
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        console.log('Error adding product:', err);
      }
    });
  }

  updateProduct(): void {
    this.productsService.UpdateProduct(this.product.id, this.product).subscribe({
      next: (updatedProduct) => {
        console.log('Product updated:', updatedProduct);
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        console.log('Error updating product:', err);
      }
    });
  }

  deleteProduct(): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.productsService.DeleteProduct(this.product.id).subscribe({
        next: () => {
          console.log('Product deleted');
          this.router.navigate(['/Products']);
        },
        error: (err) => {
          console.log('Error deleting product:', err);
        }
      });
    }
  }
}
