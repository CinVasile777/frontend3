import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "/server/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  
  constructor(private httpClient:HttpClient) { 
  }

  addNewProduct(product:any):Observable<Product>{
    return this.httpClient.post<Product>(this.url+'/addProduct',JSON.stringify(product),this.httpOptions);
  }

  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url+'/all');
  }

  getProductById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.url+'/product/'+id);
  }

  getAllProductByBrandAndGender(brand:string,gender:string){
    return this.httpClient.get(this.url+'/category?'+brand+'&'+gender);
  }

  deleteProduct(id:any):Observable<Product>{
    return this.httpClient.delete<Product>(this.url+'/deleteProduct/'+id,this.httpOptions);
  }

  updateProduct(product:any):Observable<Product>{
    return this.httpClient.put<Product>(this.url+'/editProduct/',JSON.stringify(product),this.httpOptions);
  }

}
