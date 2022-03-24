import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AddPatientComponent implements OnInit {
  @Output() loadPatients: EventEmitter<any> = new EventEmitter()
  constructor(private patientService: PatientService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
  submitted: boolean = false;
  patient: Patient = new Patient(
    "aalaa",
    "female",
    "i123",
    ["aaaa"]
  )
  patientDialog: boolean = false
  openNew() {
    this.submitted = false
    this.patientDialog = true
    console.log("ahaha");
  }
  hideDialog() {
    this.patientDialog = false;
  }
  savePatient(patientObj: Patient) {
    this.submitted = true
    console.log('saved');
    this.patientDialog = false;
    this.patientService.addPatient(patientObj).subscribe({
      next: data => console.log(data),
      error: err => {console.log(err)
        this.messageService.add({severity:'error', summary: 'Error', detail: `${err}`, life: 1000});
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 1000 });
        setTimeout(() => {
          this.loadPatients.emit()
        }, 1000);
      }
    })

  }

  ngOnInit(): void {
  }

}
