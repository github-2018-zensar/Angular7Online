import { Component, OnInit } from '@angular/core';

import {IProduct} from '../products/product'
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
pageTitle:string='Product List'
showImage:boolean=false
listFilter:string
products :IProduct[]

  constructor(private _productService:ProductService) {}
   
   
toggleImage():void{
this.showImage = !this.showImage
}

  ngOnInit() {
   this.products= this._productService.getProducts();
    console.log('init method called')

  }

  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List:' + message
  }

}
