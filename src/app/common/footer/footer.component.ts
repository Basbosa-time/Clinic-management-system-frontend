import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  branches: any[] = [];
  doctors: any[] = [];

  constructor(private branchService: BranchService, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.branchService.getAllBranches().subscribe({
      next: (data => this.branches = data),
      error: (err => console.log(err)),
      complete: (() => console.log("branches data is completed"))
    })
    this.doctorService.getAllDoctors().subscribe({
      next: (data => this.doctors = data),
      error: (err => console.log(err)),
      complete: (() => console.log("doctors data is completed"))
    })
  }

}
