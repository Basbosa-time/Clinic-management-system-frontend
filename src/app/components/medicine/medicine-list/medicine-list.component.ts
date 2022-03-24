import { Component, OnInit, Input } from '@angular/core';
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
  review: 0
}


@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MedicineListComponent implements OnInit {

  newMedicineDialog: boolean = false;
  updateMedicineDialog: boolean = false;
  services: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  @Input() medicines: any[] = [];
  medicineRate: number = 0;
  medicine: any = { ...MED_OBJ };
  newMedicine: any = { ...MED_OBJ };
  selectedMedicines: any[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  constructor(private medicineService: MedicineService, private messageService: MessageService, private confirmationService: ConfirmationService, private serviceService: ServiceService) { }

  ngOnInit() {
    this.medicineService.getAllMedicine().subscribe({
      next: (data => this.medicines = data),
      error: (err => console.log(err)),
      complete: (() => console.log("medicine data completed"))
    })


    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {

    this.medicine = {};
    this.submitted = false;
    this.updateMedicineDialog = true;
  }

  openNewMedicineDialoug() {
    this.serviceService.getAllServices().subscribe({
      next: (data => this.categories = data),
      error: (err => console.log(err)),
      complete: (() => console.log("categories data is completed"))
    })
    this.newMedicineDialog = true;
  }


  deleteSelectedmedicines() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected medicines?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedMedicines.forEach(val => {
          this.medicineService.deleteMedicine(val._id).subscribe({
            next: (data => console.log("medicine deleted")),
            error: (err => console.log(err)),
            complete: (() => console.log("deleting medicine completed"))
          })
        })
        this.medicines = this.medicines.filter(val => !this.selectedMedicines.includes(val));
        this.selectedMedicines = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'medicines Deleted', life: 3000 });
      }
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
          next: (data => console.log("medicine deleted")),
          error: (err => console.log(err)),
          complete: (() => console.log("deleting medicine completed"))
        })
        this.medicines = this.medicines.filter(val => val._id !== medicine._id);
        this.medicine = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'medicine Deleted', life: 3000 });
      }
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
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'medicine Created', life: 3000 });
    this.newMedicineDialog = false;
    this.updateMedicineDialog = false;
    this.medicineService.addMedicine(this.newMedicine).subscribe({
      next: (data => console.log(data)),
      error: (err => console.log(err)),
      complete: (() => console.log("adding new medicine completed"))
    })
    this.newMedicine = {};

  }

  addMedicineFeedback() {
    this.updateMedicineDialog = false;
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'medicine Updated', life: 3000 });
    this.medicineService.addMedicineFeedback(this.medicine._id, this.medicineRate).subscribe({
      next: (data => console.log(data)),
      error: (err => console.log(err)),
      complete: (() => console.log("adding feedback completed"))
    })
    this.medicineService.getAllMedicine().subscribe({
      next: (data => this.medicines = data),
      error: (err => console.log(err)),
      complete: (() => console.log("medicine data completed"))
    })


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.medicines.length; i++) {
      if (this.medicines[i]._id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  setMedcineCategory(ref: any) {
    console.log(ref);
    this.newMedicine.category = ref;
  }

}
