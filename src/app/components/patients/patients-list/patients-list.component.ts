import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class PatientsListComponent implements OnChanges, OnInit {
  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
  }
  patients: any = [];
  isChanged: boolean = false;
  ngOnInit(): void {
    this.getPatients();
  }
  checkChange() {
    this.isChanged = !this.isChanged;
  }
  defaultImgSrc = '../../../../assets/defaultUser.jpg';

  src = 'http://localhost:8000/images/';
  openNew() { }

  getPatients() {
    this.patientService.getAllPatients().subscribe({
      next: (data) => {
        this.patients = data;
      },
      error: (err) => console.log(err),
    });
  }
  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
    this.getPatients();
  }
}
