import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { GestionProductComponent } from './gestion-product/gestion-product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

// Une fois que le module de routage ProductRoutingModule est importé dans le ProductModule,
// il n'a pas besoin d'être exporté, car ses routes sont intégrées dans
// le système de routage global d'Angular.

const routes: Routes = [
  {
    path:'',
    component:GestionProductComponent,
    children:[
      {
        path:'list',
        component:ListProductComponent
      },
      {
        path:'product/add',
        component:AddEditProductComponent
      },
      {
        path:'product/details/:id',
        component:ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
