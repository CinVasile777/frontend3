import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(public productService:ProductService ,private route:ActivatedRoute) { }

  productForm!: FormGroup;
  productId!: number;
  product: Product = {} as Product;
  formMessage: string = '';

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe((data:Product) => {
      this.product = data;
    })

    this.productForm = new FormGroup({
      firstImage:new FormControl("",[Validators.required]),
      secondImage:new FormControl("",[Validators.required]),
      lastImage:new FormControl("",[]),
      name:new FormControl("",[Validators.required]),
      price:new FormControl("",[Validators.required]),
      brand:new FormControl("",[Validators.required]),
      belt:new FormControl("",[Validators.required]),
      gender:new FormControl("",[Validators.required]),
      battery:new FormControl("",[Validators.required]),
          
  });
  }

  submitProduct(){
    if(this.productForm.valid){
      this.formMessage="Your product has been update";
    this.productService.updateProduct(this.product).subscribe((data) =>{
      console.log('product updated')
    },
    err => console.error(err)
    )}else {
      this.formMessage="Please update the product form before submitting";
    }
  }

}
