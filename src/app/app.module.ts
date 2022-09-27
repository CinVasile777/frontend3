import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './component/details/details.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button'; 
import {AccordionModule} from 'primeng/accordion';
import { CartComponent } from './component/cart/cart.component';
import { FavoriteProductsComponent } from './component/favorite-products/favorite-products.component';
import { OrderComponent } from './component/order/order.component';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import { MenubarModule } from 'primeng/menubar';
import { SlazengerComponent } from './component/watches/men/slazenger/slazenger.component';
import { LoginComponent } from './component/users/login/login.component';
import { SignUpComponent } from './component/users/sign-up/sign-up.component';
import { SlagenderForWomenComponent } from './component/watches/women/slagender-for-women/slagender-for-women.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './component/home/home.component';
import { RolexComponent } from './component/watches/men/rolex/rolex.component';
import { RolexForWomenComponent } from './component/watches/women/rolex-for-women/rolex-for-women.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    DetailsComponent,
    AddProductComponent,
    AdminComponent,
    UpdateProductComponent,
    CartComponent,
    FavoriteProductsComponent,
    OrderComponent,
    SlazengerComponent,
    LoginComponent,
    SignUpComponent,
    SlagenderForWomenComponent,
    HomeComponent,
    RolexComponent,
    RolexForWomenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    InputSwitchModule,
    MenubarModule,
    NgxPaginationModule,
  
    
  ],
  providers: [CartComponent],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
