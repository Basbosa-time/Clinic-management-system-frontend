import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceCompanyService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = "http://localhost:8000/insuranceCompany";
  getAllInsuranceCompanies() {
    return this.httpClient.get(this.BASE_URL);
  }
}
