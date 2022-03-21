import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recep } from '../models/recep'
@Injectable({
  providedIn: 'root'
})
export class RecepService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL = "http://localhost:8000/receps";

  getAllReceps() {
    return this.httpClient.get(`${this.BASE_URL}`);
  }

  addRecep(recep: Recep) {
    return this.httpClient.post(`${this.BASE_URL}`, recep);
  }

  updateRecep(recepId: string, updateObject: object) {
    return this.httpClient.put(`${this.BASE_URL}/${recepId}`, updateObject);
  }

  deleteRecep(recepId: string) {
    return this.httpClient.delete(`${this.BASE_URL}/${recepId}`);
  }

}
