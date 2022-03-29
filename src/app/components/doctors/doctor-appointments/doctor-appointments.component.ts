import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/services/patient.service';

const BRANCH_ID = '62407610c65ddd91c926395e';
const DOCTOR_ID = '624077935e190509c2c656c8';

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
  patientDialog: boolean = false;

  @Input() appointment: any = {};

  appointments: any[] = [];

  submitted: boolean = false;

  prescs: any[] = [];

  constructor(
    private messageService: MessageService,
    private appointmentService: AppointmentService,
    private patientService: PatientService
  ) {}

  getAllAppointments() {
    this.appointmentService
      .getDoctorAppointments(BRANCH_ID, DOCTOR_ID)
      .subscribe({
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
    this.patientDialog = true;
    this.appointmentService
      .getPatientPrescs(this.appointment.patient._id)
      .subscribe({
        next: (res: any) => {
          this.prescs = !res.data
            ? []
            : res.data.map((app: any) => {
                return { date: app.date, presc: app.presc };
              });
        },
      });
  }

  hideDialog() {
    this.patientDialog = false;
    this.submitted = false;
  }

  saveAppointment() {
    this.submitted = true;
    this.patientService
      .updatePatient(this.appointment.patient._id, this.appointment.patient)
      .subscribe({
        next: (res) => {
          this.appointmentService
            .updateAppointment(this.appointment._id, this.appointment)
            .subscribe({
              next: (res) => {
                this.getAllAppointments();
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Patient/Appointment Updated.',
                  life: 1500,
                });

                this.patientDialog = false;
                this.appointment = {};
              },
            });
        },
      });
  }

  addHistory(history: string, event: any) {
    this.appointment.patient.history.push(history);
    let { target } = event;
    if ((target as HTMLElement).tagName != 'BUTTON') {
      (
        (target as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLInputElement
      ).value = '';
    } else {
      (target.parentElement.children[0] as HTMLInputElement).value = '';
    }
  }
}
