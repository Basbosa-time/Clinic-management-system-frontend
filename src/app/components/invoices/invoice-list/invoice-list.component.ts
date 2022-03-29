import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ReportService } from 'src/app/services/report.service';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
  providers: [MessageService, ConfirmationService],

})

export class InvoiceListComponent implements OnChanges, OnInit {
  constructor(
    private reportService: ReportService,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
  }
  invoices: any = [];
  isChanged: boolean = false;
  ngOnInit(): void {
    this.getInvoices();
  }
  checkChange() {
    this.isChanged = !this.isChanged;
  }
  defaultImgSrc = '../../../../assets/defaultUser.jpg';

  src = 'http://localhost:8000/images/';
  openNew() { }

  getInvoices() {
    this.reportService.getInvoicesReport().subscribe({
      next: (data) => {
        this.invoices = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('medicine data completed'),
    });
  }

}

