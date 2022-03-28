import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) {}
  BASE_URL = 'http://localhost:8000/reports';
  getInvoiceSummary(){
    return this.httpClient.get(`${this.BASE_URL}/invoicesSummary`)
  }
  getGenderSummary(){
    return this.httpClient.get(`${this.BASE_URL}/genderSummary`)
  }
  getInvoicesReport(){
    return this.httpClient.get(`${this.BASE_URL}/invoices`)
  }
  getAppointmentReport(){
    return this.httpClient.get(`${this.BASE_URL}/appointments`)
  }
}
