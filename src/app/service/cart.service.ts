import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../interface/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cartProducts: Product[] = [];
  product = {} as Product;

  subTotalPrice : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalQuantityy :BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  totalQuantity = this.product.quantity = 1;
  
  constructor(public productService:ProductService) { }
  

  addToCart(product:Product){
    const exist = this.cartProducts.find((item)=>{
      return item.id === product.id;
    });

    if(!exist)
      
    this.cartProducts.push(product);  
    this.subTotalPriceMyCart();
  }

  getProducts() {
    return this.cartProducts;
  }

  deleteProduct(id:any) {
    let index = this.cartProducts.findIndex(item => item.id === id);
    this.cartProducts.splice(index, 1);
  }


  subTotalPriceMyCart(){

    let subTotalPriceValue :number = 0;
    let totalQuantityValue :number = 0;

    for(let currentCartItem of this.cartProducts){
      subTotalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.subTotalPrice.next(subTotalPriceValue);
    this.totalQuantityy.next(totalQuantityValue);
  }
 
}
