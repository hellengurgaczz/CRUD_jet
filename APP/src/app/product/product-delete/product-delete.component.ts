import { Guid } from 'guid-typescript';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    const str = this.route.snapshot.paramMap.get("id");
    if(str) {
      this.productService.getById(Guid.parse(str)).subscribe((product) =>{
        this.product = product;
      });
    }
  }

  deleteProduct() {

    if(this.product.id) {
      this.productService.delete(Guid.parse(this.product.id.toString())).subscribe(() => {
        this.router.navigate(['/product']);
      });
    }
  }

}
