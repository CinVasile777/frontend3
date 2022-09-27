import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailsComponent } from './component/details/details.component';
import { FavoriteProductsComponent } from './component/favorite-products/favorite-products.component';
import { HomeComponent } from './component/home/home.component';
import { OrderComponent } from './component/order/order.component';
import { ProductComponent } from './component/product/product.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { LoginComponent } from './component/users/login/login.component';
import { SignUpComponent } from './component/users/sign-up/sign-up.component';
import { RolexComponent } from './component/watches/men/rolex/rolex.component';
import { SlazengerComponent } from './component/watches/men/slazenger/slazenger.component';
import { RolexForWomenComponent } from './component/watches/women/rolex-for-women/rolex-for-women.component';
import { SlagenderForWomenComponent } from './component/watches/women/slagender-for-women/slagender-for-women.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'categoryFossilForMan/:brand/:gender',
    component:ProductComponent
  },
  {
    path:'categoryForMan/:brand/:gender',
    component:RolexComponent
  },
  {
    path:'categoryForWoman/:brand/:gender',
    component:RolexForWomenComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'product/:productId',
    component:DetailsComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'editProduct/:productId',
    component:UpdateProductComponent
  },
  {
    path:'mycart',
    component:CartComponent
  },
  {
    path:'favoriteProducts',
    component:FavoriteProductsComponent
  },
  {
    path:'myOrder',
    component:OrderComponent
  },
  {
    path:'categorySlazengerForMan/:brand/:gender',
    component:SlazengerComponent
  },
  {
    path:'categorySlazengerForWoman/:brand/:gender',
    component:SlagenderForWomenComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
