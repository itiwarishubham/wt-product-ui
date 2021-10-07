import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product | undefined
  constructor(public service:ProductService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((productMap)=>{
      let productId = productMap['prodId']
      this.getProduct(productId)
      
    })
  }

  async getProduct(productId:number){
    this.product = await this.service.findProductById(productId)
  }

}
