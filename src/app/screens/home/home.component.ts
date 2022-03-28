import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  displayModal: boolean = false;
  goToPage: string;

  constructor(private loginService: LoginService) {
    this.goToPage = '';
  }

  ngOnInit(): void { }

  showModalDialog() {
    this.displayModal = true;
  }

  logingIn() {
    this.loginService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: (data: any) => {
          localStorage.setItem('userToken', data.accessToken);
          if (data.data.role == 'recep') {
            this.goToPage = '/recep/appointments';
          } else if (data.data.role == 'doctor') {
            this.goToPage = '/doctor';
          }
        },
        error: (err) => console.log(err),
        complete: () => console.log('Loging in completed', this.goToPage),
      });
    this.displayModal = false;
  }
}
