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
import { RadioButtonModule } from 'primeng/radiobutton';
import { GMapModule } from 'primeng/gmap';
import { BoldTextPipe } from './pipes/bold-text.pipe';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DoctorAppointmentsComponent } from './components/doctors/doctor-appointments/doctor-appointments.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import { EditPatientComponent } from './components/patients/edit-patient/edit-patient.component';
import { PatientFormComponent } from './components/patients/patient-form/patient-form.component';
import { PatientInfoComponent } from './components/patients/patient-info/patient-info.component';
import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
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
    MedicineListComponent,
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
    RatingModule,
    InputNumberModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
