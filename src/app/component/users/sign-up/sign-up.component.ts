import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private route:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(){
    this.signUpForm = new FormGroup({
      firstName:new FormControl("",[]),
      lastName:new FormControl("",[]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
    })
  }

  submitSignUp(){
    this.userService.addNewUser(this.signUpForm.value).subscribe((data) =>{
      alert("Sign Up successfull");
      this.signUpForm.reset();
      this.route.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
  }
  
}
