import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { FavoriteProductsService } from 'src/app/service/favorite-products.service';
import { ProductService } from 'src/app/service/product.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  product: Product = {} as Product;
  id !: number;
  formMessage:string="";
  
  constructor(public productService:ProductService, private route:ActivatedRoute,public cartService:CartService,private favoriteProductsService:FavoriteProductsService) { }

  ngOnInit(): void {
    this.readProductById();
  }

  readProductById(){
    this.id = this.route.snapshot.params['productId'];
    return this.productService.getProductById(this.id).subscribe((data:Product)=>{
      this.product = data;
    });
  }

  addToCart(product:Product){
    product.quantity++;
    this.cartService.addToCart(product);
    this.formMessage="Added";
  }

  addToFavorites(product:Product){
    this.favoriteProductsService.addToFavoriteProducts(product);
  }

}
