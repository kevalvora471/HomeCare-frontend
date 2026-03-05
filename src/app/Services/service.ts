import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category, SubCategory } from '../services.data';

export interface ServiceType {
  id: number;
  name: string;
  categories: Category[];
}

@Injectable({
  providedIn: 'root'
})
export class ServicesApiService {
  
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5269/api';


  // Get categories by service type
  getCategoriesByServiceType(serviceTypeId: number) {
    return this.http
      .get<any>(`${this.baseUrl}/Category/service-type/${serviceTypeId}`)
      .pipe(map(res => res.data)); 
  }

  // Get subcategories by category
  getSubCategoriesByCategory(categoryId: number) {
    return this.http
      .get<any>(`${this.baseUrl}/SubCategory/category/${categoryId}`)
      .pipe(map(res => res.data));
  }

  createCategory(dto: { name: string; serviceTypeId: number }) {
    return this.http
      .post<any>(`${this.baseUrl}/Category`, dto)
      .pipe(map(res => res.data));  
  }

  createSubCategory(dto: { name: string; categoryId: number }) {
    return this.http
      .post<any>(`${this.baseUrl}/SubCategory`, dto)
      .pipe(map(res => res.data));
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.baseUrl}/Category/${id}`);
  }

  deleteSubCategory(id: number) {
    return this.http.delete(`${this.baseUrl}/SubCategory/${id}`);
  }
}