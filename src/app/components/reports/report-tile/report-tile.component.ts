import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-tile',
  templateUrl: './report-tile.component.html',
  styleUrls: ['./report-tile.component.css']
})
export class ReportTileComponent implements OnInit {
  @Input() title : string=""
  @Input() imageSrc:string=""
  @Input() goto:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
