import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = this.cartService.getProducts();
  
  totalPrice:number=0;
  
   
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  delete(id:any){
    this.cartService.deleteProduct(id)
  }

  decrement(product:Product){
    if(product.quantity >1){
      product.quantity--;
    }
  }

  increment(product:Product){
    product.quantity++;
  }

  subTotal(){
    this.cartService.subTotalPriceMyCart();
  }


 
}
