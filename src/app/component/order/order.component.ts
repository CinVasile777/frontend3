import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

interface County {
  name: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  County: County[] = [];
  selectedCounty1!: County;
  checked2: boolean = true;

  orderForm!: FormGroup;
  formMessage:string="";

  subTotalPrice :number = 0;
  totalPrice:number=0;

  constructor(private orderService:OrderService,private router:Router) { 
  }

  ngOnInit(): void {
    this.romanianCounty();
    this.buildOrderForm();
  }

  romanianCounty(){
    this.County = [
      {name: 'Alba'},
      {name: 'Arad'},
      {name: 'Argeș'},
      {name: 'Bacău'},
      {name: 'Bihor'},
      {name: 'Bistrița-Năsăud'},
      {name: 'Botoșani'},
      {name: 'Brașov'},
      {name: 'Brăila'},
      {name: 'București'},
      {name: 'Buzău'},
      {name: 'Caraș-Severin'},
      {name: 'Călărași'},
      {name: 'Cluj'},
      {name: 'Constanța'},
      {name: 'Covasna'},
      {name: 'Dâmbovița'},
      {name: 'Dolj'},
      {name: 'Galați'},
      {name: 'Giurgiu'},
      {name: 'Gorj'},
      {name: 'Harghita'},
      {name: 'Hunedoara'},
      {name: 'Ialomița'},
      {name: 'Iași'},
      {name: 'Ialomița'},
      {name: 'Ilfov'},
      {name: 'Maramureș'},
      {name: 'Mehedinți'},
      {name: 'Mureș'},
      {name: 'Neamț'},
      {name: 'Olt'},
      {name: 'Satu Mare'},
      {name: 'Sălaj'},
      {name: 'Sibiu'},
      {name: 'Suceava'},
      {name: 'Teleorman'},
      {name: 'Timiș'},
      {name: 'Tulcea'},
      {name: 'Vaslui'},
      {name: 'Vâlcea'},
      {name: 'Vrancea'}
     
  ];
  }

  buildOrderForm(){
    this.orderForm = new FormGroup({
      individual:new FormControl("Persoană fizică",[]),
      legalEntity:new FormControl("",[]),
      firstName:new FormControl("",[Validators.required]),
      lastName:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required]),
      postalCode:new FormControl("",[Validators.required]),
      city:new FormControl("",[Validators.required]),
      county:new FormControl("",[]),
      courier:new FormControl("Prin curier",[]),
      postal:new FormControl("",[]),
      email:new FormControl("",[Validators.required]),
      phone:new FormControl("",[Validators.required]),
      cashOnDelivery:new FormControl("Ramburs",[Validators.required]),
    });
  }

  submitOrder(){
    if(this.orderForm.valid){
      this.formMessage="Saved command";
    this.orderService.addNewOrder(this.orderForm.value).subscribe((data) =>{
        this.orderForm.reset();
        // this.router.navigate(['/products']);
    },err => console.error(err)

    )}else {
      this.formMessage="Please fill out the order form before sending";
    }
  }
 

}
