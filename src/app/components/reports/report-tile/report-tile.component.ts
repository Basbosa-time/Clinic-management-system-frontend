import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-tile',
  templateUrl: './report-tile.component.html',
  styleUrls: ['./report-tile.component.css']
})
export class ReportTileComponent implements OnInit {
  @Input() title : string=""
  @Input() imageSrc:string=""
  @Input() goto:string=""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleNavigation(){
    console.log('/'+this.goto);
    this.router.navigate(['/admin/'+this.goto])
  }


}
