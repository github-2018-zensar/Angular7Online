import { Injectable } from '@angular/core';
import {IProduct} from './product'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl='./assets/api/products.json'
products:IProduct[]
  constructor(private _httpClient:HttpClient) { }
//Without observables
  // getProducts():IProduct[]{
  //   return this. products
  // }

  //Using Observables

getProducts():Observable<IProduct[]>{
  //console.log(this._httpClient.get<IProduct[]>(this._productUrl).toPromise())
  return this._httpClient.get<IProduct[]>(this._productUrl)
  .pipe(
    tap((data)=> console.log('All Data :' + JSON.stringify(data))),
    catchError(this.handleError)  

  )
  
}
getProduct(id:number):Observable<IProduct>{
  return this.getProducts().pipe(
    map((products:IProduct[])=>products.find((p)=>p.productId===id)),
    catchError(this.handleError) 
  
  )
 
}
private handleError(err){
  let errorMsg=''
  if(err.error instanceof Error){
    errorMsg = `An error occured : ${err.error.message}`
  }else{
    errorMsg=`Server returned code :${err.status} 
    error message is : ${err.message}`

  }
  console.log(errorMsg)
  return throwError(errorMsg) 
  
}
}
