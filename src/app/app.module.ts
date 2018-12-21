import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import {TestComponent} from './Test/test.component';
import { Test1Component } from './Test/test1.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component'
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import {ProductDetailGuard} from './products/product-detail.guard';
import { CustomerComponent } from './customers/customer.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    HomeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product/:id',component:ProductDetailComponent,canActivate:[ProductDetailGuard]},
      {path:'welcome',component:HomeComponent},
      {path:'customerForm',component:CustomerComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
