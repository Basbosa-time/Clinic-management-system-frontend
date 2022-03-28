import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-invoices-per-month-report',
  templateUrl: './invoices-per-month-report.component.html',
  styleUrls: ['./invoices-per-month-report.component.css']
})
export class InvoicesPerMonthReportComponent implements OnInit {

  
  constructor(private reportService: ReportService) { }
  basicOptions = {}
  basicData :any;

  ngOnInit() {
    let monthes:any
    let values:any
    this.reportService.getInvoiceSummary().subscribe({
      next: (report:any) => {
        monthes=report?.monthes
        values=report?.data
        console.log(values, monthes, report);
      },
      error: (err) => console.log(err),
      complete: () => {
        this.basicData={
          labels: monthes,
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: '#13C366',
              data: values
            }
          ]
        }
      }
    })


  }




}
