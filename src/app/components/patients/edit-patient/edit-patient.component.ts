import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class EditPatientComponent implements OnInit {
  @Output() loadPatients:EventEmitter<any> = new EventEmitter()
  @Input() patient: Patient = new Patient("","","",[]);
  constructor(private patientService: PatientService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  submitted: boolean = false;
 
  openEdit() {
    this.submitted = false
    this.patientDialog = true
  }

  patientDialog: boolean = false

  hideDialog() {
    this.patientDialog = false;
  }
  editPatient(patientObject:any) {
    console.log(patientObject);
    this.submitted = true
    console.log('saved');
    this.patientDialog = false;
    this.patientService.updatePatient(patientObject?._id,patientObject).subscribe({
      next: data => console.log(data),
      error: err => {
        this.messageService.add({severity:'error', summary: 'Error', detail: `${err}`, life: 1000});
        console.log(err)
      },
      complete:()=>{
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 1000});
        setTimeout(() => {
          this.loadPatients.emit()
        },1000 );  
      }
    })
  }
  ngOnInit(): void {
  }

}
