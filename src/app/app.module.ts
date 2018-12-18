import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import {TestComponent} from './Test/test.component';
import { Test1Component } from './Test/test1.component';
import { ProductListComponent } from './products/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
