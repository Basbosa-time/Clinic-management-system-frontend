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

  getAllAppointments(branchId: string) {
    return this.httpClient.get(`${this.BASE_URL}/${branchId}`);
  }

  addAppointment(appointment: Appointment) {
    return this.httpClient.post(this.BASE_URL, appointment);
  }

  updateAppointment(appointmentId: string, update: object) {
    return this.httpClient.put(`${this.BASE_URL}/${appointmentId}`, update);
  }

  deleteAppointment(appointmentId: string) {
    return this.httpClient.delete(`${this.BASE_URL}/${appointmentId}`)
  }

}
