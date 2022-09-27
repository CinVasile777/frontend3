import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductsService {
  favoriteProducts: Product[] = [];
  product:any;

  constructor() { }

  addToFavoriteProducts(product:Product){
    const exist = this.favoriteProducts.find((item)=>{
      return item.id === product.id;
    });

    if(!exist)

    this.favoriteProducts.push(product);
  }

  getProducts() {
    return this.favoriteProducts;
  }

  deleteProduct(id:any) {
    let index = this.favoriteProducts.findIndex(item => item.id === id);
    this.favoriteProducts.splice(index, 1);
  }
}
