import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) { }
  BASE_URL = 'http://localhost:8000/services';
  getAllServices() {
    return this.httpClient.get<any[]>(this.BASE_URL);
  }
  getServicesWithBranchId(branchId: string) {
    return this.httpClient.get(`${this.BASE_URL}/branches/${branchId}`);
  }
}
