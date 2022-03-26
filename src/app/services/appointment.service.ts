import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) {}

  BASE_URL = 'http://localhost:8000/appointments';

  getAllAppointments(branchId: string) {
    return this.httpClient.get<Array<Object>>(`${this.BASE_URL}/${branchId}`);
  }

  getDoctorAppointments(branchId: string, doctorId: string) {
    return this.httpClient.get(
      `${this.BASE_URL}/${branchId}/doctor/${doctorId}`
    );
  }

  getPatientPrescs(patientId: string) {
    return this.httpClient.get(`${this.BASE_URL}/presc/${patientId}`);
  }

  addAppointment(appointment: Appointment) {
    return this.httpClient.post(this.BASE_URL, appointment);
  }

  updateAppointment(appointmentId: string, updateObject: object) {
    return this.httpClient.put(
      `${this.BASE_URL}/${appointmentId}`,
      updateObject
    );
  }

  deleteAppointment(appointmentId: string) {
    return this.httpClient.delete(`${this.BASE_URL}/${appointmentId}`);
  }
}
