import { Component } from '@angular/core';
import { Appointment } from './models/appointment';
import { AppointmentService } from './services/appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';
  constructor(private appointmentService: AppointmentService) {

  }

  createApp() {
    let newApp = new Appointment("6233e0b6e9a858256052ab15", "6233e1944e40b6ef82cc4749", "2:00", "6233de2f39b0dfbb4fffdc6c", "4-12-2020", "6233e0fcc70e99ab462a8091", "cash", 150, 150)
    this.appointmentService.deleteAppointment("623786d9d0975711d79f36ef").subscribe({
      next: (data => console.log(data)),
      error: (err => console.log(err)),
      complete: (() => console.log("completed"))
    })
  }

}
