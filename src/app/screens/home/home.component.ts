import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string = '';
  password: string = '';
  displayModal: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }

  logingIn() {
    this.loginService.login({ email: this.email, password: this.password }).subscribe({
      next: (data => console.log(data)),
      error: (err => console.log(err)),
      complete: (() => console.log("Loging in completed"))
    })
    this.displayModal = false;
  }

}
