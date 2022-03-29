import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-gender-report',
  templateUrl: './gender-report.component.html',
  styleUrls: ['./gender-report.component.css']
})
export class GenderReportComponent implements OnInit {

  constructor(private reportService: ReportService) { }
  data: any;
  genderSummary: any
  chartOptions: any;

  config = {
    theme: 'lara-light-blue',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
  };
  ngOnInit() {

    // this.reportService.getGenderSummary().subscribe({
    //   next:(data)=>{
    //     this.genderSummary=data
    //     console.log(data,this.genderSummary);
    //   } ,
    //   error:(err)=>console.log(err),
    //   complete:()=>{
    //    
    //   }
    // })
    this.genderSummary = { male: 30, female: 20 }
    this.data = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [this.genderSummary?.male, this.genderSummary?.female],
          backgroundColor: [
            "#42A5F5",
            '#F31B89'

          ],
          hoverBackgroundColor: [
            "#64B5F6",
            '#F54BA1',
          ]
        }
      ]
    };


  }
}
