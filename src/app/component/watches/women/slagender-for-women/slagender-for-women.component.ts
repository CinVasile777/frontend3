import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { FavoriteProductsService } from 'src/app/service/favorite-products.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-slagender-for-women',
  templateUrl: './slagender-for-women.component.html',
  styleUrls: ['./slagender-for-women.component.css']
})
export class SlagenderForWomenComponent implements OnInit {

  productsList: Product[] = [];
  p: number = 1;
  category!: any;
  gender!:any;
  constructor(public productService:ProductService,private favoriteProductsService:FavoriteProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     this.category = params.get('brand');
     this.gender = params.get('gender');
      });
      this.getAllProductByBrandAndGender(this.category,this.gender)
   }
 

   getAllProductByBrandAndGender(brand:string,gender:string){
     this.productService.getAllProductByBrandAndGender(brand,gender).subscribe((data:any) =>{
       this.productsList = data;
     },
     err => console.error(err)
     )
   }

  addToFavorites(product:Product){
    this.favoriteProductsService.addToFavoriteProducts(product);
  }


}
