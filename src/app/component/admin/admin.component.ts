import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id!: number;
  found!: boolean;

  product!: Product;
  formMessage:string="";

  constructor(private httpClient:HttpClient,private productService:ProductService,private route:ActivatedRoute) { }

  onIdKeyUp(event:any){
    this.id=event.target.value;
    this.found=false;
  }

  getProduct(){
      this.productService.getProductById(this.id).subscribe(
        (data:Product) =>{
          console.log(data)
          this.product = data;
          this.found=true;
        }
      ) 
      // if(this.found == false){
    //   this.formMessage="The product does not exist";
    // }  
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((data)=>{
      window.location.reload();
      console.log("Product deleted")
    })
  }

  ngOnInit(): void {
    
  }

}
