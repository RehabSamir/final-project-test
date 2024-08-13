import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  url:string=`${environment.baseUrl}/Products`;
  httpHeader = {};

// api => httpclient => methods (get,post,put|patch,delete)
  constructor(private httpclient: HttpClient ) {this.httpHeader = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }; }

  getAllproducts():Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${this.url}`);
  }
 // url param
  getPrdByID(prdID:string):Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${this.url}/${prdID}`)
  }

  // query string
  searchWithProductCategory(cat:string):Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${this.url}?category=${cat}`);
  }
  AddProduct(newproduct: IProduct): Observable<IProduct> {
    return this.httpclient.post<IProduct>(this.url, newproduct, this.httpHeader)
   }

  //  UpdateProduct(id: number, updatedProduct: IProduct): Observable<IProduct> {
  //   return this.httpclient.put<IProduct>(`${this.url}/${id}`, updatedProduct, this.httpHeader);
  // }

  // DeleteProduct(id: number): Observable<void> {
  //   return this.httpclient.delete<void>(`${this.url}/${id}`, this.httpHeader);
  // }

}
