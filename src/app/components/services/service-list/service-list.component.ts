import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServiceListComponent implements OnInit {
  services: any[] = [];
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe({
      next: (data: any) => (this.services = data),
      error: (err) => console.log(err),
      complete: () => console.log('service data completed'),
    });
  }
}
