import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  isLoggedIn() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('userToken');
    const isExpired = helper.isTokenExpired(token?.toString());
    return isExpired ? false : true;
  }

  isDoctor() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('userToken');
    const role = helper.decodeToken(token?.toString()).role;
    return role == 'doctor' ? true : false;
  }

  isRecep() {
    return !this.isDoctor();
  }
}
