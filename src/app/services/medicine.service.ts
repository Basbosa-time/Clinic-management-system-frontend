import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(private httpClient: HttpClient) { }
  BASE_URL = "http://localhost:8000/medicine";
  getAllMedicine(){
    return this.httpClient.get<object[]>(this.BASE_URL);
  }

  addMedicine(medicine: any) {
    return this.httpClient.post(this.BASE_URL,medicine);
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
