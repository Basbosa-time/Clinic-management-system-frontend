import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient:HttpClient) { }
  BASE_URL = "http://localhost:8000/doctors";
  getAllDoctors(){
    return this.httpClient.get(this.BASE_URL);
  }
  addDoctor(doctor:Doctor){
    return this.httpClient.post(this.BASE_URL,doctor);
  }
  getDoctorSchedule(doctorId:string){
    return this.httpClient.get(`${this.BASE_URL}/schedule/${doctorId}`);
  }
  getDoctorsWithServiceId(serviceId:string){
    return this.httpClient.get(`${this.BASE_URL}/${serviceId}`);
  }
  updateDoctor(doctorId:string,updateObject:object){
    return this.httpClient.put(`${this.BASE_URL}/${doctorId}`,updateObject);
  }
  deleteDoctor(doctorId:string){
    return this.httpClient.delete(`${this.BASE_URL}/${doctorId}`);
  }

}
