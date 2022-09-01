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

  previewFile(event: Event) {

    let preview = document.querySelector('img');
    let reader = new FileReader();
    let target = event.target as HTMLInputElement;
    
    if(target) {
      let files = target.files as FileList;
  
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
       preview?.setAttribute('src', (reader.result)!.toString());
       this.product.product_image = (reader.result)!.toString();
      }
    }
  }

  updateProduct() {
    
    if(this.product.id) {
      this.productService.update(this.product).subscribe(() => {
        this.router.navigate(["/product"]);
      })
    }
  }

}
