import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  formMessage:string="";
  
  constructor( private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.buildProductForm();
  }

  buildProductForm(){
    this.productForm = new FormGroup({
      firstImage:new FormControl("",[Validators.required]),
      secondImage:new FormControl("",[]),
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
      this.formMessage="Your product has been saved";
    this.productService.addNewProduct(this.productForm.value).subscribe((data) =>{
        this.productForm.reset();
        // this.router.navigate(['/products']);
    },
    err => console.error(err)
    )}else {
      this.formMessage="Please fill out the product form before submitting";
    }
  }

}
