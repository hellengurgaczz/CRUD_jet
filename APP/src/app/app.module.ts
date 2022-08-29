import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './product/header/header.component';
import { NavComponent } from './product/nav/nav.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductUpdateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
