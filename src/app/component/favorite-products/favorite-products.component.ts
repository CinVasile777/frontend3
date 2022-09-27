import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { FavoriteProductsService } from 'src/app/service/favorite-products.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css']
})
export class FavoriteProductsComponent implements OnInit {

  favoriteProducts = this.favoriteProductsService.getProducts();
  // deleteProduct= this.favoriteProductsService.deleteProduct;

  constructor(private favoriteProductsService:FavoriteProductsService,public cartService:CartService) { }

  ngOnInit(): void {
  }

  deleteFavoriteProduct(id:any){
    this.favoriteProductsService.deleteProduct(id);
  }

  addToCart(product:Product){
    product.quantity++;
    this.cartService.addToCart(product);
  }

}
