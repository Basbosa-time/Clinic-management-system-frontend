import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(private httpClient: HttpClient) { }
  BASE_URL = "http://localhost:8000/medicine";
  addMedicine(medicine: Medicine) {
    return this.httpClient.post(this.BASE_URL,medicine);
  }
  getAllMedicine(){
    return this.httpClient.get(this.BASE_URL);
  }
  getMedicine(medicineId:string){
    return this.httpClient.get(`${this.BASE_URL}/${medicineId}`);
  }
  updateMedicine(medicineId:string,updateObject:object){
    return this.httpClient.put(`${this.BASE_URL}/${medicineId}`,updateObject);
  }
  addMedicineFeedback(medicineId:string,rate:number){
    return this.httpClient.put(`${this.BASE_URL}/feedback/${medicineId}`,{rate});
  }
  deleteMedicine(medicineId:string){
    return this.httpClient.delete(`${this.BASE_URL}/${medicineId}`);
  }

}
