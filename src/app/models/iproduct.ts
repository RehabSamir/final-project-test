export interface IProduct {

    id:number;
    name:string;
    price:number;
    categoryId:number;
    category?:string;
    quantity:number;
    ProductImgURL:string;
    Material?:string;
    details?:string;
    showImg?: boolean;
    isPurchased?:boolean;
   
}
