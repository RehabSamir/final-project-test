import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,ProductsComponent,
    ProductListComponent,HeaderComponent , ProductsParentComponent,
    NotFoundPageComponent,ProductDetailsComponent,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eCommerce-Standalone';
}
