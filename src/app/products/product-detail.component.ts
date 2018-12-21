import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute,Router} from '@angular/router'
import {ProductService} from './product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string='Product Detail'
product:IProduct
errorMessage:string
  constructor(private _activatedRoute:ActivatedRoute,
    private _productService:ProductService,
    private _router:Router) { }  
  

  ngOnInit() {
    const param = this._activatedRoute.snapshot.paramMap.get('id')
    if(param){
      const id = +param
      this._productService.getProduct(id)
      .subscribe(p=>this.product=p,
        error=>this.errorMessage=<any>error
      )
    }
  }
  onBack():void{
    this._router.navigate(['/products'])
  }

}
