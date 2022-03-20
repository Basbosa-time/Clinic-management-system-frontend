import { Component } from '@angular/core';
import { Appointment } from './models/appointment';
import { Branch } from './models/branch';
import { Doctor } from './models/doctor';
import { Medicine } from './models/medicine';
import { Patient } from './models/patient';
import { Schedule } from './models/schedule';
import { AppointmentService } from './services/appointment.service';
import { BranchService } from './services/branch.service';
import { DoctorService } from './services/doctor.service';
import { MedicineService } from './services/medicine.service';
import { PatientService } from './services/patient.service';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';
  constructor(private doctorService: DoctorService) {

  }

  createApp() {
    let newMed = new Branch("name1","location1");
    let schedule = new Schedule("6234dbc31b50aa87de2e3509","4:00","8:00",["sun","mon"]);
    let doc = new Doctor("Aalaa","a@aa.com","3333","6236065843757f1d3e063227",[schedule]);
    this.doctorService.getDoctorsWithServiceId("6236065843757f1d3e063227").subscribe({
      next: (data => console.log(data)),
      error: (err => console.log(err)),
      complete: (() => console.log("completed"))
    })
  }

}
