import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import {BookcartComponent} from './bookcart/bookcart.component';


const routes: Routes = [
{path:"",component:HeaderComponent,pathMatch:'full'},
 {path:"header",component:HeaderComponent},
 {path:"product",component:ProductComponent},
 {path:"cart",component:BookcartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
