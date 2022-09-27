import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interface/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = "/server/orders";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  
  constructor(private httpClient:HttpClient) { }

  addNewOrder(order:any):Observable<Order>{
    return this.httpClient.post<Order>(this.url+'/addOrder/',JSON.stringify(order),this.httpOptions);
  }
}
