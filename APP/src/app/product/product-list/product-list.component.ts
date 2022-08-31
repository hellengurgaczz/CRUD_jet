import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
    this.productService.list().subscribe(products => {
      this.products = products;
    });

  }

}