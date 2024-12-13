import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { GestionProductComponent } from './gestion-product/gestion-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

// Une fois que le module de routage ProductRoutingModule est importé dans le ProductModule,
// il n'a pas besoin d'être exporté, car ses routes sont intégrées dans
// le système de routage global d'Angular.

@NgModule({
  declarations: [
    ListProductComponent,
    AddEditProductComponent,
    GestionProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
