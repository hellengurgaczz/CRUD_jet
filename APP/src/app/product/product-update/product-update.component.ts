import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

  updateProduct() {
    
    if(this.product.id) {
      this.productService.update(this.product, Guid.parse(this.product.id.toString())).subscribe(() => {
        this.router.navigate(["/product"]);
      })
    }
  }

}
