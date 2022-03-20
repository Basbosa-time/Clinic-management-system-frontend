import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }
  BASE_URL = "http://localhost:8000/patients"
  getAllPatients(){
    return this.httpClient.get(`${this.BASE_URL}`);
  }
  addPatient(patient: Patient){
    return this.httpClient.post(`${this.BASE_URL}`,patient);
  }
  updatePatient(patientId:string,updateObject:object){
    return this.httpClient.put(`${this.BASE_URL}/${patientId}`,updateObject);
  }
  getPatient(patientId:string){
    return this.httpClient.get(`${this.BASE_URL}/${patientId}`)
  }

}
