import { Component, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  @Input() patient:Patient=new Patient("","","",[]);
  constructor() { }
  ngOnInit(): void {}
  displayModal:boolean=false
  openModal(){
    this.displayModal=true
  }



}
