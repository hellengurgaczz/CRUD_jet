import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  previewFile(event: Event) {

    let preview = document.querySelector('img');
    let reader = new FileReader();
    let target = event.target as HTMLInputElement;
    let files = target.files as FileList;
    if(files.length) {
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
       preview?.setAttribute('src', (reader.result)!.toString());
       this.product.product_image = (reader.result)!.toString();
      }
    }
  }

  createProduct() {
    
    this.productService.create(this.product).subscribe(product => {
      console.log(product)
      this.router.navigate(["/product"]);
    })
  }

}
