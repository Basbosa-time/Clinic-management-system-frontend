import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MedicineService } from 'src/app/services/medicine.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-medicine-carousel',
  templateUrl: './medicine-carousel.component.html',
  styleUrls: ['./medicine-carousel.component.css'],
})
export class MedicineCarouselComponent implements OnInit {
  medicine: object[] = [];
  responsiveOptions: object[];

  defaultImgSrc = '../../../../assets/defaultMed.jpg';

  src = 'http://localhost:8000/images/';

  constructor(private medicineService: MedicineService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.medicineService.getAllMedicine().subscribe({
      next: (data) => (this.medicine = data),
      error: (err) => console.log(err),
    });
  }
}
