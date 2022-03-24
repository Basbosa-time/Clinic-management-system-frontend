import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-report',
  templateUrl: './gender-report.component.html',
  styleUrls: ['./gender-report.component.css']
})
export class GenderReportComponent implements OnInit {

  constructor() { }
  data: any;

  chartOptions: any;

  config = {
    theme: 'lara-light-blue',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
  };
  ngOnInit() {
    this.data = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          data: [300, 300],
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
    this.updateChartOptions();

  }
  getLightTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    }
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    }
  }
  updateChartOptions() {
    this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }


}
