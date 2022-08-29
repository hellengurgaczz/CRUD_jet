import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://localhost:7019/api/product";

  products = [];

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }


}
