import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private http:HttpClient,private route:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(){
    this.loginForm = new FormGroup({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
    })
  }

  submitLogin(){
    // this.userService.getUserByEmailAndPassword().subscribe(data=>{
    //   const user = data['find']((u:any)=>{
    //     return u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
    //   });
    //   if(user){
    //     alert("Login Success");
    //     this.loginForm.reset();
    //     this.route.navigate(['/products'])
    //   }else{
    //     alert("User not found");
    //   }
    // },err=>{
    //   alert("Something went wrong")
    // })
  }


}
