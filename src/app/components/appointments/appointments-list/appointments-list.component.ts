import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DoctorService } from 'src/app/services/doctor.service';
import { ServiceService } from 'src/app/services/service.service';
import { PatientService } from 'src/app/services/patient.service';
import { InsuranceCompanyService } from 'src/app/services/insurance-company.service';

const BRANCH_ID = '62407610c65ddd91c926395e';
const RECEP_ID = '624076d65e190509c2c656ac';
const NEW_APP = {
  doctor: '',
  patient: '',
  bookingTime: '',
  branch: BRANCH_ID,
  date: '',
  recep: RECEP_ID,
  paymentMethod: 'cash',
  totalAmount: '100',
  paidAmount: '100',
};

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
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
export class AppointmentsListComponent implements OnInit {
  appointmentDialog: boolean = false;

  appointmentAddDialog: boolean = false;

  appointment: any = {};

  newAppointment: any = { ...NEW_APP };

  appointments: any[] = [];

  selectedappointments: any[] = [];

  submitted: boolean = false;

  submittedAdd: boolean = false;

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
    private confirmationService: ConfirmationService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private serviceService: ServiceService,
    private patientService: PatientService,
    private insuranceCompanyService: InsuranceCompanyService
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

  openNew() {
    this.appointment = { name: '' };
    this.submittedAdd = false;
    this.appointmentAddDialog = true;
    this.serviceService.getServicesWithBranchId(BRANCH_ID).subscribe({
      next: (res: any) => {
        this.services = res.data.map((a: any) => {
          return { name: a.name, _id: a._id };
        });
      },
    });
    this.patientService.getAllPatients().subscribe({
      next: (res: any) => {
        this.patients = res.map((a: any) => {
          return { name: a.name, _id: a._id };
        });
      },
    });
    this.insuranceCompanyService.getAllInsuranceCompanies().subscribe({
      next: (res: any) => {
        this.companies = [{ _id: '', name: 'None' }];
        this.companies = this.companies.concat(res);
      },
    });
  }

  deleteSelectedAppointments() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected appointments?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        for (let v of this.selectedappointments) {
          this.appointmentService.deleteAppointment(v._id).subscribe();
        }
        this.getAllAppointments();
        this.selectedappointments = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Appointments Deleted',
          life: 3000,
        });
      },
    });
  }

  checkDisabled(appointment: any) {
    if (appointment.arrivalTime == '') {
      return false;
    }
    return true;
  }

  editAppointment(appointment: any) {
    this.appointment = { ...appointment };
    this.appointmentDialog = true;
  }

  deleteAppointment(appointment: any) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' +
        appointment.patient.name +
        "'s appointment?",
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appointmentService.deleteAppointment(appointment._id).subscribe({
          next: (res) => {
            this.getAllAppointments();
            this.appointment = {};
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Appointment Deleted',
              life: 1500,
            });
          },
        });
      },
    });
  }

  hideDialog() {
    this.appointmentDialog = false;
    this.submitted = false;
  }

  hideAddDialog() {
    this.appointmentAddDialog = false;
    this.submittedAdd = false;
  }

  confirmAppointment(appointment: any, $event: MouseEvent) {
    this.confirmationService.confirm({
      message: 'Confirm attendance for this appointment?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appointmentService
          .updateAppointment(appointment._id, {
            arrivalTime: new Date(Date.now()).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }),
          })
          .subscribe({
            next: (res) => {
              let { target } = $event;
              if ((target as HTMLElement).tagName != 'BUTTON') {
                (target as HTMLElement).parentElement?.setAttribute(
                  'disabled',
                  'true'
                );
              } else {
                (target as HTMLElement).setAttribute('disabled', 'true');
              }
            },
          });
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Patient arrival confirmed.',
          life: 1500,
        });
      },
    });
  }

  saveAppointment() {
    this.submitted = true;
    if (this.appointment.bookingTime) {
      this.appointmentService
        .updateAppointment(this.appointment._id, this.appointment)
        .subscribe({
          next: (res) => {
            this.getAllAppointments();
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Appointment Updated.',
              life: 1500,
            });

            this.appointmentDialog = false;
            this.appointment = {};
          },
        });
    }
  }

  addAppointment() {
    this.submittedAdd = true;
    if (
      this.newAppointment.doctor != '' &&
      this.newAppointment.patient != '' &&
      this.newAppointment.bookingTime != '' &&
      this.newAppointment.date != '' &&
      this.newAppointment
    ) {
      this.appointmentService.addAppointment(this.newAppointment).subscribe({
        next: (res) => {
          if (this.selectedCompany != '') {
            this.insuranceCompanyService
              .addExpenses(this.selectedCompany, { amount: this.discount })
              .subscribe();
          }
          this.getAllAppointments();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Appointment Added',
            life: 1500,
          });
        },
      });
      this.appointmentAddDialog = false;
      this.newAppointment = { ...NEW_APP };
    }
  }

  selectService(service: any) {
    this.doctorService.getDoctorsWithServiceId(service.value).subscribe({
      next: (res: any) => {
        this.doctors = res;
      },
    });
  }

  selectAppDate(d: Date) {
    this.newAppointment.date = d.toLocaleDateString();
  }

  selectDoctor(docId: any) {
    let alldays = [0, 1, 2, 3, 4, 5, 6];
    let schedays: number[] = [];
    this.disabledDays = [];
    const week: any = {
      sat: 6,
      sun: 0,
      mon: 1,
      tue: 2,
      wen: 3,
      thu: 4,
      fri: 5,
    };
    let doc = this.doctors.filter((v) => v._id == docId)[0];
    let sched = doc.owner.schedule.filter((v: any) => v.branch == BRANCH_ID);
    if (sched.length != 0) {
      this.newAppointment.bookingTime = sched[0].startTime;
      let days = sched.map((v: any) => v.days);
      days[0].forEach((v: any) => {
        schedays.push(week[v]);
      });
      schedays.forEach((v) => {
        alldays.splice(alldays.indexOf(v), 1);
      });
    }
    this.disabledDays = alldays;
  }

  selectCompany(companyId: string) {
    if (companyId != '') {
      let comp = this.companies.filter((v) => v._id == companyId)[0];
      this.newAppointment.paidAmount =
        this.newAppointment.totalAmount -
        (comp.discountPercent * 100) / this.newAppointment.totalAmount;
      this.discount =
        (comp.discountPercent * 100) / this.newAppointment.totalAmount;
    } else {
      this.newAppointment.paidAmount = this.newAppointment.totalAmount;
    }
  }
}
