import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!:Product[]
  constructor(public service:ProductService) { }

  ngOnInit(): void {
    // this.addProduct(new Product(3,'Keyboard',10.5,'WFH','C1',1))
    this.getAllProducts()
  }

  async getAllProducts(){
    this.products = await this.service.getAllProducts()
  }

  async addProduct(product:Product){
    let pro:Product = await this.service.addProduct(product)
  }


}
