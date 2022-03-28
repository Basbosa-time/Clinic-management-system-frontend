import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.css']
})
export class AppointmentReportComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  invoices: any = [];
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
    this.reportService.getAppointmentReport().subscribe({
      next: (data) => {
        this.invoices = data;
      },
      error: (err) => console.log(err),
    });
  }
  reload() {
    console.log('reload');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
    this.getPatients();
  }

}
