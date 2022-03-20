import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) {
  }

  BASE_URL = "http://localhost:8000/appointments"

  getAllAppointments() {
    return this.httpClient.get(this.BASE_URL);
  }

  addAppointment(appointment: object) {

  }
}
