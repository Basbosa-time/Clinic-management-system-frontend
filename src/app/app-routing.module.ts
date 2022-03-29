import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';
import { HomeComponent } from './screens/home/home.component';
import { ReceptionistComponent } from './screens/receptionist/receptionist.component';
import { DoctorComponent } from './screens/doctor/doctor.component';
import { AuthGuard } from './guards/auth.guard';
import { DoctorGuard } from './guards/doctor.guard';
import { RecepGuard } from './guards/recep.guard';
import { AdminDashboardComponent } from './screens/admin-dashboard/admin-dashboard.component';
import { AppointmentReportComponent } from './components/appointments/appointment-report/appointment-report.component';
import { InvoiceListComponent } from './components/invoices/invoice-list/invoice-list.component';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default route start home page
  { path: 'home', component: HomeComponent },
  {
    path: 'recep',
    component: ReceptionistComponent,
    children: [
      { path: 'appointments', component: AppointmentsListComponent },
      { path: 'patients', component: PatientsListComponent },
      { path: 'medicine', component: MedicineListComponent },
    ],
    canActivate: [AuthGuard, RecepGuard],
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [AuthGuard, DoctorGuard],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    // children:[
    //   { path: 'appointmentReport', component: AppointmentReportComponent },
    //   { path: 'invoiceReport', component: InvoiceListComponent },

    // ],
    canActivate: [AuthGuard, AdminGuard],
  },
   {
    path: 'admin/appointmentReport', component: AppointmentReportComponent
  }
  , {
    path: 'admin/invoiceReport', component: InvoiceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
