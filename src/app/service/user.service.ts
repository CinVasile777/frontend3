import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "/server/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  
  constructor(private httpClient:HttpClient) { 
  }

  addNewUser(user:any):Observable<User>{
    return this.httpClient.post<User>(this.url+'/addUser',JSON.stringify(user),this.httpOptions);
  }

  getUserByEmailAndPassword(email:string,password:string):Observable<User>{
    return this.httpClient.get<User>(this.url+'/login/'+email+'/'+password);
  }
}
