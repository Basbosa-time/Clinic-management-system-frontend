import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './screens/home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { MedicineCarouselComponent } from './components/medicine/medicine-carousel/medicine-carousel.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';

import { RadioButtonModule } from 'primeng/radiobutton';
import { GMapModule } from 'primeng/gmap';
import { BoldTextPipe } from './pipes/bold-text.pipe';
import { PasswordModule } from 'primeng/password';
import { DoctorAppointmentsComponent } from './components/doctors/doctor-appointments/doctor-appointments.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { EditPatientComponent } from './components/patients/edit-patient/edit-patient.component';
import { PatientFormComponent } from './components/patients/patient-form/patient-form.component';
import { PatientInfoComponent } from './components/patients/patient-info/patient-info.component';
import { GenderReportComponent } from './components/reports/gender-report/gender-report.component';
import { AdminDashboardComponent } from './screens/admin-dashboard/admin-dashboard.component';
import { InvoicesPerMonthReportComponent } from './components/reports/invoices-per-month-report/invoices-per-month-report.component';
import { ReportTileComponent } from './components/reports/report-tile/report-tile.component';

import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReceptionistComponent } from './screens/receptionist/receptionist.component';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './screens/doctor/doctor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenAuthInterceptor } from './interceptors/token-auth.interceptor';
import { InvoiceListComponent } from './components/invoices/invoice-list/invoice-list.component';
import { AppointmentReportComponent } from './components/appointments/appointment-report/appointment-report.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentsListComponent,
    HomeComponent,
    MedicineCarouselComponent,
    ServiceListComponent,
    BoldTextPipe,
    DoctorAppointmentsComponent,
    PatientsListComponent,
    AddPatientComponent,
    EditPatientComponent,
    PatientFormComponent,
    PatientInfoComponent,
    GenderReportComponent,
    AdminDashboardComponent,
    InvoicesPerMonthReportComponent,
    ReportTileComponent,
    MedicineListComponent,
    ReceptionistComponent,
    DoctorComponent,
    InvoiceListComponent,
    AppointmentReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    RadioButtonModule,
    DialogModule,
    ConfirmDialogModule,
    ButtonModule,
    BadgeModule,
    RippleModule,
    DividerModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    SplitterModule,
    GMapModule,
    ToastModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    StyleClassModule,
    ChartModule,
    RatingModule,
    InputNumberModule,
    DividerModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
