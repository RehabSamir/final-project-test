import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule , CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  productList : IProduct[];
  productsAfterFilter:IProduct[]=[];

  set filterByName(value:string) {
    this.productsAfterFilter= this.performFilter(value)
    }

  constructor(){
   this.productList =[

     {
       id: 1,
       name: 'Tefal Steam Iron',
       price: 2245.00,
       categoryId: 1,
       category:'devices',
       quantity: 3,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/301999/1.jpg?0910',
       details: 'Steam Plus 2600 W, 45g/min, Auto-off - FV2869E2'
     },
     {
       id: 2,
       name: 'Samsung 75" DU7000 Crystal UHD 4K TV',
       price: 34999.00,
       categoryId: 1,
       category:'devices',
       quantity: 0,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/517776/1.jpg?7229',
       details: 'Customized colors to give you a true-to-life image'
     },
     {
       id: 3,
       name: 'Dove Hand Wash Coconut 300ML',
       price: 64.95,
       categoryId: 2,
       category:'products',
       quantity: 50,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/932722/1.jpg?2835',
       details: 'Dove Restoring Ritual Hand Wash with Coconut Oil and Almond Milk leaves skin feeling smooth and soft.'
     },
     {
       id: 4,
       name: 'Casual Women Sneakers Leather',
       price: 472.50,
       categoryId:3,
       category:'fashion',
       quantity: 10,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/212588/1.jpg?4434',
       details: "Women's leather sneakers made from the best and finest leather A new and more than wonderful design that suits all ages and tastes A light and comfortable sole ensuring the best foot comfort experience"
     },
     {
       id: 5,
       name: 'Kiriazi E250N 6/3 Digital Freezer - 6 Drawers',
       price: 27700.00,
       categoryId:1,
       category:'devices',
       quantity: 15,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/4705/1.jpg?6400',
       details: "Have you been searching out practical and high-quality digital freezers?"
     },
     {
       id: 6,
       name: 'BLACK+DECKER AF600 Air',
       price: 6399.00,
       categoryId:1,
       category:'devices',
       quantity: 20,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/749898/1.jpg?2091',
       details: "In an age of fast paced, busy and stressful life, a home cooked meal with the right balance of flavour and health is often left to be desired. Introducing the AEROFRY from Black+Decker. Built around the principle of Rapid Air Convection heating system, it is equipped with a 1.2Kg food basket with a 5.0L capacity to cook delicious recipes"
     },
     {
       id: 7,
       name: "A Two-piece Girl's Dress",
       price: 499.00,
       categoryId:3,
       category:'fashion',
       quantity: 10,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/222593/1.jpg?7706',
       details: "A two-piece girl's dress, very elegant and light in summer, gives elegance and elegance when worn, suitable for all outings. The color is red and black. The material of the T-shirt is of imported ribbed ribbed fabric and the pocket is made of soft lycra to give the child a sense of softness "
     },
     {
       id: 8,
       name: "Defacto Boy Cotton Hat",
       price: 239.00,
       categoryId:3,
       category:'fashion',
       quantity: 12,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/437079/1.jpg?8704',
       details: "Boy Cotton Hat"
     },
     {
       id: 9,
       name: 'Karimed GOLDEN STRAND 3pcs',
       price: 249.00,
       categoryId: 2,
       category:'products',
       quantity: 9,
       ProductImgURL: 'https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/199052/1.jpg?1796',
       details: "Very dry hair can be difficult to manage, lacking in shine and moisture. Inspired by the aloe plant that never seems to dry, GOLDEN STRAND Conditioner for very dry hair helps optimize moisture balance, intensely conditioning for healthy looking hair.neem, amla oils to help envelop and smooth dry, coarse and damaged hair. Paraben-free  and sulfate free formula is formulated specifically for color and chemically treated hair."
     }
     
   

   ]
 }


    ngOnInit(): void {
      this.productsAfterFilter=this.productList;
    }

    
    performFilter(filterValue: string): IProduct[] {
      filterValue = filterValue.toLowerCase();
      return this.productList.filter((prd: IProduct) =>
      prd.name.toLowerCase().includes(filterValue)
      );
    }
}
