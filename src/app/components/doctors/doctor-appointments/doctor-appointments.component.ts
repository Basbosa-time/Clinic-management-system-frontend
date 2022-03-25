import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

const BRANCH_ID = '6238ad014415c709eed69de8';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog .appointment-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class DoctorAppointmentsComponent implements OnInit {
  appointmentDialog: boolean = false;

  appointment: any = {};

  appointments: any[] = [];

  selectedappointments: any[] = [];

  submitted: boolean = false;

  services: any[] = [];

  doctors: any[] = [];

  patients: any[] = [];

  disabledDays: number[] = [];

  times: any[] = [];

  companies: any[] = [];

  selectedCompany: string = '';

  discount: number = 0;

  constructor(
    private messageService: MessageService,
    private appointmentService: AppointmentService
  ) {}

  getAllAppointments() {
    this.appointmentService.getAllAppointments(BRANCH_ID).subscribe({
      next: (res: any) => {
        this.appointments = res.data;
      },
    });
  }

  ngOnInit() {
    this.getAllAppointments();
  }

  editAppointment(appointment: any) {
    this.appointment = { ...appointment };
    this.appointmentDialog = true;
  }

  hideDialog() {
    this.appointmentDialog = false;
    this.submitted = false;
  }

  saveAppointment() {
    this.submitted = true;
    if (this.appointment.bookingTime) {
      this.appointmentService
        .updateAppointment(this.appointment._id, this.appointment)
        .subscribe({
          next: (res) => {
            this.getAllAppointments();
          },
        });
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Appointment Updated.',
        life: 1500,
      });

      this.appointmentDialog = false;
      this.appointment = {};
    }
  }
}
