import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  @Input() patient:Patient=new Patient("","","",[]);
  @Input() patientDialog:boolean=false;
  @Output() savePatient:EventEmitter<Patient>= new EventEmitter();
  @Output() hideDialog:EventEmitter<any>=new EventEmitter()
  constructor() { }
  submitted: boolean = false;
  ngOnInit(): void {
  }
}
