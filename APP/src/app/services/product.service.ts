import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Guid } from 'guid-typescript';

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

  create(product: Product) : Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  update(product: Product, id: Guid) : Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  delete(id: Guid) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getById(id: Guid) : Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
  }
}
