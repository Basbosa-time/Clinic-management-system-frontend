import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = "http://localhost:8000/login";

  constructor(private httpClient: HttpClient) { }

  login(userCredentials: object) {
    return this.httpClient.post(this.BASE_URL, userCredentials);
  }
}
