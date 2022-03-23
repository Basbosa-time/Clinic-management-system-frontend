import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InsuranceCompanyService {
  constructor(private httpClient: HttpClient) {}
  BASE_URL = 'http://localhost:8000/insuranceCompany';
  getAllInsuranceCompanies() {
    return this.httpClient.get(this.BASE_URL);
  }
  addExpenses(companyId: string, obj: object) {
    return this.httpClient.put(`${this.BASE_URL}/${companyId}`, obj);
  }
}
