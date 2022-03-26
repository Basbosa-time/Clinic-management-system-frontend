import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';
import { HomeComponent } from './screens/home/home.component';
import { ReceptionistComponent } from './screens/receptionist/receptionist.component';
import { DoctorComponent } from './screens/doctor/doctor.component';
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
  },
  {
    path: 'doctor',
    component: DoctorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
