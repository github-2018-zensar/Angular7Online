import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import {TestComponent} from './Test/test.component';
import { Test1Component } from './Test/test1.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component'
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
