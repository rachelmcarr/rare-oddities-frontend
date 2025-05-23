import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShopService {
  serviceID?: number;
  title: string;
  description: string;
  location: string;
  style: string;
  duration: string;
  status: string;
  price: number;
  imageURL: string;
  category: string;
  createdAt: string;
  inkInfo: string;
  jewelryInfo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {
  private apiUrl = 'http://localhost:8080/api/services';

  constructor(private http: HttpClient) {}

  /** Get all services */
  getAll(): Observable<ShopService[]> {
    return this.http.get<ShopService[]>(this.apiUrl);
  }

  /** Get a service by ID */
  getById(serviceID: number): Observable<ShopService> {
    return this.http.get<ShopService>(`${this.apiUrl}/${serviceID}`);
  }

  /** Add a new service */
  add(service: ShopService): Observable<ShopService> {
    return this.http.post<ShopService>(this.apiUrl, service);
  }

  /** Update an existing service */
  update(service: ShopService): Observable<ShopService> {
    return this.http.put<ShopService>(`${this.apiUrl}/${service.serviceID}`, service);
  }

  /** Delete a service */
  delete(serviceID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${serviceID}`);
  }
}
