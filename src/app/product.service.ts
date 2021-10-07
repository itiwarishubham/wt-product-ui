import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url:string="http://localhost:8082/"

  constructor(public httpClient:HttpClient) { }

  getAllProducts(){
    return this.httpClient.get<Product[]>(this.url+'product-list').toPromise()
  }

  addProduct(product:Product){
    return this.httpClient.post<Product>(this.url+'addProduct',product).toPromise()
  }

  findProductById(productId:number){
    return this.httpClient.get<Product>(this.url+'product-detail/'+productId).toPromise()
  }
}
