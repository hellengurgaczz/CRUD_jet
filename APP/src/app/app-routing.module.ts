import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "product", component: ProductListComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/delete/:id", component: ProductDeleteComponent},
  {path: "product/update/:id", component: ProductUpdateComponent},
  {path: "product/details/:id", component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
