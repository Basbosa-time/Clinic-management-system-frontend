import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MedicineService } from 'src/app/services/medicine.service';
import { ServiceService } from 'src/app/services/service.service';

const MED_OBJ = {
  name: '',
  company: '',
  description: '',
  quantity: 0,
  category: '',
  rate: 0,
  customers: 0,
  review: 0,
  image: '',
};

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class MedicineListComponent implements OnInit {
  defaultImgSrc = '../../../../assets/defaultMed.jpg';

  src = 'http://localhost:8000/images/';

  @ViewChild('medicineImg', { static: false }) medicineImg: any;
  newMedicineDialog: boolean = false;
  updateMedicineDialog: boolean = false;
  services: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  medicines: any[] = [];
  medicineRate: number = 0;
  medicine: any = { ...MED_OBJ };
  newMedicine: any = { ...MED_OBJ };
  selectedMedicines: any[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  constructor(
    private medicineService: MedicineService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.getAllMedicines();
  }

  openNew() {
    this.medicine = {};
    this.submitted = false;
    this.updateMedicineDialog = true;
  }

  openNewMedicineDialoug() {
    this.serviceService.getAllServices().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.log(err),
    });
    this.newMedicineDialog = true;
  }

  deleteSelectedmedicines() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected medicines?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedMedicines.forEach((val) => {
          this.medicineService.deleteMedicine(val._id).subscribe({
            next: (data) => {},
            error: (err) => console.log(err),
          });
        });
        this.medicines = this.medicines.filter(
          (val) => !this.selectedMedicines.includes(val)
        );
        this.selectedMedicines = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'medicines Deleted',
          life: 3000,
        });
      },
    });
  }

  editmedicine(medicine: any) {
    this.updateMedicineDialog = true;
    this.medicine = { ...medicine };
  }

  deletemedicine(medicine: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + medicine.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.medicineService.deleteMedicine(medicine._id).subscribe({
          next: (data) => {},
          error: (err) => console.log(err),
        });
        this.medicines = this.medicines.filter(
          (val) => val._id !== medicine._id
        );
        this.medicine = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'medicine Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.newMedicineDialog = false;
    this.updateMedicineDialog = false;
    this.submitted = false;
  }

  saveMedicine() {
    this.submitted = true;
    this.medicines.push(this.newMedicine);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'medicine Created',
      life: 3000,
    });
    this.newMedicineDialog = false;
    this.updateMedicineDialog = false;

    let imageBlob = (this.medicineImg as ElementRef).nativeElement.files[0];
    let medicineData = new FormData();
    if (imageBlob) {
      medicineData.set('img', imageBlob);
    } else {
      medicineData.set('img', '');
    }
    Object.entries(this.newMedicine).forEach((entry: any) => {
      medicineData.append(entry[0], entry[1]);
    });

    this.medicineService.addMedicine(medicineData).subscribe({
      next: (data) => {
        this.getAllMedicines();
      },
      error: (err) => console.log(err),
    });

    this.newMedicine = {};
  }

  addMedicineFeedback() {
    this.updateMedicineDialog = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'medicine Updated',
      life: 3000,
    });
    this.medicineService
      .addMedicineFeedback(this.medicine._id, this.medicineRate)
      .subscribe({
        next: (data) => {
          this.getAllMedicines();
        },
        error: (err) => console.log(err),
      });
  }

  setMedcineCategory(ref: any) {
    this.newMedicine.category = ref;
  }

  getAllMedicines() {
    this.medicineService.getAllMedicine().subscribe({
      next: (data) => (this.medicines = data),
      error: (err) => console.log(err),
    });
  }
}
