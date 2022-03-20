import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../models/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private  httpClient:HttpClient) { }
  BASE_URL = "http://localhost:8000/branches";
  getAllBranches(){
    return this.httpClient.get(this.BASE_URL);
  }
  getServiceBranches(serviceId:string){
    return this.httpClient.get(`${this.BASE_URL}/${serviceId}`);
  }
  addBranch(branch:Branch){
    return this.httpClient.post(`${this.BASE_URL}`,branch);
  }
  
  
}
