import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  @Input() patient: Patient = new Patient('', '', '', []);
  @Input() patientDialog: boolean = false;
  @Output() savePatient: EventEmitter<Object> = new EventEmitter();
  @Output() hideDialog: EventEmitter<any> = new EventEmitter();

  @Output() patientImgFile: EventEmitter<any> = new EventEmitter();

  @ViewChild('patientImg', { static: false }) patientImg: any;
  defaultImgSrc = '../../../../assets/defaultUser.jpg';

  src = 'http://localhost:8000/images/';
  constructor() {}
  submitted: boolean = false;
  ngOnInit(): void {}

  save(patient: any) {
    let imageBlob = (this.patientImg as ElementRef).nativeElement.files[0];
    let patientData = new FormData();
    if (imageBlob) {
      patientData.set('img', imageBlob);
    } else {
      patientData.set('img', '');
    }
    patientData.append('name', patient.name);
    patientData.append('_id', patient._id);
    patientData.append('gender', patient.gender);
    patient.history.forEach((value: any, index: number) => {
      patientData.append(`history[${index}]`, value);
    });
    this.savePatient.emit(patientData);
  }

  addHistory(history: string, event: any) {
    this.patient.history.push(history);
    let { target } = event;
    if ((target as HTMLElement).tagName != 'BUTTON') {
      (
        (target as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLInputElement
      ).value = '';
    } else {
      (target.parentElement.children[0] as HTMLInputElement).value = '';
    }
  }
}
